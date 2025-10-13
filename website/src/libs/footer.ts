/**
 * Footer
 * Library functions for footer data and links
 * 
 * @module libs/footer
 */

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
const getFooterSections = (): FooterSection[] => {
    return [
        {
            id: 1,
            title: "Services",
            links: [
                { id: 1, name: "Web Design", url: "/services/web-design" },
                { id: 2, name: "Web Development", url: "/services/web-development" },
                { id: 3, name: "SEO Optimization", url: "/services/seo-optimization" },
                { id: 4, name: "Digital Marketing", url: "/services/digital-marketing" },
                { id: 5, name: "E-Commerce Solutions", url: "/services/ecommerce-solutions" },
                { id: 6, name: "Content Creation", url: "/services/content-creation" }
            ]
        },
        {
            id: 2,
            title: "Company",
            links: [
                { id: 7, name: "About Us", url: "/about" },
                { id: 8, name: "Our Team", url: "/about#team" },
                { id: 9, name: "Case Studies", url: "/case-studies" },
                { id: 10, name: "Blog", url: "/blog" },
                { id: 11, name: "Careers", url: "/careers" }
            ]
        },
        {
            id: 3,
            title: "Support",
            links: [
                { id: 12, name: "Contact Us", url: "/contact-us" },
                { id: 13, name: "FAQ", url: "/faq" },
                { id: 14, name: "Help Center", url: "/help" },
                { id: 15, name: "Documentation", url: "/docs" },
                { id: 16, name: "Community", url: "/community" }
            ]
        },
        {
            id: 4,
            title: "Legal",
            links: [
                { id: 17, name: "Privacy Policy", url: "/privacy-policy" },
                { id: 18, name: "Terms of Service", url: "/terms" },
                { id: 19, name: "Cookie Policy", url: "/cookies" },
                { id: 20, name: "GDPR Compliance", url: "/gdpr" }
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
            url: "https://facebook.com/lattencreative",
            icon: "facebook"
        },
        {
            id: 2,
            name: "Twitter",
            url: "https://twitter.com/lattencreative",
            icon: "twitter"
        },
        {
            id: 3,
            name: "Instagram",
            url: "https://instagram.com/lattencreative",
            icon: "instagram"
        },
        {
            id: 4,
            name: "LinkedIn",
            url: "https://linkedin.com/company/lattencreative",
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
            name: "Dribbble",
            url: "https://dribbble.com/lattencreative",
            icon: "dribbble"
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
        phone: "+1 (555) 123-4567",
        address: "123 Creative Street, Design City, DC 12345"
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
