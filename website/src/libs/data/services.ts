/**
 * Services from the data layer.
 * These functions provide data for the services section of the website.
 *
 * @module data/services
 */
import { fetchFromStrapi } from "../api";

// Types
interface Service {
  id: number;
  name: string;
  description: string;
  tagline: string;
  slug: string; // Link to service page
  category: string; // e.g., "Web Design", "SEO", etc.
  image: string;
  pricing?: string[];
  features?: string[];
  testimonials?: string[];
  processSteps?: string[];
}

/**
 * fetchServiceById
 * Fetch a single service by its slug from Strapi
 *
 * @param serviceSlug - The slug of the service to fetch
 * @returns The service data
 */
const fetchServiceById = async (
  serviceSlug: string,
): Promise<Service | null> => {
  const data = await fetchFromStrapi(
    `/services?filters[slug][$eq]=${serviceSlug}&populate=*`,
  );
  return data?.data?.[0] || null;
};

/**
 * getServicesData
 * Get the services data
 *
 * @returns Array of services
 */
const getServicesData = async (): Promise<Service[]> => {
  // TODO: Fetch from a CMS or database
  const data = await fetchFromStrapi("/services?populate=*");

  if (data && data.data.length > 0) {
    return data.data;
  }

  // In a real application, this data might come from a CMS or database
  return [
    {
      id: 1,
      name: "Web Design",
      description: "Creating visually appealing and user-friendly websites.",
      tagline: "Stunning designs that captivate your audience.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364",
      slug: "/services/web-design",
      category: "Design",
    },
    {
      id: 2,
      name: "Web Development",
      description: "Building responsive and high-performance web applications.",
      tagline: "Robust solutions for modern web challenges.",
      image:
        "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      slug: "/services/web-development",
      category: "Development",
    },
    {
      id: 3,
      name: "SEO Optimization",
      description: "Improving your website's visibility on search engines.",
      tagline: "Boost your rankings and drive organic traffic.",
      image:
        "https://images.unsplash.com/photo-1686061594183-8c864f508b00?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      slug: "/services/seo-optimization",
      category: "Marketing",
    },
    {
      id: 4,
      name: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your business.",
      tagline: "Engage your audience with targeted campaigns.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
      slug: "/services/digital-marketing",
      category: "Marketing",
    },
    {
      id: 5,
      name: "E-Commerce Solutions",
      description: "Building robust e-commerce platforms to boost your sales.",
      tagline: "Seamless shopping experiences for your customers.",
      image:
        "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1287",
      slug: "/services/ecommerce-solutions",
      category: "Development",
    },
    {
      id: 6,
      name: "Content Creation",
      description:
        "Producing engaging content to attract and retain your audience.",
      tagline: "Compelling content that tells your brand story.",
      image:
        "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
      slug: "/services/content-creation",
      category: "Marketing",
    },
  ];
};

export { getServicesData, fetchServiceById };
