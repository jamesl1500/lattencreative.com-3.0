'use client';

import Link from "next/link";
import { use } from "react";
import { BlogPost } from "@/libs/data/blog";
import Post from "@/app/blog/ui/Post";

interface FeaturedPostsProps {
  postsPromise: Promise<BlogPost[]>;
}

export default function FeaturedPosts({ postsPromise }: FeaturedPostsProps) {
  const posts = use(postsPromise);
  const featuredPosts = posts.filter(post => post.featured);

  if (featuredPosts.length === 0) {
    return null;
  }

  return (
    <section className="blog-section blog-section-featured">
      <div className="blog-section-inner container">
        <h2>Featured Articles</h2>
        <div className="featured-posts-grid">
          {featuredPosts.map((post) => (
            <Post key={ post.id } post={ post } />
          ))}
        </div>
      </div>
    </section>
  );
}
