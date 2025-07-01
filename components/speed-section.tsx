"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, Clock, Award, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const SpeedSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "2X Faster Delivery",
      description: "We deliver projects in half the time without compromising on quality.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Quick Turnaround",
      description: "Rapid development cycles with continuous delivery and integration.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Stack Specialists",
      description: "Niche-based professional developers for each technology stack.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Dedicated Teams",
      description: "Focused teams that understand your business needs and goals.",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our <span className="text-primary">Speed-First</span> Approach?
          </h2>
          <p className="text-foreground/70 text-lg">
            We've optimized our development process to deliver high-quality solutions in record time, giving you a
            competitive edge in today's fast-paced market.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl" />
          <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-xl p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold mb-2">Ready to accelerate your project?</h3>
              <p className="text-foreground/70">
                Our speed-first approach can help you launch faster and stay ahead of competition.
              </p>
            </div>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">50%</div>
                <div className="text-sm text-foreground/70">Faster Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-foreground/70">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-foreground/70">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpeedSection
