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
  const services = {
    'web-design': {
      name: 'Web Design',
      description: 'Creating visually appealing and user-friendly websites that drive engagement and conversions.',
      icon: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364',
      category: 'Design',
      overview: 'Our web design services combine creativity with functionality to deliver websites that not only look stunning but also provide exceptional user experiences. We focus on creating designs that reflect your brand identity while ensuring optimal performance across all devices.',
      features: [
        'Responsive Design - Mobile-first approach ensuring perfect display on all devices',
        'User Experience (UX) - Intuitive navigation and user-friendly interfaces',
        'Brand Integration - Seamless incorporation of your brand elements',
        'Performance Optimization - Fast-loading, optimized websites',
        'SEO-Friendly Design - Built with search engine optimization in mind',
        'Cross-Browser Compatibility - Works perfectly across all major browsers'
      ],
      process: [
        {
          step: 1,
          title: 'Discovery & Planning',
          description: 'We start by understanding your business goals, target audience, and design preferences through detailed consultations.'
        },
        {
          step: 2,
          title: 'Wireframing & Mockups',
          description: 'Creating detailed wireframes and design mockups to visualize the website structure and layout.'
        },
        {
          step: 3,
          title: 'Design Development',
          description: 'Bringing the designs to life with pixel-perfect precision and attention to detail.'
        },
        {
          step: 4,
          title: 'Testing & Refinement',
          description: 'Thorough testing across devices and browsers, with refinements based on feedback.'
        },
        {
          step: 5,
          title: 'Launch & Support',
          description: 'Final deployment and ongoing support to ensure your website continues to perform excellently.'
        }
      ],
      pricing: {
        basic: {
          name: 'Basic Website',
          price: '$2,500',
          features: ['Up to 5 pages', 'Responsive design', 'Basic SEO', 'Contact form', '30 days support']
        },
        professional: {
          name: 'Professional Website',
          price: '$4,500',
          features: ['Up to 10 pages', 'Custom design', 'Advanced SEO', 'Content management', 'Analytics setup', '90 days support']
        },
        enterprise: {
          name: 'Enterprise Website',
          price: 'Custom Quote',
          features: ['Unlimited pages', 'Custom functionality', 'E-commerce integration', 'Performance optimization', 'Ongoing maintenance']
        }
      },
      testimonial: {
        quote: "Latten Creative transformed our online presence with a stunning website that perfectly captures our brand. The attention to detail and user experience is exceptional.",
        author: "Sarah Johnson",
        position: "Marketing Director",
        company: "TechStart Solutions"
      }
    },
    'web-development': {
      name: 'Web Development',
      description: 'Building robust, scalable web applications using cutting-edge technologies and best practices.',
      icon: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
      category: 'Development',
      overview: 'Our web development team specializes in creating high-performance, secure, and scalable web applications. From simple websites to complex enterprise solutions, we leverage modern technologies and frameworks to deliver exceptional digital experiences.',
      features: [
        'Custom Web Applications - Tailored solutions built from the ground up',
        'Frontend Development - React, Next.js, and modern JavaScript frameworks',
        'Backend Development - Node.js, Python, and robust server-side solutions',
        'Database Design - Efficient data management and optimization',
        'API Development - RESTful and GraphQL API design and implementation',
        'Security Implementation - Industry-standard security practices and protocols'
      ],
      process: [
        {
          step: 1,
          title: 'Requirements Analysis',
          description: 'Detailed analysis of your technical requirements and business objectives.'
        },
        {
          step: 2,
          title: 'Architecture Planning',
          description: 'Designing the technical architecture and selecting the optimal technology stack.'
        },
        {
          step: 3,
          title: 'Development & Testing',
          description: 'Agile development process with continuous testing and quality assurance.'
        },
        {
          step: 4,
          title: 'Deployment & Integration',
          description: 'Seamless deployment and integration with existing systems and workflows.'
        },
        {
          step: 5,
          title: 'Maintenance & Updates',
          description: 'Ongoing maintenance, updates, and feature enhancements as needed.'
        }
      ],
      pricing: {
        basic: {
          name: 'Basic Development',
          price: '$5,000',
          features: ['Simple web application', 'Basic functionality', 'Responsive design', 'Basic hosting setup', '60 days support']
        },
        professional: {
          name: 'Professional Development',
          price: '$12,000',
          features: ['Complex web application', 'Custom features', 'Database integration', 'API development', 'Performance optimization', '6 months support']
        },
        enterprise: {
          name: 'Enterprise Development',
          price: 'Custom Quote',
          features: ['Large-scale applications', 'Advanced integrations', 'Custom architecture', 'High availability setup', 'Dedicated support team']
        }
      },
      testimonial: {
        quote: "The web application Latten Creative developed for us exceeded all expectations. The performance and scalability have been outstanding, handling our growing user base flawlessly.",
        author: "Michael Chen",
        position: "CTO",
        company: "DataFlow Analytics"
      }
    },
    'seo-optimization': {
      name: 'SEO Optimization',
      description: 'Comprehensive search engine optimization strategies to improve your online visibility and drive organic traffic.',
      icon: 'https://images.unsplash.com/photo-1686061594183-8c864f508b00?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
      category: 'Marketing',
      overview: 'Our SEO optimization services are designed to increase your website\'s visibility in search engine results, drive qualified organic traffic, and improve your online presence. We use proven strategies and the latest SEO techniques to help your business rank higher and attract more customers.',
      features: [
        'Keyword Research & Analysis - Comprehensive keyword strategy development',
        'On-Page SEO - Technical optimization of your website content and structure',
        'Off-Page SEO - Link building and authority improvement strategies',
        'Technical SEO - Site speed, mobile optimization, and technical improvements',
        'Content Optimization - SEO-friendly content creation and optimization',
        'Analytics & Reporting - Detailed performance tracking and insights'
      ],
      process: [
        {
          step: 1,
          title: 'SEO Audit & Analysis',
          description: 'Comprehensive analysis of your current SEO performance and identification of opportunities.'
        },
        {
          step: 2,
          title: 'Strategy Development',
          description: 'Creating a customized SEO strategy based on your industry, competition, and goals.'
        },
        {
          step: 3,
          title: 'Implementation',
          description: 'Executing on-page, off-page, and technical SEO improvements systematically.'
        },
        {
          step: 4,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring of rankings and performance with ongoing optimizations.'
        },
        {
          step: 5,
          title: 'Reporting & Analysis',
          description: 'Regular reporting on progress and insights for future strategy refinements.'
        }
      ],
      pricing: {
        basic: {
          name: 'Basic SEO',
          price: '$1,500/month',
          features: ['Keyword research', 'On-page optimization', 'Monthly reporting', 'Basic link building', '3 months minimum']
        },
        professional: {
          name: 'Professional SEO',
          price: '$3,000/month',
          features: ['Comprehensive SEO strategy', 'Content optimization', 'Advanced link building', 'Technical SEO', 'Weekly reporting', '6 months minimum']
        },
        enterprise: {
          name: 'Enterprise SEO',
          price: 'Custom Quote',
          features: ['Large-scale SEO campaigns', 'Multi-location optimization', 'Advanced analytics', 'Dedicated SEO manager', 'Custom reporting']
        }
      },
      testimonial: {
        quote: "Our organic traffic increased by 300% within 6 months of working with Latten Creative. Their SEO expertise and dedication to results is unmatched.",
        author: "Jennifer Martinez",
        position: "Digital Marketing Manager",
        company: "GreenTech Solutions"
      }
    },
    'digital-marketing': {
      name: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your brand, engage customers, and drive business results.',
      icon: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070',
      category: 'Marketing',
      overview: 'Our digital marketing services encompass a full spectrum of online marketing strategies designed to build your brand, engage your target audience, and drive measurable business growth. From social media management to paid advertising campaigns, we create integrated marketing solutions that deliver results.',
      features: [
        'Social Media Marketing - Strategic social media presence and engagement',
        'Pay-Per-Click (PPC) Advertising - Google Ads and social media advertising',
        'Content Marketing - Engaging content creation and distribution',
        'Email Marketing - Targeted email campaigns and automation',
        'Conversion Optimization - Improving website conversion rates',
        'Analytics & Performance Tracking - Data-driven insights and optimization'
      ],
      process: [
        {
          step: 1,
          title: 'Marketing Audit',
          description: 'Comprehensive review of your current marketing efforts and identification of opportunities.'
        },
        {
          step: 2,
          title: 'Strategy Development',
          description: 'Creating a multi-channel marketing strategy aligned with your business objectives.'
        },
        {
          step: 3,
          title: 'Campaign Launch',
          description: 'Executing marketing campaigns across selected channels with careful monitoring.'
        },
        {
          step: 4,
          title: 'Optimization & Scaling',
          description: 'Continuous optimization based on performance data and scaling successful campaigns.'
        },
        {
          step: 5,
          title: 'Reporting & Growth',
          description: 'Regular performance reporting and strategic planning for continued growth.'
        }
      ],
      pricing: {
        basic: {
          name: 'Starter Marketing',
          price: '$2,000/month',
          features: ['Social media management', 'Basic PPC campaigns', 'Monthly reporting', 'Email marketing setup', '3 months minimum']
        },
        professional: {
          name: 'Growth Marketing',
          price: '$5,000/month',
          features: ['Multi-channel campaigns', 'Advanced PPC management', 'Content creation', 'Marketing automation', 'Weekly reporting', '6 months minimum']
        },
        enterprise: {
          name: 'Enterprise Marketing',
          price: 'Custom Quote',
          features: ['Comprehensive marketing strategy', 'Advanced analytics', 'Dedicated marketing team', 'Custom integrations', 'Daily monitoring']
        }
      },
      testimonial: {
        quote: "Latten Creative's digital marketing expertise helped us achieve a 250% increase in qualified leads and significantly improved our brand recognition in the market.",
        author: "David Wilson",
        position: "VP of Marketing",
        company: "InnovateTech Corp"
      }
    },
    'ecommerce-solutions': {
      name: 'E-Commerce Solutions',
      description: 'Complete e-commerce platform development to drive online sales and enhance customer experience.',
      icon: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287',
      category: 'Development',
      overview: 'Our e-commerce solutions are designed to help businesses sell online effectively. From custom e-commerce websites to marketplace integrations, we create robust online stores that drive sales, improve customer experience, and grow your business in the digital marketplace.',
      features: [
        'Custom E-Commerce Development - Tailored online stores built for your business',
        'Payment Gateway Integration - Secure payment processing and multiple payment options',
        'Inventory Management - Advanced inventory tracking and management systems',
        'Mobile Commerce - Mobile-optimized shopping experiences',
        'Third-Party Integrations - CRM, ERP, and marketing tool integrations',
        'Analytics & Reporting - Comprehensive sales and customer analytics'
      ],
      process: [
        {
          step: 1,
          title: 'Business Analysis',
          description: 'Understanding your products, target market, and e-commerce requirements.'
        },
        {
          step: 2,
          title: 'Platform Selection',
          description: 'Choosing the optimal e-commerce platform and planning the site architecture.'
        },
        {
          step: 3,
          title: 'Development & Design',
          description: 'Building your custom e-commerce store with focus on user experience and conversions.'
        },
        {
          step: 4,
          title: 'Testing & Launch',
          description: 'Comprehensive testing of all functionality before launching your online store.'
        },
        {
          step: 5,
          title: 'Growth & Optimization',
          description: 'Ongoing optimization and feature enhancements to maximize sales performance.'
        }
      ],
      pricing: {
        basic: {
          name: 'Starter Store',
          price: '$8,000',
          features: ['Up to 100 products', 'Basic payment processing', 'Mobile responsive', 'Inventory management', '90 days support']
        },
        professional: {
          name: 'Professional Store',
          price: '$15,000',
          features: ['Unlimited products', 'Advanced features', 'Multiple payment gateways', 'Marketing integrations', 'Custom design', '6 months support']
        },
        enterprise: {
          name: 'Enterprise Store',
          price: 'Custom Quote',
          features: ['Complex e-commerce solutions', 'Custom integrations', 'Multi-store management', 'Advanced analytics', 'Dedicated support']
        }
      },
      testimonial: {
        quote: "Our new e-commerce platform from Latten Creative increased our online sales by 400% in the first year. The user experience and performance improvements were game-changing.",
        author: "Lisa Thompson",
        position: "E-Commerce Director",
        company: "StyleHub Retail"
      }
    },
    'content-creation': {
      name: 'Content Creation',
      description: 'Professional content creation services to engage your audience and strengthen your brand presence.',
      icon: 'https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071',
      category: 'Marketing',
      overview: 'Our content creation services help businesses tell their story, engage their audience, and build meaningful connections with customers. From blog posts and social media content to video production and graphic design, we create compelling content that drives engagement and supports your marketing goals.',
      features: [
        'Blog Writing & Articles - SEO-optimized blog posts and informative articles',
        'Social Media Content - Engaging posts, stories, and multimedia content',
        'Video Production - Professional video content for marketing and training',
        'Graphic Design - Visual content, infographics, and marketing materials',
        'Copywriting - Persuasive copy for websites, ads, and marketing campaigns',
        'Content Strategy - Comprehensive content planning and editorial calendars'
      ],
      process: [
        {
          step: 1,
          title: 'Content Audit',
          description: 'Analyzing your current content and identifying gaps and opportunities.'
        },
        {
          step: 2,
          title: 'Strategy Development',
          description: 'Creating a comprehensive content strategy aligned with your marketing goals.'
        },
        {
          step: 3,
          title: 'Content Creation',
          description: 'Producing high-quality content across various formats and channels.'
        },
        {
          step: 4,
          title: 'Distribution & Promotion',
          description: 'Strategic distribution and promotion of content across relevant platforms.'
        },
        {
          step: 5,
          title: 'Performance Analysis',
          description: 'Measuring content performance and optimizing future content strategies.'
        }
      ],
      pricing: {
        basic: {
          name: 'Content Starter',
          price: '$1,200/month',
          features: ['4 blog posts', 'Social media content', 'Basic graphics', 'Content calendar', '3 months minimum']
        },
        professional: {
          name: 'Content Pro',
          price: '$2,500/month',
          features: ['8 blog posts', 'Multi-platform content', 'Video content', 'Advanced graphics', 'SEO optimization', '6 months minimum']
        },
        enterprise: {
          name: 'Content Enterprise',
          price: 'Custom Quote',
          features: ['Unlimited content', 'Multi-team collaboration', 'Advanced analytics', 'Custom content types', 'Dedicated content manager']
        }
      },
      testimonial: {
        quote: "The content team at Latten Creative has transformed our brand voice and engagement. Our content now truly resonates with our audience and drives meaningful conversations.",
        author: "Amanda Rodriguez",
        position: "Brand Manager",
        company: "Creative Solutions Inc"
      }
    }
  };

  return services[serviceId as keyof typeof services] || null;
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
                {service.features.split(',').map((feature: string, index: number) => {
                  const [title, description] = feature.split(' - ');
                  return (
                    <div key={index} className="feature-item">
                      <div className="feature-icon">✓</div>
                      <div className="feature-content">
                        <h3>{title}</h3>
                        <p>{description}</p>
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
                        <div className="pricing-price">${plan.price}</div>
                        <div className="pricing-period">/ {plan.period}</div>
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