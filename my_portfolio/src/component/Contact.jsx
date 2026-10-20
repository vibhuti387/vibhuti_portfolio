import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully! 💚");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Could not connect to the server. Please try again.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <p className="contact-tag">06 / LET'S CONNECT</p>

        <h2>
          Let's Build Something <span>Together.</span>
        </h2>

        <p className="contact-subtitle">
          Have an idea, an opportunity, or just want to connect? I'd love to
          hear from you.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <p className="contact-small-heading">GET IN TOUCH</p>

          <h3>
            Let's start a <span>conversation.</span>
          </h3>

          <p className="contact-description">
            I'm always open to learning opportunities, interesting projects,
            collaborations, and connecting with people who love technology.
          </p>

          <div className="contact-detail">
            <span className="contact-detail-icon">@</span>
            <div>
              <p>EMAIL</p>
              <span>Let's connect through email</span>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-detail-icon">GH</span>
            <div>
              <p>GITHUB</p>
              <a
                href="https://github.com/vibhuti387"
                target="_blank"
                rel="noreferrer"
              >
                github.com/vibhuti387 ↗
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-detail-icon">in</span>
            <div>
              <p>LINKEDIN</p>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                Connect with me ↗
              </a>
            </div>
          </div>

          <div className="contact-availability">
            <span className="contact-status-dot"></span>
            Open to opportunities
          </div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-heading">
            <h3>Send Me a Message</h3>
            <p>Fill in the details below to get in touch.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="contact-field">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your idea..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message <span>↗</span>
            </button>

            <p className="contact-form-note">
              Your message matters. Let's create something meaningful.
            </p>
          </form>
        </div>
      </div>

      <div className="contact-footer">
        <p>THANKS FOR STOPPING BY.</p>
        <span>Designed & Built with curiosity 💚</span>
      </div>
    </section>
  );
}

export default Contact;
