import type { Metadata } from "next";
import { generatePageMetadata } from "../../libs/metadata";

export const metadata: Promise<Metadata> = generatePageMetadata({
  title: "Terms of Service | Latten Creative",
  description: "Read our terms of service to understand the rules and conditions that govern your use of Latten Creative's website and services.",
  keywords: ["terms of service", "legal", "conditions", "agreement", "website terms"],
  canonicalPath: "/terms",
});

export default function Terms() {
  return (
    <div className="page page-terms">
      <div className="page-inner">
        {/* Hero Section */}
        <div className="page-hero">
          <div className="page-hero-inner container">
            <h1>Terms of Service</h1>
            <p className="hero-subtitle">
              Please read these terms carefully before using our website and services.
            </p>
            <div className="legal-notice">
              <p><strong>Last Updated:</strong> October 29, 2025</p>
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
                    Welcome to Latten Creative ("we," "us," or "our"). These Terms of Service ("Terms") 
                    govern your use of our website located at lattencreative.com and our services 
                    (collectively, the "Service") operated by Latten Creative.
                  </p>
                  <p>
                    By accessing or using our Service, you agree to be bound by these Terms. If you 
                    disagree with any part of these terms, then you may not access the Service.
                  </p>
                </div>

                {/* Acceptance of Terms */}
                <div className="legal-section">
                  <h2>2. Acceptance of Terms</h2>
                  <p>
                    By accessing and using this website, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please 
                    do not use this service.
                  </p>
                </div>

                {/* Use License */}
                <div className="legal-section">
                  <h2>3. Use License</h2>
                  <p>
                    Permission is granted to temporarily download one copy of the materials on Latten 
                    Creative's website for personal, non-commercial transitory viewing only. This is the 
                    grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul>
                    <li>modify or copy the materials;</li>
                    <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
                    <li>attempt to decompile or reverse engineer any software contained on Latten Creative's website;</li>
                    <li>remove any copyright or other proprietary notations from the materials.</li>
                  </ul>
                  <p>
                    This license shall automatically terminate if you violate any of these restrictions 
                    and may be terminated by Latten Creative at any time. Upon terminating your viewing 
                    of these materials or upon the termination of this license, you must destroy any 
                    downloaded materials in your possession whether in electronic or printed format.
                  </p>
                </div>

                {/* Services */}
                <div className="legal-section">
                  <h2>4. Services</h2>
                  <p>
                    Latten Creative provides web design, web development, digital marketing, and related 
                    digital services. All services are subject to availability and may be modified or 
                    discontinued at any time without notice.
                  </p>
                  <p>
                    Service agreements are established through separate contracts or statements of work, 
                    which will include specific terms, deliverables, timelines, and payment terms for 
                    each project.
                  </p>
                </div>

                {/* User Accounts */}
                <div className="legal-section">
                  <h2>5. User Accounts</h2>
                  <p>
                    When you create an account with us, you must provide information that is accurate, 
                    complete, and current at all times. You are responsible for safeguarding the password 
                    and for all activities that occur under your account.
                  </p>
                  <p>
                    You agree not to disclose your password to any third party and to take sole responsibility 
                    for any activities or actions under your account, whether or not you have authorized 
                    such activities or actions.
                  </p>
                </div>

                {/* Prohibited Uses */}
                <div className="legal-section">
                  <h2>6. Prohibited Uses</h2>
                  <p>You may not use our Service:</p>
                  <ul>
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                    <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                    <li>For any obscene or immoral purpose</li>
                    <li>To interfere with or circumvent the security features of the Service</li>
                  </ul>
                </div>

                {/* Content */}
                <div className="legal-section">
                  <h2>7. Content</h2>
                  <p>
                    Our Service allows you to post, link, store, share and otherwise make available certain 
                    information, text, graphics, videos, or other material ("Content"). You are responsible 
                    for Content that you post to the Service, including its legality, reliability, and 
                    appropriateness.
                  </p>
                  <p>
                    By posting Content to the Service, You represent and warrant that:
                  </p>
                  <ul>
                    <li>Content is yours (you own it) and/or you have the right to use it</li>
                    <li>Content does not infringe, violate or misappropriate the rights of any third party</li>
                  </ul>
                </div>

                {/* Intellectual Property */}
                <div className="legal-section">
                  <h2>8. Intellectual Property Rights</h2>
                  <p>
                    The Service and its original content, features and functionality are and will remain 
                    the exclusive property of Latten Creative and its licensors. The Service is protected 
                    by copyright, trademark, and other laws. Our trademarks and trade dress may not be 
                    used in connection with any product or service without our prior written consent.
                  </p>
                </div>

                {/* Termination */}
                <div className="legal-section">
                  <h2>9. Termination</h2>
                  <p>
                    We may terminate or suspend your account and bar access to the Service immediately, 
                    without prior notice or liability, under our sole discretion, for any reason whatsoever 
                    and without limitation, including but not limited to a breach of the Terms.
                  </p>
                  <p>
                    If you wish to terminate your account, you may simply discontinue using the Service.
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="legal-section">
                  <h2>10. Disclaimer</h2>
                  <p>
                    The information on this website is provided on an "as is" basis. To the fullest extent 
                    permitted by law, this Company excludes all representations, warranties, conditions and 
                    terms whether express or implied, statutory or otherwise.
                  </p>
                </div>

                {/* Limitations */}
                <div className="legal-section">
                  <h2>11. Limitations</h2>
                  <p>
                    In no event shall Latten Creative or its suppliers be liable for any damages (including, 
                    without limitation, damages for loss of data or profit, or due to business interruption) 
                    arising out of the use or inability to use the materials on Latten Creative's website, 
                    even if Latten Creative or a Latten Creative authorized representative has been notified 
                    orally or in writing of the possibility of such damage. Because some jurisdictions do 
                    not allow limitations on implied warranties, or limitations of liability for consequential 
                    or incidental damages, these limitations may not apply to you.
                  </p>
                </div>

                {/* Accuracy of Materials */}
                <div className="legal-section">
                  <h2>12. Accuracy of Materials</h2>
                  <p>
                    The materials appearing on Latten Creative's website could include technical, typographical, 
                    or photographic errors. Latten Creative does not warrant that any of the materials on its 
                    website are accurate, complete or current. Latten Creative may make changes to the materials 
                    contained on its website at any time without notice. However Latten Creative does not make 
                    any commitment to update the materials.
                  </p>
                </div>

                {/* Links */}
                <div className="legal-section">
                  <h2>13. Links</h2>
                  <p>
                    Latten Creative has not reviewed all of the sites linked to our website and is not 
                    responsible for the contents of any such linked site. The inclusion of any link does 
                    not imply endorsement by Latten Creative of the site. Use of any such linked website 
                    is at the user's own risk.
                  </p>
                </div>

                {/* Modifications */}
                <div className="legal-section">
                  <h2>14. Modifications</h2>
                  <p>
                    Latten Creative may revise these terms of service for its website at any time without 
                    notice. By using this website, you are agreeing to be bound by the then current version 
                    of these terms of service.
                  </p>
                </div>

                {/* Governing Law */}
                <div className="legal-section">
                  <h2>15. Governing Law</h2>
                  <p>
                    These terms and conditions are governed by and construed in accordance with the laws 
                    of the jurisdiction in which Latten Creative operates and you irrevocably submit to 
                    the exclusive jurisdiction of the courts in that state or location.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="legal-section">
                  <h2>16. Contact Information</h2>
                  <p>
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="contact-info">
                    <p>
                      <strong>Latten Creative</strong><br />
                      Email: hello@lattencreative.com<br />
                      Website: lattencreative.com
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
