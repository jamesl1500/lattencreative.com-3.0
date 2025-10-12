import type { Metadata } from "next";
import { generatePageMetadata } from "../../libs/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us",
  description: "Get in touch with Latten Creative to discuss your digital project needs. We're here to help bring your vision to life.",
  keywords: ["contact", "get in touch", "consultation", "quote"],
  canonicalPath: "/contact-us",
});

export default function ContactUs() {
  return (
    <div className="page page-contact">
      <div className="page-inner container-fluid">
        <div className="page-hero">
          <h1>Contact Us</h1>
          <p>Ready to start your next project? We'd love to hear from you.</p>
        </div>
        <div className="page-content">
          <div className="contact-form-section">
            <h2>Get In Touch</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}