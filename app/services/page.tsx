import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Globe, Smartphone, Code, Palette, Database, Cpu, BarChart, Cloud, Users } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      id: "web-development",
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      features: [
        "Responsive design for all devices",
        "Progressive Web Apps (PWA)",
        "E-commerce solutions",
        "Content Management Systems",
        "Web portals and dashboards",
        "API development and integration",
      ],
      technologies: ["React", "Next.js", "Vue.js", "Angular", "Node.js", "PHP", "Ruby on Rails"],
      caseStudy: {
        title: "E-Commerce Platform Transformation",
        description:
          "Rebuilt an outdated e-commerce platform, resulting in 200% increase in sales and 50% reduction in page load time.",
      },
    },
    {
      id: "app-development",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Native iOS and Android apps",
        "Cross-platform development",
        "UI/UX design for mobile",
        "App store optimization",
        "Maintenance and updates",
        "Integration with backend services",
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
      caseStudy: {
        title: "Healthcare Provider Mobile App",
        description:
          "Created a cross-platform mobile app that streamlined patient care and reduced administrative work by 60%.",
      },
    },
    {
      id: "custom-software",
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Custom Software",
      description: "Tailored software solutions to meet your specific business needs.",
      features: [
        "Enterprise software development",
        "SaaS applications",
        "Microservices architecture",
        "Legacy system modernization",
        "Database design and optimization",
        "Third-party integrations",
      ],
      technologies: ["Java", ".NET", "Python", "Go", "Ruby", "PHP", "Node.js"],
      caseStudy: {
        title: "Manufacturing Process Automation",
        description:
          "Developed custom software that automated manufacturing processes, reducing operational costs by 35%.",
      },
    },
    {
      id: "ux-ui-design",
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "UX/UI Design",
      description: "User-centered design that enhances user experience and engagement.",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Design systems",
        "Accessibility compliance",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Principle"],
      caseStudy: {
        title: "Financial Services App Redesign",
        description:
          "Redesigned a financial services app, improving user satisfaction by 45% and increasing user engagement by 60%.",
      },
    },
    {
      id: "business-applications",
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Business Applications",
      description: "Enterprise solutions to streamline your business operations.",
      features: [
        "ERP implementation and customization",
        "CRM solutions",
        "Business process automation",
        "Workflow management",
        "Reporting and analytics",
        "Integration with existing systems",
      ],
      technologies: ["D365 ERP", "D365 CRM", "Power Apps", "SharePoint", "Office 365", "SAP", "Salesforce"],
      caseStudy: {
        title: "Retail Chain ERP Implementation",
        description:
          "Implemented a custom ERP solution for a retail chain, improving inventory management by 40% and reducing operational costs by 25%.",
      },
    },
    {
      id: "emerging-technologies",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Emerging Technologies",
      description: "Cutting-edge solutions using the latest technological innovations.",
      features: [
        "Metaverse development",
        "Augmented and Virtual Reality",
        "Blockchain solutions",
        "Smart contracts",
        "NFT marketplaces",
        "Web3 applications",
      ],
      technologies: ["Unity", "Unreal Engine", "ARKit", "ARCore", "Ethereum", "Solana", "Polygon"],
      caseStudy: {
        title: "Virtual Showroom for Automotive Brand",
        description:
          "Created an immersive virtual showroom experience, increasing customer engagement by 80% and boosting sales conversions by 35%.",
      },
    },
    {
      id: "data-ai",
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Data & AI",
      description: "Data-driven insights and AI solutions to power your business decisions.",
      features: [
        "Machine learning models",
        "Natural language processing",
        "Computer vision",
        "Predictive analytics",
        "Big data processing",
        "AI-powered automation",
      ],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Hadoop", "Spark", "Kubernetes"],
      caseStudy: {
        title: "AI-Powered Financial Analytics",
        description:
          "Developed a machine learning solution that improved prediction accuracy by 40% and reduced analysis time by 75%.",
      },
    },
    {
      id: "cloud",
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "Cloud",
      description: "Cloud solutions to enhance scalability, security, and performance.",
      features: [
        "Cloud migration",
        "Cloud-native application development",
        "Serverless architecture",
        "DevOps implementation",
        "Infrastructure as Code",
        "Continuous Integration/Continuous Deployment",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "Jenkins"],
      caseStudy: {
        title: "Enterprise Cloud Migration",
        description:
          "Migrated a legacy on-premise system to the cloud, reducing infrastructure costs by 60% and improving system reliability by 99.9%.",
      },
    },
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-primary">Comprehensive</span> Services
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            We offer a wide range of technology services to help you achieve your digital transformation goals, all
            delivered at 2X speed with our stack-specific experts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="https://calendly.com/critonyx/30min" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90">
              Schedule a Consultation
              <ArrowRight size={16} className="ml-2" />
            </Button>
            </Link>
            <Link href="./case-studies">
            <Button variant="outline">View Case Studies</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="h-full service-card border hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 inline-block">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-foreground/70 mb-4">{service.description}</p>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-primary hover:text-primary/80 font-medium flex items-center"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Explore Our Services in Detail</h2>
            <p className="text-lg text-foreground/80">
              Select a service to learn more about our approach, technologies, and success stories.
            </p>
          </div>

          <Tabs defaultValue="web-development" className="w-full">
            <div className="flex justify-center mb-12 overflow-x-auto pb-2">
              <TabsList className="grid grid-cols-4 md:grid-cols-8">
                {services.map((service) => (
                  <TabsTrigger key={service.id} value={service.id} className="px-3 py-2">
                    <span className="hidden md:inline">{service.title}</span>
                    <span className="md:hidden">{service.icon}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">{service.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-lg text-foreground/80 mb-8">{service.description}</p>

                    <h4 className="text-xl font-bold mb-4">What We Offer</h4>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-xl font-bold mb-4">Technologies We Use</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {service.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-muted rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button className="bg-primary hover:bg-primary/90">
                      Get Started with {service.title}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>

                  <div>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
                      <img
                        src="/placeholder.svg?height=400&width=600"
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <Card className="border-2 border-primary/20">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold mb-4">Case Study: {service.caseStudy.title}</h4>
                        <p className="text-foreground/70 mb-6">{service.caseStudy.description}</p>
                        <Link
                          href={`/case-studies/${service.id}-case-study`}
                          className="text-primary hover:text-primary/80 font-medium flex items-center"
                        >
                          Read Full Case Study
                          <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our 2X Speed Delivery Process</h2>
            <p className="text-lg text-foreground/80">
              Our unique approach allows us to deliver high-quality solutions in half the time without compromising on
              quality.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform md:translate-x-[-50%]"></div>

              {[
                {
                  title: "Discovery & Planning",
                  description:
                    "We rapidly assess your needs and create a detailed roadmap with clear milestones and deliverables.",
                  icon: <Globe className="h-6 w-6 text-white" />,
                },
                {
                  title: "Stack-Specific Team Assembly",
                  description:
                    "We assign specialized developers with deep expertise in the exact technologies your project requires.",
                  icon: <Users className="h-6 w-6 text-white" />,
                },
                {
                  title: "Parallel Development",
                  description:
                    "Our teams work in parallel on different components, significantly reducing development time.",
                  icon: <Code className="h-6 w-6 text-white" />,
                },
                {
                  title: "Continuous Integration",
                  description:
                    "We integrate components continuously, identifying and resolving issues early in the process.",
                  icon: <Database className="h-6 w-6 text-white" />,
                },
                {
                  title: "Accelerated Testing",
                  description:
                    "Our automated testing frameworks ensure quality while maintaining our rapid delivery pace.",
                  icon: <Cpu className="h-6 w-6 text-white" />,
                },
                {
                  title: "Deployment & Optimization",
                  description:
                    "We deploy your solution and continuously optimize for performance, security, and scalability.",
                  icon: <Cloud className="h-6 w-6 text-white" />,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2 flex justify-center md:justify-end items-start">
                    <div
                      className={`relative z-10 ${
                        index % 2 === 1 ? "md:text-right md:items-end" : "md:text-left md:items-start"
                      }`}
                    >
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-foreground/70">{step.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-primary rounded-full transform translate-x-[-50%] flex items-center justify-center">
                    {step.icon}
                  </div>

                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
   

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our 2X speed delivery can help you achieve your technology goals faster.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="https://calendly.com/critonyx/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule a Meeting
              <ArrowRight size={16} className="ml-2" />
            </Button>
            </Link>
            <Link href="./contact">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Contact Us
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
