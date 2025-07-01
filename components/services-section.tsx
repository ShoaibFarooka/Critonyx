"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Smartphone, Code, Palette, Database, Cpu, BarChart, Cloud } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const ServicesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Web Development",
      description:
        "Build powerful, scalable web applications with modern technologies that drive your business forward.",
      href: "/services/web-development",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "App Development",
      description:
        "Create native and cross-platform mobile applications that engage users and deliver exceptional experiences.",
      href: "/services/app-development",
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Custom Software",
      description:
        "Develop tailored software solutions that perfectly fit your unique business requirements and workflows.",
      href: "/services/custom-software",
    },
    {
      icon: <Palette className="h-6 w-6 text-primary" />,
      title: "UX/UI Design",
      description: "Design user-centered interfaces that enhance engagement, improve usability, and drive conversions.",
      href: "/services/ux-ui-design",
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Business Applications",
      description:
        "Streamline operations with enterprise-grade applications including ERP, CRM, and workflow automation.",
      href: "/services/business-applications",
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      title: "Emerging Technologies",
      description:
        "Leverage cutting-edge technologies like AR/VR, blockchain, and AI to stay ahead of the competition.",
      href: "/services/emerging-technologies",
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Data & AI",
      description:
        "Transform your data into actionable insights with machine learning and AI-powered analytics solutions.",
      href: "/services/data-ai",
    },
    {
      icon: <Cloud className="h-6 w-6 text-primary" />,
      title: "Cloud Solutions",
      description:
        "Scale your infrastructure with secure, reliable cloud solutions that enhance performance and reduce costs.",
      href: "/services/cloud",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-primary">Comprehensive</span> Services
          </h2>
          <p className="text-foreground/70 text-lg">
            We offer a wide range of technology services to help you achieve your digital transformation goals, all
            delivered at 2X speed.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-primary/20 transition-all duration-300 group">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-6 flex-1 leading-relaxed">{service.description}</p>

                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium group-hover:translate-x-1 transition-all duration-200"
                  >
                    Learn more
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
