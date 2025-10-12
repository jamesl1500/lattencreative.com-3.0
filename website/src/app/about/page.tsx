import type { Metadata } from "next";
import { generatePageMetadata } from "../../libs/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us",
  description: "Learn more about Latten Creative and our mission to provide exceptional digital solutions for modern businesses.",
  keywords: ["about", "company", "team", "mission"],
  canonicalPath: "/about",
});

export default function About() {
  return (
    <div className="page page-about">
      <div className="page-inner container-fluid">
        <div className="page-hero">
          <h1>About Latten Creative</h1>
          <p>We are a full-service digital agency passionate about helping businesses succeed online.</p>
        </div>
        <div className="page-content">
          <div className="page-section">
            <h2>Our Mission</h2>
            <p>
              At Latten Creative, we believe in the power of digital innovation to transform businesses. 
              Our mission is to provide creative solutions that drive growth and success for our clients.
            </p>
          </div>
          <div className="page-section">
            <h2>Our Team</h2>
            <p>
              Our team consists of experienced designers, developers, and digital marketers who are 
              dedicated to delivering exceptional results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}