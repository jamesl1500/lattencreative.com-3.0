import Image from "next/image";
import type { Metadata } from "next";
import { generatePageMetadata } from "../libs/metadata";
import { siteTagline } from "../libs/site";
import { getServicesData } from "../libs/data/services";

export const metadata: Metadata = generatePageMetadata({
  title: "Home",
  description: `${siteTagline()} - Discover our comprehensive digital solutions designed to elevate your business presence online.`,
  keywords: ["homepage", "digital agency", "creative solutions"],
  canonicalPath: "/",
});

export default function Home() {
  // TODO: Fetch services data 
  const services = getServicesData();

  return (
    <div className="page page-home">
      <div className="page-inner container-fluid">
        <div className="page-hero">
          <div className="page-hero-inner container">
            <h2>Welcome to Latten Creative LLC</h2>
            <p>We are your partner in digital innovation. Specializing in web design, development, and digital marketing.</p>
          </div>
        </div>
        <div className="page-content">
          <div className="page-section container-fluid page-home-intro-image">
            <Image
              src="/images/annie-spratt-OjmhUpWfXyg-unsplash.jpg"
              alt="Intro Image"
              className="image-fluid"
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
            />
          </div>
          <div className="page-section page-section-services">
            <div className="page-section-inner container">
              <div className="page-section-title">
                <h2>Our Services</h2>
                <p>Explore our range of digital services designed to help your business grow.</p>
              </div>
              <div className="page-section-content">
                {
                  services.map((service) => (
                    <div key={service.id} className="service-card">
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}