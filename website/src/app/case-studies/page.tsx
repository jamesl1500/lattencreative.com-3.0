import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "../../libs/metadata";
import {
  getCaseStudiesData,
  getCategories,
} from "../../libs/data/case_studies";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Case Studies",
    description:
      "Explore our portfolio of successful projects and discover how we've helped businesses transform their digital presence and achieve remarkable results.",
    canonicalPath: "/case-studies",
  });
}

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudiesData();
  const categories = getCategories();

  return (
    <div className="page page-case-studies">
      <div className="page-inner container-fluid">
        {/* Hero Section */}
        <section className="case-studies-hero">
          <div className="case-studies-hero-inner">
            <h1>Case Studies</h1>
            <p className="hero-subtitle">
              Explore our portfolio of successful projects and discover how
              we've helped businesses transform their digital presence and
              achieve remarkable results.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="case-studies-section case-studies-filter">
          <div className="case-studies-section-inner">
            <h2>Filter by Category</h2>
            <div className="categories-filter">
              <Link href="/case-studies" className="category-filter active">
                All Projects
              </Link>
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/case-studies?category=${category.toLowerCase()}`}
                  className="category-filter"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="case-studies-section case-studies-grid-section">
          <div className="case-studies-section-inner">
            <div className="case-studies-grid">
              {caseStudies.map((study) => (
                <article key={study.id} className="case-study-card">
                  <div className="case-study-image">
                    <Image
                      src={study.images.hero}
                      alt={study.title}
                      width={600}
                      height={400}
                      className="case-study-img"
                    />
                    <div className="case-study-overlay">
                      <span className="case-study-category">
                        {study.category}
                      </span>
                    </div>
                  </div>
                  <div className="case-study-content">
                    <div className="case-study-meta">
                      <span className="case-study-client">{study.client}</span>
                      <span className="case-study-duration">
                        {study.duration}
                      </span>
                    </div>
                    <h3 className="case-study-title">{study.title}</h3>
                    <p className="case-study-description">
                      {study.shortDescription}
                    </p>
                    <div className="case-study-metrics">
                      {study.metrics &&
                        study.metrics.slice(0, 2).map((metric, index) => (
                          <div key={index} className="metric-item">
                            <span className="metric-value">{metric.value}</span>
                            <span className="metric-label">{metric.label}</span>
                          </div>
                        ))}
                    </div>
                    <div className="case-study-actions">
                      <Link
                        href={`/case-studies/${study.id}`}
                        className="btn btn-primary"
                      >
                        View Case Study
                      </Link>
                      {study.url && (
                        <a
                          href={study.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                        >
                          Visit Site
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="case-studies-section case-studies-stats">
          <div className="case-studies-section-inner">
            <h2>Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">300%</div>
                <div className="stat-label">Average ROI Increase</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2.5M+</div>
                <div className="stat-label">Users Reached</div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="case-studies-section case-studies-technologies">
          <div className="case-studies-section-inner">
            <h2>Technologies We Work With</h2>
            <div className="technologies-grid">
              <div className="tech-category">
                <h3>Frontend</h3>
                <div className="tech-list">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Vue.js</span>
                  <span>TypeScript</span>
                  <span>SCSS</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Backend</h3>
                <div className="tech-list">
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>PHP</span>
                  <span>PostgreSQL</span>
                  <span>MongoDB</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Mobile</h3>
                <div className="tech-list">
                  <span>React Native</span>
                  <span>Flutter</span>
                  <span>iOS</span>
                  <span>Android</span>
                  <span>PWA</span>
                </div>
              </div>
              <div className="tech-category">
                <h3>Cloud & DevOps</h3>
                <div className="tech-list">
                  <span>AWS</span>
                  <span>Docker</span>
                  <span>Kubernetes</span>
                  <span>CI/CD</span>
                  <span>Monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="case-studies-section case-studies-cta">
          <div className="case-studies-section-inner">
            <div className="cta-content">
              <h2>Ready to Create Your Success Story?</h2>
              <p>
                Let's discuss how we can help transform your business and
                achieve remarkable results like the clients featured in our case
                studies.
              </p>
              <div className="cta-actions">
                <Link href="/contact-us" className="btn btn-primary">
                  Start Your Project
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
