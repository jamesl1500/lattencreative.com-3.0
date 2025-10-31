import type { Metadata } from "next";
import { generatePageMetadata } from "../../libs/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Us | Let's Create Something Amazing Together",
  description:
    "Ready to transform your digital presence? Get in touch with Latten Creative for a free consultation. We're here to help bring your vision to life with expert web design and development.",
  keywords: [
    "contact",
    "get in touch",
    "consultation",
    "quote",
    "free consultation",
    "web design",
    "development",
  ],
  canonicalPath: "/contact-us",
});

export default function ContactUs() {
  return (
    <div className="page page-contact">
      <div className="page-inner container-fluid">
        {/* Hero Section */}
        <div className="contact-hero">
          <div className="contact-hero-inner container">
            <h1>Let's Create Something Amazing Together</h1>
            <p className="hero-subtitle">
              Ready to transform your digital presence? We're here to listen,
              understand your vision, and craft solutions that exceed your
              expectations. Let's start the conversation.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">24h</span>
                <span className="stat-label">Response Time</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Free</span>
                <span className="stat-label">Consultation</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods Section */}
        <section className="contact-section contact-section-methods">
          <div className="contact-section-inner container">
            <h2>Get In Touch</h2>
            <p className="section-subtitle">
              Choose the method that works best for you. We're always here to
              help and answer any questions.
            </p>

            <div className="contact-methods-grid">
              <div className="contact-method">
                <div className="method-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3>Email Us</h3>
                <p>
                  Send us a detailed message and we'll get back to you within 24
                  hours.
                </p>
                <a
                  href="mailto:hello@lattencreative.com"
                  className="contact-link"
                >
                  hello@lattencreative.com
                </a>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <h3>Call Us</h3>
                <p>
                  Prefer to talk? Give us a call during business hours for
                  immediate assistance.
                </p>
                <a href="tel:+1234567890" className="contact-link">
                  (123) 456-7890
                </a>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
                  </svg>
                </div>
                <h3>Visit Us</h3>
                <p>
                  Stop by our office for a coffee and chat about your project in
                  person.
                </p>
                <address className="contact-link">
                  123 Creative Street
                  <br />
                  Design District, DC 12345
                </address>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-section contact-section-form">
          <div className="contact-section-inner container">
            <div className="form-content-wrapper">
              <div className="form-intro">
                <h2>Start Your Project</h2>
                <p>
                  Ready to begin? Fill out the form below and tell us about your
                  project. The more details you provide, the better we can
                  understand your needs and provide you with an accurate
                  timeline and quote.
                </p>

                <div className="form-benefits">
                  <div className="benefit-item">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    <span>Free consultation and project assessment</span>
                  </div>
                  <div className="benefit-item">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    <span>
                      Detailed project timeline and transparent pricing
                    </span>
                  </div>
                  <div className="benefit-item">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    <span>Personalized recommendations for your goals</span>
                  </div>
                </div>
              </div>

              <div className="form-container">
                <form className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name *</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company/Organization</label>
                    <input type="text" id="company" name="company" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="projectType">Project Type *</label>
                    <select id="projectType" name="projectType" required>
                      <option value="">Select a project type</option>
                      <option value="website-design">Website Design</option>
                      <option value="website-redesign">Website Redesign</option>
                      <option value="e-commerce">E-commerce Development</option>
                      <option value="web-app">Web Application</option>
                      <option value="branding">Branding & Identity</option>
                      <option value="seo">SEO & Digital Marketing</option>
                      <option value="consultation">Consultation Only</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="budget">Project Budget</label>
                    <select id="budget" name="budget">
                      <option value="">Select your budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="timeline">Desired Timeline</label>
                    <select id="timeline" name="timeline">
                      <option value="">When do you need this completed?</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-plus-months">6+ months</option>
                      <option value="flexible">I'm flexible</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Please describe your project goals, target audience, key features you need, and any specific requirements or ideas you have in mind..."
                      required
                    ></textarea>
                  </div>

                  <div className="form-group form-group-checkbox">
                    <label className="checkbox-label">
                      <input type="checkbox" name="newsletter" />
                      <span className="checkbox-custom"></span>
                      I'd like to receive updates about design trends and tips
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-large">
                    Send My Message
                  </button>

                  <p className="form-note">
                    By submitting this form, you agree to our privacy policy.
                    We'll never share your information with third parties.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="contact-section contact-section-faq">
          <div className="contact-section-inner container">
            <h2>Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about working with us.
            </p>

            <div className="faq-grid">
              <div className="faq-item">
                <h3>How long does a typical project take?</h3>
                <p>
                  Most website projects take 4-8 weeks from start to finish,
                  depending on complexity. We'll provide a detailed timeline
                  during our initial consultation.
                </p>
              </div>

              <div className="faq-item">
                <h3>Do you work with small businesses?</h3>
                <p>
                  Absolutely! We work with businesses of all sizes, from
                  startups to established enterprises. We tailor our approach to
                  fit your budget and goals.
                </p>
              </div>

              <div className="faq-item">
                <h3>What's included in your web design service?</h3>
                <p>
                  Our comprehensive service includes strategy, design,
                  development, content integration, SEO optimization, testing,
                  and training. We handle everything from start to launch.
                </p>
              </div>

              <div className="faq-item">
                <h3>Do you provide ongoing support?</h3>
                <p>
                  Yes! We offer various maintenance packages to keep your
                  website secure, updated, and performing optimally. We're here
                  for the long haul.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-section contact-section-cta">
          <div className="contact-section-inner container">
            <div className="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>
                Don't wait – your perfect website is just a conversation away.
                Let's discuss your project and see how we can help you achieve
                your goals.
              </p>
              <div className="cta-actions">
                <a
                  href="mailto:hello@lattencreative.com"
                  className="btn btn-primary"
                >
                  Send Us an Email
                </a>
                <a href="tel:+1234567890" className="btn btn-secondary">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
