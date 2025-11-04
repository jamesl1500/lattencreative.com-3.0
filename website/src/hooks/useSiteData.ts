/**
 * Site Data Hooks
 * React hooks for fetching and caching site data
 *
 * @module hooks/useSiteData
 */
"use client";

import { useState, useEffect } from "react";
import { STATIC_SITE_DATA, type SiteData } from "@/libs/data/static-site";

/**
 * Custom hook to fetch and cache site data
 */
export const useSiteData = () => {
  const [siteData, setSiteData] = useState<SiteData>(STATIC_SITE_DATA);
  const [loading, setLoading] = useState(false); // No loading needed for static data
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Immediately set static data
    setSiteData(STATIC_SITE_DATA);
    setLoading(false);
  }, []);

  return {
    siteData,
    loading,
    error,
    siteName: siteData.siteName,
    siteTagline: siteData.siteTagline,
  };
};
