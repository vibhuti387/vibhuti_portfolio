import express from "express";
import Contact from "../models/ContactModel.js";
import { sendContactNotification } from "../config/mailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate inputs
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please enter your name.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Please enter a message.",
      });
    }

    // 1. Save to MongoDB
    const newContact = new Contact({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    });

    await newContact.save();

    // 2. Attempt email notification via NodeMailer
    let emailSent = false;
    let emailNote = null;

    try {
      const emailResult = await sendContactNotification({
        name: newContact.name,
        email: newContact.email,
        subject: typeof subject === "string" && subject.trim() ? subject.trim() : undefined,
        message: newContact.message,
        date: new Date(),
      });
      emailSent = emailResult.sent;
      if (!emailResult.sent && emailResult.reason) {
        emailNote = emailResult.reason;
      }
    } catch (mailErr) {
      console.error("[Contact] Email notification error:", mailErr.message);
      emailNote = "Email delivery failed";
    }

    // 3. Return response (message saved in DB regardless of SMTP outcome)
    return res.status(201).json({
      success: true,
      message: emailSent
        ? "Message saved and email notification sent successfully!"
        : "Message saved successfully!",
      emailSent,
      ...(emailNote && { emailStatus: emailNote }),
    });
  } catch (error) {
    console.error("[Contact] Server error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to save message. Please try again later.",
    });
  }
});

export default router;
