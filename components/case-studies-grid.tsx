"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface CaseStudy {
  id: string
  title: string
  category: string
  client: string
  image: string
  summary: string
  metrics: {
    label: string
    value: string
  }[]
  technologies: string[]
}

interface CaseStudiesGridProps {
  caseStudies: CaseStudy[]
  title?: string
  description?: string
  showViewAll?: boolean
}

const CaseStudiesGrid = ({
  caseStudies,
  title = "Success Stories",
  description = "See how we've helped businesses achieve remarkable results",
  showViewAll = true,
}: CaseStudiesGridProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
        {(title || description) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
            {description && <p className="text-lg text-foreground/70">{description}</p>}
          </div>
        )}

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {caseStudies.map((study, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border flex flex-col">
                <div className="relative">
                  <img src={study.image || "/placeholder.svg"} alt={study.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                    {study.category}
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="mb-2 text-sm text-primary font-medium">{study.client}</div>
                  <h3 className="text-xl font-bold mb-3">{study.title}</h3>
                  <p className="text-foreground/70 mb-4 flex-1">{study.summary}</p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {study.metrics.slice(0, 2).map((metric, i) => (
                      <div key={i} className="bg-muted/50 p-2 rounded">
                        <div className="text-primary font-bold">{metric.value}</div>
                        <div className="text-xs">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link href={`/case-studies/${study.id}`} className="mt-auto">
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Read Case Study
                      <ArrowRight size={14} className="ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {showViewAll && (
          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button variant="outline">
                View All Case Studies
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default CaseStudiesGrid
