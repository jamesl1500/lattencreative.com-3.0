/**
 * Metadata Utilities
 * Helper functions for generating page metadata
 * 
 * @module libs/metadata
 */

import type { Metadata } from "next";
import { 
  siteName, 
  siteTagline, 
  siteAuthor, 
  siteDescription, 
  siteKeywords, 
  siteUrl, 
  siteLocale 
} from "./site";

interface PageMetadataOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalPath?: string;
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * generatePageMetadata
 * Generate metadata object for a specific page
 * 
 * @param options - Page-specific metadata options
 * @returns Metadata object for the page
 */
export function generatePageMetadata(options: PageMetadataOptions = {}): Metadata {
  const {
    title,
    description = siteDescription(),
    keywords = [],
    canonicalPath = "/",
    ogImage,
    noIndex = false,
  } = options;

  // Combine site keywords with page-specific keywords
  const allKeywords = [
    ...siteKeywords().split(", "),
    ...keywords,
  ].join(", ");

  // Generate full title
  const fullTitle = title ? `${title} | ${siteName()}` : siteName();
  
  // Generate canonical URL
  const canonicalUrl = new URL(canonicalPath, siteUrl()).toString();

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: siteAuthor() }],
    creator: siteAuthor(),
    publisher: siteAuthor(),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: siteLocale(),
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName: siteName(),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: `@${siteAuthor()}`,
    },
  };

  // Add Open Graph image if provided
  if (ogImage) {
    metadata.openGraph = {
      ...metadata.openGraph,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    };
    
    metadata.twitter = {
      ...metadata.twitter,
      images: [ogImage],
    };
  }

  // Add noindex if specified
  if (noIndex) {
    metadata.robots = {
      index: false,
      follow: false,
    };
  }

  return metadata;
}

/**
 * generateBlogPostMetadata
 * Generate metadata specifically for blog posts
 * 
 * @param title - Blog post title
 * @param description - Blog post description
 * @param slug - Blog post slug
 * @param publishedDate - Publication date
 * @param tags - Blog post tags
 * @param ogImage - Open Graph image URL
 * @returns Metadata object for the blog post
 */
export function generateBlogPostMetadata(
  title: string,
  description: string,
  slug: string,
  publishedDate?: string,
  tags: string[] = [],
  ogImage?: string
): Metadata {
  const canonicalPath = `/blog/${slug}`;
  const keywords = [...tags, "blog", "article"];

  const metadata = generatePageMetadata({
    title,
    description,
    keywords,
    canonicalPath,
    ogImage,
  });

  // Override Open Graph type for articles
  metadata.openGraph = {
    ...metadata.openGraph,
    type: "article",
    publishedTime: publishedDate,
    tags,
  };

  return metadata;
}

/**
 * generateServiceMetadata
 * Generate metadata specifically for service pages
 * 
 * @param serviceName - Service name
 * @param description - Service description
 * @param slug - Service slug
 * @param ogImage - Open Graph image URL
 * @returns Metadata object for the service page
 */
export function generateServiceMetadata(
  serviceName: string,
  description: string,
  slug: string,
  ogImage?: string
): Metadata {
  const canonicalPath = `/services/${slug}`;
  const keywords = [serviceName.toLowerCase(), "services", "digital agency"];

  return generatePageMetadata({
    title: serviceName,
    description,
    keywords,
    canonicalPath,
    ogImage,
  });
}