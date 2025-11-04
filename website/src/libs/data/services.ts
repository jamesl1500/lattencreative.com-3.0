/**
 * Services from the data layer.
 * These functions provide data for the services section of the website.
 *
 * @module data/services
 */
import { 
  STATIC_SERVICES, 
  getServicesData as getStaticServicesData,
  fetchServiceById as fetchStaticServiceById,
  getImageUrl as getStaticImageUrl,
  type Service, 
  type ProcessStep, 
  type Pricing, 
  type Testimonial, 
  type StrapiImage 
} from "./static-services";

// Re-export types for backward compatibility
export type { Service, ProcessStep, Pricing, Testimonial, StrapiImage };

// Helper function to get image URL (now simplified)
export const getImageUrl = getStaticImageUrl;

/**
 * fetchServiceById
 * Fetch a single service by its slug from static data
 *
 * @param serviceSlug - The slug of the service to fetch
 * @returns The service data
 */
export const fetchServiceById = fetchStaticServiceById;

/**
 * getServicesData
 * Get the services data from static content
 *
 * @returns Array of services
 */
export const getServicesData = getStaticServicesData;
