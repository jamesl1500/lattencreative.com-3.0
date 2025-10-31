import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "../../libs/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "About Us",
    description:
      "Learn more about Latten Creative and our mission to provide exceptional digital solutions for modern businesses.",
    keywords: ["about", "company", "team", "mission"],
    canonicalPath: "/about",
  });
}

export default function About() {
  return (
    <div className="page page-about">
      <div className="page-inner">
        {/* Hero Section */}
        <div className="page-hero">
          <div className="page-hero-inner container">
            <h1>About Latten Creative</h1>
            <p className="hero-subtitle">
              Transforming businesses through innovative digital solutions since
              our founding. We're not just a digital agency—we're your partners
              in growth.
            </p>
          </div>
        </div>

        <div className="page-content">
          {/* Company Story Section */}
          <div className="page-section page-section-story">
            <div className="page-section-inner container">
              <div className="page-section-content-split">
                <div className="page-section-text">
                  <div className="page-section-title">
                    <h2>Our Story</h2>
                    <p>How Latten Creative came to be</p>
                  </div>
                  <div className="story-content">
                    <p>
                      Founded in 2020, Latten Creative emerged from a simple
                      belief: every business deserves a powerful digital
                      presence that truly represents their vision. What started
                      as a one-person freelance operation has grown into a
                      full-service digital agency serving clients worldwide.
                    </p>
                    <p>
                      Our journey began when our founder, James Latten,
                      recognized the gap between innovative technology and
                      accessible digital solutions for small to medium
                      businesses. With years of experience in web development
                      and digital marketing, he set out to create an agency that
                      would bridge this gap.
                    </p>
                    <p>
                      Today, we're proud to have helped over 100+ businesses
                      establish their digital footprint, increase their online
                      presence, and drive meaningful growth through strategic
                      digital solutions.
                    </p>
                  </div>
                </div>
                <div className="page-section-image">
                  <Image
                    src="/images/annie-spratt-OjmhUpWfXyg-unsplash.jpg"
                    alt="Our journey and company story"
                    className="image-fluid"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values Section */}
          <div className="page-section page-section-mission-values">
            <div className="page-section-inner container">
              <div className="page-section-title text-center">
                <h2>Our Mission & Values</h2>
                <p>The principles that guide everything we do</p>
              </div>
              <div className="mission-values-grid">
                <div className="mission-card">
                  <div className="mission-icon">🎯</div>
                  <h3>Our Mission</h3>
                  <p>
                    To empower businesses of all sizes with innovative digital
                    solutions that drive growth, enhance user experiences, and
                    create lasting competitive advantages in the digital
                    marketplace.
                  </p>
                </div>
                <div className="values-grid">
                  <div className="value-card">
                    <div className="value-icon">💡</div>
                    <h4>Innovation</h4>
                    <p>
                      We stay ahead of digital trends to bring you cutting-edge
                      solutions.
                    </p>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">🤝</div>
                    <h4>Partnership</h4>
                    <p>
                      We work closely with you as an extension of your team.
                    </p>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">📈</div>
                    <h4>Results</h4>
                    <p>
                      We focus on measurable outcomes that impact your bottom
                      line.
                    </p>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">🎨</div>
                    <h4>Creativity</h4>
                    <p>We blend artistic vision with technical expertise.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Section */}
          <div className="page-section page-section-founder">
            <div className="page-section-inner container">
              <div className="page-section-content-split reverse">
                <div className="page-section-text">
                  <div className="page-section-title">
                    <h2>Meet Our Founder</h2>
                    <p>The visionary behind Latten Creative</p>
                  </div>
                  <div className="founder-content">
                    <h3>James Latten</h3>
                    <p className="founder-title">Founder & Creative Director</p>
                    <p>
                      With over 8 years of experience in web development,
                      digital marketing, and brand strategy, James brings a
                      unique blend of technical expertise and creative vision to
                      every project. His passion for helping businesses succeed
                      online drives the innovative solutions that Latten
                      Creative is known for.
                    </p>
                    <p>
                      Before founding Latten Creative, James worked with various
                      startups and established companies, helping them build
                      their digital presence from the ground up. His experience
                      spans across industries including e-commerce, healthcare,
                      education, and professional services.
                    </p>
                    <div className="founder-expertise">
                      <h4>Areas of Expertise:</h4>
                      <ul>
                        <li>Full-Stack Web Development</li>
                        <li>Digital Marketing Strategy</li>
                        <li>Brand Development & Design</li>
                        <li>E-commerce Solutions</li>
                        <li>SEO & Performance Optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="page-section-image">
                  <div className="founder-image-container">
                    <Image
                      src="/about/1732745087019.jpg"
                      alt="James Latten - Founder of Latten Creative"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="page-section page-section-cta">
            <div className="page-section-inner container">
              <div className="cta-content">
                <h2>Ready to Work Together?</h2>
                <p>
                  Let's discuss how we can help transform your digital presence
                  and drive your business forward.
                </p>
                <div className="cta-actions">
                  <a href="/contact-us" className="btn btn-primary">
                    Get Started Today
                  </a>
                  <a href="/services" className="btn btn-secondary">
                    View Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
