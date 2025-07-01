import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-foreground/70">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="mb-4">
              Critonyx ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit our website, use our services, or
              interact with us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <p className="mb-4">We may collect personal information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name, email address, phone number, and company information</li>
              <li>Professional details such as job title and industry</li>
              <li>Project requirements and technical specifications</li>
              <li>Payment and billing information</li>
              <li>Communication preferences and feedback</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Technical Information</h3>
            <p className="mb-4">We automatically collect certain technical information, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address, browser type, and operating system</li>
              <li>Website usage data and navigation patterns</li>
              <li>Device information and screen resolution</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Log files and server data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use collected information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing and improving our technology services</li>
              <li>Communicating about projects, updates, and support</li>
              <li>Processing payments and managing accounts</li>
              <li>Analyzing website usage and optimizing user experience</li>
              <li>Marketing our services and sharing relevant content</li>
              <li>Complying with legal obligations and protecting our rights</li>
              <li>Detecting and preventing fraud or security threats</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
            <p className="mb-4">We may share your information in the following circumstances:</p>

            <h3 className="text-xl font-semibold mb-3">Service Providers</h3>
            <p className="mb-4">We work with trusted third-party service providers who assist us in:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cloud hosting and infrastructure services</li>
              <li>Payment processing and billing</li>
              <li>Email marketing and communication platforms</li>
              <li>Analytics and performance monitoring</li>
              <li>Customer support and project management tools</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Legal Requirements</h3>
            <p className="mb-4">We may disclose information when required by law or to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Comply with legal processes or government requests</li>
              <li>Protect our rights, property, or safety</li>
              <li>Investigate potential violations of our terms</li>
              <li>Prevent fraud or security threats</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="mb-4">We implement comprehensive security measures to protect your information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Encryption of data in transit and at rest using AES-256</li>
              <li>Multi-factor authentication for system access</li>
              <li>Regular security audits and penetration testing</li>
              <li>Employee training on data protection best practices</li>
              <li>Compliance with industry standards (SOC 2, ISO 27001)</li>
              <li>Incident response procedures and breach notification protocols</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
            <p className="mb-4">
              We retain your information for as long as necessary to provide services and comply with legal obligations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Active client data: Duration of engagement plus 7 years</li>
              <li>Marketing communications: Until you unsubscribe</li>
              <li>Website analytics: 26 months maximum</li>
              <li>Financial records: 7 years for tax and audit purposes</li>
              <li>Legal compliance data: As required by applicable laws</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Your Privacy Rights</h2>
            <p className="mb-4">Depending on your location, you may have the following rights:</p>

            <h3 className="text-xl font-semibold mb-3">General Rights</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Access: Request copies of your personal information</li>
              <li>Correction: Request correction of inaccurate information</li>
              <li>Deletion: Request deletion of your personal information</li>
              <li>Portability: Request transfer of your data to another service</li>
              <li>Objection: Object to processing of your personal information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">California Residents (CCPA)</h3>
            <p className="mb-4">California residents have additional rights including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Right to know what personal information is collected</li>
              <li>Right to delete personal information</li>
              <li>Right to opt-out of sale of personal information</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking</h2>
            <p className="mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and user behavior</li>
              <li>Provide personalized content and advertisements</li>
              <li>Improve website functionality and performance</li>
            </ul>
            <p className="mb-4">
              You can control cookies through your browser settings. However, disabling cookies may affect website
              functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. International Data Transfers</h2>
            <p className="mb-4">
              Your information may be transferred to and processed in countries other than your own. We ensure
              appropriate safeguards are in place, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Standard Contractual Clauses approved by the European Commission</li>
              <li>Adequacy decisions for data transfers</li>
              <li>Certification schemes and codes of conduct</li>
              <li>Binding corporate rules for intra-group transfers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
            <p className="mb-4">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal
              information from children. If we become aware that we have collected information from a child, we will
              take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy periodically. We will notify you of significant changes by:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email notification to registered users</li>
              <li>Prominent notice on our website</li>
              <li>Updates to the "Last updated" date at the top of this policy</li>
            </ul>
            <p className="mb-4">
              Your continued use of our services after changes become effective constitutes acceptance of the updated
              policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact
              us:
            </p>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p>
                <strong>Privacy Officer:</strong> privacy@critonyx.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105
              </p>
              <p>
                <strong>Response Time:</strong> We will respond to privacy requests within 30 days
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Compliance Certifications</h2>
            <p className="mb-4">Critonyx maintains the following privacy and security certifications:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>SOC 2 Type II Compliance</li>
              <li>ISO 27001 Information Security Management</li>
              <li>GDPR Compliance for European clients</li>
              <li>HIPAA Compliance for healthcare clients</li>
              <li>CCPA Compliance for California residents</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
