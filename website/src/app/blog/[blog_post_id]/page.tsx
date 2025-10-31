import type { Metadata } from "next";
import Link from "next/link";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  type BlogPost,
} from "@/libs/data/blog";
import { getImageUrl } from "@/libs/data/services";
import { generateBlogPostMetadata } from "@/libs/metadata";
import SocialShareButtons from "@/components/SocialShareButtons";
import NewsletterForm from "@/components/NewsletterForm";

// This would typically come from your CMS or API
interface BlogPostPageProps {
  params: {
    blog_post_id: string;
  };
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.blog_post_id);

  if (!post) {
    return await generateBlogPostMetadata(
      "Blog Post Not Found",
      "The requested blog post could not be found.",
      params.blog_post_id,
    );
  }

  return await generateBlogPostMetadata(
    post.title,
    post.description,
    params.blog_post_id,
    post.publishedDate,
    Array.isArray(post.tags)
      ? post.tags
      : (post.tags as string).split(",").map((tag) => tag.trim()),
    typeof post.image === "string" ? post.image : post.image?.url,
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.blog_post_id);

  if (!post) {
    return (
      <div className="page page-blog-post">
        <div className="page-inner container-fluid">
          <div className="blog-post-not-found">
            <h1>Blog Post Not Found</h1>
            <p>The requested blog post could not be found.</p>
            <Link href="/blog" className="btn btn-primary">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const relatedPosts = await getRelatedPosts(post.id);

  return (
    <div className="page page-blog-post">
      <div className="page-inner container-fluid">
        {/* Blog Post Hero */}
        <div className="blog-post-hero">
          <div className="blog-post-hero-inner container">
            <div className="breadcrumb">
              <Link href="/blog">Blog</Link>
              <span>/</span>
              <span>{post.title}</span>
            </div>

            <div className="post-category-pill">{post.category}</div>

            <h1>{post.title}</h1>
            <p className="post-description">{post.description}</p>

            <div className="post-meta">
              <div className="post-author">
                {post.author.avatar && (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="author-avatar"
                  />
                )}
                <div className="author-info">
                  <span className="author-name">{post.author.name}</span>
                  <span className="author-title">{post.author.title}</span>
                </div>
              </div>

              <div className="post-details">
                <span className="post-date">
                  {new Date(post.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="post-read-time">{post.readTime} min read</span>
              </div>
            </div>

            {post.image && (
              <div className="post-featured-image">
                <img
                  src={getImageUrl(post.image)}
                  alt={post.title}
                  className="image-fluid"
                />
              </div>
            )}
          </div>
        </div>

        {/* Blog Post Content */}
        <div className="blog-post-content">
          <div className="blog-post-content-inner container">
            <div className="content-main">
              <article className="blog-article">
                <div
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>

              {/* Tags */}
              <div className="post-tags-section">
                <h4>Tags</h4>
                <div className="post-tags">
                  {(Array.isArray(post.tags)
                    ? post.tags
                    : (post.tags as string).split(",")
                  ).map((tag: string) => (
                    <span key={tag} className="tag">
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="post-share-section">
                <h4>Share this article</h4>
                <SocialShareButtons
                  title={post.title}
                  description={post.description}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="blog-section blog-section-related">
            <div className="blog-section-inner container">
              <h2>Related Articles</h2>
              <div className="related-posts-grid">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.id} className="related-post-card">
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="post-link"
                    >
                      <div className="post-image">
                        <img
                          src={
                            relatedPost.image
                              ? getImageUrl(relatedPost.image)
                              : "/images/blog/default-blog.jpg"
                          }
                          alt={relatedPost.title}
                          className="image-fluid"
                        />
                        <div className="post-category">
                          {relatedPost.category}
                        </div>
                      </div>
                      <div className="post-content">
                        <div className="post-meta">
                          <span className="post-date">
                            {new Date(
                              relatedPost.publishedDate,
                            ).toLocaleDateString()}
                          </span>
                          <span className="post-read-time">
                            {relatedPost.readTime} min read
                          </span>
                        </div>
                        <h3>{relatedPost.title}</h3>
                        <p>{relatedPost.description}</p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
