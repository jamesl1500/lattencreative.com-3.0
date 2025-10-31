"use client";

import Link from "next/link";
import { use } from "react";
import { BlogPost } from "@/libs/data/blog";
import Post from "@/app/blog/ui/Post";

interface AllPostsProps {
  postsPromise: Promise<BlogPost[]>;
}

export default function AllPosts({ postsPromise }: AllPostsProps) {
  const posts = use(postsPromise);

  return (
    <section className="blog-section blog-section-all-posts">
      <div className="blog-section-inner container">
        <h2>All Articles</h2>
        <div className="blog-posts-grid">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
