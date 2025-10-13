import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, blogCategories, featuredPosts } from "../../libs/data/blog";
import { generatePageMetadata } from "../../libs/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Blog | Latest Insights & Industry Updates",
  description: "Stay up-to-date with the latest trends in web design, development, digital marketing, and technology. Expert insights and practical tips from our team.",
  canonicalPath: "/blog",
  keywords: ["blog", "web design", "development", "digital marketing", "technology", "insights"]
});

export default function BlogPage() {
  return (
    <div className="page page-blog">
      <div className="page-inner container-fluid">
        
        {/* Hero Section */}
        <div className="blog-hero">
          <div className="blog-hero-inner container">
            <h1>Our Blog</h1>
            <p className="hero-subtitle">
              Insights, trends, and practical tips from our team of digital experts. 
              Stay informed about the latest in web design, development, and digital marketing.
            </p>
          </div>
        </div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="blog-section blog-section-featured">
            <div className="blog-section-inner container">
              <h2>Featured Articles</h2>
              <div className="featured-posts-grid">
                {featuredPosts.map((post) => (
                  <article key={post.id} className="featured-post-card">
                    <Link href={`/blog/${post.slug}`} className="post-link">
                      <div className="post-image">
                        <img 
                          src={post.image || '/images/blog/default-blog.jpg'} 
                          alt={post.title}
                          className="image-fluid"
                        />
                        <div className="post-category">{post.category}</div>
                      </div>
                      <div className="post-content">
                        <div className="post-meta">
                          <span className="post-date">{new Date(post.publishedDate).toLocaleDateString()}</span>
                          <span className="post-read-time">{post.readTime} min read</span>
                        </div>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <div className="post-author">
                          <div className="author-info">
                            <span className="author-name">{post.author.name}</span>
                            <span className="author-title">{post.author.title}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Categories Filter */}
        <section className="blog-section blog-section-categories">
          <div className="blog-section-inner container">
            <div className="categories-filter">
              <h3>Browse by Category</h3>
              <div className="categories-list">
                {blogCategories.map((category) => (
                  <button 
                    key={category} 
                    className={`category-pill ${category === 'All' ? 'active' : ''}`}
                    
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Posts Grid */}
        <section className="blog-section blog-section-all-posts">
          <div className="blog-section-inner container">
            <h2>All Articles</h2>
            <div className="blog-posts-grid">
              {blogPosts.map((post) => (
                <article key={post.id} className="blog-post-card">
                  <Link href={`/blog/${post.slug}`} className="post-link">
                    <div className="post-image">
                      <img 
                        src={post.image || '/images/blog/default-blog.jpg'} 
                        alt={post.title}
                        className="image-fluid"
                      />
                      <div className="post-category">{post.category}</div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="post-date">{new Date(post.publishedDate).toLocaleDateString()}</span>
                        <span className="post-read-time">{post.readTime} min read</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>
                      <div className="post-tags">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="tag">{tag}</span>
                        ))}
                      </div>
                      <div className="post-author">
                        <div className="author-info">
                          <span className="author-name">{post.author.name}</span>
                          <span className="author-title">{post.author.title}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup CTA */}
        <section className="blog-section blog-section-newsletter">
          <div className="blog-section-inner container">
            <div className="newsletter-cta">
              <div className="newsletter-content">
                <h2>Stay Updated</h2>
                <p>
                  Get the latest insights delivered directly to your inbox. 
                  Join our community of digital professionals and never miss an update.
                </p>
                <form className="newsletter-form">
                  <div className="form-group">
                    <input 
                      type="email" 
                      placeholder="Enter your email address"
                      className="email-input"
                      required
                    />
                    <button type="submit" className="btn btn-primary">
                      Subscribe
                    </button>
                  </div>
                  <p className="privacy-note">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
