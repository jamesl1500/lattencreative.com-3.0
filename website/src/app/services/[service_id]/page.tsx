import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generateServiceMetadata } from "@/libs/metadata";
import { fetchServiceById } from "@/libs/data/services";

// This would typically come from your CMS or API
interface ServicePageProps {
  params: {
    service_id: string;
  };
}

// Detailed service data with comprehensive information
async function getServiceData(serviceId: string) {
  // Fetch service data from Strapi
  const service = await fetchServiceById(serviceId);
  return service;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = await getServiceData(resolvedParams.service_id);
  
  if (!service) {
    return generateServiceMetadata(
      'Service Not Found',
      'The requested service could not be found.',
      resolvedParams.service_id
    );
  }
  return generateServiceMetadata(
    service.name,
    service.description,
    resolvedParams.service_id,
  );
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = await getServiceData(resolvedParams.service_id);

  if (!service) {
    return (
      <div className="page page-service-detail">
        <div className="page-inner container-fluid">
          <div className="service-not-found">
            <h1>Service Not Found</h1>
            <p>The requested service could not be found.</p>
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page page-service-detail">
      <div className="page-inner container-fluid">
        {/* Hero Section with Icon, Name, and Description */}
        <section className="service-hero">
          <div className="service-hero-inner">
            <div className="service-hero-image">
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337'}${service.image.url}`}
                alt={service.name}
                width={600}
                height={400}
                className="service-hero-img"
              />
              <div className="service-category-badge">
                {service.category}
              </div>
            </div>
            <div className="service-hero-content">
              <h1 className="service-title">{service.name}</h1>
              <p className="service-description">{service.tagline}</p>
              <div className="service-hero-actions">
                <Link href="/contact-us" className="btn btn-primary">
                  Get Started
                </Link>
                <Link href="#pricing" className="btn btn-secondary">
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="service-section service-overview">
          <div className="service-section-inner">
            <h2>Overview</h2>
            <p className="service-overview-text">{service.description}</p>
          </div>
        </section>

        {/* Features Section */}
        {service.features && service.features.length > 0 && (
          <section className="service-section service-features">
            <div className="service-section-inner">
              <h2>What's Included</h2>
              <div className="features-grid">
                {service.features.split(',\n').map((feature: string, index: number) => {
                  const [title, description] = feature.split(' - ');
                  return (
                    <div key={index} className="feature-item">
                      <div className="feature-icon">✓</div>
                      <div className="feature-content">
                        <h3>{title.slice(1)}</h3>
                        {description && <p>{description.slice(0, -1)}</p>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Process Section */}
        {service.processSteps && service.processSteps.length > 0 && (
          <section className="service-section service-process">
            <div className="service-section-inner">
              <h2>Our Process</h2>
              <div className="process-timeline">
                {service.processSteps.map((step, index) => (
                  <div key={index} className="process-step">
                    <div className="process-step-number">{step.stepNumber}</div>
                    <div className="process-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                      <p>{step.estimatedDuration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        {service.pricing && service.pricing.length > 0 && (
          <section className="service-section service-pricing" id="pricing">
            <div className="service-section-inner">
              <h2>Pricing Plans</h2>
              <div className="pricing-grid">
                  {service.pricing.map((plan: any, index: number) => (
                    <div key={index} className={`pricing-card ${plan.isPopular ? 'pricing-card-featured' : ''}`}>
                      <div className="pricing-header">
                        <h3>{plan.title}</h3>
                        <div className="pricing-price">{plan.price != null ? `$${plan.price}` : "Contact Us"}</div>
                        <div className="pricing-period">{plan.price != null ? `/ ${plan.period}` : ""}</div>
                      </div>
                      <div className="pricing-description">
                        <p>{plan.description}</p>
                      </div>
                      <ul className="pricing-features">
                        {plan.features.split(',').map((feature: string, featureIndex: number) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                      <Link href={`/contact-us?plan=${plan.title}&service=${service.slug}`} className="btn btn-secondary pricing-btn">
                        {plan.ctaText}
                      </Link>
                    </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial Section */}
        {service.testimonials && service.testimonials.length > 0 && (
          <section className="service-section service-testimonial">
            <div className="service-section-inner">
              {service.testimonials.map((testimonial: any, index: number) => (
                <div key={index} className="testimonial-item">
                  <div className="testimonial-content">
                    <div className="testimonial-quote">
                      <blockquote>"{testimonial.quote}"</blockquote>
                    </div>
                    <div className="testimonial-author">
                      <h4>{testimonial.clientName}</h4>
                      <p>{testimonial.clientTitle}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="service-section service-cta">
          <div className="service-section-inner">
            <div className="service-cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Let's discuss how our {service.name.toLowerCase()} services can help grow your business and achieve your goals.</p>
              <div className="service-cta-actions">
                <Link href="/contact-us" className="btn btn-primary">
                  Start Your Project
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}