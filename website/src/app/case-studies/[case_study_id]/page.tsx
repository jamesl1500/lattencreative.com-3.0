import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "../../../libs/metadata";
import { getCaseStudyById } from "../../../libs/data/case_studies";

interface CaseStudyPageProps {
  params: {
    case_study_id: string;
  };
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudyId = parseInt(params.case_study_id);
  const caseStudy = getCaseStudyById(caseStudyId);
  
  if (!caseStudy) {
    return generatePageMetadata({
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
      canonicalPath: `/case-studies/${params.case_study_id}`
    });
  }

  return generatePageMetadata({
    title: `${caseStudy.title} - ${caseStudy.client}`,
    description: caseStudy.shortDescription,
    canonicalPath: `/case-studies/${params.case_study_id}`
  });
}

export default function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const caseStudyId = parseInt(params.case_study_id);
  const caseStudy = getCaseStudyById(caseStudyId);

  if (!caseStudy) {
    return (
      <div className="page page-case-study-detail">
        <div className="page-inner container-fluid">
          <div className="case-study-not-found">
            <h1>Case Study Not Found</h1>
            <p>The requested case study could not be found.</p>
            <Link href="/case-studies" className="btn btn-primary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page page-case-study-detail">
      <div className="page-inner container-fluid">
        {/* Hero Section */}
        <section className="case-study-hero">
          <div className="case-study-hero-inner">
            <div className="case-study-hero-content">
              <div className="case-study-breadcrumb">
                <Link href="/case-studies">Case Studies</Link>
                <span> / </span>
                <span>{caseStudy.title}</span>
              </div>
              <div className="case-study-meta">
                <span className="case-study-category">{caseStudy.category}</span>
                <span className="case-study-duration">{caseStudy.duration}</span>
              </div>
              <h1 className="case-study-title">{caseStudy.title}</h1>
              <p className="case-study-client">for {caseStudy.client}</p>
              <p className="case-study-description">{caseStudy.shortDescription}</p>
              <div className="case-study-hero-actions">
                {caseStudy.url && (
                  <a 
                    href={caseStudy.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    Visit Live Site
                  </a>
                )}
                <Link href="/contact-us" className="btn btn-secondary">
                  Start Your Project
                </Link>
              </div>
            </div>
            <div className="case-study-hero-image">
              <Image
                src={caseStudy.images.hero}
                alt={caseStudy.title}
                width={800}
                height={600}
                className="case-study-hero-img"
              />
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="case-study-section case-study-overview">
          <div className="case-study-section-inner">
            <div className="overview-grid">
              <div className="overview-details">
                <h2>Project Overview</h2>
                <p>{caseStudy.fullDescription}</p>
                
                <div className="project-info">
                  <div className="info-item">
                    <h4>Client</h4>
                    <p>{caseStudy.client}</p>
                  </div>
                  <div className="info-item">
                    <h4>Project Type</h4>
                    <p>{caseStudy.projectType}</p>
                  </div>
                  <div className="info-item">
                    <h4>Duration</h4>
                    <p>{caseStudy.duration}</p>
                  </div>
                  <div className="info-item">
                    <h4>Technologies</h4>
                    <div className="tech-tags">
                      {caseStudy.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {caseStudy.metrics && (
                <div className="overview-metrics">
                  <h3>Key Results</h3>
                  <div className="metrics-grid">
                    {caseStudy.metrics.map((metric, index) => (
                      <div key={index} className="metric-card">
                        <div className="metric-value">{metric.value}</div>
                        <div className="metric-label">{metric.label}</div>
                        <div className="metric-description">{metric.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="case-study-section case-study-challenge">
          <div className="case-study-section-inner">
            <div className="challenge-solution-grid">
              <div className="challenge-content">
                <h2>The Challenge</h2>
                <p>{caseStudy.challenge}</p>
              </div>
              <div className="solution-content">
                <h2>Our Solution</h2>
                <p>{caseStudy.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="case-study-section case-study-gallery">
          <div className="case-study-section-inner">
            <h2>Project Gallery</h2>
            <div className="gallery-grid">
              {caseStudy.images.gallery.map((image, index) => (
                <div key={index} className="gallery-item">
                  <Image
                    src={image}
                    alt={`${caseStudy.title} - Image ${index + 1}`}
                    width={600}
                    height={400}
                    className="gallery-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="case-study-section case-study-results">
          <div className="case-study-section-inner">
            <h2>Results Achieved</h2>
            <div className="results-grid">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="result-item">
                  <div className="result-icon">✓</div>
                  <div className="result-text">{result}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {caseStudy.testimonial && (
          <section className="case-study-section case-study-testimonial">
            <div className="case-study-section-inner">
              <div className="testimonial-content">
                <div className="testimonial-quote">
                  <blockquote>"{caseStudy.testimonial.quote}"</blockquote>
                </div>
                <div className="testimonial-author">
                  <h4>{caseStudy.testimonial.author}</h4>
                  <p>{caseStudy.testimonial.position}, {caseStudy.testimonial.company}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Related Projects */}
        <section className="case-study-section case-study-related">
          <div className="case-study-section-inner">
            <h2>Related Projects</h2>
            <div className="related-projects">
              <Link href="/case-studies" className="btn btn-primary">
                View All Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="case-study-section case-study-cta">
          <div className="case-study-section-inner">
            <div className="cta-content">
              <h2>Ready to Start Your Project?</h2>
              <p>
                Let's discuss how we can help you achieve similar results and transform 
                your business with a custom solution.
              </p>
              <div className="cta-actions">
                <Link href="/contact-us" className="btn btn-primary">
                  Get Started Today
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
