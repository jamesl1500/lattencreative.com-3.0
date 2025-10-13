export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  publishedDate: string;
  author: {
    name: string;
    title: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  readTime: number; // in minutes
  featured: boolean;
  image?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "1",
        title: "The Future of Web Design: Trends to Watch in 2025",
        slug: "future-of-web-design-2025",
        description: "Explore the cutting-edge web design trends that will shape the digital landscape in 2025, from AI-powered interfaces to sustainable design practices.",
        content: `
            <p>As we move deeper into 2025, the web design industry continues to evolve at a rapid pace. From AI-driven personalization to sustainable design practices, this year promises to bring exciting innovations that will reshape how we create and interact with digital experiences.</p>
            
            <h2>1. AI-Powered Personalization</h2>
            <p>Artificial intelligence is no longer just a buzzword—it's becoming an integral part of web design. AI-powered personalization allows websites to adapt in real-time to user preferences, behavior, and context. This means dynamic layouts, content recommendations, and even color schemes that adjust based on individual user data.</p>
            
            <h2>2. Sustainable Web Design</h2>
            <p>Environmental consciousness is driving a new movement in web design focused on reducing carbon footprints. This includes optimized images, efficient code, green hosting solutions, and designs that require less energy to load and display.</p>
            
            <h2>3. Immersive 3D Experiences</h2>
            <p>WebGL and WebXR technologies are making it easier to create immersive 3D experiences directly in the browser. From virtual product showcases to interactive storytelling, 3D elements are becoming more accessible and performant.</p>
            
            <h2>4. Micro-Interactions and Haptic Feedback</h2>
            <p>Small details make a big difference. Micro-interactions provide immediate feedback to user actions, while haptic feedback (where supported) adds a tactile dimension to digital interactions.</p>
            
            <h2>5. Voice User Interfaces (VUI)</h2>
            <p>With the growing adoption of voice assistants and smart devices, designing for voice interactions is becoming crucial. VUI design principles are being integrated into traditional web interfaces to create more accessible and intuitive experiences.</p>
            
            <p>These trends represent just the beginning of what's possible in modern web design. As technology continues to advance, we can expect even more innovative approaches to creating engaging, accessible, and sustainable digital experiences.</p>
        `,
        publishedDate: "2025-01-15",
        author: {
            name: "Sarah Johnson",
            title: "Senior UX Designer",
            avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2"
        },
        category: "Design Trends",
        tags: ["Web Design", "AI", "Sustainability", "3D", "UX"],
        readTime: 8,
        featured: true,
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "2",
        title: "Building Scalable React Applications: Best Practices and Patterns",
        slug: "scalable-react-applications-best-practices",
        description: "Learn essential patterns and best practices for building maintainable and scalable React applications that can grow with your business needs.",
        content: `
            <p>Building scalable React applications requires careful planning, thoughtful architecture, and adherence to best practices. Whether you're starting a new project or refactoring an existing one, these strategies will help you create applications that can grow and evolve with your needs.</p>
            
            <h2>1. Component Architecture</h2>
            <p>A well-structured component hierarchy is the foundation of any scalable React application. Follow the single responsibility principle and create small, focused components that do one thing well.</p>
            
            <h3>Atomic Design Principles</h3>
            <p>Organize your components using atomic design methodology:</p>
            <ul>
                <li><strong>Atoms:</strong> Basic building blocks (buttons, inputs, labels)</li>
                <li><strong>Molecules:</strong> Simple groups of atoms (search box, navigation item)</li>
                <li><strong>Organisms:</strong> Complex components (header, footer, forms)</li>
                <li><strong>Templates:</strong> Page-level objects that place components into a layout</li>
                <li><strong>Pages:</strong> Specific instances of templates</li>
            </ul>
            
            <h2>2. State Management</h2>
            <p>Choose the right state management solution based on your application's complexity:</p>
            <ul>
                <li><strong>Local State:</strong> useState for simple component state</li>
                <li><strong>Shared State:</strong> Context API for medium complexity</li>
                <li><strong>Global State:</strong> Redux, Zustand, or Jotai for complex applications</li>
            </ul>
            
            <h2>3. Code Organization</h2>
            <p>Structure your project for maintainability:</p>
            <pre><code>
src/
    components/
        common/
        forms/
        layout/
    hooks/
    pages/
    services/
    utils/
    types/
            </code></pre>
            
            <h2>4. Performance Optimization</h2>
            <p>Implement performance best practices from the start:</p>
            <ul>
                <li>Use React.memo for expensive components</li>
                <li>Implement lazy loading with React.Suspense</li>
                <li>Optimize bundle size with code splitting</li>
                <li>Use useMemo and useCallback judiciously</li>
            </ul>
            
            <h2>5. Testing Strategy</h2>
            <p>Build confidence with comprehensive testing:</p>
            <ul>
                <li>Unit tests for utility functions and hooks</li>
                <li>Integration tests for component interactions</li>
                <li>End-to-end tests for critical user flows</li>
            </ul>
            
            <p>By following these practices, you'll create React applications that are not only scalable but also maintainable, testable, and performant.</p>
        `,
        publishedDate: "2025-01-10",
        author: {
            name: "Mike Chen",
            title: "Lead Frontend Developer",
            avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=128&h=128&facepad=2"
        },
        category: "Development",
        tags: ["React", "JavaScript", "Architecture", "Best Practices"],
        readTime: 12,
        featured: true,
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "3",
        title: "SEO Optimization for Modern Web Applications",
        slug: "seo-optimization-modern-web-apps",
        description: "Master the art of SEO for single-page applications and modern web frameworks. Learn techniques to improve search visibility and organic traffic.",
        content: `
            <p>Search Engine Optimization (SEO) for modern web applications presents unique challenges, especially with single-page applications (SPAs) and client-side rendering. This comprehensive guide covers essential strategies to ensure your modern web app ranks well in search engines.</p>
            
            <h2>1. Server-Side Rendering (SSR) and Static Generation</h2>
            <p>Modern frameworks like Next.js, Nuxt.js, and SvelteKit offer excellent SEO capabilities through server-side rendering and static site generation. These approaches ensure that search engines can properly crawl and index your content.</p>
            
            <h3>Benefits of SSR for SEO:</h3>
            <ul>
                <li>Faster initial page loads</li>
                <li>Better crawlability by search engines</li>
                <li>Improved social media sharing with proper meta tags</li>
                <li>Enhanced accessibility</li>
            </ul>
            
            <h2>2. Technical SEO Fundamentals</h2>
            <p>Ensure your technical foundation is solid:</p>
            
            <h3>Core Web Vitals</h3>
            <ul>
                <li><strong>Largest Contentful Paint (LCP):</strong> Should occur within 2.5 seconds</li>
                <li><strong>First Input Delay (FID):</strong> Should be less than 100 milliseconds</li>
                <li><strong>Cumulative Layout Shift (CLS):</strong> Should be less than 0.1</li>
            </ul>
            
            <h3>Mobile Optimization</h3>
            <p>With mobile-first indexing, ensure your site is fully responsive and provides an excellent mobile experience.</p>
            
            <h2>3. Content Optimization</h2>
            <p>Create high-quality, relevant content that serves user intent:</p>
            <ul>
                <li>Conduct thorough keyword research</li>
                <li>Write compelling meta titles and descriptions</li>
                <li>Use proper heading structure (H1, H2, H3)</li>
                <li>Optimize images with alt text and proper sizing</li>
                <li>Implement structured data markup</li>
            </ul>
            
            <h2>4. URL Structure and Navigation</h2>
            <p>Design clean, semantic URLs that reflect your content hierarchy:</p>
            <pre><code>
Good: /blog/seo-optimization-modern-web-apps
Bad: /page?id=12345&category=blog
            </code></pre>
            
            <h2>5. Internal Linking Strategy</h2>
            <p>Create a strong internal linking structure to help search engines understand your site's hierarchy and distribute page authority effectively.</p>
            
            <h2>6. Performance Optimization</h2>
            <p>Page speed is a ranking factor. Optimize your application with:</p>
            <ul>
                <li>Image optimization and lazy loading</li>
                <li>Code splitting and lazy loading of components</li>
                <li>Minification and compression</li>
                <li>CDN implementation</li>
                <li>Efficient caching strategies</li>
            </ul>
            
            <p>Remember, SEO is an ongoing process. Regularly monitor your performance using tools like Google Search Console, and stay updated with the latest search engine algorithm changes.</p>
        `,
        publishedDate: "2025-01-05",
        author: {
            name: "Emily Rodriguez",
            title: "Digital Marketing Specialist",
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=128&h=128&facepad=2"
        },
        category: "Marketing",
        tags: ["SEO", "Web Performance", "Digital Marketing", "Next.js"],
        readTime: 10,
        featured: false,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "4",
        title: "Creating Accessible Web Experiences: A Developer's Guide",
        slug: "creating-accessible-web-experiences",
        description: "Learn how to build inclusive web applications that work for everyone. Discover practical techniques for implementing accessibility in your development workflow.",
        content: `
            <p>Web accessibility isn't just a legal requirement—it's a moral imperative and good business practice. Creating accessible web experiences ensures that your applications can be used by everyone, regardless of their abilities or disabilities.</p>
            
            <h2>Understanding Web Accessibility</h2>
            <p>The Web Content Accessibility Guidelines (WCAG) 2.1 provide the foundation for web accessibility. They're organized around four principles:</p>
            
            <h3>1. Perceivable</h3>
            <ul>
                <li>Provide text alternatives for images</li>
                <li>Offer captions and transcripts for videos</li>
                <li>Ensure sufficient color contrast</li>
                <li>Make content adaptable to different presentations</li>
            </ul>
            
            <h3>2. Operable</h3>
            <ul>
                <li>Make all functionality keyboard accessible</li>
                <li>Give users enough time to read content</li>
                <li>Don't use content that causes seizures</li>
                <li>Help users navigate and find content</li>
            </ul>
            
            <h3>3. Understandable</h3>
            <ul>
                <li>Make text readable and understandable</li>
                <li>Make content appear and operate predictably</li>
                <li>Help users avoid and correct mistakes</li>
            </ul>
            
            <h3>4. Robust</h3>
            <ul>
                <li>Maximize compatibility with assistive technologies</li>
                <li>Use valid, semantic HTML</li>
            </ul>
            
            <h2>Practical Implementation Techniques</h2>
            
            <h3>Semantic HTML</h3>
            <p>Use proper HTML elements for their intended purpose:</p>
            <pre><code>
&lt;!-- Good --&gt;
&lt;button onclick="submitForm()"&gt;Submit&lt;/button&gt;
&lt;nav&gt;...&lt;/nav&gt;
&lt;main&gt;...&lt;/main&gt;

&lt;!-- Avoid --&gt;
&lt;div onclick="submitForm()"&gt;Submit&lt;/div&gt;
&lt;div class="navigation"&gt;...&lt;/div&gt;
            </code></pre>
            
            <h3>ARIA Attributes</h3>
            <p>Use ARIA (Accessible Rich Internet Applications) attributes to enhance semantic meaning:</p>
            <ul>
                <li><code>aria-label</code>: Provides accessible name</li>
                <li><code>aria-describedby</code>: References descriptive text</li>
                <li><code>aria-expanded</code>: Indicates if a collapsible element is expanded</li>
                <li><code>role</code>: Defines what an element is or does</li>
            </ul>
            
            <h3>Keyboard Navigation</h3>
            <p>Ensure all interactive elements are keyboard accessible:</p>
            <ul>
                <li>Provide visible focus indicators</li>
                <li>Implement logical tab order</li>
                <li>Support standard keyboard shortcuts</li>
                <li>Provide skip links for main content</li>
            </ul>
            
            <h3>Color and Contrast</h3>
            <p>Design with accessibility in mind:</p>
            <ul>
                <li>Maintain a minimum contrast ratio of 4.5:1 for normal text</li>
                <li>Use 3:1 for large text (18pt+)</li>
                <li>Don't rely solely on color to convey information</li>
            </ul>
            
            <h2>Testing for Accessibility</h2>
            <p>Regular testing is crucial:</p>
            <ul>
                <li><strong>Automated Testing:</strong> Use tools like axe-core, Lighthouse, and WAVE</li>
                <li><strong>Manual Testing:</strong> Navigate using only a keyboard</li>
                <li><strong>Screen Reader Testing:</strong> Test with NVDA, JAWS, or VoiceOver</li>
                <li><strong>User Testing:</strong> Include users with disabilities in your testing process</li>
            </ul>
            
            <h2>Common Accessibility Patterns in React</h2>
            <pre><code>
// Focus management
const modalRef = useRef(null);

useEffect(() => {
    if (isOpen) {
        modalRef.current?.focus();
    }
}, [isOpen]);

// Skip links
&lt;a href="#main-content" className="skip-link"&gt;
    Skip to main content
&lt;/a&gt;

// Form labels
&lt;label htmlFor="email"&gt;Email Address&lt;/label&gt;
&lt;input 
    id="email" 
    type="email" 
    aria-describedby="email-help"
    required 
/&gt;
&lt;div id="email-help"&gt;We'll never share your email&lt;/div&gt;
            </code></pre>
            
            <p>Building accessible web experiences requires intentional design and development practices. Start with semantic HTML, enhance with ARIA when necessary, and always test with real users. Remember: accessibility benefits everyone, not just users with disabilities.</p>
        `,
        publishedDate: "2024-12-28",
        author: {
            name: "David Kim",
            title: "Accessibility Consultant",
            avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=128&h=128&facepad=2"
        },
        category: "Development",
        tags: ["Accessibility", "WCAG", "Inclusive Design", "HTML", "ARIA"],
        readTime: 15,
        featured: false,
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "5",
        title: "The Art of Brand Storytelling in Digital Design",
        slug: "brand-storytelling-digital-design",
        description: "Discover how to weave compelling brand narratives into your digital designs. Learn techniques that create emotional connections with your audience.",
        content: `
            <p>In today's crowded digital landscape, technical excellence alone isn't enough to capture and retain audience attention. The most successful brands understand that great design tells a story—one that resonates emotionally with their audience and creates lasting connections.</p>
            
            <h2>What is Brand Storytelling?</h2>
            <p>Brand storytelling is the art of using narrative to connect your brand's mission, values, and personality with your audience's emotions and experiences. In digital design, this means every visual element, interaction, and user journey should contribute to your brand's overarching narrative.</p>
            
            <h2>Elements of Effective Brand Storytelling</h2>
            
            <h3>1. Visual Hierarchy and Flow</h3>
            <p>Guide users through your story with intentional visual hierarchy:</p>
            <ul>
                <li>Use typography to create narrative rhythm</li>
                <li>Employ color to evoke specific emotions</li>
                <li>Design layouts that mirror natural reading patterns</li>
                <li>Create visual breaks that allow for storytelling moments</li>
            </ul>
            
            <h3>2. Micro-Interactions and Animation</h3>
            <p>Bring your story to life with purposeful motion:</p>
            <ul>
                <li>Use hover effects to reveal brand personality</li>
                <li>Implement loading animations that reflect brand values</li>
                <li>Create transitions that feel natural and meaningful</li>
                <li>Design scroll-triggered animations that unfold your narrative</li>
            </ul>
            
            <h3>3. Content Strategy</h3>
            <p>Align your content with your brand narrative:</p>
            <ul>
                <li>Develop a consistent brand voice and tone</li>
                <li>Create content that speaks to user pain points</li>
                <li>Use real customer stories and testimonials</li>
                <li>Incorporate behind-the-scenes content that humanizes your brand</li>
            </ul>
            
            <h2>Digital Storytelling Techniques</h2>
            
            <h3>Progressive Disclosure</h3>
            <p>Reveal your story gradually to maintain engagement:</p>
            <ul>
                <li>Start with a compelling hook on your homepage</li>
                <li>Use progressive forms that don't overwhelm users</li>
                <li>Implement expandable sections for deeper exploration</li>
                <li>Create multi-step processes that build anticipation</li>
            </ul>
            
            <h3>Visual Metaphors</h3>
            <p>Use imagery and design elements that reinforce your brand message:</p>
            <ul>
                <li>Choose photography that reflects your brand values</li>
                <li>Use icons and illustrations that support your narrative</li>
                <li>Implement design patterns that mirror your industry or mission</li>
                <li>Create custom graphics that are uniquely yours</li>
            </ul>
            
            <h3>User Journey Mapping</h3>
            <p>Design experiences that tell a complete story:</p>
            <ul>
                <li>Map emotional touchpoints throughout the user journey</li>
                <li>Identify opportunities for narrative moments</li>
                <li>Ensure consistency across all digital touchpoints</li>
                <li>Design for different story entry points</li>
            </ul>
            
            <h2>Case Study: Airbnb's "Belong Anywhere"</h2>
            <p>Airbnb masterfully integrates storytelling into their digital design:</p>
            <ul>
                <li><strong>Photography:</strong> Real homes and authentic experiences</li>
                <li><strong>Copy:</strong> Personal stories from hosts and guests</li>
                <li><strong>Interface:</strong> Warm, welcoming design that feels like home</li>
                <li><strong>Features:</strong> Tools that facilitate human connection</li>
            </ul>
            
            <h2>Measuring Story Impact</h2>
            <p>Track how well your story resonates:</p>
            <ul>
                <li><strong>Engagement Metrics:</strong> Time on site, pages per session</li>
                <li><strong>Emotional Response:</strong> Social shares, comments, feedback</li>
                <li><strong>Brand Recall:</strong> Surveys and brand awareness studies</li>
                <li><strong>Conversion Impact:</strong> How storytelling affects business goals</li>
            </ul>
            
            <h2>Common Storytelling Mistakes</h2>
            <p>Avoid these pitfalls:</p>
            <ul>
                <li>Focusing on features instead of benefits and emotions</li>
                <li>Creating inconsistent narratives across touchpoints</li>
                <li>Overwhelming users with too much story at once</li>
                <li>Forgetting to align story with user needs and goals</li>
            </ul>
            
            <p>Remember, the best brand stories don't just tell users what you do—they show them how you can improve their lives. When done right, digital storytelling transforms functional interactions into meaningful experiences that build lasting brand loyalty.</p>
        `,
        publishedDate: "2024-12-20",
        author: {
            name: "Jessica Thompson",
            title: "Brand Strategist",
            avatar: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=facearea&w=128&h=128&facepad=2"
        },
        category: "Branding",
        tags: ["Brand Strategy", "Storytelling", "Digital Design", "User Experience"],
        readTime: 11,
        featured: false,
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "6",
        title: "Mobile-First Design: Beyond Responsive Layouts",
        slug: "mobile-first-design-beyond-responsive",
        description: "Explore advanced mobile-first design strategies that go beyond simple responsive layouts. Learn how to create truly mobile-optimized experiences.",
        content: `
            <p>Mobile-first design has evolved far beyond simply making desktop designs work on smaller screens. Today's mobile-first approach requires rethinking user interactions, content priorities, and performance optimization from the ground up.</p>
            
            <h2>The Evolution of Mobile-First</h2>
            <p>When mobile-first design emerged, it primarily focused on responsive layouts. Now, it encompasses:</p>
            <ul>
                <li>Touch-optimized interactions</li>
                <li>Performance-first architecture</li>
                <li>Context-aware functionality</li>
                <li>Progressive enhancement strategies</li>
            </ul>
            
            <h2>Advanced Mobile-First Strategies</h2>
            
            <h3>1. Touch-First Interaction Design</h3>
            <p>Design for fingers, not mouse cursors:</p>
            <ul>
                <li><strong>Touch Targets:</strong> Minimum 44px for interactive elements</li>
                <li><strong>Gesture Support:</strong> Swipe, pinch, and pull-to-refresh</li>
                <li><strong>Thumb Navigation:</strong> Place important actions within thumb reach</li>
                <li><strong>Haptic Feedback:</strong> Provide tactile responses where supported</li>
            </ul>
            
            <h3>2. Progressive Web App (PWA) Features</h3>
            <p>Leverage PWA capabilities for native-like experiences:</p>
            <ul>
                <li>Offline functionality with service workers</li>
                <li>App-like navigation and full-screen modes</li>
                <li>Push notifications for re-engagement</li>
                <li>Background sync for seamless data updates</li>
            </ul>
            
            <h3>3. Context-Aware Design</h3>
            <p>Adapt to mobile usage contexts:</p>
            <ul>
                <li><strong>Location-Based Features:</strong> Show relevant local content</li>
                <li><strong>Time-Sensitive Content:</strong> Prioritize urgent information</li>
                <li><strong>Connection Awareness:</strong> Adapt to network conditions</li>
                <li><strong>Device Capabilities:</strong> Utilize camera, GPS, and sensors</li>
            </ul>
            
            <h2>Performance Optimization Strategies</h2>
            
            <h3>Critical Rendering Path</h3>
            <p>Optimize for fast initial renders:</p>
            <pre><code>
// Inline critical CSS
&lt;style&gt;
    /* Critical above-the-fold styles */
    .hero { ... }
    .navigation { ... }
&lt;/style&gt;

// Lazy load non-critical resources
&lt;link rel="preload" href="fonts.woff2" as="font" crossorigin&gt;
&lt;link rel="prefetch" href="secondary-styles.css"&gt;
            </code></pre>
            
            <h3>Image Optimization</h3>
            <p>Deliver the right image for each context:</p>
            <ul>
                <li>Use WebP and AVIF formats with fallbacks</li>
                <li>Implement responsive images with srcset</li>
                <li>Lazy load images below the fold</li>
                <li>Optimize for different pixel densities</li>
            </ul>
            
            <h3>JavaScript Optimization</h3>
            <p>Minimize JavaScript impact on mobile:</p>
            <ul>
                <li>Code splitting and lazy loading</li>
                <li>Tree shaking to remove unused code</li>
                <li>Service worker caching strategies</li>
                <li>Intersection Observer for scroll-based features</li>
            </ul>
            
            <h2>Mobile-Specific UX Patterns</h2>
            
            <h3>Navigation Patterns</h3>
            <ul>
                <li><strong>Bottom Navigation:</strong> Thumb-friendly primary navigation</li>
                <li><strong>Hamburger Menu:</strong> For secondary navigation</li>
                <li><strong>Tab Bars:</strong> For switching between views</li>
                <li><strong>Floating Action Button:</strong> For primary actions</li>
            </ul>
            
            <h3>Input Optimization</h3>
            <p>Streamline form interactions:</p>
            <pre><code>
&lt;!-- Optimize keyboard types --&gt;
&lt;input type="tel" inputmode="numeric" pattern="[0-9]*"&gt;
&lt;input type="email" autocomplete="email"&gt;
&lt;input type="search" autocomplete="off"&gt;

&lt;!-- Use appropriate input attributes --&gt;
&lt;input autocapitalize="words" autocorrect="on"&gt;
&lt;textarea rows="3" placeholder="Tell us more..."&gt;&lt;/textarea&gt;
            </code></pre>
            
            <h2>Testing Mobile Experiences</h2>
            
            <h3>Device Testing</h3>
            <ul>
                <li>Test on real devices, not just simulators</li>
                <li>Include older devices with limited resources</li>
                <li>Test various screen sizes and orientations</li>
                <li>Verify touch interactions work smoothly</li>
            </ul>
            
            <h3>Network Conditions</h3>
            <ul>
                <li>Simulate slow 3G and offline conditions</li>
                <li>Test with throttled CPU and memory</li>
                <li>Verify graceful degradation</li>
                <li>Ensure content loads progressively</li>
            </ul>
            
            <h2>Future-Proofing Mobile Design</h2>
            
            <h3>Emerging Technologies</h3>
            <ul>
                <li><strong>Foldable Devices:</strong> Adaptive layouts for flexible screens</li>
                <li><strong>5G Networks:</strong> Richer content experiences</li>
                <li><strong>AR/VR Integration:</strong> Immersive mobile experiences</li>
                <li><strong>Voice Interfaces:</strong> Hands-free interactions</li>
            </ul>
            
            <h3>Accessibility Considerations</h3>
            <ul>
                <li>High contrast mode support</li>
                <li>Voice control compatibility</li>
                <li>Screen reader optimization</li>
                <li>Motor impairment accommodations</li>
            </ul>
            
            <p>The future of mobile-first design lies in creating experiences that feel natural on mobile devices while leveraging their unique capabilities. By thinking beyond responsive layouts and focusing on mobile-native interactions, performance, and context, we can create truly exceptional mobile experiences.</p>
        `,
        publishedDate: "2024-12-15",
        author: {
            name: "Alex Rivera",
            title: "Mobile UX Specialist",
            avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2"
        },
        category: "Design",
        tags: ["Mobile Design", "UX", "Performance", "Progressive Web Apps"],
        readTime: 13,
        featured: false,
        image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=800&q=80"
    }
];

export const blogCategories = [
  "All",
  "Design Trends",
  "Development", 
  "Marketing",
  "Branding",
  "Design"
];

export const featuredPosts = blogPosts.filter(post => post.featured);

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find(post => post.slug === slug) || null;
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter(post => post.category === category);
}

export function getRelatedPosts(currentPostId: string, limit: number = 3): BlogPost[] {
  const currentPost = blogPosts.find(post => post.id === currentPostId);
  if (!currentPost) return [];
  
  return blogPosts
    .filter(post => 
      post.id !== currentPostId && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}
