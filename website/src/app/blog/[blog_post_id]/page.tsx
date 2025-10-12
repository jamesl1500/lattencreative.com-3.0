import type { Metadata } from "next";
import { generateBlogPostMetadata } from "../../../libs/metadata";

// This would typically come from your CMS or API
interface BlogPostPageProps {
  params: {
    blog_post_id: string;
  };
}

// Example function to get blog post data - replace with your actual data source
function getBlogPostData(postId: string) {
  const posts = {
    'getting-started-with-nextjs': {
      title: 'Getting Started with Next.js',
      description: 'Learn the fundamentals of Next.js and how to build modern React applications with this comprehensive guide.',
      content: 'Next.js is a powerful React framework that makes building web applications easier...',
      publishedDate: '2025-01-15',
      tags: ['Next.js', 'React', 'Web Development', 'Tutorial']
    },
    'seo-best-practices-2025': {
      title: 'SEO Best Practices for 2025',
      description: 'Discover the latest SEO strategies and techniques to improve your website\'s search engine rankings in 2025.',
      content: 'Search engine optimization continues to evolve rapidly...',
      publishedDate: '2025-02-01',
      tags: ['SEO', 'Digital Marketing', 'Best Practices']
    }
  };

  return posts[postId as keyof typeof posts] || null;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostData(params.blog_post_id);
  
  if (!post) {
    return generateBlogPostMetadata(
      'Blog Post Not Found',
      'The requested blog post could not be found.',
      params.blog_post_id
    );
  }

  return generateBlogPostMetadata(
    post.title,
    post.description,
    params.blog_post_id,
    post.publishedDate,
    post.tags
  );
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostData(params.blog_post_id);

  if (!post) {
    return (
      <div className="page page-blog-post">
        <div className="page-inner container-fluid">
          <h1>Blog Post Not Found</h1>
          <p>The requested blog post could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page page-blog-post">
      <div className="page-inner container-fluid">
        <div className="page-hero">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="publish-date">Published: {post.publishedDate}</span>
            <div className="tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="blog-content">
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}