import type { Metadata } from "next";
import { generatePageMetadata } from "../../libs/metadata";

export const metadata: Promise<Metadata> = generatePageMetadata({
  title: "Privacy Policy | Latten Creative",
  description:
    "Learn how Latten Creative collects, uses, and protects your personal information. Read our comprehensive privacy policy for complete details.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "cookies",
    "privacy",
  ],
  canonicalPath: "/privacy-policy",
});

export default function PrivacyPolicy() {
  return (
    <div className="page page-privacy">
      <div className="page-inner">
        {/* Hero Section */}
        <div className="page-hero">
          <div className="page-hero-inner container">
            <h1>Privacy Policy</h1>
            <p className="hero-subtitle">
              Your privacy is important to us. This policy outlines how we
              collect, use, and protect your personal information.
            </p>
            <div className="legal-notice">
              <p>
                <strong>Last Updated:</strong> October 29, 2025
              </p>
            </div>
          </div>
        </div>

        <div className="page-content">
          <div className="page-section">
            <div className="page-section-inner container">
              <div className="legal-content">
                {/* Introduction */}
                <div className="legal-section">
                  <h2>1. Introduction</h2>
                  <p>
                    Welcome to Latten Creative ("we," "us," or "our"). This
                    Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you visit our website
                    lattencreative.com and use our services.
                  </p>
                  <p>
                    Please read this privacy policy carefully. If you do not
                    agree with the terms of this privacy policy, please do not
                    access or use our website or services.
                  </p>
                </div>

                {/* Information We Collect */}
                <div className="legal-section">
                  <h2>2. Information We Collect</h2>

                  <h3>2.1 Personal Information</h3>
                  <p>
                    We may collect personal information that you voluntarily
                    provide to us when you:
                  </p>
                  <ul>
                    <li>Contact us through our contact forms</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Request a quote or consultation</li>
                    <li>Create an account on our website</li>
                    <li>Engage with our services</li>
                  </ul>
                  <p>This information may include:</p>
                  <ul>
                    <li>
                      Name and contact information (email address, phone number,
                      mailing address)
                    </li>
                    <li>
                      Business information (company name, job title, industry)
                    </li>
                    <li>Project requirements and preferences</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3>2.2 Automatically Collected Information</h3>
                  <p>
                    When you visit our website, we may automatically collect
                    certain information, including:
                  </p>
                  <ul>
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website addresses</li>
                    <li>Device information</li>
                  </ul>

                  <h3>2.3 Cookies and Tracking Technologies</h3>
                  <p>
                    We use cookies and similar tracking technologies to enhance
                    your experience on our website. Cookies are small files that
                    a site or its service provider transfers to your computer's
                    hard drive through your web browser that enables the site's
                    systems to recognize your browser and capture certain
                    information.
                  </p>
                </div>

                {/* How We Use Your Information */}
                <div className="legal-section">
                  <h2>3. How We Use Your Information</h2>
                  <p>
                    We may use the information we collect for various purposes,
                    including:
                  </p>
                  <ul>
                    <li>
                      Providing, operating, and maintaining our website and
                      services
                    </li>
                    <li>
                      Improving, personalizing, and expanding our website and
                      services
                    </li>
                    <li>Understanding and analyzing how you use our website</li>
                    <li>
                      Developing new products, services, features, and
                      functionality
                    </li>
                    <li>
                      Communicating with you for customer service, updates,
                      marketing, or promotional purposes
                    </li>
                    <li>
                      Processing your transactions and managing your orders
                    </li>
                    <li>
                      Sending you newsletters and marketing communications (with
                      your consent)
                    </li>
                    <li>Finding and preventing fraud</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </div>

                {/* Information Sharing */}
                <div className="legal-section">
                  <h2>4. How We Share Your Information</h2>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties without your consent, except as
                    described in this privacy policy:
                  </p>

                  <h3>4.1 Service Providers</h3>
                  <p>
                    We may share your information with third-party service
                    providers who assist us in operating our website, conducting
                    our business, or providing services to you, such as:
                  </p>
                  <ul>
                    <li>Web hosting providers</li>
                    <li>Email service providers</li>
                    <li>Analytics services</li>
                    <li>Payment processors</li>
                    <li>Customer support platforms</li>
                  </ul>

                  <h3>4.2 Legal Requirements</h3>
                  <p>
                    We may disclose your information if required to do so by law
                    or in response to:
                  </p>
                  <ul>
                    <li>A subpoena, court order, or legal process</li>
                    <li>
                      A request from law enforcement or government agencies
                    </li>
                    <li>
                      When we believe disclosure is necessary to protect our
                      rights, property, or safety
                    </li>
                    <li>To enforce our terms of service</li>
                  </ul>

                  <h3>4.3 Business Transfers</h3>
                  <p>
                    In the event of a merger, acquisition, or sale of all or a
                    portion of our assets, your information may be transferred
                    as part of that transaction.
                  </p>
                </div>

                {/* Data Security */}
                <div className="legal-section">
                  <h2>5. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational
                    security measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or
                    destruction. These measures include:
                  </p>
                  <ul>
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Secure hosting and data storage</li>
                    <li>Regular backup and recovery procedures</li>
                  </ul>
                  <p>
                    However, please note that no method of transmission over the
                    internet or electronic storage is 100% secure, and we cannot
                    guarantee absolute security.
                  </p>
                </div>

                {/* Data Retention */}
                <div className="legal-section">
                  <h2>6. Data Retention</h2>
                  <p>
                    We will retain your personal information only for as long as
                    necessary to fulfill the purposes outlined in this privacy
                    policy, unless a longer retention period is required or
                    permitted by law. When we no longer need your personal
                    information, we will securely delete or anonymize it.
                  </p>
                  <p>
                    Retention periods vary depending on the type of information:
                  </p>
                  <ul>
                    <li>Contact form submissions: 2 years</li>
                    <li>Newsletter subscriptions: Until you unsubscribe</li>
                    <li>
                      Client project data: 7 years after project completion
                    </li>
                    <li>Website analytics data: 26 months</li>
                  </ul>
                </div>

                {/* Your Rights */}
                <div className="legal-section">
                  <h2>7. Your Rights</h2>
                  <p>
                    Depending on your location, you may have certain rights
                    regarding your personal information:
                  </p>

                  <h3>7.1 Access and Portability</h3>
                  <p>
                    You have the right to request access to the personal
                    information we hold about you and to receive a copy of this
                    information in a portable format.
                  </p>

                  <h3>7.2 Rectification</h3>
                  <p>
                    You have the right to request that we correct any inaccurate
                    or incomplete personal information.
                  </p>

                  <h3>7.3 Erasure</h3>
                  <p>
                    You have the right to request that we delete your personal
                    information under certain circumstances.
                  </p>

                  <h3>7.4 Restriction</h3>
                  <p>
                    You have the right to request that we restrict the
                    processing of your personal information under certain
                    circumstances.
                  </p>

                  <h3>7.5 Objection</h3>
                  <p>
                    You have the right to object to our processing of your
                    personal information for direct marketing purposes.
                  </p>

                  <h3>7.6 Withdraw Consent</h3>
                  <p>
                    Where we rely on your consent to process your personal
                    information, you have the right to withdraw that consent at
                    any time.
                  </p>

                  <p>
                    To exercise any of these rights, please contact us using the
                    information provided at the end of this policy.
                  </p>
                </div>

                {/* Cookies Policy */}
                <div className="legal-section">
                  <h2>8. Cookies Policy</h2>

                  <h3>8.1 What Are Cookies</h3>
                  <p>
                    Cookies are small text files that are placed on your device
                    when you visit our website. They help us provide you with a
                    better experience by remembering your preferences and
                    understanding how you use our site.
                  </p>

                  <h3>8.2 Types of Cookies We Use</h3>
                  <ul>
                    <li>
                      <strong>Essential Cookies:</strong> Required for the
                      website to function properly
                    </li>
                    <li>
                      <strong>Performance Cookies:</strong> Help us understand
                      how visitors interact with our website
                    </li>
                    <li>
                      <strong>Functionality Cookies:</strong> Remember your
                      preferences and settings
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> Used to deliver
                      relevant advertisements (with your consent)
                    </li>
                  </ul>

                  <h3>8.3 Managing Cookies</h3>
                  <p>
                    You can control and manage cookies in your browser settings.
                    Please note that disabling certain cookies may affect the
                    functionality of our website.
                  </p>
                </div>

                {/* Third-Party Services */}
                <div className="legal-section">
                  <h2>9. Third-Party Services</h2>
                  <p>
                    Our website may contain links to third-party websites or
                    integrate with third-party services, including:
                  </p>
                  <ul>
                    <li>Google Analytics for website analytics</li>
                    <li>Social media platforms</li>
                    <li>Payment processors</li>
                    <li>Email marketing services</li>
                  </ul>
                  <p>
                    These third parties have their own privacy policies, and we
                    are not responsible for their practices. We encourage you to
                    read their privacy policies before providing any
                    information.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div className="legal-section">
                  <h2>10. Children's Privacy</h2>
                  <p>
                    Our services are not intended for children under the age of
                    13. We do not knowingly collect personal information from
                    children under 13. If we become aware that we have collected
                    personal information from a child under 13, we will take
                    steps to delete such information promptly.
                  </p>
                </div>

                {/* International Data Transfers */}
                <div className="legal-section">
                  <h2>11. International Data Transfers</h2>
                  <p>
                    Your information may be transferred to and processed in
                    countries other than your country of residence. We ensure
                    that such transfers are conducted in accordance with
                    applicable data protection laws and that appropriate
                    safeguards are in place to protect your information.
                  </p>
                </div>

                {/* Updates to This Policy */}
                <div className="legal-section">
                  <h2>12. Updates to This Privacy Policy</h2>
                  <p>
                    We may update this privacy policy from time to time to
                    reflect changes in our practices or for other operational,
                    legal, or regulatory reasons. We will notify you of any
                    material changes by posting the updated privacy policy on
                    our website and updating the "Last Updated" date at the top
                    of this policy.
                  </p>
                  <p>
                    We encourage you to review this privacy policy periodically
                    to stay informed about how we protect your information.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="legal-section">
                  <h2>13. Contact Us</h2>
                  <p>
                    If you have any questions, concerns, or requests regarding
                    this privacy policy or our data practices, please contact
                    us:
                  </p>
                  <div className="contact-info">
                    <p>
                      <strong>Latten Creative</strong>
                      <br />
                      Email: hello@lattencreative.com
                      <br />
                      Website: lattencreative.com
                      <br />
                    </p>
                    <p>
                      For data protection inquiries specifically, you can also
                      contact our Data Protection Officer at:
                      dpo@lattencreative.com
                    </p>
                  </div>
                </div>

                {/* Compliance */}
                <div className="legal-section">
                  <h2>14. Compliance</h2>
                  <p>
                    This privacy policy is designed to comply with applicable
                    data protection laws, including:
                  </p>
                  <ul>
                    <li>General Data Protection Regulation (GDPR)</li>
                    <li>California Consumer Privacy Act (CCPA)</li>
                    <li>Children's Online Privacy Protection Act (COPPA)</li>
                    <li>
                      Other applicable local and international privacy laws
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
