/**
 * Blog Data Module
 * This module contains data structures and functions related to blog posts.
 *
 * @module data/blog
 */
import { 
  STATIC_BLOG_POSTS,
  getAllBlogPosts as getStaticBlogPosts,
  getBlogPostBySlug as getStaticBlogPostBySlug,
  getBlogPostsByCategory as getStaticBlogPostsByCategory,
  getRelatedPosts as getStaticRelatedPosts,
  getBlogPostPaths as getStaticBlogPostPaths,
  getFeaturedBlogPosts as getStaticFeaturedBlogPosts,
  blogCategories as staticBlogCategories,
  type BlogPost
} from "./static-blog";

// Re-export types for backward compatibility
export type { BlogPost };

/**
 * Blog Categories
 * This is a static list of blog categories. Adjust as needed.
 */
export const blogCategories = staticBlogCategories;

/**
 * FetchBlogPostsFromAPI
 * Now returns static data instead of API calls
 *
 * @return Promise resolving to an array of BlogPost
 */
export const fetchBlogPostsFromAPI = async (): Promise<BlogPost[]> => {
  return getStaticBlogPosts();
};

/**
 * FetchBlogPostFromApi
 * This function will fetch a single blog post from static data
 *
 * @return Promise resolving to an array
 */
export const fetchBlogPostFromAPI = async ({
  slug,
}: {
  slug: string;
}): Promise<BlogPost[]> => {
  const post = await getStaticBlogPostBySlug(slug);
  return post ? [post] : [];
};

/**
 * Get all blog posts
 * @returns Promise resolving to array of all blog posts
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  return getStaticBlogPosts();
}

/**
 * Get a blog post by its slug.
 * @param slug The slug of the blog post
 * @returns Promise resolving to the blog post if found, null otherwise
 */
export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  return getStaticBlogPostBySlug(slug);
}

/**
 * Get blog posts by category
 * @param category The category to filter by
 * @returns Promise resolving to array of blog posts in the specified category
 */
export async function getBlogPostsByCategory(
  category: string,
): Promise<BlogPost[]> {
  return getStaticBlogPostsByCategory(category);
}

/**
 * Get related posts based on category and tags
 * @param currentPostId The ID of the current blog post
 * @param limit The maximum number of related posts to return
 * @returns Promise resolving to array of related blog posts
 */
export async function getRelatedPosts(
  currentPostId: string,
  limit: number = 3,
): Promise<BlogPost[]> {
  return getStaticRelatedPosts(currentPostId, limit);
}

/**
 * Generate static paths for blog posts (useful for static generation)
 * @returns Promise resolving to array of blog post slugs
 */
export async function getBlogPostPaths(): Promise<string[]> {
  return getStaticBlogPostPaths();
}

/**
 * Get featured blog posts
 * @param limit The maximum number of featured posts to return
 * @returns Promise resolving to array of featured blog posts
 */
export async function getFeaturedBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  return getStaticFeaturedBlogPosts(limit);
}
