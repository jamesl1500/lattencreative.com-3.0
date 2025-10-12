/**
 * Services from the data layer.
 * These functions provide data for the services section of the website.
 * 
 * @module data/services
 */

// Types
interface Service {
    id: number;
    name: string;
    description: string;
    icon: string; // URL or icon name
    url: string; // Link to service page
    category: string; // e.g., "Web Design", "SEO", etc.
}

/**
 * getServicesData
 * Get the services data
 * 
 * @returns Array of services
 */
const getServicesData = (): Service[] => {
    // TODO: Fetch from a CMS or database

    // In a real application, this data might come from a CMS or database
    return [
        {
            id: 1,
            name: "Web Design",
            description: "Creating visually appealing and user-friendly websites.",
            icon: "/icons/web-design.svg",
            url: "/services/web-design",
            category: "Design"
        },
        {
            id: 2,
            name: "Web Development",
            description: "Building responsive and high-performance web applications.",
            icon: "/icons/web-development.svg",
            url: "/services/web-development",
            category: "Development"
        },
        {
            id: 3,
            name: "SEO Optimization",
            description: "Improving your website's visibility on search engines.",
            icon: "/icons/seo.svg",
            url: "/services/seo-optimization",
            category: "Marketing"
        },
        {
            id: 4,
            name: "Digital Marketing",
            description: "Comprehensive digital marketing strategies to grow your business.",
            icon: "/icons/digital-marketing.svg",
            url: "/services/digital-marketing",
            category: "Marketing"
        },1
    ];
};

export { getServicesData };