"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ArrowLeft,
  Globe,
  Smartphone,
  CheckCircle,
  Clock,
  Zap,
  Users,
  Target,
  Cloud,
  Shield,
  Network,
} from "lucide-react"
import Link from "next/link"

export default function CaseStudyPage() {
  const params = useParams()
  const caseStudyId = params.id

  // Complete case studies data with detailed information
  const caseStudies = [
    {
      id: "global-retail-chain",
      title: "Global Retail Chain Network Transformation",
      category: "cloud-infrastructure",
      categoryIcon: <Cloud className="h-5 w-5" />,
      client: "Global Retail Chain",
      clientLogo: "/placeholder.svg?height=100&width=100",
      image: "/projectimages/Global-Retail.png",
      summary:
        "Transformed network infrastructure achieving 99.9% uptime during peak sales and 40% cost reduction by replacing MPLS with SD-WAN solution.",
      challenge:
        "This global retail chain with 500+ locations faced frequent network outages that severely impacted their POS systems during peak sales periods. They were burdened by high MPLS costs ($220K/month) with limited bandwidth scalability and struggled with inconsistent security policies across branches, creating significant vulnerabilities.",
      approach: [
        {
          title: "SD-WAN Edge Platform Deployment",
          description:
            "Deployed hardware-accelerated appliances with dual broadband and 4G/LTE failover for maximum network resilience and reliability.",
        },
        {
          title: "Application-Aware Routing",
          description:
            "Implemented intelligent routing that prioritizes critical POS and VoIP traffic to ensure business operations remain uninterrupted during peak periods.",
        },
        {
          title: "Unified Threat Management (UTM)",
          description:
            "Integrated comprehensive security with firewall, IPS, and encrypted traffic inspection to protect all network communications.",
        },
        {
          title: "Centralized Policy Management",
          description:
            "Deployed Critonyx Command Center for unified security policy management across all 500+ locations, ensuring consistent protection.",
        },
        {
          title: "Cloud On-Ramp Implementation",
          description:
            "Established direct SaaS access to Microsoft 365 and AWS, bypassing hub sites for improved performance and reduced latency.",
        },
      ],
      solution:
        "Critonyx deployed a comprehensive SD-WAN Edge Platform with hardware-accelerated appliances, ensuring high availability through dual broadband and 4G/LTE failover. Application-aware routing prioritized critical POS and VoIP traffic. A Unified Threat Management solution provided integrated firewall, IPS, and encrypted traffic inspection, all centrally managed via the Critonyx Command Center. Additionally, Cloud On-Ramp capabilities enabled direct, efficient access to SaaS applications.",
      technologies: [
        "SD-WAN Edge Platform",
        "Unified Threat Management",
        "4G/LTE Failover",
        "Application-Aware Routing",
        "Cloud On-Ramp",
        "Critonyx Command Center",
      ],
      results: [
        "99.9% uptime during holiday sales (compared to 92% previously)",
        "40% reduction in network costs by replacing MPLS with broadband",
        "Zero security incidents in 18 months post-deployment",
        "Deployment completed in 8 weeks via zero-touch provisioning",
      ],
      testimonial: {
        quote: "",
        author: "",
        position: "",
        image: "",
      },
      timeline: "8 weeks (via zero-touch provisioning)",
      team: "Network Infrastructure Specialists",
      relatedCaseStudies: ["healthcare-provider-network", "financial-services-firm"],
    },
    {
      id: "healthcare-provider-network",
      title: "Healthcare Provider Network Security Enhancement",
      category: "network-security",
      categoryIcon: <Shield className="h-5 w-5" />,
      client: "Healthcare Provider Network",
      clientLogo: "/placeholder.svg?height=100&width=100",
      image: "/projectimages/healthcare-app.png",
      summary:
        "Achieved 100% HIPAA compliance with Zero-Trust architecture, improved EHR performance by 60%, and reduced security alerts by 83%.",
      challenge:
        "This extensive healthcare network with 22 hospitals and 150 clinics faced critical HIPAA compliance risks due to unsecured IoMT devices such as patient monitors. Slow EHR (Epic) performance hampered clinical efficiency because all traffic was backhauled. They also lacked the ability to effectively segment clinical versus guest networks, posing significant security and compliance challenges.",
      approach: [
        {
          title: "Zero-Trust Network Access Implementation",
          description:
            "Deployed comprehensive Zero-Trust architecture with micro-segmentation for IoMT devices using advanced device fingerprinting technology.",
        },
        {
          title: "SASE Architecture Deployment",
          description:
            "Implemented Secure Access Service Edge solution to provide secure, scalable access for remote clinicians and mobile healthcare workers.",
        },
        {
          title: "SD-WAN with Cloud Gateway",
          description:
            "Enabled local internet breakout for cloud-based EHR systems, dramatically improving application performance and user experience.",
        },
        {
          title: "AI-Powered Security Analytics",
          description:
            "Deployed advanced AI-driven anomaly detection system for real-time threat response and automated protection against ransomware patterns.",
        },
      ],
      solution:
        "Critonyx implemented a comprehensive Zero-Trust Network Access solution with precise micro-segmentation for IoMT devices through device fingerprinting. A SASE architecture secured access for remote clinicians. The SD-WAN with Cloud Gateway solution facilitated local internet breakout for cloud-based EHR, drastically improving performance. AI-Powered Anomaly Detection provided real-time threat response against ransomware and other security threats.",
      technologies: [
        "Zero-Trust Network Access",
        "SASE",
        "SD-WAN",
        "Cloud Gateway",
        "AI-Powered Analytics",
        "Device Fingerprinting",
        "Micro-segmentation",
      ],
      results: [
        "100% HIPAA audit compliance with automated reporting",
        "60% faster EHR load times improving clinical efficiency",
        "83% reduction in security alerts via AI-driven correlation",
        "Operational savings: $350K/year in breach mitigation costs avoided",
      ],
      testimonial: {
        quote: "",
        author: "",
        position: "",
        image: "",
      },
      timeline: "12 weeks implementation",
      team: "Healthcare Security Specialists",
      relatedCaseStudies: ["global-retail-chain", "financial-services-firm"],
    },
    {
      id: "financial-services-firm",
      title: "Financial Services Low-Latency Network Optimization",
      category: "network-optimization",
      categoryIcon: <Network className="h-5 w-5" />,
      client: "Tier-3 Investment Bank",
      clientLogo: "/placeholder.svg?height=100&width=100",
      image: "/projectimages/financial-services-firm.png",
      summary:
        "Reduced trading platform latency from 215ms to 47ms, achieved ROI in 5 months, and passed SEC audit with zero critical findings.",
      challenge:
        "This financial services firm struggled with latency-sensitive trading applications experiencing delays exceeding 200ms, directly impacting profitability. They faced complex firewall management across five global offices and stringent regulatory requirements (FINRA/SEC) demanding robust encryption for all data in transit.",
      approach: [
        {
          title: "Low-Latency SD-WAN Implementation",
          description:
            "Deployed advanced WAN optimization with forward error correction (FEC) to minimize packet loss and reduce latency for critical trading applications.",
        },
        {
          title: "Intelligent Path Selection",
          description:
            "Implemented real-time trading application performance metrics for optimal path selection, ensuring the fastest routes for time-sensitive transactions.",
        },
        {
          title: "SASE Security Framework",
          description:
            "Deployed comprehensive cloud-delivered Secure Web Gateway (SWG), Cloud Access Security Broker (CASB), and DNS filtering for complete security coverage.",
        },
        {
          title: "Enterprise-Grade Encryption",
          description:
            "Implemented end-to-end encryption using AES-256 with FIPS 140-2 validated modules to meet strict regulatory compliance requirements.",
        },
      ],
      solution:
        "Critonyx deployed a Low-Latency SD-WAN solution incorporating WAN optimization with forward error correction and intelligent path selection based on real-time trading application performance. A comprehensive SASE framework provided cloud-delivered security services. Critical to compliance, end-to-end encryption was implemented using AES-256 with FIPS 140-2 validated modules.",
      technologies: [
        "Low-Latency SD-WAN",
        "WAN Optimization",
        "Forward Error Correction",
        "SASE",
        "SWG",
        "CASB",
        "DNS Filtering",
        "AES-256 Encryption",
        "FIPS 140-2",
      ],
      results: [
        "47ms average latency for trading platforms (compared to 215ms previously)",
        "70% faster firewall policy updates via centralized console",
        "Passed SEC cybersecurity audit with zero critical findings",
        "ROI achieved in 5 months from recovered trading revenue",
      ],
      testimonial: {
        quote: "",
        author: "",
        position: "",
        image: "",
      },
      timeline: "10 weeks implementation, 5 months ROI",
      team: "Financial Network Specialists",
      relatedCaseStudies: ["global-retail-chain", "healthcare-provider-network"],
    },
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform Transformation",
      category: "web-development",
      categoryIcon: <Globe className="h-5 w-5" />,
      client: "RetailGiant Inc.",
      clientLogo: "/placeholder.svg?height=100&width=100",
      image: "/projectimages/ecommerce-platform.png",
      summary:
        "Rebuilt an outdated e-commerce platform, resulting in 200% increase in sales and 50% reduction in page load time.",
      challenge:
        "RetailGiant was struggling with an outdated e-commerce platform that was slow, difficult to maintain, and provided a poor user experience. This resulted in high bounce rates, low conversion rates, and declining sales. They needed a modern, scalable solution that could handle their growing product catalog and customer base.",
      approach: [
        {
          title: "Discovery & Planning",
          description:
            "We conducted a thorough analysis of the existing platform, identifying pain points and opportunities for improvement. We then created a detailed roadmap with clear milestones and deliverables.",
        },
        {
          title: "Stack-Specific Team Assembly",
          description:
            "We assembled a team of specialists with deep expertise in e-commerce development, including frontend developers, backend engineers, UX designers, and QA specialists.",
        },
        {
          title: "Agile Development",
          description:
            "Using an agile methodology, we developed the new platform in sprints, delivering incremental improvements and gathering feedback throughout the process.",
        },
        {
          title: "Performance Optimization",
          description:
            "We implemented advanced caching strategies, image optimization, and code splitting to ensure fast page loads and a smooth user experience.",
        },
        {
          title: "Testing & Deployment",
          description:
            "We conducted extensive testing to ensure the platform was robust, secure, and performed well under load. The deployment was carefully planned to minimize disruption.",
        },
      ],
      solution:
        "We developed a modern, high-performance e-commerce platform using Next.js for the frontend and Node.js for the backend. The platform featured a responsive design, advanced search functionality, personalized product recommendations, and a streamlined checkout process. We also implemented a headless CMS for easy content management and integrated with their existing inventory and order management systems.",
      technologies: ["Next.js", "Node.js", "MongoDB", "AWS", "Redis", "Elasticsearch", "Stripe"],
      results: [
        "200% increase in sales within 3 months",
        "50% reduction in page load time",
        "35% increase in conversion rate",
        "70% decrease in cart abandonment",
        "40% increase in average order value",
      ],
      testimonial: {
        quote: "",
        author: "",
        position: "",
        image: "",
      },
      timeline: "12 weeks (industry average: 24+ weeks)",
      team: "6 specialists (Frontend, Backend, UX, QA)",
      relatedCaseStudies: ["retail-erp", "financial-app-redesign"],
    },
    {
      id: "healthcare-app",
      title: "Healthcare Provider Mobile App",
      category: "app-development",
      categoryIcon: <Smartphone className="h-5 w-5" />,
      client: "MediCare Solutions",
      clientLogo: "/placeholder.svg?height=100&width=100",
      image: "/projectimages/healthcare-mobile-app.png",
      summary:
        "Created a cross-platform mobile app that streamlined patient care and reduced administrative work by 60%.",
      challenge:
        "MediCare Solutions needed a mobile application that would allow healthcare providers to access patient information, schedule appointments, and manage prescriptions on the go. Their existing system was desktop-only, leading to inefficiencies and delays in patient care.",
      approach: [
        {
          title: "User Research",
          description:
            "We conducted extensive interviews with healthcare providers to understand their workflows and pain points.",
        },
        {
          title: "Prototyping",
          description:
            "We created interactive prototypes to validate our design concepts and gather feedback from end users.",
        },
        {
          title: "Cross-Platform Development",
          description:
            "We used React Native to develop a single codebase that works seamlessly on both iOS and Android devices.",
        },
        {
          title: "Integration",
          description:
            "We integrated the app with their existing electronic health record (EHR) system and other healthcare databases.",
        },
        {
          title: "Security Implementation",
          description:
            "We implemented robust security measures to ensure HIPAA compliance and protect sensitive patient data.",
        },
      ],
      solution:
        "We developed a cross-platform mobile app using React Native that allows healthcare providers to access patient records, schedule appointments, order tests, write prescriptions, and communicate with patients securely. The app features offline capabilities, real-time notifications, and biometric authentication for enhanced security.",
      technologies: ["React Native", "Firebase", "Node.js", "GraphQL", "MongoDB", "AWS"],
      results: [
        "60% reduction in administrative work",
        "40% increase in patient satisfaction",
        "25% cost savings in operational expenses",
        "30% improvement in appointment adherence",
        "50% faster access to critical patient information",
      ],
      testimonial: {
        quote: "",
        author: "",
        position: "",
        image: "",
      },
      timeline: "16 weeks (industry average: 32+ weeks)",
      team: "5 specialists (Mobile, Backend, UX, QA, Security)",
      relatedCaseStudies: ["manufacturing-automation", "financial-app-redesign"],
    },
    {
      id: "manufacturing-automation",
      title: "Manufacturing Process Automation",
      category: "custom-software",
      categoryIcon: <Zap className="h-5 w-5" />,
      client: "Industrial Innovations",
      clientLogo: "/placeholder.svg?height=100&width=100",
      image: "/projectimages/manufacturing-automation.png",
      summary: "Developed custom software that automated manufacturing processes, reducing operational costs by 35%.",
      challenge:
        "Industrial Innovations faced challenges with manual, labor-intensive manufacturing processes that led to high operational costs, inconsistent production quality, and limited scalability. They needed a robust, automated solution to streamline their operations and boost efficiency.",
      approach: [
        {
          title: "Discovery & Requirements Analysis",
          description:
            "Conducted detailed analysis of existing manufacturing workflows to identify automation opportunities and gather specific requirements.",
        },
        {
          title: "Custom Software Development",
          description:
            "Developed bespoke software tailored to automate key stages of the manufacturing process, focusing on integration with existing machinery and systems.",
        },
        {
          title: "IoT Sensor Integration",
          description:
            "Strategically deployed and integrated IoT sensors with the new software to provide real-time data for monitoring, control, and predictive maintenance.",
        },
        {
          title: "System Testing & Optimization",
          description:
            "Performed extensive testing to ensure software reliability, accuracy, and performance, followed by iterative optimization based on production data.",
        },
      ],
      solution:
        "We developed custom software that seamlessly integrated with Industrial Innovations' manufacturing machinery and existing systems. This solution leveraged IoT sensors for real-time data collection and automated various stages of the production line. The software provided centralized control, improved resource allocation, and enabled predictive maintenance, significantly reducing manual intervention and errors.",
      technologies: ["Python", "Java", "IoT Sensors", "Azure", "Custom Software Development"],
      results: [
        "35% reduction in operational costs",
        "50% increase in production efficiency",
        "20% reduction in product defects",
        "Predictive maintenance reducing downtime by 30%",
      ],
      testimonial: {
        quote: "",
        author: "",
        position: "",
        image: "",
      },
      timeline: "20 weeks implementation",
      team: "Custom Software Development Team",
      relatedCaseStudies: ["healthcare-app", "retail-erp"],
    },
    {
      id: "financial-app-redesign",
      title: "Financial Services App Redesign",
      category: "ux-ui-design",
      categoryIcon: <Smartphone className="h-5 w-5" />,
      client: "Global Finance Corp",
      clientLogo: "/placeholder.svg?height=100&width=100",
      image: "/projectimages/financial-app-redesign.png",
      summary:
        "Redesigned a financial services app, improving user satisfaction by 45% and increasing user engagement by 60%.",
      challenge:
        "Global Finance Corp's existing mobile application suffered from an outdated interface, poor usability, and low user engagement, leading to declining satisfaction rates. They needed a modern, intuitive, and highly engaging app to retain users and attract new ones in a competitive financial market.",
      approach: [
        {
          title: "Comprehensive UX Audit & User Research",
          description:
            "Conducted thorough audit of the existing app and performed extensive user research including interviews and surveys to identify pain points and user needs.",
        },
        {
          title: "UI/UX Redesign & Prototyping",
          description:
            "Used Figma to create a new, modern, and intuitive user interface, developing interactive prototypes for stakeholder feedback and iterative refinement.",
        },
        {
          title: "Cross-Platform Mobile Development",
          description:
            "Leveraged React Native to develop the redesigned app ensuring consistent and high-performance experience across both iOS and Android platforms.",
        },
        {
          title: "Performance Optimization & Testing",
          description:
            "Focused on optimizing app performance, responsiveness, and stability with rigorous testing to ensure a bug-free and smooth user experience.",
        },
      ],
      solution:
        "We provided a complete financial services app redesign solution involving deep dive into user experience with Figma for new UI/UX, followed by efficient cross-platform mobile development using React Native and Swift for native elements. The resulting application features an intuitive interface, streamlined workflows, and enhanced performance.",
      technologies: ["Figma", "React Native", "Swift", "Kotlin", "UI/UX Design"],
      results: [
        "45% improvement in user satisfaction",
        "60% increase in user engagement",
        "30% increase in active users",
        "25% reduction in support tickets",
      ],
      testimonial: {
        quote: "",
        author: "",
        position: "",
        image: "",
      },
      timeline: "14 weeks redesign and development",
      team: "UX/UI and Mobile Development Team",
      relatedCaseStudies: ["ecommerce-platform", "healthcare-app"],
    },
    {
      id: "retail-erp",
      title: "Retail Chain ERP Implementation",
      category: "business-applications",
      categoryIcon: <Globe className="h-5 w-5" />,
      client: "RetailChain Inc.",
      clientLogo: "/placeholder.svg?height=100&width=100",
      image: "/projectimages/retail-erp.png",
      summary:
        "Implemented a custom ERP solution for a retail chain, improving inventory management by 40% and reducing operational costs by 25%.",
      challenge:
        "RetailChain Inc. struggled with fragmented systems across their multiple locations, leading to poor inventory visibility, inefficient supply chain management, and high operational costs. They needed a unified ERP solution to streamline operations and improve decision-making.",
      approach: [
        {
          title: "Business Process Analysis",
          description:
            "Conducted comprehensive analysis of existing business processes across all retail locations to identify inefficiencies and integration opportunities.",
        },
        {
          title: "ERP System Design",
          description:
            "Designed a custom ERP solution using D365 ERP platform tailored to retail operations with modules for inventory, sales, finance, and supply chain management.",
        },
        {
          title: "Data Migration & Integration",
          description:
            "Executed seamless data migration from legacy systems and integrated with existing POS systems and e-commerce platforms.",
        },
        {
          title: "Training & Change Management",
          description:
            "Provided comprehensive training programs and change management support to ensure smooth adoption across all locations.",
        },
      ],
      solution:
        "We implemented a comprehensive ERP solution using Microsoft Dynamics 365 ERP, integrated with Power BI for advanced analytics and reporting. The solution unified inventory management, financial operations, and supply chain processes across all retail locations, providing real-time visibility and automated workflows.",
      technologies: ["D365 ERP", "Power BI", "Azure", "SQL Server", "Integration APIs"],
      results: [
        "40% improvement in inventory management efficiency",
        "25% reduction in operational costs",
        "15% improvement in supply chain efficiency",
        "Real-time visibility across all locations",
      ],
      testimonial: {
        quote: "",
        author: "",
        position: "",
        image: "",
      },
      timeline: "18 weeks implementation",
      team: "ERP Implementation Specialists",
      relatedCaseStudies: ["ecommerce-platform", "manufacturing-automation"],
    },
    {
      id: "virtual-showroom",
      title: "Virtual Showroom for Automotive Brand",
      category: "emerging-technologies",
      categoryIcon: <Zap className="h-5 w-5" />,
      client: "LuxuryCars Inc.",
      
      image: "/projectimages/virtual-showroom-main.png",
      summary:
        "Created an immersive virtual showroom experience, increasing customer engagement by 80% and boosting sales conversions by 35%.",
      challenge:
        "LuxuryCars Inc. needed to provide customers with an immersive vehicle experience without the limitations of physical showroom space. They wanted to showcase their entire vehicle lineup in an interactive, engaging format that could reach customers globally.",
      approach: [
        {
          title: "3D Modeling & Asset Creation",
          description:
            "Created high-fidelity 3D models of all vehicle models with detailed interiors, exteriors, and customization options for realistic virtual representation.",
        },
        {
          title: "Virtual Reality Development",
          description:
            "Developed immersive VR experience using Unity engine with WebXR compatibility for cross-platform accessibility without requiring specialized hardware.",
        },
        {
          title: "Interactive Features Implementation",
          description:
            "Implemented interactive features including vehicle customization, 360-degree views, virtual test drives, and real-time configuration changes.",
        },
        {
          title: "Performance Optimization",
          description:
            "Optimized for web delivery using WebGL and Three.js to ensure smooth performance across different devices and internet connections.",
        },
      ],
      solution:
        "We created a comprehensive virtual showroom using Unity and WebXR technologies, allowing customers to explore vehicles in immersive 3D environments. The solution included interactive vehicle customization, virtual test drives, and seamless integration with the sales process, accessible through web browsers without additional software installation.",
      technologies: ["Unity", "WebGL", "Three.js", "WebXR", "3D Modeling", "VR Development"],
      results: [
        "80% increase in customer engagement time",
        "35% boost in sales conversions",
        "50% reduction in physical showroom costs",
        "Global reach with 24/7 availability",
      ],
      testimonial: {
        quote: "",
        author: "",
        position: "",
        image: "",
      },
      timeline: "16 weeks development",
      team: "VR/AR Development Specialists",
      relatedCaseStudies: ["financial-app-redesign", "manufacturing-automation"],
    },
  ]

  const caseStudy = caseStudies.find((study) => study.id === caseStudyId)

  if (!caseStudy) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <p className="mb-8">The case study you're looking for doesn't exist or has been moved.</p>
        <Link href="/case-studies">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90 mix-blend-multiply"></div>
        <div className="relative container mx-auto px-4 py-20 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-white/20 backdrop-blur-sm">
              {caseStudy.categoryIcon}
              <span className="ml-2">
                {caseStudy.category
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{caseStudy.title}</h1>
            <p className="text-xl mb-8">{caseStudy.summary}</p>
            <div className="flex items-center">
              <div className="mr-4">
                
              </div>
              <div>
                <div className="text-sm opacity-80">Client</div>
                <div className="font-bold">{caseStudy.client}</div>
              </div>
              <div className="ml-8 pl-8 border-l border-white/30">
                <div className="text-sm opacity-80">Timeline</div>
                <div className="font-bold">{caseStudy.timeline}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-32 space-y-8">
              {/* Quick Stats */}
              <div className="bg-muted/30 rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm text-foreground/70">Timeline</div>
                      <div className="font-medium">{caseStudy.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm text-foreground/70">Team</div>
                      <div className="font-medium">{caseStudy.team}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Target className="h-5 w-5 text-primary mr-3 mt-0.5" />
                    <div>
                      <div className="text-sm text-foreground/70">Industry</div>
                      <div className="font-medium">
                        {caseStudy.category === "web-development"
                          ? "Retail / E-commerce"
                          : caseStudy.category === "app-development"
                            ? "Healthcare"
                            : caseStudy.category === "custom-software"
                              ? "Manufacturing"
                              : caseStudy.category === "ux-ui-design"
                                ? "Financial Services"
                                : caseStudy.category === "business-applications"
                                  ? "Retail"
                                  : caseStudy.category === "emerging-technologies"
                                    ? "Automotive"
                                    : caseStudy.category === "cloud-infrastructure"
                                      ? "Retail"
                                      : caseStudy.category === "network-security"
                                        ? "Healthcare"
                                        : caseStudy.category === "network-optimization"
                                          ? "Financial Services"
                                          : "Technology"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-muted/30 rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Ready for similar results?</h3>
                <p className="mb-4 opacity-90">
                  Let's discuss how we can help you achieve your goals with our expertise.
                </p>
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  Schedule a Consultation
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="mb-12">
              <img
                src={caseStudy.image || "/placeholder.svg"}
                alt={caseStudy.title}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Challenge */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary font-bold">1</span>
                </div>
                The Challenge
              </h2>
              <div className="border-l-4 border-primary/30 pl-6">
                <p className="text-lg text-foreground/80">{caseStudy.challenge}</p>
              </div>
            </div>

            {/* Solution */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary font-bold">2</span>
                </div>
                Our Solution
              </h2>
              <p className="text-lg text-foreground/80 mb-8">{caseStudy.solution}</p>
            </div>

            {/* Approach */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary font-bold">3</span>
                </div>
                Our Approach
              </h2>
              <div className="relative border-l-2 border-primary/30 pl-8 ml-4 space-y-8">
                {caseStudy.approach.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Zap className="h-3 w-3 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-foreground/80">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <span className="text-primary font-bold">4</span>
                </div>
                The Results
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-muted/30 p-4 rounded-lg border-l-4 border-primary flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Case Studies */}
            {caseStudy.relatedCaseStudies && caseStudy.relatedCaseStudies.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Related Case Studies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.relatedCaseStudies.map((relatedId) => {
                    const related = caseStudies.find((s) => s.id === relatedId)
                    if (!related) return null

                    return (
                      <Link key={relatedId} href={`/case-studies/${relatedId}`}>
                        <div className="group border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
                          <div className="relative h-40">
                            <img
                              src={related.image || "/placeholder.svg"}
                              alt={related.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 text-white">
                              <div className="text-sm opacity-80">
                                {related.category
                                  .split("-")
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join(" ")}
                              </div>
                              <div className="font-bold">{related.title}</div>
                            </div>
                          </div>
                          <div className="p-4 flex justify-between items-center">
                            <span className="text-sm">{related.client}</span>
                            <span className="text-primary group-hover:translate-x-1 transition-transform">
                              <ArrowRight size={16} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule a Meeting
              <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
