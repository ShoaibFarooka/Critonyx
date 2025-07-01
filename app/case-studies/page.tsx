import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import CaseStudiesGrid from "@/components/case-studies-grid"
import Link from "next/link"

export default function CaseStudiesPage() {
  // Complete case studies data including both original and new ones
  const caseStudies = [
    // New Critonyx case studies
    {
      id: "global-retail-chain",
      title: "Global Retail Chain Network Transformation",
      category: "Cloud Infrastructure",
      client: "Global Retail Chain (500+ locations)",
      image: "/projectimages/Global-Retail.png",
      summary:
        "Transformed network infrastructure achieving 99.9% uptime during peak sales and 40% cost reduction by replacing MPLS with SD-WAN solution.",
      metrics: [
        { label: "Uptime Improvement", value: "99.9%" },
        { label: "Cost Reduction", value: "40%" },
        { label: "Deployment Time", value: "8 weeks" },
      ],
      technologies: ["SD-WAN", "UTM", "4G/LTE Failover", "Cloud On-Ramp"],
    },
    {
      id: "healthcare-provider-network",
      title: "Healthcare Provider Network Security Enhancement",
      category: "Network Security",
      client: "Healthcare Network (22 hospitals, 150 clinics)",
      image: "/projectimages/healthcare-app.png",
      summary:
        "Achieved 100% HIPAA compliance with Zero-Trust architecture, improved EHR performance by 60%, and reduced security alerts by 83%.",
      metrics: [
        { label: "HIPAA Compliance", value: "100%" },
        { label: "EHR Performance", value: "+60%" },
        { label: "Security Alerts", value: "-83%" },
      ],
      technologies: ["Zero-Trust", "SASE", "SD-WAN", "AI Analytics"],
    },
    {
      id: "financial-services-firm",
      title: "Financial Services Low-Latency Network",
      category: "Network Optimization",
      client: "Tier-3 Investment Bank",
      image: "/projectimages/financial-services-firm.png",
      summary:
        "Reduced trading platform latency from 215ms to 47ms, achieved ROI in 5 months, and passed SEC audit with zero critical findings.",
      metrics: [
        { label: "Latency Reduction", value: "78%" },
        { label: "ROI Timeline", value: "5 months" },
        { label: "SEC Audit", value: "Zero findings" },
      ],
      technologies: ["Low-Latency SD-WAN", "SASE", "AES-256", "FIPS 140-2"],
    },
    // Original case studies
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform Transformation",
      category: "Web Development",
      client: "RetailGiant Inc.",
      image: "/projectimages/ecommerce-platform.png",
      summary:
        "Rebuilt an outdated e-commerce platform, resulting in 200% increase in sales and 50% reduction in page load time.",
      metrics: [
        { label: "Sales Increase", value: "200%" },
        { label: "Load Time", value: "-50%" },
        { label: "Conversion", value: "+35%" },
      ],
      technologies: ["Next.js", "Node.js", "MongoDB", "AWS"],
    },
    {
      id: "healthcare-app",
      title: "Healthcare Provider Mobile App",
      category: "App Development",
      client: "MediCare Solutions",
      image: "/projectimages/healthcare-mobile-app.png",
      summary:
        "Created a cross-platform mobile app that streamlined patient care and reduced administrative work by 60%.",
      metrics: [
        { label: "Admin Work", value: "-60%" },
        { label: "Patient Satisfaction", value: "+40%" },
        { label: "Cost Savings", value: "25%" },
      ],
      technologies: ["React Native", "Firebase", "Node.js", "GraphQL"],
    },
    {
      id: "manufacturing-automation",
      title: "Manufacturing Process Automation",
      category: "Custom Software",
      client: "Industrial Innovations",
      image: "/projectimages/manufacturing-automation.png",
      summary: "Developed custom software that automated manufacturing processes, reducing operational costs by 35%.",
      metrics: [
        { label: "Operational Costs", value: "-35%" },
        { label: "Production Efficiency", value: "+50%" },
        { label: "Defects", value: "-20%" },
      ],
      technologies: ["Python", "Java", "IoT Sensors", "Azure"],
    },
    {
      id: "financial-app-redesign",
      title: "Financial Services App Redesign",
      category: "UX/UI Design",
      client: "Global Finance Corp",
      image: "/projectimages/financial-app-redesign.png",
      summary:
        "Redesigned a financial services app, improving user satisfaction by 45% and increasing user engagement by 60%.",
      metrics: [
        { label: "User Satisfaction", value: "+45%" },
        { label: "Engagement", value: "+60%" },
        { label: "Active Users", value: "+30%" },
      ],
      technologies: ["Figma", "React Native", "Swift", "Kotlin"],
    },
    {
      id: "retail-erp",
      title: "Retail Chain ERP Implementation",
      category: "Business Applications",
      client: "RetailChain Inc.",
      image: "/projectimages/retail-erp.png",
      summary:
        "Implemented a custom ERP solution for a retail chain, improving inventory management by 40% and reducing operational costs by 25%.",
      metrics: [
        { label: "Inventory Management", value: "+40%" },
        { label: "Operational Costs", value: "-25%" },
        { label: "Supply Chain Efficiency", value: "+15%" },
      ],
      technologies: ["D365 ERP", "Power BI", "Azure", "SQL Server"],
    },
    {
      id: "virtual-showroom",
      title: "Virtual Showroom for Automotive Brand",
      category: "Emerging Technologies",
      client: "LuxuryCars Inc.",
      image: "/projectimages/virtual-showroom-main.png",
      summary:
        "Created an immersive virtual showroom experience, increasing customer engagement by 80% and boosting sales conversions by 35%.",
      metrics: [
        { label: "Customer Engagement", value: "+80%" },
        { label: "Sales Conversions", value: "+35%" },
        { label: "Showroom Costs", value: "-50%" },
      ],
      technologies: ["Unity", "WebGL", "Three.js", "WebXR"],
    },
  ]

  // Featured case study - using the first new case study
  const featuredCaseStudy = caseStudies[0]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Success</span> Stories
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            Explore how we've helped businesses across industries achieve their digital transformation goals with our
            network infrastructure and software development expertise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://calendly.com/critonyx/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90">
                Schedule a Consultation
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline">View Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Success Story</h2>
            <p className="text-lg text-foreground/80">
              A closer look at one of our most impactful network transformation projects
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-background rounded-xl overflow-hidden shadow-lg border border-border">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Column - Case Study Content */}
                <div className="p-8 md:p-12">
                  <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary">
                    <span>{featuredCaseStudy.category}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredCaseStudy.title}</h3>
                  <p className="text-foreground/70 mb-6">
                    A global retail chain with 500+ locations was experiencing frequent network outages that severely
                    impacted their POS systems during peak sales periods. Our SD-WAN solution transformed their network
                    infrastructure, achieving unprecedented uptime and significant cost savings.
                  </p>

                  <Link href={`/case-studies/${featuredCaseStudy.id}`}>
                    <Button className="bg-primary hover:bg-primary/90">
                      Read Full Case Study
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Right Column - Metrics */}
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 md:p-12 flex flex-col justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-primary/20 shadow-sm">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
                      <div className="text-sm text-foreground/70">Uptime During Holiday Sales</div>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-primary/20 shadow-sm">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">40%</div>
                      <div className="text-sm text-foreground/70">Reduction in Network Costs</div>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-primary/20 shadow-sm">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Zero</div>
                      <div className="text-sm text-foreground/70">Security Incidents in 18 Months</div>
                    </div>
                    <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-primary/20 shadow-sm">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8 Weeks</div>
                      <div className="text-sm text-foreground/70">Zero-Touch Deployment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <CaseStudiesGrid
        caseStudies={caseStudies}
        title="All Success Stories"
        description="Explore our complete portfolio of successful client projects across network infrastructure and software development"
        showViewAll={false}
      />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise in network infrastructure and software development can help you achieve your
            technology goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://calendly.com/critonyx/30min" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Schedule a Meeting
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
