import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "../../libs/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description: "Learn more about Latten Creative and our mission to provide exceptional digital solutions for modern businesses.",
  keywords: ["about", "company", "team", "mission"],
  canonicalPath: "/about",
});

export default function About() {
  return (
    <div className="page page-about">
      <div className="page-inner">
        {/* Hero Section */}
        <div className="page-hero">
          <div className="page-hero-inner container">
            <h1>About Latten Creative</h1>
            <p className="hero-subtitle">
              Transforming businesses through innovative digital solutions since our founding. 
              We're not just a digital agency—we're your partners in growth.
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
                      Founded in 2020, Latten Creative emerged from a simple belief: every business deserves 
                      a powerful digital presence that truly represents their vision. What started as a one-person 
                      freelance operation has grown into a full-service digital agency serving clients worldwide.
                    </p>
                    <p>
                      Our journey began when our founder, James Latten, recognized the gap between innovative 
                      technology and accessible digital solutions for small to medium businesses. With years 
                      of experience in web development and digital marketing, he set out to create an agency 
                      that would bridge this gap.
                    </p>
                    <p>
                      Today, we're proud to have helped over 100+ businesses establish their digital footprint, 
                      increase their online presence, and drive meaningful growth through strategic digital solutions.
                    </p>
                  </div>
                </div>
                <div className="page-section-image">
                  <Image
                    src="/about/1732745087019.jpg"
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
                    To empower businesses of all sizes with innovative digital solutions that drive 
                    growth, enhance user experiences, and create lasting competitive advantages in 
                    the digital marketplace.
                  </p>
                </div>
                <div className="values-grid">
                  <div className="value-card">
                    <div className="value-icon">💡</div>
                    <h4>Innovation</h4>
                    <p>We stay ahead of digital trends to bring you cutting-edge solutions.</p>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">🤝</div>
                    <h4>Partnership</h4>
                    <p>We work closely with you as an extension of your team.</p>
                  </div>
                  <div className="value-card">
                    <div className="value-icon">📈</div>
                    <h4>Results</h4>
                    <p>We focus on measurable outcomes that impact your bottom line.</p>
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
                      With over 8 years of experience in web development, digital marketing, and brand strategy, 
                      James brings a unique blend of technical expertise and creative vision to every project. 
                      His passion for helping businesses succeed online drives the innovative solutions that 
                      Latten Creative is known for.
                    </p>
                    <p>
                      Before founding Latten Creative, James worked with various startups and established 
                      companies, helping them build their digital presence from the ground up. His experience 
                      spans across industries including e-commerce, healthcare, education, and professional services.
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

          {/* Team Section */}
          <div className="page-section page-section-team">
            <div className="page-section-inner container">
              <div className="page-section-title text-center">
                <h2>Our Team</h2>
                <p>Meet the talented individuals who bring your digital visions to life</p>
              </div>
              <div className="team-grid">
                <div className="team-member">
                  <div className="team-member-image">
                    <Image
                      src="/about/1732745087019.jpg"
                      alt="James Latten"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="team-member-info">
                    <h3>James Latten</h3>
                    <p className="team-member-role">Founder & Creative Director</p>
                    <p className="team-member-description">
                      Leads creative strategy and oversees all client projects to ensure exceptional results.
                    </p>
                    <div className="team-member-social">
                      <a href="#" aria-label="LinkedIn">💼</a>
                      <a href="#" aria-label="Twitter">🐦</a>
                      <a href="#" aria-label="Portfolio">🌐</a>
                    </div>
                  </div>
                </div>

                <div className="team-member">
                  <div className="team-member-image">
                    <Image
                      src="/images/annie-spratt-OjmhUpWfXyg-unsplash.jpg"
                      alt="Sarah Chen"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="team-member-info">
                    <h3>Sarah Chen</h3>
                    <p className="team-member-role">Lead Developer</p>
                    <p className="team-member-description">
                      Specializes in modern web technologies and ensures all projects are built to perfection.
                    </p>
                    <div className="team-member-social">
                      <a href="#" aria-label="LinkedIn">💼</a>
                      <a href="#" aria-label="GitHub">💻</a>
                      <a href="#" aria-label="Portfolio">🌐</a>
                    </div>
                  </div>
                </div>

                <div className="team-member">
                  <div className="team-member-image">
                    <Image
                      src="/images/annie-spratt-OjmhUpWfXyg-unsplash.jpg"
                      alt="Michael Rodriguez"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="team-member-info">
                    <h3>Michael Rodriguez</h3>
                    <p className="team-member-role">UI/UX Designer</p>
                    <p className="team-member-description">
                      Creates intuitive and beautiful user experiences that convert visitors into customers.
                    </p>
                    <div className="team-member-social">
                      <a href="#" aria-label="LinkedIn">💼</a>
                      <a href="#" aria-label="Dribbble">🎨</a>
                      <a href="#" aria-label="Portfolio">🌐</a>
                    </div>
                  </div>
                </div>

                <div className="team-member">
                  <div className="team-member-image">
                    <Image
                      src="/images/annie-spratt-OjmhUpWfXyg-unsplash.jpg"
                      alt="Emily Johnson"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="team-member-info">
                    <h3>Emily Johnson</h3>
                    <p className="team-member-role">Digital Marketing Specialist</p>
                    <p className="team-member-description">
                      Develops and executes marketing strategies that drive traffic and increase conversions.
                    </p>
                    <div className="team-member-social">
                      <a href="#" aria-label="LinkedIn">💼</a>
                      <a href="#" aria-label="Twitter">🐦</a>
                      <a href="#" aria-label="Portfolio">🌐</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="page-section page-section-why-choose">
            <div className="page-section-inner container">
              <div className="page-section-title text-center">
                <h2>Why Choose Latten Creative?</h2>
                <p>What sets us apart in the digital landscape</p>
              </div>
              <div className="why-choose-grid">
                <div className="why-choose-item">
                  <div className="why-choose-number">01</div>
                  <h3>Proven Track Record</h3>
                  <p>
                    Over 100+ successful projects delivered with measurable results and satisfied clients 
                    across various industries.
                  </p>
                </div>
                <div className="why-choose-item">
                  <div className="why-choose-number">02</div>
                  <h3>End-to-End Solutions</h3>
                  <p>
                    From strategy and design to development and marketing, we handle every aspect of 
                    your digital presence.
                  </p>
                </div>
                <div className="why-choose-item">
                  <div className="why-choose-number">03</div>
                  <h3>Personalized Approach</h3>
                  <p>
                    We take the time to understand your unique business needs and create tailored 
                    solutions that fit your goals.
                  </p>
                </div>
                <div className="why-choose-item">
                  <div className="why-choose-number">04</div>
                  <h3>Ongoing Support</h3>
                  <p>
                    Our relationship doesn't end at launch. We provide ongoing support and optimization 
                    to ensure continued success.
                  </p>
                </div>
                <div className="why-choose-item">
                  <div className="why-choose-number">05</div>
                  <h3>Transparent Communication</h3>
                  <p>
                    We believe in open, honest communication throughout every phase of your project.
                  </p>
                </div>
                <div className="why-choose-item">
                  <div className="why-choose-number">06</div>
                  <h3>Passionate Team</h3>
                  <p>
                    Our team is made up of dedicated professionals who are passionate about what they do.
                  </p>
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
                  Let's discuss how we can help transform your digital presence and drive your business forward.
                </p>
                <div className="cta-actions">
                  <a href="/contact-us" className="btn btn-primary">Get Started Today</a>
                  <a href="/services" className="btn btn-secondary">View Our Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}