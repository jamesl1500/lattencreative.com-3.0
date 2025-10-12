"use client";

import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";

import {getCTAItems, getNavItems, getSiteLogo, getSiteName} from "@/libs/header";

const Header = () => {
    // State for scroll detection
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50); // Add blur after scrolling 50px
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // TODO: Integrate dynamic data fetching

    // Get site name
    const siteName = getSiteName();
    
    // Get site logo
    const siteLogo = getSiteLogo();

    // Get navigation items
    const navItems = getNavItems();

    // Get CTA items
    const ctaItems = getCTAItems();

    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="header-inner container">
                <div className="header-branding">
                    <Link href="/" className="header-logo">
                        <Image src={siteLogo.src} alt={siteLogo.alt} width={siteLogo.width} height={siteLogo.height} />
                        <span>{siteName}</span>
                    </Link>
                </div>
                <div className="header-nav">
                    <nav className="header-nav-parent">
                        <ul className="header-nav-list">
                            {navItems.map(item => (
                                <li key={item.path} className="header-nav-item">
                                    <Link href={item.path} className="header-nav-link">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="header-ctas">
                    <div className="header-ctas-inner">
                        <nav className="header-cta-nav">
                            <ul className="header-cta-list">
                                {ctaItems.map(item => (
                                    <li key={item.path} className="header-cta-item">
                                        <Link href={item.path} className="header-cta-link">{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;