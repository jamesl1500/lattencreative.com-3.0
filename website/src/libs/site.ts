/**
 * Site
 * Library functions for site-wide data
 *
 * @module libs/site
 */
import { STATIC_SITE_DATA } from "@/libs/data/static-site";

/**
 * siteName
 * Get the site name
 *
 * @returns Site Name
 */
const siteName = async (): Promise<string> => {
  return STATIC_SITE_DATA.siteName;
};

/**
 * siteTagline
 * Get the site tagline
 *
 * @returns Site Tagline
 */
const siteTagline = async (): Promise<string> => {
  return STATIC_SITE_DATA.siteTagline;
};

/**
 * siteAuthor
 * Get the site author
 *
 * @returns Site Author
 */
const siteAuthor = async (): Promise<string> => {
  return STATIC_SITE_DATA.siteAuthor;
};

/**
 * siteDescription
 * Get the site description
 *
 * @returns Site Description
 */
const siteDescription = async (): Promise<string> => {
  return STATIC_SITE_DATA.siteDescription;
};

/**
 * siteKeywords
 * Get the site keywords
 *
 * @returns Site Keywords
 */
const siteKeywords = async (): Promise<string> => {
  return STATIC_SITE_DATA.siteKeywords;
};

/**
 * siteUrl
 * Get the site URL
 *
 * @returns Site URL
 */
const siteUrl = async (): Promise<string> => {
  return STATIC_SITE_DATA.siteUrl;
};

/**
 * siteLocale
 * Get the site locale
 *
 * @returns Site Locale
 */
const siteLocale = async (): Promise<string> => {
  return STATIC_SITE_DATA.siteLocale;
};

/**
 * siteFavicon
 * Get the site favicon URL
 *
 * @returns Site Favicon URL
 */
const siteFavicon = async (): Promise<string> => {
  return STATIC_SITE_DATA.siteFavicon;
};

export {
  siteName,
  siteTagline,
  siteAuthor,
  siteDescription,
  siteKeywords,
  siteUrl,
  siteLocale,
  siteFavicon,
};
