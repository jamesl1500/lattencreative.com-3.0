/**
 * Site Data Hooks
 * React hooks for fetching and caching site data
 * 
 * @module hooks/useSiteData
 */
"use client";

import { useState, useEffect } from 'react';
import { fetchFromStrapi } from "@/libs/api";

interface SiteData {
  siteName?: string;
  siteTagline?: string;
  [key: string]: any;
}

/**
 * Custom hook to fetch and cache site data
 */
export const useSiteData = () => {
  const [siteData, setSiteData] = useState<SiteData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchSiteData = async () => {
      try {
        setLoading(true);
        const response = await fetchFromStrapi('/site-detail');
        
        if (isMounted && response?.data) {
          setSiteData(response.data);
        }
      } catch (err) {
        if (isMounted) {
          console.error("Error fetching site data:", err);
          setError('Failed to fetch site data');
          // Set fallback data
          setSiteData({
            siteName: 'Latten Creative',
            siteTagline: 'Creative Solutions for Modern Businesses'
          });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchSiteData();

    // Cleanup function to prevent state updates if component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

  return {
    siteData,
    loading,
    error,
    siteName: siteData.siteName || 'Latten Creative',
    siteTagline: siteData.siteTagline || 'Creative Solutions for Modern Businesses'
  };
};