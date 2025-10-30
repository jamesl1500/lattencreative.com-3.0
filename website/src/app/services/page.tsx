import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "../../libs/metadata";
import { getServicesData } from "../../libs/data/services";

export const metadata: Promise<Metadata> = generatePageMetadata({
  title: "Our Services",
  description: "Explore our comprehensive range of digital services designed to help your business grow. From web design to digital marketing, we have the expertise to transform your online presence.",
  keywords: ["services", "web design", "web development", "digital marketing", "SEO", "e-commerce"],
  canonicalPath: "/services",
});

export default async function Services() {
  const services = await getServicesData();

  // Group services by category
  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <div className="page page-services">
      <div className="page-inner">
        {/* Hero Section */}
        <div className="page-hero">
          <div className="page-hero-inner container">
            <h1>Our Services</h1>
            <p className="hero-subtitle">
              Comprehensive digital solutions tailored to your business needs. 
              We combine creativity, technology, and strategy to deliver exceptional results.
            </p>
          </div>
        </div>

        <div className="page-content">
          {/* Services Overview Section */}
          <div className="page-section page-section-overview">
            <div className="page-section-inner container">
              <div className="page-section-title text-center">
                <h2>What We Do</h2>
                <p>Discover how our expert services can transform your digital presence</p>
              </div>
              <div className="services-overview-grid">
                <div className="overview-item">
                  <div className="overview-icon">🎨</div>
                  <h3>Design & Creativity</h3>
                  <p>Beautiful, user-centered designs that capture your brand essence and engage your audience.</p>
                </div>
                <div className="overview-item">
                  <div className="overview-icon">⚡</div>
                  <h3>Development & Technology</h3>
                  <p>Cutting-edge web solutions built with modern technologies for optimal performance.</p>
                </div>
                <div className="overview-item">
                  <div className="overview-icon">📈</div>
                  <h3>Marketing & Growth</h3>
                  <p>Strategic digital marketing campaigns that drive traffic, leads, and conversions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* All Services Grid */}
          <div className="page-section page-section-all-services">
            <div className="page-section-inner container">
              <div className="page-section-title text-center">
                <h2>Our Complete Service Portfolio</h2>
                <p>Everything you need to succeed online, all in one place</p>
              </div>
              <div className="services-grid">
                {services.map((service) => (
                  <div key={service.id} className="service-card">
                    <div className="service-card-image">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337'}${service.image.url}`}
                        alt={service.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="service-card-overlay">
                        <span className="service-category">{service.category}</span>
                      </div>
                    </div>
                    <div className="service-card-content">
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                      <div className="service-card-actions">
                        <Link href={`/services/${service.slug}`} className="btn btn-primary">
                          Learn More
                        </Link>
                        <Link href={`/contact-us?service=${service.slug}`} className="btn btn-secondary">
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Services by Category */}
          <div className="page-section page-section-categories">
            <div className="page-section-inner container">
              <div className="page-section-title text-center">
                <h2>Services by Category</h2>
                <p>Explore our specialized service areas</p>
              </div>
              <div className="categories-container">
                {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
                  <div key={category} className="category-section">
                    <h3 className="category-title">{category}</h3>
                    <div className="category-services">
                      {categoryServices.map((service) => (
                        <div key={service.id} className="category-service-item">
                          <div className="category-service-image">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337'}${service.image.url}`}
                              alt={service.name}
                              width={80}
                              height={80}
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <div className="category-service-content">
                            <h4>{service.name}</h4>
                            <p>{service.description}</p>
                            <Link href={`/services/${service.slug}`} className="category-service-link">
                              Explore Service →
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Our Services */}
          <div className="page-section page-section-why-choose">
            <div className="page-section-inner container">
              <div className="page-section-title text-center">
                <h2>Why Choose Our Services?</h2>
                <p>What makes our approach different and effective</p>
              </div>
              <div className="why-choose-grid">
                <div className="why-choose-item">
                  <div className="why-choose-icon">🏆</div>
                  <h3>Proven Expertise</h3>
                  <p>Years of experience and hundreds of successful projects across various industries.</p>
                </div>
                <div className="why-choose-item">
                  <div className="why-choose-icon">🔧</div>
                  <h3>Custom Solutions</h3>
                  <p>Tailored approaches that fit your unique business needs and goals.</p>
                </div>
                <div className="why-choose-item">
                  <div className="why-choose-icon">⚡</div>
                  <h3>Fast Delivery</h3>
                  <p>Efficient project management ensures timely delivery without compromising quality.</p>
                </div>
                <div className="why-choose-item">
                  <div className="why-choose-icon">💬</div>
                  <h3>Ongoing Support</h3>
                  <p>Continuous support and maintenance to keep your digital assets performing optimally.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="page-section page-section-cta">
            <div className="page-section-inner container">
              <div className="cta-content">
                <h2>Ready to Get Started?</h2>
                <p>
                  Let's discuss your project and find the perfect service solution for your business needs.
                </p>
                <div className="cta-actions">
                  <Link href="/contact-us" className="btn btn-primary">
                    Start Your Project
                  </Link>
                  <Link href="/about" className="btn btn-secondary">
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
