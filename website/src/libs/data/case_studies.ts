/**
 * Case Studies from the data layer.
 * These functions provide data for the case studies section of the website.
 * 
 * @module data/case_studies
 */

// Types
interface CaseStudy {
    id: number;
    title: string;
    client: string;
    category: string;
    shortDescription: string;
    fullDescription: string;
    challenge: string;
    solution: string;
    results: string[];
    images: {
        hero: string;
        gallery: string[];
    };
    technologies: string[];
    duration: string;
    projectType: string;
    url?: string;
    testimonial?: {
        quote: string;
        author: string;
        position: string;
        company: string;
    };
    metrics?: {
        label: string;
        value: string;
        description: string;
    }[];
}

/**
 * getCaseStudiesData
 * Get the case studies data
 * 
 * @returns Array of case studies
 */
const getCaseStudiesData = (): CaseStudy[] => {
    // TODO: Fetch from a CMS or database

    // In a real application, this data might come from a CMS or database
    return [
        {
            id: 1,
            title: "E-Commerce Platform Redesign",
            client: "TechStyle Fashion",
            category: "E-Commerce",
            shortDescription: "Complete redesign and development of a modern e-commerce platform that increased conversions by 250%.",
            fullDescription: "TechStyle Fashion approached us to completely redesign their outdated e-commerce platform. The existing site was struggling with poor user experience, slow load times, and low conversion rates. Our team conducted extensive user research and competitive analysis to create a modern, high-converting online store.",
            challenge: "The client's existing e-commerce platform was built on outdated technology with poor mobile responsiveness, slow loading speeds, and a confusing checkout process. Cart abandonment rates were at 85%, and mobile traffic was bouncing at 70%.",
            solution: "We designed and developed a completely new e-commerce platform using modern web technologies. The new design featured an intuitive user interface, streamlined checkout process, advanced product filtering, and mobile-first responsive design. We also implemented performance optimizations and integrated modern payment gateways.",
            results: [
                "Increased conversion rate by 250%",
                "Reduced cart abandonment by 45%",
                "Improved mobile traffic engagement by 180%",
                "Decreased page load times by 60%",
                "Boosted average order value by 35%"
            ],
            images: {
                hero: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340",
                gallery: [
                    "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340",
                    "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340",
                    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340"
                ]
            },
            technologies: ["React", "Next.js", "Shopify Plus", "Stripe", "MongoDB", "AWS"],
            duration: "3 months",
            projectType: "Web Development & Design",
            url: "https://techstylefashion.com",
            testimonial: {
                quote: "Latten Creative transformed our online business. The new platform not only looks amazing but has dramatically improved our sales and customer satisfaction.",
                author: "Sarah Mitchell",
                position: "CEO",
                company: "TechStyle Fashion"
            },
            metrics: [
                {
                    label: "Conversion Rate Increase",
                    value: "250%",
                    description: "From 1.2% to 4.2%"
                },
                {
                    label: "Revenue Growth",
                    value: "$2.8M",
                    description: "Additional annual revenue"
                },
                {
                    label: "Page Load Speed",
                    value: "1.2s",
                    description: "Average load time"
                }
            ]
        },
        {
            id: 2,
            title: "Healthcare SaaS Platform",
            client: "MedTech Solutions",
            category: "SaaS",
            shortDescription: "Development of a comprehensive healthcare management platform serving over 10,000 medical professionals.",
            fullDescription: "MedTech Solutions needed a robust SaaS platform to help medical practices manage patient records, appointments, and billing. The platform needed to be HIPAA compliant, scalable, and user-friendly for healthcare professionals with varying technical expertise.",
            challenge: "Creating a secure, HIPAA-compliant platform that could handle sensitive medical data while providing an intuitive user experience. The system needed to integrate with existing medical equipment and third-party services while maintaining high performance and reliability.",
            solution: "We developed a comprehensive SaaS platform with advanced security features, role-based access control, and seamless integrations. The platform includes patient management, appointment scheduling, billing, reporting, and telemedicine capabilities, all built with a focus on healthcare workflows.",
            results: [
                "Deployed to 10,000+ medical professionals",
                "Processed 2M+ patient records securely",
                "Reduced administrative time by 40%",
                "Achieved 99.9% uptime reliability",
                "Facilitated 500,000+ telemedicine appointments"
            ],
            images: {
                hero: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340",
                gallery: [
                    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340",
                    "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340",
                    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340"
                ]
            },
            technologies: ["Node.js", "React", "PostgreSQL", "AWS", "Docker", "Redis"],
            duration: "8 months",
            projectType: "Full-Stack Development",
            testimonial: {
                quote: "The platform has revolutionized how we manage our practice. It's intuitive, secure, and has significantly improved our efficiency.",
                author: "Dr. James Wilson",
                position: "Chief Medical Officer",
                company: "MedTech Solutions"
            },
            metrics: [
                {
                    label: "Active Users",
                    value: "10,000+",
                    description: "Medical professionals"
                },
                {
                    label: "Data Processed",
                    value: "2M+",
                    description: "Patient records"
                },
                {
                    label: "Uptime",
                    value: "99.9%",
                    description: "System reliability"
                }
            ]
        },
        {
            id: 3,
            title: "Digital Marketing Campaign",
            client: "GreenTech Innovations",
            category: "Digital Marketing",
            shortDescription: "Comprehensive digital marketing strategy that generated 400% ROI and established market leadership.",
            fullDescription: "GreenTech Innovations, a sustainable technology startup, needed to establish their brand presence and generate qualified leads in a competitive market. They had innovative products but limited brand recognition and struggled to reach their target audience effectively.",
            challenge: "Breaking into a saturated market with limited brand recognition, competing against established players with larger marketing budgets, and educating the market about new sustainable technology solutions.",
            solution: "We developed a comprehensive digital marketing strategy including content marketing, SEO, social media marketing, and targeted advertising campaigns. Our approach focused on thought leadership, educational content, and strategic partnerships to build brand authority and generate high-quality leads.",
            results: [
                "Generated 400% ROI on marketing spend",
                "Increased website traffic by 500%",
                "Generated 1,200+ qualified leads",
                "Achieved 300% growth in social media following",
                "Established thought leadership in the industry"
            ],
            images: {
                hero: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2426",
                gallery: [
                    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2339",
                    "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340",
                    "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340"
                ]
            },
            technologies: ["Google Ads", "Facebook Ads", "HubSpot", "SEMrush", "Hootsuite", "Google Analytics"],
            duration: "6 months",
            projectType: "Digital Marketing",
            testimonial: {
                quote: "Latten Creative's marketing strategy transformed our business. We went from unknown startup to industry leader in just six months.",
                author: "Maria Rodriguez",
                position: "VP of Marketing",
                company: "GreenTech Innovations"
            },
            metrics: [
                {
                    label: "ROI",
                    value: "400%",
                    description: "Return on investment"
                },
                {
                    label: "Qualified Leads",
                    value: "1,200+",
                    description: "High-quality prospects"
                },
                {
                    label: "Traffic Growth",
                    value: "500%",
                    description: "Website visitors"
                }
            ]
        },
        {
            id: 4,
            title: "Corporate Website Redesign",
            client: "Financial Partners LLC",
            category: "Web Design",
            shortDescription: "Modern corporate website redesign that improved professional image and increased client inquiries by 180%.",
            fullDescription: "Financial Partners LLC, a growing financial advisory firm, needed a modern website that would reflect their professionalism and expertise. Their existing site was outdated, didn't work well on mobile devices, and failed to generate quality leads.",
            challenge: "The existing website had poor mobile responsiveness, outdated design, limited functionality, and wasn't effectively converting visitors into clients. The firm needed to establish credibility and trust with potential high-value clients.",
            solution: "We created a sophisticated, professional website with modern design principles, intuitive navigation, and powerful lead generation features. The new site includes client portals, resource libraries, team profiles, and integrated contact forms optimized for conversion.",
            results: [
                "Increased client inquiries by 180%",
                "Improved mobile user experience by 300%",
                "Reduced bounce rate by 55%",
                "Enhanced brand perception and credibility",
                "Integrated client portal increased retention by 25%"
            ],
            images: {
                hero: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2426",
                gallery: [
                    "https://images.unsplash.com/photo-1554224154-26032fced8bd?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2426",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340",
                    "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340"
                ]
            },
            technologies: ["WordPress", "Custom PHP", "JavaScript", "SCSS", "MySQL"],
            duration: "2 months",
            projectType: "Web Design & Development",
            url: "https://financialpartnersllc.com",
            testimonial: {
                quote: "Our new website has been instrumental in attracting high-quality clients. The professional design perfectly represents our brand.",
                author: "Robert Chen",
                position: "Managing Partner",
                company: "Financial Partners LLC"
            },
            metrics: [
                {
                    label: "Client Inquiries",
                    value: "180%",
                    description: "Increase in leads"
                },
                {
                    label: "Mobile Experience",
                    value: "300%",
                    description: "Improvement score"
                },
                {
                    label: "Bounce Rate",
                    value: "-55%",
                    description: "Reduction"
                }
            ]
        },
        {
            id: 5,
            title: "Mobile App Development",
            client: "FitTrack Pro",
            category: "Mobile App",
            shortDescription: "Native mobile app for fitness tracking that gained 50,000+ downloads and 4.8 star rating.",
            fullDescription: "FitTrack Pro needed a comprehensive mobile application to help users track their fitness journey, set goals, and stay motivated. The app required complex features including workout tracking, nutrition logging, social features, and integration with wearable devices.",
            challenge: "Creating a user-friendly mobile app that could handle complex fitness data, integrate with multiple wearable devices, provide real-time tracking, and maintain user engagement over time. The app also needed to be scalable to handle rapid user growth.",
            solution: "We developed native iOS and Android applications with intuitive user interfaces, robust backend infrastructure, and seamless integrations. The app features workout tracking, nutrition logging, social challenges, progress analytics, and gamification elements to maintain user engagement.",
            results: [
                "Achieved 50,000+ downloads in first 6 months",
                "Maintained 4.8 star rating across app stores",
                "85% monthly active user retention",
                "Integrated with 15+ wearable devices",
                "Featured in App Store health category"
            ],
            images: {
                hero: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340",
                gallery: [
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340",
                    "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340",
                    "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340"
                ]
            },
            technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Firebase", "HealthKit"],
            duration: "5 months",
            projectType: "Mobile App Development",
            testimonial: {
                quote: "The app exceeded our expectations. The user experience is fantastic and the technical execution is flawless.",
                author: "Jennifer Lee",
                position: "Product Manager",
                company: "FitTrack Pro"
            },
            metrics: [
                {
                    label: "Downloads",
                    value: "50,000+",
                    description: "In first 6 months"
                },
                {
                    label: "App Rating",
                    value: "4.8",
                    description: "Stars average"
                },
                {
                    label: "Retention",
                    value: "85%",
                    description: "Monthly active users"
                }
            ]
        },
        {
            id: 6,
            title: "Brand Identity & Website",
            client: "Artisan Coffee Co.",
            category: "Branding",
            shortDescription: "Complete brand identity and website design that helped launch a successful coffee roasting business.",
            fullDescription: "Artisan Coffee Co. was a startup coffee roasting company that needed complete brand identity and website design to launch their business. They wanted to establish a premium brand that would appeal to coffee enthusiasts and specialty retailers.",
            challenge: "Creating a distinctive brand identity in the competitive specialty coffee market, designing packaging that would stand out on retail shelves, and building an e-commerce website that could handle both B2C and B2B sales.",
            solution: "We developed a comprehensive brand identity including logo design, packaging, marketing materials, and a custom e-commerce website. The design emphasized the artisanal nature of the coffee with elegant typography, warm colors, and authentic photography.",
            results: [
                "Successfully launched in 50+ retail locations",
                "Achieved $500K in first-year revenue",
                "Won 'Best New Brand' industry award",
                "Built loyal customer base of 2,000+ subscribers",
                "Established wholesale partnerships with major retailers"
            ],
            images: {
                hero: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340",
                gallery: [
                    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340",
                    "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340",
                    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2340"
                ]
            },
            technologies: ["Adobe Creative Suite", "Shopify", "JavaScript", "SCSS"],
            duration: "4 months",
            projectType: "Brand Design & Web Development",
            url: "https://artisancoffee.co",
            testimonial: {
                quote: "Latten Creative captured the essence of our brand perfectly. The design work has been instrumental in our rapid growth.",
                author: "Michael Torres",
                position: "Founder",
                company: "Artisan Coffee Co."
            },
            metrics: [
                {
                    label: "Retail Locations",
                    value: "50+",
                    description: "Stores carrying products"
                },
                {
                    label: "First Year Revenue",
                    value: "$500K",
                    description: "Sales milestone"
                },
                {
                    label: "Subscribers",
                    value: "2,000+",
                    description: "Loyal customers"
                }
            ]
        }
    ];
};

/**
 * getCaseStudyById
 * Get a specific case study by ID
 * 
 * @param id - Case study ID
 * @returns Case study or null if not found
 */
const getCaseStudyById = (id: number): CaseStudy | null => {
    const caseStudies = getCaseStudiesData();
    return caseStudies.find(study => study.id === id) || null;
};

/**
 * getCaseStudiesByCategory
 * Get case studies filtered by category
 * 
 * @param category - Category to filter by
 * @returns Array of case studies in the specified category
 */
const getCaseStudiesByCategory = (category: string): CaseStudy[] => {
    const caseStudies = getCaseStudiesData();
    return caseStudies.filter(study => study.category.toLowerCase() === category.toLowerCase());
};

/**
 * getCategories
 * Get all unique categories from case studies
 * 
 * @returns Array of category names
 */
const getCategories = (): string[] => {
    const caseStudies = getCaseStudiesData();
    const categories = caseStudies.map(study => study.category);
    return [...new Set(categories)];
};

export { getCaseStudiesData, getCaseStudyById, getCaseStudiesByCategory, getCategories };
export type { CaseStudy };
