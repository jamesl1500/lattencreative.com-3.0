/**
 * Site
 * Library functions for site-wide data
 *
 * @module libs/site
 */
import { fetchFromStrapi } from "@/libs/api";

/**
 * Import site data from strapi
 *
 * @returns Site Data
 */
const fetchSiteData = async (key: string) => {
  try {
    const response = await fetchFromStrapi("/site-detail?populate=*");

    if (response && response.data) {
      return response.data[key];
    }

    return "false";
  } catch (error) {
    console.error("Error fetching site data:", error);
    return "false";
  }
};

/**
 * siteName
 * Get the site name
 *
 * @returns Site Name
 */
const siteName = async () => {
  try {
    const name = await fetchSiteData("siteName");
    return name !== "false" ? name : "Latten Creative";
  } catch (error) {
    console.error("Error fetching site name:", error);
    return "Latten Creative"; // Fallback
  }
};

/**
 * siteTagline
 * Get the site tagline
 *
 * @returns Site Tagline
 */
const siteTagline = async () => {
  try {
    const tagline = await fetchSiteData("siteTagline");
    return tagline !== "false"
      ? tagline
      : "Creative Solutions for Modern Businesses";
  } catch (error) {
    console.error("Error fetching site tagline:", error);
    return "Creative Solutions for Modern Businesses"; // Fallback
  }
};

/**
 * siteAuthor
 * Get the site author
 *
 * @returns Site Author
 */
const siteAuthor = async () => {
  try {
    const author = await fetchSiteData("siteAuthor");
    return author !== "false" ? author : "Latten Creative";
  } catch (error) {
    console.error("Error fetching site author:", error);
    return "Latten Creative"; // Fallback
  }
};

/**
 * siteDescription
 * Get the site description
 *
 * @returns Site Description
 */
const siteDescription = async () => {
  try {
    const description = await fetchSiteData("siteDescription");
    return description !== "false"
      ? description
      : "Latten Creative is a full-service digital agency specializing in web design, development, and digital marketing to help businesses thrive online.";
  } catch (error) {
    console.error("Error fetching site description:", error);
    return "Latten Creative is a full-service digital agency specializing in web design, development, and digital marketing to help businesses thrive online."; // Fallback
  }
};

/**
 * siteKeywords
 * Get the site keywords
 *
 * @returns Site Keywords
 */
const siteKeywords = async () => {
  try {
    const keywords = await fetchSiteData("siteKeywords");
    return keywords !== "false"
      ? keywords
      : "web design, web development, digital marketing, SEO, branding, Latten Creative";
  } catch (error) {
    console.error("Error fetching site keywords:", error);
    return "web design, web development, digital marketing, SEO, branding, Latten Creative"; // Fallback
  }
};

/**
 * siteUrl
 * Get the site URL
 *
 * @returns Site URL
 */
const siteUrl = async () => {
  try {
    const url = await fetchSiteData("siteUrl");
    return url !== "false" ? url : "https://www.lattencreative.com";
  } catch (error) {
    console.error("Error fetching site URL:", error);
    return "https://www.lattencreative.com"; // Fallback
  }
};

/**
 * siteLocale
 * Get the site locale
 *
 * @returns Site Locale
 */
const siteLocale = async () => {
  try {
    const locale = await fetchSiteData("siteLocale");
    return locale !== "false" ? locale : "en_US";
  } catch (error) {
    console.error("Error fetching site locale:", error);
    return "en_US"; // Fallback
  }
};

/**
 * siteFavicon
 * Get the site favicon URL
 *
 * @returns Site Favicon URL
 */
const siteFavicon = async () => {
  try {
    const favicon = await fetchSiteData("siteFavicon");
    if (favicon !== "false") {
      const fav = process.env.NEXT_PUBLIC_STRAPI_API_URL + favicon.url;
      return fav;
    }

    return "/favicon.ico";
  } catch (error) {
    console.error("Error fetching site favicon:", error);
    return "/favicon.ico"; // Fallback
  }
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
