/**
 * Static Site Data
 * Complete site information without API dependencies
 */

export interface SiteData {
  siteName: string;
  siteTagline: string;
  siteAuthor: string;
  siteDescription: string;
  siteKeywords: string;
  siteUrl: string;
  siteLocale: string;
  siteFavicon: string;
  logo: string;
  footerText: string;
  contactEmail: string;
  contactPhone: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
  businessInfo: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}

export const STATIC_SITE_DATA: SiteData = {
  siteName: "Latten Creative",
  siteTagline: "Creative Solutions for Modern Businesses",
  siteAuthor: "Latten Creative",
  siteDescription: "Latten Creative is a full-service digital agency specializing in web design, development, and digital marketing to help businesses thrive online.",
  siteKeywords: "web design, web development, digital marketing, SEO, branding, Latten Creative",
  siteUrl: "https://www.lattencreative.com",
  siteLocale: "en_US",
  siteFavicon: "/favicon.ico",
  logo: "/images/logo.png",
  footerText: "© 2024 Latten Creative. All rights reserved.",
  contactEmail: "hello@lattencreative.com",
  contactPhone: "+1 (555) 123-4567",
  socialLinks: {
    linkedin: "https://linkedin.com/company/latten-creative",
    twitter: "https://twitter.com/lattencreative",
    instagram: "https://instagram.com/lattencreative",
    facebook: "https://facebook.com/lattencreative",
    github: "https://github.com/lattencreative"
  },
  businessInfo: {
    address: "123 Creative Street",
    city: "San Francisco",
    state: "CA",
    zipCode: "94102",
    country: "United States"
  }
};

// Helper functions
export const getSiteData = (): SiteData => {
  return STATIC_SITE_DATA;
};

export const getSiteDataField = (field: keyof SiteData): any => {
  return STATIC_SITE_DATA[field];
};