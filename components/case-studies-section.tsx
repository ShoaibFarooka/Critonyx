"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const CaseStudiesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const caseStudies = [
    {
      title: "E-Commerce Platform Transformation",
      category: "Web Development",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Rebuilt an outdated e-commerce platform, resulting in 200% increase in sales and 50% reduction in page load time.",
      tags: ["Next.js", "Node.js", "MongoDB", "AWS"],
    },
    {
      title: "AI-Powered Financial Analytics",
      category: "Data & AI",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Developed a machine learning solution that improved prediction accuracy by 40% and reduced analysis time by 75%.",
      tags: ["Python", "TensorFlow", "React", "Azure"],
    },
    {
      title: "Mobile App for Healthcare Provider",
      category: "App Development",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Created a cross-platform mobile app that streamlined patient care and reduced administrative work by 60%.",
      tags: ["React Native", "Firebase", "Node.js", "GraphQL"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stories of <span className="text-primary">Transformation</span>
            </h2>
            <p className="text-foreground/70 text-lg">
              See how we've helped businesses across industries achieve their digital goals in record time.
            </p>
          </div>
          <Button variant="outline" className="flex items-center">
            View All Case Studies
            <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {caseStudies.map((study, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border">
                <div className="relative">
                  <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                    {study.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-foreground/70 mb-4">{study.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Read Case Study
                    <ArrowRight size={14} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
