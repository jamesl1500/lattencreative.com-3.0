export default function BlogPostsLoading() {
  return (
    <section className="blog-section">
      <div className="blog-section-inner container">
        <div className="loading-skeleton">
          <div className="skeleton-title"></div>
          <div className="blog-posts-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <article key={index} className="blog-post-card skeleton">
                <div className="skeleton-image"></div>
                <div className="skeleton-content">
                  <div className="skeleton-text skeleton-text-small"></div>
                  <div className="skeleton-text skeleton-text-large"></div>
                  <div className="skeleton-text skeleton-text-medium"></div>
                  <div className="skeleton-tags">
                    <div className="skeleton-tag"></div>
                    <div className="skeleton-tag"></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
