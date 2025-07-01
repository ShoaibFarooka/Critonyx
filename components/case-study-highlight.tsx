"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CaseStudy {
  id: string
  title: string
  clientName: string
  clientLogo: string
  personName: string
  personTitle: string
  personImage?: string
  description: string
  productImage: string
  metrics: {
    value: string
    label: string
  }[]
  caseStudyLink: string
}

interface CaseStudyHighlightProps {
  caseStudies: CaseStudy[]
}

const CaseStudyHighlight = ({ caseStudies }: CaseStudyHighlightProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeCaseStudy, setActiveCaseStudy] = useState(0)

  const currentCase = caseStudies[activeCaseStudy]

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">SUCCESS STORIES</h2>
          <p className="text-lg text-foreground/70 mt-4 max-w-2xl mx-auto">
            Find out why brands everywhere are joining the High ROI Club
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          {caseStudies.map((caseStudy, index) => (
            <button
              key={index}
              onClick={() => setActiveCaseStudy(index)}
              className={`h-16 w-24 bg-background rounded-lg border-2 transition-all duration-300 flex items-center justify-center hover:shadow-md ${
                activeCaseStudy === index
                  ? "border-primary shadow-lg scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <img
                src={caseStudy.clientLogo || "/placeholder.png"}
                alt={caseStudy.clientName}
                className="max-h-10 max-w-20 object-contain"
              />
            </button>
          ))}
        </motion.div>

        <motion.div
          key={activeCaseStudy}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-background rounded-xl overflow-hidden shadow-lg border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Left Column - Case Study Content */}
              <div className="lg:col-span-2 p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden mr-4">
                    <img
                      src={currentCase.clientLogo || "/placeholder.png"}
                      alt={currentCase.clientName}
                      className="max-h-12 max-w-12 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentCase.clientName}</h3>
                    <p className="text-foreground/70">{currentCase.personTitle}</p>
                  </div>
                </div>

                <h4 className="text-xl md:text-2xl font-bold mb-4">{currentCase.title}</h4>
                <p className="text-foreground/70 mb-6">{currentCase.description}</p>

                {/* Product Image - Mobile/Tablet View */}
                <div className="lg:hidden mb-8">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={currentCase.productImage || "/placeholder.svg"}
                      alt={`${currentCase.clientName} product`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {currentCase.metrics.map((metric, index) => (
                    <div key={index} className="bg-muted/50 rounded-lg p-4 text-center border border-border">
                      <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{metric.value}</div>
                      <div className="text-xs md:text-sm text-foreground/70">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center mb-8">
                  {currentCase.personImage && (
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={currentCase.personImage || "/placeholder.svg"}
                        alt={currentCase.personName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-bold">{currentCase.personName}</div>
                    <div className="text-sm text-foreground/70">{currentCase.personTitle}</div>
                  </div>
                </div>

                <Link href={currentCase.caseStudyLink}>
                  <Button className="bg-primary hover:bg-primary/90">
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Right Column - Product Image (Desktop) */}
              <div className="hidden lg:block bg-gradient-to-br from-primary/5 to-secondary/5 p-8 flex flex-col justify-center">
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={currentCase.productImage || "/placeholder.svg"}
                    alt={`${currentCase.clientName} product`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

                  {/* Floating Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                    Live Product
                  </div>
                </div>

                {/* Timeline */}
                
              </div>
            </div>
          </div>
        </motion.div>

        {/* View All Case Studies Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/case-studies">
            <Button variant="outline" size="lg">
              View All Case Studies
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudyHighlight
