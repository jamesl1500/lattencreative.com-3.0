/**
 * Blog Data Module
 * This module contains data structures and functions related to blog posts.
 * 
 * @module data/blog
 */
import { fetchFromStrapi } from "../api";

/**
 * Blog post data structure
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  publishedDate: string;
  author: {
    name: string;
    title: string;
    avatar?: string;
  };
  category: string;
  tags: string[] | string;
  readTime: number; // in minutes
  featured: boolean;
  image?: {
    url: string;
    formats?: any;
  } | string;
}

/**
 * Blog post data cache
 * This will store the fetched blog posts
 */
let blogPostsCache: BlogPost[] = [];

/**
 * Singular blog post
 * This will store the singular blog post
 */
let blogPost: BlogPost[] = [];

/**
 * Blog Categories
 * This is a static list of blog categories. Adjust as needed.
 */
export const blogCategories = [
  "All",
  "Design Trends",
  "Development", 
  "Marketing",
  "Branding",
  "Design"
];

/**
 * FetchBlogPostsFromAPI
 * This function can be implemented to fetch blog posts from an external API or CMS.
 * 
 * @return Promise resolving to an array of BlogPost
 */
export const fetchBlogPostsFromAPI = async (): Promise<BlogPost[]> => {
  try {
    // Try to fetch from the API first
    const data = await fetchFromStrapi("/blog-posts?populate=*");

    if(!data.data)
    {
        console.warn("Error: No blog posts returned");
        return blogPostsCache;
    }

    if (Array.isArray(data.data) && data.data.length > 0) {
      // Update cache and return API data
      blogPostsCache = data.data as BlogPost[];
      return blogPostsCache;
    }
  } catch (error) {
    console.warn("API not available, using dummy data:", error);
  }
  
  return blogPostsCache;
}

/**
 * FetchBlogPostFromApi
 * This function will fetch a single blog post from the API
 * 
 * @return Promise resolving to an array
 */
export const fetchBlogPostFromAPI = async ({ slug }: { slug: string }): Promise<BlogPost[]> => {
    try {
        const data = await fetchFromStrapi(`/blog-posts?slug=${slug}&populate=*`);
        if(!data.data || data.data.length === 0)
        {
            console.warn("Error: No blog post returned");
            return blogPost;
        }

        blogPost = data.data as BlogPost[];
        return blogPost;
    }catch (error){
        console.warn("API not available, returning nothing", error);
    }

    return blogPost;
}

/**
 * Get all blog posts
 * @returns Promise resolving to array of all blog posts
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return await fetchBlogPostsFromAPI();
}

/**
 * Get a blog post by its slug.
 * @param slug The slug of the blog post
 * @returns Promise resolving to the blog post if found, null otherwise
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await fetchBlogPostFromAPI({ slug });
  return posts.length > 0 ? posts[0] : null;
}

/**
 * Get blog posts by category
 * @param category The category to filter by
 * @returns Promise resolving to array of blog posts in the specified category
 */
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await fetchBlogPostsFromAPI();
  if (category === "All") return posts;
  return posts.filter((post: BlogPost) => post.category === category);
}

/**
 * Get related posts based on category and tags
 * @param currentPostId The ID of the current blog post
 * @param limit The maximum number of related posts to return
 * @returns Promise resolving to array of related blog posts
 */
export async function getRelatedPosts(currentPostId: string, limit: number = 3): Promise<BlogPost[]> {
  const posts = await fetchBlogPostsFromAPI();
  const currentPost = posts.find((post: BlogPost) => post.id === currentPostId);
  if (!currentPost) return [];
  
  return posts
    .filter((post: BlogPost) => {
      const postTags = Array.isArray(post.tags) ? post.tags : (post.tags as string).split(',').map(tag => tag.trim());
      const currentPostTags = Array.isArray(currentPost.tags) ? currentPost.tags : (currentPost.tags as string).split(',').map(tag => tag.trim());
      
      return post.id !== currentPostId && 
        (post.category === currentPost.category || 
         postTags.some((tag: string) => currentPostTags.includes(tag)));
    })
    .slice(0, limit);
}

/**
 * Generate static paths for blog posts (useful for static generation)
 * @returns Promise resolving to array of blog post slugs
 */
export async function getBlogPostPaths(): Promise<string[]> {
  const posts = await fetchBlogPostsFromAPI();
  return posts.map((post: BlogPost) => post.slug);
}
