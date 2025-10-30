/**
 * Footer
 * Library functions for footer data and links
 * 
 * @module libs/footer
 */

import { getServicesData } from "./data/services";

// Types
interface FooterLink {
    id: number;
    name: string;
    url: string;
    external?: boolean;
}

interface FooterSection {
    id: number;
    title: string;
    links: FooterLink[];
}

interface SocialMediaLink {
    id: number;
    name: string;
    url: string;
    icon: string; // CSS class or icon identifier
    external?: boolean;
}

interface ContactInfo {
    email: string;
    phone: string;
    address: string;
}

/**
 * getFooterSections
 * Get the footer navigation sections
 * 
 * @returns Array of footer sections with links
 */
const getFooterSections = async (): Promise<FooterSection[]> => {
    // Fetch services
    const services = await getServicesData();
    
    return [
        {
            id: 2,
            title: "Company",
            links: [
                { id: 7, name: "About Us", url: "/about" },
                { id: 8, name: "Our Team", url: "/about#team" },
                { id: 9, name: "Case Studies", url: "/case-studies" },
                { id: 10, name: "Blog", url: "/blog" },
            ]
        },
        {
            id: 3,
            title: "Support",
            links: [
                { id: 12, name: "Contact Us", url: "/contact-us" },
            ]
        },
        {
            id: 4,
            title: "Legal",
            links: [
                { id: 17, name: "Privacy Policy", url: "/privacy-policy" },
                { id: 18, name: "Terms of Service", url: "/terms" },
            ]
        }
    ];
};

/**
 * getSocialMediaLinks
 * Get social media links and icons
 * 
 * @returns Array of social media links
 */
const getSocialMediaLinks = (): SocialMediaLink[] => {
    return [
        {
            id: 1,
            name: "Facebook",
            url: "https://www.facebook.com/profile.php?id=100094320792860",
            icon: "facebook",
            external: true
        },
        {
            id: 2,
            name: "Twitter",
            url: "https://x.com/latten_creative",
            icon: "twitter"
        },
        {
            id: 4,
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/latten-creative-llc/",
            icon: "linkedin"
        },
        {
            id: 5,
            name: "YouTube",
            url: "https://youtube.com/@lattencreative",
            icon: "youtube"
        },
        {
            id: 6,
            name: "Github",
            url: "https://github.com/Latten-Creative-LLC",
            icon: "github"
        }
    ];
};

/**
 * getContactInfo
 * Get contact information for the footer
 * 
 * @returns Contact information object
 */
const getContactInfo = (): ContactInfo => {
    return {
        email: "hello@lattencreative.com",
        phone: "+1 (440) 687-5983",
        address: "Lorain, Ohio 44053"
    };
};

/**
 * getFooterCopyright
 * Get copyright text for the footer
 * 
 * @returns Copyright text
 */
const getFooterCopyright = (): string => {
    const currentYear = new Date().getFullYear();
    return `© ${currentYear} Latten Creative LLC. All rights reserved.`;
};

/**
 * getFooterDescription
 * Get footer description/tagline
 * 
 * @returns Footer description
 */
const getFooterDescription = (): string => {
    return "Empowering businesses with innovative digital solutions. From stunning web designs to comprehensive marketing strategies, we help you succeed online.";
};

export { 
    getFooterSections, 
    getSocialMediaLinks, 
    getContactInfo, 
    getFooterCopyright, 
    getFooterDescription 
};
