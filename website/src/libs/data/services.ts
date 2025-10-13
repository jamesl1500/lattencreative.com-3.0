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
            icon: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364",
            url: "/services/web-design",
            category: "Design"
        },
        {
            id: 2,
            name: "Web Development",
            description: "Building responsive and high-performance web applications.",
            icon: "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
            url: "/services/web-development",
            category: "Development"
        },
        {
            id: 3,
            name: "SEO Optimization",
            description: "Improving your website's visibility on search engines.",
            icon: "https://images.unsplash.com/photo-1686061594183-8c864f508b00?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
            url: "/services/seo-optimization",
            category: "Marketing"
        },
        {
            id: 4,
            name: "Digital Marketing",
            description: "Comprehensive digital marketing strategies to grow your business.",
            icon: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
            url: "/services/digital-marketing",
            category: "Marketing"
        },
        {
            id: 5,
            name: "E-Commerce Solutions",
            description: "Building robust e-commerce platforms to boost your sales.",
            icon: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
            url: "/services/ecommerce-solutions",
            category: "Development"
        },
        {
            id: 6,
            name: "Content Creation",
            description: "Producing engaging content to attract and retain your audience.",
            icon: "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
            url: "/services/content-creation",
            category: "Marketing"
        }
    ];
};

export { getServicesData };