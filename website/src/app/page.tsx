import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { generatePageMetadata } from "../libs/metadata";
import { getServicesData } from "../libs/data/services";

export const metadata: Metadata = generatePageMetadata({
  title: "Home",
  description: "Discover our comprehensive digital solutions designed to elevate your business presence online.",
  keywords: ["homepage", "digital agency", "creative solutions"],
  canonicalPath: "/",
});

export default async function Home() {
  // TODO: Fetch services data
  const services = await getServicesData();

  return (
    <div className="page page-home">
      <div className="page-inner container-fluid">
        <div className="page-hero">
          <div className="page-hero-inner container">
            <h2>Welcome to Latten Creative LLC</h2>
            <p>We are your partner in digital innovation. Specializing in web design, development, and digital marketing.</p>
          </div>
        </div>
        <div className="page-content">
          <div className="page-section container-fluid page-home-intro-image">
            <Image
              src="/images/annie-spratt-OjmhUpWfXyg-unsplash.jpg"
              alt="Intro Image"
              className="image-fluid"
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
          </div>
          
          {/* Services Section */}
          <div className="page-section page-section-services">
            <div className="page-section-inner container">
              <div className="page-section-title">
                <h2>Our Services</h2>
                <p>Explore our range of digital services designed to help your business grow.</p>
              </div>
              <div className="page-section-content">
                {
                  services.map((service) => (
                    <div key={service.id} className="service-card">
                      <div className="service-card-image">
                        <Image                      
                          src={`${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337'}${service.image.url}`}
                          alt={service.name}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="service-card-content">
                        <h3>
                          <Link href={`services/${service.slug}`} className="service-link">
                            {service.name}
                          </Link>
                        </h3>
                        <p>{service.tagline}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="page-section-cta">
                <p>Ready to elevate your digital presence?</p>
                <a href="/services" className="btn">View All Services</a>
              </div>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="page-section page-section-mission">
            <div className="page-section-inner container">
              <div className="page-section-content-split">
                <div className="page-section-text">
                  <div className="page-section-title">
                    <h2>Our Mission</h2>
                    <p>Empowering businesses through innovative digital solutions</p>
                  </div>
                  <div className="mission-content">
                    <p>
                      At Latten Creative, we believe every business deserves a powerful digital presence. 
                      Our mission is to bridge the gap between innovative technology and business success, 
                      creating digital experiences that not only look exceptional but drive real results.
                    </p>
                    <p>
                      We're committed to understanding your unique challenges and crafting tailored solutions 
                      that help you stand out in today's competitive digital landscape. From stunning web designs 
                      to comprehensive digital marketing strategies, we're here to fuel your growth.
                    </p>
                    <div className="mission-values">
                      <div className="value-item">
                        <h4>Innovation</h4>
                        <p>Staying ahead of digital trends to bring you cutting-edge solutions.</p>
                      </div>
                      <div className="value-item">
                        <h4>Partnership</h4>
                        <p>Working closely with you as an extension of your team.</p>
                      </div>
                      <div className="value-item">
                        <h4>Results</h4>
                        <p>Focusing on measurable outcomes that impact your bottom line.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page-section-image">
                  <Image
                    src="/images/annie-spratt-OjmhUpWfXyg-unsplash.jpg"
                    alt="Our mission - Team collaboration"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* How We Do Business Section */}
          <div className="page-section page-section-process">
            <div className="page-section-inner container">
              <div className="page-section-title">
                <h2>How We Do Business</h2>
                <p>Our proven process ensures exceptional results every time</p>
              </div>
              <div className="page-section-content">
                <div className="process-steps">
                  <div className="process-step">
                    <div className="process-step-number">01</div>
                    <div className="process-step-content">
                      <h3>Discovery & Strategy</h3>
                      <p>
                        We start by understanding your business, goals, and target audience. 
                        Through detailed consultations and research, we develop a comprehensive 
                        strategy tailored to your unique needs.
                      </p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="process-step-number">02</div>
                    <div className="process-step-content">
                      <h3>Design & Development</h3>
                      <p>
                        Our creative team brings your vision to life with stunning designs and 
                        robust development. We maintain open communication throughout the process, 
                        ensuring every detail meets your expectations.
                      </p>
                    </div>
                  </div>
                  <div className="process-step">
                    <div className="process-step-number">03</div>
                    <div className="process-step-content">
                      <h3>Launch & Optimize</h3>
                      <p>
                        We handle the technical launch details and provide ongoing optimization 
                        based on real performance data. Your success is our success, and we're 
                        committed to long-term growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="process-benefits">
                  <h3>Why Choose Our Approach?</h3>
                  <ul>
                    <li>Transparent communication throughout every project phase</li>
                    <li>Data-driven decisions backed by industry best practices</li>
                    <li>Flexible methodology that adapts to your business needs</li>
                    <li>Ongoing support and optimization post-launch</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA Section */}
          <div className="page-section page-section-contact-cta">
            <div className="page-section-inner container">
              <div className="contact-cta-content">
                <div className="contact-cta-text">
                  <h2>Ready to Transform Your Digital Presence?</h2>
                  <p>
                    Let's discuss how we can help your business thrive in the digital world. 
                    Get in touch for a free consultation and discover the possibilities.
                  </p>
                  <div className="contact-benefits">
                    <div className="benefit-item">
                      <span className="benefit-icon">✓</span>
                      <span>Free initial consultation</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">✓</span>
                      <span>Custom strategy proposal</span>
                    </div>
                    <div className="benefit-item">
                      <span className="benefit-icon">✓</span>
                      <span>No obligation quote</span>
                    </div>
                  </div>
                </div>
                <div className="contact-cta-actions">
                  <a href="/contact-us" className="btn btn-primary">Get Started Today</a>
                  <a href="/about" className="btn btn-secondary">Learn More About Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}