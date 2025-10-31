import type { Metadata } from "next";
import { Suspense } from "react";
import { blogCategories, getAllBlogPosts } from "../../libs/data/blog";
import { generatePageMetadata } from "../../libs/metadata";
import FeaturedPosts from "./ui/FeaturedPosts";
import AllPosts from "./ui/AllPosts";
import BlogPostsLoading from "./ui/BlogPostsLoading";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata({
    title: "Blog | Latest Insights & Industry Updates",
    description:
      "Stay up-to-date with the latest trends in web design, development, digital marketing, and technology. Expert insights and practical tips from our team.",
    canonicalPath: "/blog",
    keywords: [
      "blog",
      "web design",
      "development",
      "digital marketing",
      "technology",
      "insights",
    ],
  });
}

export default function BlogPage() {
  // Create the promise for blog posts
  const blogPostsPromise = getAllBlogPosts();

  return (
    <div className="page page-blog">
      <div className="page-inner container-fluid">
        {/* Hero Section */}
        <div className="blog-hero">
          <div className="blog-hero-inner container">
            <h1>Our Blog</h1>
            <p className="hero-subtitle">
              Insights, trends, and practical tips from our team of digital
              experts. Stay informed about the latest in web design,
              development, and digital marketing.
            </p>
          </div>
        </div>

        {/* Featured Posts Section with Suspense */}
        <Suspense fallback={<BlogPostsLoading />}>
          <FeaturedPosts postsPromise={blogPostsPromise} />
        </Suspense>

        {/* Categories Filter */}
        <section className="blog-section blog-section-categories">
          <div className="blog-section-inner container">
            <div className="categories-filter">
              <h3>Browse by Category</h3>
              <div className="categories-list">
                {blogCategories.map((category) => (
                  <button
                    key={category}
                    className={`category-pill ${category === "All" ? "active" : ""}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Posts Grid with Suspense */}
        <Suspense fallback={<BlogPostsLoading />}>
          <AllPosts postsPromise={blogPostsPromise} />
        </Suspense>

        {/* Newsletter Signup CTA */}
        <section className="blog-section blog-section-newsletter">
          <div className="blog-section-inner container">
            <div className="newsletter-cta">
              <div className="newsletter-content">
                <h2>Stay Updated</h2>
                <p>
                  Get the latest insights delivered directly to your inbox. Join
                  our community of digital professionals and never miss an
                  update.
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
