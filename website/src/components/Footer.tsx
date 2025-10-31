/**
 * Footer Component
 * Main footer component for the website
 */

import Image from "next/image";
import Link from "next/link";
import { siteName, siteUrl } from "../libs/site";
import { 
    getFooterSections, 
    getSocialMediaLinks, 
    getContactInfo, 
    getFooterCopyright, 
    getFooterDescription 
} from "../libs/footer";

// Social Media Icon Component
const SocialIcon = ({ icon, name }: { icon: string; name: string }) => {
    const getIconPath = (iconName: string) => {
        const icons: { [key: string]: string } = {
            github: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92a6.32 6.32 0 01-.75 1..02c-.51-.42-1..515-1..42-3..03-1..42z",
            facebook: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
            twitter: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
            instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
            linkedin: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
            youtube: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
        };
        return icons[iconName] || "";
    };

    return (
        <svg 
            className="social-icon" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            aria-label={name}
        >
            <path d={getIconPath(icon)} />
        </svg>
    );
};

export default async function Footer() {
    const footerSections = await getFooterSections();
    const socialLinks = await getSocialMediaLinks();
    const contactInfo = await getContactInfo();
    const copyright = await getFooterCopyright();
    const description = await getFooterDescription();

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="footer-inner container">
                    <div className="footer-content">
                        {/* Brand Section */}
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <Link href="/" className="footer-logo-link">
                                    <Image
                                        src="/images/logo-lc-black-solid.png"
                                        alt={`${siteName()} Logo`}
                                        width={40}
                                        height={40}
                                        className="footer-logo-image"
                                    />
                                    <span className="footer-logo-text">{siteName()}</span>
                                </Link>
                            </div>
                            <div className="footer-description">
                                <p>{description}</p>
                            </div>
                            <div className="footer-contact-info">
                                <div className="contact-item">
                                    <span className="contact-label">Email:</span>
                                    <a href={`mailto:${contactInfo.email}`} className="contact-link">
                                        {contactInfo.email}
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-label">Phone:</span>
                                    <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="contact-link">
                                        {contactInfo.phone}
                                    </a>
                                </div>
                                <div className="contact-item">
                                    <span className="contact-label">Address:</span>
                                    <span className="contact-text">{contactInfo.address}</span>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Sections */}
                        <div className="footer-nav-sections">
                            {await footerSections.map((section) => (
                                <div key={section.id} className="footer-nav-section">
                                    <h3 className="footer-nav-title">{section.title}</h3>
                                    <ul className="footer-nav-list">
                                        {section.links.map((link) => (
                                            <li key={link.id} className="footer-nav-item">
                                                {link.external ? (
                                                    <a 
                                                        href={link.url} 
                                                        className="footer-nav-link"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {link.name}
                                                    </a>
                                                ) : (
                                                    <Link href={link.url} className="footer-nav-link">
                                                        {link.name}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Media & Newsletter */}
                    <div className="footer-social-section">
                        <div className="footer-social">
                            <h3 className="footer-social-title">Follow Us</h3>
                            <div className="footer-social-links">
                                {socialLinks.map((social) => (
                                    <Link
                                        key={social.id}
                                        href={social.url}
                                        className="footer-social-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Follow us on ${social.name}`}
                                    >
                                        <SocialIcon icon={social.icon} name={social.name} />
                                        <span className="sr-only">{social.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        
                        <div className="footer-newsletter">
                            <h3 className="footer-newsletter-title">Stay Updated</h3>
                            <p className="footer-newsletter-text">
                                Subscribe to our newsletter for the latest updates and insights.
                            </p>
                            <form className="footer-newsletter-form">
                                <div className="newsletter-input-group">
                                    <input
                                        id="newsletter-email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="newsletter-input"
                                        required
                                    />
                                    <button type="submit" className="newsletter-button">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="footer-bottom-inner container">
                    <div className="footer-bottom-content">
                        <div className="footer-copyright">
                            <p>{copyright}</p>
                        </div>
                        <div className="footer-bottom-links">
                            <Link href="/privacy-policy" className="footer-bottom-link">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="footer-bottom-link">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
