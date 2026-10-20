import nodemailer from "nodemailer";

/**
 * Sends an email notification when a contact form is submitted.
 * Uses server-side SMTP environment variables.
 */
export async function sendContactNotification({ name, email, subject, message, date }) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const receiver = process.env.CONTACT_RECEIVER_EMAIL || user;

  if (!host || !user || !pass || !receiver) {
    console.warn(
      "[Mailer] SMTP credentials not fully configured. Email notification skipped."
    );
    return {
      sent: false,
      reason: "SMTP configuration is incomplete",
    };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  const formattedDate = date
    ? new Date(date).toLocaleString()
    : new Date().toLocaleString();

  const emailSubject = subject
    ? `Portfolio Contact: ${subject}`
    : `New Portfolio Contact Form Submission from ${name}`;

  const mailOptions = {
    from: `"Portfolio Contact Form" <${user}>`,
    to: receiver,
    replyTo: email,
    subject: emailSubject,
    text: `You have received a new contact submission from your portfolio website.

Name: ${name}
Email: ${email}
${subject ? `Subject: ${subject}\n` : ""}Date/Time: ${formattedDate}

Message:
${message}
`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #d0dac5; border-radius: 10px; background-color: #f7f9f3;">
        <h2 style="color: #24351c; margin-top: 0; border-bottom: 2px solid #b6ff3b; padding-bottom: 10px;">New Portfolio Contact Submission</h2>
        <p style="color: #465342; font-size: 14px;"><strong>From:</strong> ${name} (<a href="mailto:${email}" style="color: #386100;">${email}</a>)</p>
        ${subject ? `<p style="color: #465342; font-size: 14px;"><strong>Subject:</strong> ${subject}</p>` : ""}
        <p style="color: #465342; font-size: 14px;"><strong>Date:</strong> ${formattedDate}</p>
        <div style="margin-top: 20px; padding: 15px; background: #ffffff; border-radius: 8px; border: 1px solid #c5d0ba;">
          <h4 style="margin-top: 0; color: #1b261a;">Message:</h4>
          <p style="color: #364433; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${message}</p>
        </div>
        <p style="margin-top: 20px; font-size: 12px; color: #7f8878; text-align: center;">This notification was automatically sent from your portfolio website.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
  return { sent: true };
}
