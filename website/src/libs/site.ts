/**
 * Site
 * Library functions for site-wide data
 * 
 * @module libs/site
 */

/**
 * siteName
 * Get the site name
 * 
 * @returns Site Name
 */
const siteName = () => {
    // TODO: #1 Fetch from a CMS or config file @jamesl1500

    // Return static site name for now
    return "Latten Creative";
};

/**
 * siteTagline
 * Get the site tagline
 * 
 * @returns Site Tagline
 */
const siteTagline = () => {
    // TODO: Fetch from a CMS or config file

    // Return static tagline for now
    return "Creative Solutions for Modern Businesses";
};

/**
 * siteAuthor
 * Get the site author
 * 
 * @returns Site Author
 */
const siteAuthor = () => {
    return "Latten Creative";
};

/**
 * siteDescription
 * Get the site description
 * 
 * @returns Site Description
 */
const siteDescription = () => {
    return "Latten Creative is a full-service digital agency specializing in web design, development, and digital marketing to help businesses thrive online.";
};

/**
 * siteKeywords
 * Get the site keywords
 * 
 * @returns Site Keywords
 */
const siteKeywords = () => {
    return "web design, web development, digital marketing, SEO, branding, Latten Creative";
};

/**
 * siteUrl
 * Get the site URL
 * 
 * @returns Site URL
 */
const siteUrl = () => {
    return "https://www.lattencreative.com";
};

/**
 * siteLocale
 * Get the site locale
 * 
 * @returns Site Locale
 */
const siteLocale = () => {
    return "en_US";
};

/**
 * siteFavicon
 * Get the site favicon URL
 * 
 * @returns Site Favicon URL
 */
const siteFavicon = () => {
    return "/favicon.ico";
}

export { siteName, siteTagline, siteAuthor, siteDescription, siteKeywords, siteUrl, siteLocale, siteFavicon };