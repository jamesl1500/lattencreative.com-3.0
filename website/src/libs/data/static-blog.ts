/**
 * Static Blog Data
 * Complete blog information without API dependencies
 */

// Types (keeping the same structure as blog.ts)
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
  tags: string[] | string;
  readTime: number; // in minutes
  featured: boolean;
  image?: string; // Simplified to just string for static data
}

// Static Blog Data
export const STATIC_BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Design: Trends to Watch in 2025",
    slug: "future-web-design-trends-2025",
    description: "Explore the cutting-edge design trends that will shape the digital landscape in 2025, from AI-driven personalization to immersive user experiences.",
    content: `# The Future of Web Design: Trends to Watch in 2025

As we move into 2025, the web design landscape continues to evolve at an unprecedented pace. The intersection of artificial intelligence, advanced user experience principles, and emerging technologies is creating exciting opportunities for designers and businesses alike.

## 1. AI-Driven Personalization

Artificial intelligence is revolutionizing how we approach web design. In 2025, we're seeing websites that adapt in real-time to user preferences, behavior patterns, and even emotional states. This goes beyond simple A/B testing – we're talking about dynamic content, layout adjustments, and personalized user journeys that feel almost magical.

### Key Benefits:
- **Increased engagement** through relevant content
- **Higher conversion rates** with personalized experiences  
- **Reduced bounce rates** as users find exactly what they need
- **Better accessibility** with AI-powered adaptive interfaces

## 2. Immersive 3D Experiences

WebGL and Three.js have matured to the point where rich 3D experiences are not just possible but practical for everyday websites. From interactive product showcases to virtual showrooms, 3D elements are becoming a standard expectation rather than a luxury.

### Implementation Considerations:
- **Performance optimization** for mobile devices
- **Progressive enhancement** for older browsers
- **Accessibility compliance** for 3D interactions
- **SEO implications** of heavily visual content

## 3. Voice User Interface Integration

With the proliferation of voice assistants and smart devices, websites are beginning to incorporate voice navigation and interaction. This trend is particularly important for accessibility and hands-free browsing scenarios.

## 4. Sustainable Web Design

Environmental consciousness is driving a movement toward more efficient, sustainable web design practices. This includes optimizing for lower energy consumption, reducing data transfer, and considering the carbon footprint of digital experiences.

### Sustainable Practices:
- Optimized images and compressed assets
- Efficient coding practices
- Green hosting solutions
- Minimal design approaches

## 5. Advanced Micro-Interactions

Micro-interactions are becoming more sophisticated, providing meaningful feedback and creating delightful user experiences. From subtle hover effects to complex state transitions, these small details make a big difference in user engagement.

## Conclusion

The future of web design is bright and full of possibilities. As designers and developers, our challenge is to balance innovation with usability, ensuring that new technologies serve real user needs rather than just showcasing technical capabilities.

Stay tuned for more insights on web design trends, and don't hesitate to reach out if you'd like to discuss how these trends might apply to your next project.`,
    publishedDate: "2024-11-01T10:00:00.000Z",
    author: {
      name: "James Latten",
      title: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    category: "Design Trends",
    tags: ["web design", "trends", "2025", "AI", "UX"],
    readTime: 8,
    featured: true,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "2", 
    title: "Building High-Performance React Applications",
    slug: "building-high-performance-react-applications",
    description: "Learn essential techniques for optimizing React applications, from code splitting to performance monitoring.",
    content: `# Building High-Performance React Applications

Performance is crucial for modern web applications. Users expect fast, responsive experiences, and search engines reward optimized sites with better rankings. In this comprehensive guide, we'll explore proven strategies for building lightning-fast React applications.

## 1. Code Splitting and Lazy Loading

One of the most effective ways to improve initial load times is through code splitting. By breaking your application into smaller chunks and loading them on demand, you can significantly reduce the time to first meaningful paint.

### React.lazy() and Suspense

\`\`\`jsx
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
\`\`\`

## 2. Memoization Strategies

React provides several tools for preventing unnecessary re-renders:

### React.memo()
Wrap functional components to prevent re-renders when props haven't changed.

### useMemo() and useCallback()
Optimize expensive calculations and function references.

\`\`\`jsx
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## 3. Virtual Scrolling

For large lists, implement virtual scrolling to render only visible items:

\`\`\`jsx
import { FixedSizeList as List } from 'react-window';

const VirtualizedList = ({ items }) => (
  <List
    height={600}
    itemCount={items.length}
    itemSize={35}
  >
    {({ index, style }) => (
      <div style={style}>
        {items[index]}
      </div>
    )}
  </List>
);
\`\`\`

## 4. Bundle Analysis and Optimization

Regularly analyze your bundle size using tools like:
- webpack-bundle-analyzer
- Bundle Buddy
- Source Map Explorer

## 5. Performance Monitoring

Implement performance monitoring to catch regressions:
- Core Web Vitals tracking
- Real User Monitoring (RUM)
- Error boundary implementation

## Conclusion

Performance optimization is an ongoing process. Start with the techniques that provide the biggest impact for your specific use case, and always measure the results of your optimizations.

Remember: premature optimization is the root of all evil, but planned optimization is the key to success.`,
    publishedDate: "2024-10-28T14:30:00.000Z",
    author: {
      name: "James Latten",
      title: "Lead Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    category: "Development",
    tags: ["React", "performance", "optimization", "JavaScript"],
    readTime: 12,
    featured: true,
    image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "3",
    title: "Digital Marketing Strategies That Actually Work",
    slug: "digital-marketing-strategies-that-work",
    description: "Cut through the noise with proven digital marketing strategies that drive real results for businesses of all sizes.",
    content: `# Digital Marketing Strategies That Actually Work

In today's crowded digital landscape, it's easy to get overwhelmed by the sheer number of marketing channels and tactics available. The key is focusing on strategies that deliver measurable results rather than chasing every new trend.

## 1. Content Marketing with Purpose

Content marketing isn't just about creating blog posts – it's about providing genuine value to your audience at every stage of their journey.

### The AIDA Framework for Content:
- **Attention**: Eye-catching headlines and compelling hooks
- **Interest**: Valuable, relevant information
- **Desire**: Clear benefits and social proof
- **Action**: Strong, specific calls-to-action

### Content Types That Convert:
- Educational blog posts and tutorials
- Case studies showcasing real results
- Interactive tools and calculators
- Video content and webinars
- Email newsletters with exclusive insights

## 2. Search Engine Optimization (SEO)

SEO remains one of the highest ROI marketing channels when done correctly. Focus on:

### Technical SEO Foundations:
- Fast loading speeds (Core Web Vitals)
- Mobile-friendly responsive design
- Secure HTTPS implementation
- Clean URL structure and site architecture

### Content SEO Strategy:
- Keyword research based on user intent
- High-quality, comprehensive content
- Regular content updates and optimization
- Internal linking strategy

### Local SEO (for local businesses):
- Google My Business optimization
- Local citation building
- Customer review management
- Location-specific content creation

## 3. Social Media Marketing

Effective social media marketing is about building relationships, not just broadcasting messages.

### Platform-Specific Strategies:

**LinkedIn** (B2B focus):
- Professional insights and industry commentary
- Company culture and behind-the-scenes content
- Employee advocacy programs
- Thought leadership articles

**Instagram** (Visual storytelling):
- High-quality visual content
- Stories and Reels for engagement
- User-generated content campaigns
- Influencer partnerships

**Facebook** (Community building):
- Groups and community management
- Event promotion and live streaming
- Targeted advertising campaigns
- Customer service and support

## 4. Email Marketing

Despite being one of the oldest digital marketing channels, email continues to deliver exceptional ROI.

### Effective Email Strategies:
- Segmented subscriber lists
- Personalized content and offers
- Automated drip campaigns
- A/B testing for optimization
- Mobile-optimized templates

### Email Types That Work:
- Welcome series for new subscribers
- Educational newsletters
- Product announcements and updates
- Abandoned cart recovery emails
- Customer testimonials and case studies

## 5. Paid Advertising

When organic reach isn't enough, strategic paid advertising can accelerate your results.

### Google Ads Best Practices:
- Thorough keyword research
- Compelling ad copy with clear CTAs
- Landing page optimization
- Regular bid and budget management
- Conversion tracking and attribution

### Social Media Advertising:
- Detailed audience targeting
- Engaging visual and video content
- Retargeting campaigns
- Lookalike audience development
- Performance monitoring and optimization

## 6. Analytics and Measurement

What gets measured gets managed. Establish clear KPIs and tracking systems:

### Key Metrics to Track:
- Website traffic and user behavior
- Conversion rates and attribution
- Customer acquisition cost (CAC)
- Customer lifetime value (CLV)
- Return on ad spend (ROAS)

### Tools for Measurement:
- Google Analytics 4
- Social media platform analytics
- Email marketing platform reports
- CRM and sales data
- Heat mapping and user session recordings

## Conclusion

Successful digital marketing isn't about using every available channel – it's about understanding your audience, choosing the right strategies for your business, and executing them consistently.

Start with one or two channels, master them, then expand your efforts. Remember, it's better to do a few things exceptionally well than many things poorly.

Focus on providing value, building relationships, and measuring results. The rest will follow.`,
    publishedDate: "2024-10-25T09:15:00.000Z",
    author: {
      name: "James Latten",
      title: "Marketing Strategist",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    category: "Marketing",
    tags: ["digital marketing", "SEO", "content marketing", "social media"],
    readTime: 15,
    featured: false,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "4",
    title: "Brand Identity Design: Creating Memorable Visual Stories",
    slug: "brand-identity-design-visual-stories",
    description: "Discover how to create compelling brand identities that resonate with your target audience and stand out in competitive markets.",
    content: `# Brand Identity Design: Creating Memorable Visual Stories

Your brand identity is more than just a logo – it's the visual representation of your company's values, personality, and promise to customers. In today's competitive marketplace, a well-crafted brand identity can be the difference between being remembered or forgotten.

## Understanding Brand Identity vs. Branding

Before diving into design principles, it's important to understand the distinction:

- **Brand Identity**: The visual elements (logo, colors, typography, imagery)
- **Branding**: The overall experience and perception customers have of your company
- **Brand Strategy**: The plan for developing and positioning your brand

## The Foundation: Brand Strategy

Great brand identity design starts with solid strategy:

### 1. Define Your Brand Purpose
- Why does your company exist?
- What problem do you solve?
- What values drive your decisions?

### 2. Understand Your Audience
- Who are your ideal customers?
- What are their pain points and desires?
- How do they currently perceive your industry?

### 3. Analyze Your Competition
- What visual approaches are competitors using?
- Where are the opportunities to differentiate?
- What gaps exist in the market positioning?

### 4. Define Your Brand Personality
Choose 3-5 personality traits that define your brand:
- Professional vs. Playful
- Traditional vs. Innovative
- Luxurious vs. Accessible
- Bold vs. Subtle

## Visual Identity Elements

### Logo Design Principles

Your logo should be:
- **Simple**: Easy to recognize and remember
- **Scalable**: Legible at any size
- **Timeless**: Won't look dated in 5-10 years
- **Appropriate**: Fits your industry and audience
- **Distinctive**: Stands out from competitors

### Color Psychology in Branding

Colors evoke emotional responses:
- **Blue**: Trust, reliability, professionalism
- **Red**: Energy, passion, urgency
- **Green**: Growth, nature, harmony
- **Purple**: Luxury, creativity, wisdom
- **Orange**: Enthusiasm, friendliness, affordability
- **Black**: Sophistication, power, elegance

### Typography Selection

Choose fonts that reinforce your brand personality:
- **Sans-serif**: Modern, clean, approachable
- **Serif**: Traditional, reliable, authoritative  
- **Script**: Elegant, personal, creative
- **Display**: Unique, attention-grabbing, playful

## Creating a Cohesive Brand System

### Brand Guidelines Document

Your brand guidelines should include:
- Logo usage rules and variations
- Color palette with specific values (HEX, RGB, CMYK)
- Typography hierarchy and usage
- Imagery style and guidelines
- Voice and tone guidelines
- Do's and don'ts with examples

### Applying Your Identity

Consistent application across all touchpoints:
- **Digital**: Website, social media, email signatures
- **Print**: Business cards, brochures, packaging
- **Environmental**: Signage, trade show displays
- **Apparel**: Uniforms, promotional items

## Common Brand Identity Mistakes

### 1. Following Trends Too Closely
While it's important to feel current, avoid trends that will quickly date your brand.

### 2. Inconsistent Application
Your brand should look and feel the same across all channels and materials.

### 3. Copying Competitors
Standing out requires differentiation, not imitation.

### 4. Neglecting Scalability
Ensure your identity works across all sizes and applications.

### 5. Ignoring Your Audience
Beautiful design means nothing if it doesn't resonate with your target market.

## The Design Process

### 1. Research and Discovery (1-2 weeks)
- Stakeholder interviews
- Audience research
- Competitive analysis
- Brand strategy development

### 2. Concept Development (1-2 weeks)
- Mood boarding
- Sketching and ideation
- Initial digital concepts
- Refinement and iteration

### 3. Design Refinement (1 week)
- Color exploration
- Typography selection
- Application testing
- Stakeholder feedback

### 4. Finalization and Guidelines (1 week)
- Final file preparation
- Brand guidelines creation
- Asset organization
- Launch preparation

## Measuring Brand Identity Success

Track these metrics to gauge effectiveness:
- **Brand Recognition**: Unaided and aided recall surveys
- **Brand Perception**: Customer sentiment analysis
- **Engagement Metrics**: Social media and website analytics
- **Business Impact**: Lead generation and conversion rates

## Evolution vs. Revolution

Your brand identity will need updates over time, but consider:
- **Evolution**: Gradual refinements that maintain equity
- **Revolution**: Complete redesign when repositioning

Most successful brands evolve gradually, preserving the equity built over time while staying relevant.

## Conclusion

Creating a memorable brand identity requires strategic thinking, creative execution, and consistent application. It's an investment in your company's future – one that pays dividends through increased recognition, customer loyalty, and business growth.

Remember: your brand identity is not just what you say about yourself, but what others experience when they interact with your company. Make every touchpoint count.`,
    publishedDate: "2024-10-22T11:45:00.000Z",
    author: {
      name: "James Latten",
      title: "Brand Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    category: "Branding",
    tags: ["branding", "logo design", "visual identity", "brand strategy"],
    readTime: 18,
    featured: true,
    image: "https://images.unsplash.com/photo-1611784728558-6c7d9b409cdf?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "5",
    title: "The Complete Guide to Website Accessibility",
    slug: "complete-guide-website-accessibility",
    description: "Learn how to make your websites accessible to all users, including those with disabilities, while improving SEO and user experience for everyone.",
    content: `# The Complete Guide to Website Accessibility

Web accessibility ensures that websites and digital tools are usable by people with disabilities. It's not just the right thing to do – it's often legally required and always good for business. Accessible websites reach wider audiences, rank better in search engines, and provide better user experiences for everyone.

## Why Accessibility Matters

### Legal Requirements
- **ADA compliance** in the United States
- **WCAG 2.1 AA** as the international standard
- **European Accessibility Act** coming in 2025
- Increasing litigation around inaccessible websites

### Business Benefits
- **Larger market reach**: 15% of the global population has some form of disability
- **Better SEO**: Many accessibility practices improve search rankings
- **Improved usability**: Accessible design benefits all users
- **Enhanced reputation**: Shows social responsibility

### The Moral Imperative
Everyone deserves equal access to information and functionality on the web.

## Understanding WCAG 2.1 Guidelines

The Web Content Accessibility Guidelines (WCAG) are organized around four principles:

### 1. Perceivable
Information must be presentable in ways users can perceive.

**Key Requirements:**
- Text alternatives for images
- Captions for videos
- Sufficient color contrast
- Resizable text up to 200%

### 2. Operable
Interface components must be operable by all users.

**Key Requirements:**
- Keyboard navigation support
- No seizure-inducing content
- Sufficient time to read content
- Clear navigation and structure

### 3. Understandable
Information and UI operation must be understandable.

**Key Requirements:**
- Readable and understandable text
- Predictable functionality
- Input assistance and error identification

### 4. Robust
Content must be robust enough for interpretation by assistive technologies.

**Key Requirements:**
- Valid HTML markup
- Compatible with screen readers
- Future-proof implementation

## Common Accessibility Issues and Solutions

### 1. Images Without Alt Text

**Problem**: Screen readers can't describe images without alternative text.

**Solution**: Add meaningful alt attributes to all images:

\`\`\`html
<!-- Good -->
<img src="chart.png" alt="Sales increased 25% from Q1 to Q2 2024">

<!-- Bad -->
<img src="chart.png" alt="chart">

<!-- Decorative images -->
<img src="decoration.png" alt="" role="presentation">
\`\`\`

### 2. Poor Color Contrast

**Problem**: Low contrast makes text difficult to read.

**Solution**: Ensure minimum contrast ratios:
- Normal text: 4.5:1
- Large text: 3:1
- Non-text elements: 3:1

**Tools for Testing:**
- WebAIM Contrast Checker
- Colour Contrast Analyser
- Browser developer tools

### 3. Missing Form Labels

**Problem**: Screen readers can't identify form inputs without proper labels.

**Solution**: Associate labels with form controls:

\`\`\`html
<!-- Good -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required>

<!-- Also good -->
<label>
  Email Address
  <input type="email" name="email" required>
</label>
\`\`\`

### 4. Keyboard Navigation Issues

**Problem**: Users can't navigate without a mouse.

**Solution**: Ensure all interactive elements are keyboard accessible:

\`\`\`css
/* Visible focus indicators */
button:focus,
a:focus,
input:focus {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

/* Skip links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
\`\`\`

### 5. Missing Heading Structure

**Problem**: Screen reader users rely on headings for navigation.

**Solution**: Use proper heading hierarchy:

\`\`\`html
<h1>Page Title</h1>
  <h2>Main Section</h2>
    <h3>Subsection</h3>
    <h3>Another Subsection</h3>
  <h2>Another Main Section</h2>
\`\`\`

## Implementing Accessibility

### 1. HTML Semantic Structure

Use semantic HTML elements:

\`\`\`html
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
</main>

<aside>
  <h2>Related Links</h2>
  <!-- sidebar content -->
</aside>

<footer>
  <!-- footer content -->
</footer>
\`\`\`

### 2. ARIA (Accessible Rich Internet Applications)

Enhance complex interactions with ARIA:

\`\`\`html
<!-- Expandable content -->
<button aria-expanded="false" aria-controls="menu">
  Menu
</button>
<ul id="menu" aria-hidden="true">
  <!-- menu items -->
</ul>

<!-- Live regions for dynamic content -->
<div aria-live="polite" id="status"></div>

<!-- Form validation -->
<input 
  type="email" 
  aria-describedby="email-error"
  aria-invalid="true"
>
<div id="email-error" role="alert">
  Please enter a valid email address
</div>
\`\`\`

### 3. Focus Management

Manage focus for single-page applications:

\`\`\`javascript
// When navigating to new content
function navigateToPage(pageContent) {
  // Update content
  document.getElementById('main').innerHTML = pageContent;
  
  // Move focus to main heading
  const mainHeading = document.querySelector('main h1');
  if (mainHeading) {
    mainHeading.focus();
    mainHeading.scrollIntoView();
  }
}
\`\`\`

## Testing for Accessibility

### Automated Testing Tools
- **axe-core**: Browser extension and API
- **WAVE**: Web accessibility evaluation tool
- **Lighthouse**: Built into Chrome DevTools
- **Pa11y**: Command line testing tool

### Manual Testing Checklist
1. **Keyboard navigation**: Tab through entire page
2. **Screen reader testing**: Use NVDA, JAWS, or VoiceOver
3. **Color contrast**: Check all text/background combinations
4. **Zoom testing**: Ensure usability at 200% zoom
5. **Focus indicators**: Verify visible focus states

### User Testing
Include users with disabilities in your testing process:
- Recruit through disability organizations
- Provide assistive technology if needed
- Focus on real-world usage scenarios
- Compensate participants fairly

## Accessibility in Different Contexts

### E-commerce
- Accessible product filters and search
- Clear pricing and shipping information
- Streamlined checkout process
- Order confirmation and tracking

### Forms
- Clear labels and instructions
- Error handling and validation
- Progress indicators for multi-step forms
- Recovery mechanisms for timeouts

### Media Content
- Video captions and transcripts
- Audio descriptions for visual content
- Accessible media players
- Alternative formats when possible

## Common Mistakes to Avoid

1. **Treating accessibility as an afterthought**
2. **Relying only on automated testing**
3. **Using placeholder text as labels**
4. **Removing focus indicators for aesthetic reasons**
5. **Creating custom controls without proper ARIA**
6. **Assuming accessibility is expensive or difficult**

## Getting Started: Quick Wins

1. **Add alt text** to all images
2. **Ensure keyboard navigation** works everywhere
3. **Check color contrast** and fix failing combinations
4. **Add proper headings** with logical hierarchy
5. **Label all form inputs** clearly
6. **Test with keyboard only** navigation

## Building an Accessibility Culture

### Team Education
- Regular accessibility training
- Including accessibility in design reviews
- Making it part of definition of done
- Celebrating accessibility improvements

### Process Integration
- Accessibility requirements in user stories
- Automated testing in CI/CD pipeline
- Regular accessibility audits
- User feedback mechanisms

## Conclusion

Web accessibility is not a destination but a journey. Start with the basics, build awareness in your team, and gradually improve your processes and skills.

Remember: accessible design is simply good design. When you design for people with disabilities, you create better experiences for everyone.

The web should be accessible to all – let's make it happen, one website at a time.`,
    publishedDate: "2024-10-20T08:30:00.000Z",
    author: {
      name: "James Latten",
      title: "UX Designer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    category: "Design",
    tags: ["accessibility", "UX", "web standards", "inclusive design"],
    readTime: 22,
    featured: false,
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200"
  }
];

/**
 * Blog Categories
 */
export const blogCategories = [
  "All",
  "Design Trends", 
  "Development",
  "Marketing",
  "Branding",
  "Design",
];

// Helper functions
export const getImageUrl = (image: string | undefined): string => {
  return image || '';
};

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  return STATIC_BLOG_POSTS;
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const post = STATIC_BLOG_POSTS.find(p => p.slug === slug);
  return post || null;
};

export const getBlogPostsByCategory = async (category: string): Promise<BlogPost[]> => {
  if (category === "All") return STATIC_BLOG_POSTS;
  return STATIC_BLOG_POSTS.filter(post => post.category === category);
};

export const getRelatedPosts = async (currentPostId: string, limit: number = 3): Promise<BlogPost[]> => {
  const currentPost = STATIC_BLOG_POSTS.find(post => post.id === currentPostId);
  if (!currentPost) return [];

  return STATIC_BLOG_POSTS
    .filter(post => {
      const postTags = Array.isArray(post.tags) 
        ? post.tags 
        : (post.tags as string).split(",").map(tag => tag.trim());
      const currentPostTags = Array.isArray(currentPost.tags)
        ? currentPost.tags
        : (currentPost.tags as string).split(",").map(tag => tag.trim());

      return (
        post.id !== currentPostId &&
        (post.category === currentPost.category ||
          postTags.some(tag => currentPostTags.includes(tag)))
      );
    })
    .slice(0, limit);
};

export const getBlogPostPaths = async (): Promise<string[]> => {
  return STATIC_BLOG_POSTS.map(post => post.slug);
};

export const getFeaturedBlogPosts = async (limit: number = 3): Promise<BlogPost[]> => {
  return STATIC_BLOG_POSTS.filter(post => post.featured).slice(0, limit);
};