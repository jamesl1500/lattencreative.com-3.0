/**
 * API utility functions for interacting with the Strapi backend.
 *
 * @module libs/api
 */
import axios from "axios";

// Base URL of the Strapi API, set in environment variables
const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "";

// Strapi API authentication token, set in environment variables
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || "";

// Create an Axios instance with default configuration
const apiClient = axios.create({
  baseURL: STRAPI_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(STRAPI_API_TOKEN && { Authorization: `Bearer ${STRAPI_API_TOKEN}` }),
  },
});

/**
 * fetchFromStrapi
 * Generic function to fetch data from a specified Strapi endpoint.
 *
 * @param endpoint - The Strapi API endpoint (e.g., "/case-studies")
 * @param params - Optional query parameters
 * @returns The data from the Strapi response
 */
export const fetchFromStrapi = async (endpoint: string, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching data from Strapi endpoint ${endpoint}:`,
      error,
    );
    throw error;
  }
};
