import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/libs/data/blog";
import { getImageUrl } from "@/libs/data/services";

interface PostProps {
  post: BlogPost;
}

export default function Post({ post }: PostProps) {
  // Determine post tyle
  var postType = "";

  if (post.featured === true) {
    postType = "featured-post-card";
  } else {
    postType = "blog-post-card";
  }

  console.log(post);
  // Craft image URL
  const imageUrl = post.image
    ? getImageUrl(post.image)
    : "/images/blog/default-blog.jpg";

  return (
    <article key={post.id} className={postType}>
      <Link href={`/blog/${post.slug}`} className="post-link">
        <div className="post-image">
          <img src={imageUrl} alt={post.title} className="image-fluid" />
          <div className="post-category">{post.category}</div>
        </div>
        <div className="post-content">
          <div className="post-meta">
            <span className="post-date">
              {new Date(post.publishedDate).toLocaleDateString()}
            </span>
            <span className="post-read-time">{post.readTime} min read</span>
          </div>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
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
          <div className="post-author">
            <div className="author-info">
              <span className="author-name">{post.author.name}</span>
              <span className="author-title">{post.author.title}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
