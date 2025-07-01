import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
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
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-foreground/70">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              By accessing and using Critonyx's services, you accept and agree to be bound by the terms and provision of
              this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
            <p className="mb-4">
              Critonyx provides technology consulting, software development, network infrastructure, cybersecurity, and
              digital transformation services. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Web and mobile application development</li>
              <li>Custom software solutions</li>
              <li>Network infrastructure design and implementation</li>
              <li>Cybersecurity consulting and implementation</li>
              <li>Cloud migration and management services</li>
              <li>AI/ML solutions and data analytics</li>
              <li>Digital transformation consulting</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Client Responsibilities</h2>
            <p className="mb-4">Clients agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information necessary for service delivery</li>
              <li>Cooperate with Critonyx team members and provide timely feedback</li>
              <li>Make payments according to agreed terms and schedules</li>
              <li>Maintain confidentiality of any proprietary information shared by Critonyx</li>
              <li>Use delivered solutions in compliance with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
            <p className="mb-4">Payment terms are specified in individual service agreements. Generally:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Invoices are due within 30 days of receipt unless otherwise specified</li>
              <li>Late payments may incur interest charges of 1.5% per month</li>
              <li>Services may be suspended for accounts more than 60 days overdue</li>
              <li>All fees are non-refundable unless explicitly stated in the service agreement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="mb-4">Unless otherwise specified in writing:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Critonyx retains ownership of all proprietary methodologies, frameworks, and tools</li>
              <li>Clients receive ownership of custom-developed solutions upon full payment</li>
              <li>Third-party software and licenses remain property of their respective owners</li>
              <li>Critonyx may use project experience and anonymized case studies for marketing purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Confidentiality</h2>
            <p className="mb-4">
              Both parties agree to maintain confidentiality of sensitive information shared during the course of the
              engagement. This includes but is not limited to business strategies, technical specifications, financial
              information, and customer data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              Critonyx's liability for any claim arising from services provided shall not exceed the total amount paid
              by the client for the specific service giving rise to the claim. Critonyx shall not be liable for
              indirect, incidental, special, or consequential damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Data Security and Privacy</h2>
            <p className="mb-4">
              Critonyx implements industry-standard security measures to protect client data. We comply with applicable
              data protection regulations including GDPR, CCPA, and HIPAA where applicable. Detailed data handling
              practices are outlined in our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Service Level Agreements</h2>
            <p className="mb-4">
              Specific service level agreements (SLAs) are defined in individual service contracts. These may include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Response times for support requests</li>
              <li>System uptime guarantees</li>
              <li>Performance benchmarks</li>
              <li>Delivery timelines and milestones</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Termination</h2>
            <p className="mb-4">
              Either party may terminate services with 30 days written notice. Immediate termination may occur in cases
              of:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Material breach of contract</li>
              <li>Non-payment of fees</li>
              <li>Violation of confidentiality agreements</li>
              <li>Illegal or unethical use of services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
            <p className="mb-4">
              These terms shall be governed by and construed in accordance with the laws of the State of California,
              United States. Any disputes shall be resolved through binding arbitration in San Francisco, California.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Changes to Terms</h2>
            <p className="mb-4">
              Critonyx reserves the right to modify these terms at any time. Clients will be notified of significant
              changes via email or through our website. Continued use of services after changes constitutes acceptance
              of new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Contact Information</h2>
            <p className="mb-4">For questions about these Terms of Service, please contact us at:</p>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p>
                <strong>Email:</strong> legal@critonyx.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
