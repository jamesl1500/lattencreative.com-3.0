"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);
    setMessage("");

    try {
      // Use Strapi API endpoint
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}/api/newsletter-subscription/subscribe`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(
          "Thank you for subscribing! Check your email for a welcome message.",
        );
        setEmail("");
      } else {
        setMessage(
          data.error?.message || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          placeholder="Enter your email address"
          className="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
      {message && (
        <div
          className={`form-message ${message.includes("Thank you") ? "success" : "error"}`}
        >
          {message}
        </div>
      )}
    </form>
  );
}
