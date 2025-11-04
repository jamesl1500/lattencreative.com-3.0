/**
 * Static Services Data
 * Complete service information without API dependencies
 */

// Types (keeping the same structure)
export interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface ProcessStep {
  id: number;
  stepNumber: number;
  title: string;
  description: string;
  icon?: string;
  estimatedDuration?: string;
  deliverables?: string[];
}

export interface Pricing {
  id: number;
  title: string;
  price?: number;
  currency?: string;
  period?: string;
  description?: string;
  features?: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaUrl?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  clientName: string;
  clientTitle?: string;
  company?: string;
  avatar?: string;
  rating?: number;
  projectType?: string;
  featured?: boolean;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  tagline: string;
  slug: string;
  category: string;
  image: string;
  icon?: string;
  features?: string[];
  pricing?: Pricing[];
  testimonials?: Testimonial[];
  processSteps?: ProcessStep[];
  fullDescription?: string;
  benefits?: string[];
  technologies?: string[];
  deliveryTime?: string;
  revisions?: string;
}

// Static Services Data
export const STATIC_SERVICES: Service[] = [
  {
    id: 1,
    name: "Web Design",
    description: "Creating visually appealing and user-friendly websites.",
    tagline: "Stunning designs that captivate your audience.",
    fullDescription: "Our web design service focuses on creating beautiful, functional, and user-centered websites that not only look great but also drive results. We combine creativity with strategy to deliver designs that engage your audience and achieve your business goals.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364",
    slug: "web-design",
    category: "Design",
    icon: "🎨",
    deliveryTime: "2-4 weeks",
    revisions: "3 rounds included",
    features: [
      "Custom responsive design",
      "Mobile-first approach",
      "User experience optimization",
      "Brand-consistent styling",
      "Cross-browser compatibility",
      "SEO-friendly structure"
    ],
    benefits: [
      "Increased user engagement",
      "Better conversion rates",
      "Professional brand image",
      "Mobile accessibility",
      "Search engine visibility"
    ],
    technologies: ["Figma", "Adobe Creative Suite", "HTML5/CSS3", "JavaScript", "Responsive Frameworks"],
    processSteps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Discovery & Research",
        description: "We analyze your business, target audience, and competitors to create a strategic design foundation.",
        estimatedDuration: "3-5 days",
        deliverables: ["Project brief", "User personas", "Competitive analysis", "Sitemap"]
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Wireframing & Planning",
        description: "Create detailed wireframes and user flow diagrams to map out the website structure.",
        estimatedDuration: "2-3 days",
        deliverables: ["Wireframes", "User flow diagrams", "Content strategy"]
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Visual Design",
        description: "Design high-fidelity mockups with your brand colors, typography, and imagery.",
        estimatedDuration: "1-2 weeks",
        deliverables: ["Homepage design", "Interior page designs", "Style guide", "Asset library"]
      },
      {
        id: 4,
        stepNumber: 4,
        title: "Review & Refinement",
        description: "Incorporate your feedback and refine the design for final approval.",
        estimatedDuration: "3-5 days",
        deliverables: ["Revised designs", "Final mockups", "Design specifications"]
      }
    ],
    pricing: [
      {
        id: 1,
        title: "Basic",
        price: 1500,
        currency: "USD",
        period: "one-time",
        description: "Perfect for small businesses and startups",
        features: [
          "Up to 5 pages",
          "Responsive design",
          "Basic SEO setup",
          "Contact form",
          "3 revisions"
        ],
        isPopular: false,
        ctaText: "Get Started",
        ctaUrl: "/contact"
      },
      {
        id: 2,
        title: "Professional",
        price: 2500,
        currency: "USD",
        period: "one-time",
        description: "Ideal for growing businesses",
        features: [
          "Up to 10 pages",
          "Advanced animations",
          "CMS integration",
          "E-commerce ready",
          "5 revisions",
          "1 month support"
        ],
        isPopular: true,
        ctaText: "Most Popular",
        ctaUrl: "/contact"
      },
      {
        id: 3,
        title: "Enterprise",
        price: 4500,
        currency: "USD",
        period: "one-time",
        description: "For large organizations and complex projects",
        features: [
          "Unlimited pages",
          "Custom functionality",
          "Advanced integrations",
          "Performance optimization",
          "Unlimited revisions",
          "3 months support"
        ],
        isPopular: false,
        ctaText: "Contact Us",
        ctaUrl: "/contact"
      }
    ],
    testimonials: [
      {
        id: 1,
        quote: "The web design exceeded our expectations. Our traffic increased by 150% after the redesign.",
        clientName: "Sarah Johnson",
        clientTitle: "Marketing Director",
        company: "TechStart Inc.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b3c5?w=150",
        rating: 5,
        projectType: "Web Design",
        featured: true
      }
    ]
  },
  {
    id: 2,
    name: "Web Development",
    description: "Building responsive and high-performance web applications.",
    tagline: "Robust solutions for modern web challenges.",
    fullDescription: "Our web development service delivers custom, scalable, and high-performance web applications tailored to your specific needs. We use modern technologies and best practices to ensure your website is fast, secure, and maintainable.",
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    slug: "web-development",
    category: "Development",
    icon: "💻",
    deliveryTime: "4-8 weeks",
    revisions: "Unlimited during development",
    features: [
      "Custom web applications",
      "Responsive development",
      "Database integration",
      "API development",
      "Performance optimization",
      "Security implementation"
    ],
    benefits: [
      "Scalable architecture",
      "Fast loading times",
      "Enhanced security",
      "Custom functionality",
      "Easy maintenance"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB"],
    processSteps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Requirements Analysis",
        description: "Detailed analysis of your technical requirements and project scope.",
        estimatedDuration: "1 week",
        deliverables: ["Technical specification", "Architecture plan", "Database schema"]
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Development Setup",
        description: "Set up development environment, repositories, and deployment pipeline.",
        estimatedDuration: "2-3 days",
        deliverables: ["Development environment", "Git repository", "CI/CD pipeline"]
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Core Development",
        description: "Build the main functionality with regular testing and updates.",
        estimatedDuration: "3-6 weeks",
        deliverables: ["Working application", "API endpoints", "Database implementation"]
      },
      {
        id: 4,
        stepNumber: 4,
        title: "Testing & Deployment",
        description: "Comprehensive testing and deployment to production environment.",
        estimatedDuration: "1 week",
        deliverables: ["Test results", "Production deployment", "Documentation"]
      }
    ],
    pricing: [
      {
        id: 1,
        title: "Standard",
        price: 3500,
        currency: "USD",
        period: "one-time",
        description: "Perfect for small to medium websites",
        features: [
          "Up to 10 pages",
          "Contact forms",
          "Basic CMS",
          "Mobile responsive",
          "3 months support"
        ],
        isPopular: false,
        ctaText: "Get Started",
        ctaUrl: "/contact"
      },
      {
        id: 2,
        title: "Advanced",
        price: 6500,
        currency: "USD",
        period: "one-time",
        description: "For complex web applications",
        features: [
          "Custom functionality",
          "Database integration",
          "User authentication",
          "API development",
          "6 months support"
        ],
        isPopular: true,
        ctaText: "Most Popular",
        ctaUrl: "/contact"
      },
      {
        id: 3,
        title: "Enterprise",
        price: 12000,
        currency: "USD",
        period: "one-time",
        description: "Large-scale applications and systems",
        features: [
          "Unlimited complexity",
          "Microservices architecture",
          "Advanced integrations",
          "Performance optimization",
          "12 months support"
        ],
        isPopular: false,
        ctaText: "Contact Us",
        ctaUrl: "/contact"
      }
    ],
    testimonials: [
      {
        id: 1,
        quote: "Exceptional development work. The application handles our complex requirements perfectly.",
        clientName: "Michael Chen",
        clientTitle: "CTO",
        company: "DataFlow Solutions",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        rating: 5,
        projectType: "Web Development",
        featured: true
      }
    ]
  },
  {
    id: 3,
    name: "SEO Optimization",
    description: "Improving your website's visibility on search engines.",
    tagline: "Boost your rankings and drive organic traffic.",
    fullDescription: "Our SEO optimization service helps your website rank higher in search engine results, driving more qualified traffic to your business. We use proven strategies and white-hat techniques to improve your online visibility and search engine rankings.",
    image: "https://images.unsplash.com/photo-1686061594183-8c864f508b00?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    slug: "seo-optimization",
    category: "Marketing",
    icon: "🔍",
    deliveryTime: "3-6 months",
    revisions: "Ongoing optimization",
    features: [
      "Keyword research & analysis",
      "On-page optimization",
      "Technical SEO audit",
      "Content optimization",
      "Local SEO setup",
      "Performance monitoring"
    ],
    benefits: [
      "Higher search rankings",
      "Increased organic traffic",
      "Better user experience",
      "Local visibility",
      "Long-term growth"
    ],
    technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs", "Screaming Frog"],
    processSteps: [
      {
        id: 1,
        stepNumber: 1,
        title: "SEO Audit",
        description: "Comprehensive analysis of your current SEO performance and opportunities.",
        estimatedDuration: "1 week",
        deliverables: ["SEO audit report", "Keyword research", "Competitor analysis"]
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Strategy Development",
        description: "Create a customized SEO strategy based on audit findings.",
        estimatedDuration: "3-5 days",
        deliverables: ["SEO strategy document", "Content plan", "Technical recommendations"]
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Implementation",
        description: "Execute on-page and technical SEO improvements.",
        estimatedDuration: "2-4 weeks",
        deliverables: ["Optimized pages", "Technical fixes", "Content updates"]
      },
      {
        id: 4,
        stepNumber: 4,
        title: "Monitoring & Optimization",
        description: "Track performance and make ongoing improvements.",
        estimatedDuration: "Ongoing",
        deliverables: ["Monthly reports", "Performance updates", "Strategy adjustments"]
      }
    ],
    pricing: [
      {
        id: 1,
        title: "Starter",
        price: 800,
        currency: "USD",
        period: "monthly",
        description: "Basic SEO for small websites",
        features: [
          "5 target keywords",
          "On-page optimization",
          "Monthly reporting",
          "Google My Business setup",
          "Basic link building"
        ],
        isPopular: false,
        ctaText: "Get Started",
        ctaUrl: "/contact"
      },
      {
        id: 2,
        title: "Growth",
        price: 1500,
        currency: "USD",
        period: "monthly",
        description: "Comprehensive SEO for growing businesses",
        features: [
          "15 target keywords",
          "Technical SEO",
          "Content optimization",
          "Local SEO",
          "Advanced link building",
          "Bi-weekly reports"
        ],
        isPopular: true,
        ctaText: "Most Popular",
        ctaUrl: "/contact"
      },
      {
        id: 3,
        title: "Enterprise",
        price: 2800,
        currency: "USD",
        period: "monthly",
        description: "Advanced SEO for large websites",
        features: [
          "Unlimited keywords",
          "Advanced technical SEO",
          "Content strategy",
          "Competitor monitoring",
          "Custom reporting",
          "Weekly consultations"
        ],
        isPopular: false,
        ctaText: "Contact Us",
        ctaUrl: "/contact"
      }
    ],
    testimonials: [
      {
        id: 1,
        quote: "Our organic traffic increased by 300% in just 6 months. Outstanding SEO work!",
        clientName: "Lisa Rodriguez",
        clientTitle: "Business Owner",
        company: "LocalCare Clinic",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
        rating: 5,
        projectType: "SEO Optimization",
        featured: true
      }
    ]
  },
  {
    id: 4,
    name: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to grow your business.",
    tagline: "Engage your audience with targeted campaigns.",
    fullDescription: "Our digital marketing service creates comprehensive strategies across multiple channels to help you reach your target audience, increase brand awareness, and drive conversions. We focus on measurable results and ROI-driven campaigns.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    slug: "digital-marketing",
    category: "Marketing",
    icon: "📱",
    deliveryTime: "2-3 months",
    revisions: "Ongoing campaign optimization",
    features: [
      "Social media marketing",
      "Pay-per-click advertising",
      "Email marketing campaigns",
      "Content marketing strategy",
      "Analytics & reporting",
      "Marketing automation"
    ],
    benefits: [
      "Increased brand awareness",
      "Higher conversion rates",
      "Better customer engagement",
      "Measurable ROI",
      "Multi-channel presence"
    ],
    technologies: ["Google Ads", "Facebook Ads", "Mailchimp", "HubSpot", "Google Analytics", "Hootsuite"],
    processSteps: [
      {
        id: 1,
        stepNumber: 1,
        title: "Strategy Planning",
        description: "Develop a comprehensive digital marketing strategy aligned with your goals.",
        estimatedDuration: "1-2 weeks",
        deliverables: ["Marketing strategy", "Target audience analysis", "Channel recommendations"]
      },
      {
        id: 2,
        stepNumber: 2,
        title: "Campaign Setup",
        description: "Set up advertising accounts, tracking, and initial campaigns.",
        estimatedDuration: "1 week",
        deliverables: ["Ad accounts setup", "Tracking implementation", "Initial campaigns"]
      },
      {
        id: 3,
        stepNumber: 3,
        title: "Campaign Launch",
        description: "Launch campaigns across selected digital channels.",
        estimatedDuration: "1 week",
        deliverables: ["Live campaigns", "Monitoring setup", "Initial performance data"]
      },
      {
        id: 4,
        stepNumber: 4,
        title: "Optimization & Reporting",
        description: "Continuously optimize campaigns and provide detailed reporting.",
        estimatedDuration: "Ongoing",
        deliverables: ["Weekly reports", "Campaign optimizations", "Strategy adjustments"]
      }
    ],
    pricing: [
      {
        id: 1,
        title: "Essential",
        price: 1200,
        currency: "USD",
        period: "monthly",
        description: "Basic digital marketing for small businesses",
        features: [
          "2 advertising platforms",
          "Social media management",
          "Email marketing setup",
          "Monthly reporting",
          "Ad spend up to $2,000"
        ],
        isPopular: false,
        ctaText: "Get Started",
        ctaUrl: "/contact"
      },
      {
        id: 2,
        title: "Professional",
        price: 2200,
        currency: "USD",
        period: "monthly",
        description: "Comprehensive marketing for growing businesses",
        features: [
          "Multi-platform campaigns",
          "Advanced targeting",
          "Marketing automation",
          "A/B testing",
          "Bi-weekly reporting",
          "Ad spend up to $5,000"
        ],
        isPopular: true,
        ctaText: "Most Popular",
        ctaUrl: "/contact"
      },
      {
        id: 3,
        title: "Enterprise",
        price: 4000,
        currency: "USD",
        period: "monthly",
        description: "Advanced marketing for large organizations",
        features: [
          "Full-funnel campaigns",
          "Advanced analytics",
          "Custom integrations",
          "Dedicated account manager",
          "Weekly consultations",
          "Unlimited ad spend management"
        ],
        isPopular: false,
        ctaText: "Contact Us",
        ctaUrl: "/contact"
      }
    ],
    testimonials: [
      {
        id: 1,
        quote: "Their digital marketing campaigns increased our leads by 250% and improved our ROI significantly.",
        clientName: "David Kim",
        clientTitle: "Marketing Manager",
        company: "GrowthTech Solutions",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        rating: 5,
        projectType: "Digital Marketing",
        featured: true
      }
    ]
  }
];

// Helper functions (now static)
export const getImageUrl = (image: string | { url: string; formats?: any } | undefined): string => {
  if (!image) {
    return '';
  }
  if (typeof image === 'string') {
    return image;
  }
  // Handle Strapi image objects
  if (typeof image === 'object' && 'url' in image) {
    const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';
    return `${baseUrl}${image.url}`;
  }
  return '';
};

export const getServicesData = async (): Promise<Service[]> => {
  // Return static data instead of API call
  return STATIC_SERVICES;
};

export const fetchServiceById = async (serviceSlug: string): Promise<Service | null> => {
  // Find service by slug in static data
  const service = STATIC_SERVICES.find(s => s.slug === serviceSlug);
  return service || null;
};

export const getServiceBySlug = (slug: string): Service | null => {
  return STATIC_SERVICES.find(s => s.slug === slug) || null;
};

export const getAllServiceSlugs = (): string[] => {
  return STATIC_SERVICES.map(s => s.slug);
};