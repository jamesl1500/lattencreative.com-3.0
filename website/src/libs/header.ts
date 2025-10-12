/*
 * Navigation Library
 * Provides utility functions for navigation-related tasks.
 */

// Types
const navItems = [];

/**
 * getNavItems
 * Get the main navigation items for the site.
 * 
 * @returns Array of navigation items
 */
const getNavItems = () => {
    // TODO: Fetch from a CMS or config file

    // Return static items for now
    return [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Case Studies", path: "/case-studies" },
    ];
}

/**
 * getCTAItems
 * Get the call-to-action (CTA) items for the site.
 * 
 * @returns Array of CTA items
 */
const getCTAItems = () => {
    // TODO: Fetch from a CMS or config file

    // Return static items for now
    return [
        { name: "Blog", path: "/blog" },
        { name: "Contact Us", path: "/contact-us" },
    ];
}

/**
 * getSiteLogo
 * Get the site logo details.
 * 
 * @returns Object containing logo src, alt text, width, and height
 */
const getSiteLogo = () => {
    // TODO: Fetch from a CMS or config file

    // Return static logo for now
    return {
        src: "/images/logo-lc-black-solid.png",
        alt: "Latten Creative Logo",
        width: 40,
        height: 40,
    };
}

/**
 * getSiteName
 * Get the site name.
 * 
 * @returns Site name as a string
 */
const getSiteName = () => {
    // TODO: Fetch from a CMS or config file

    // Return static site name for now
    return "Latten Creative";
}

export { getNavItems, getCTAItems, getSiteLogo, getSiteName };