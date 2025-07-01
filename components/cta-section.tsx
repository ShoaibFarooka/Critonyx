"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Zap, ArrowRight, Calendar } from "lucide-react"

const CTASection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="border-0 shadow-xl bg-background/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary">
                    <Zap size={16} className="mr-2" />
                    <span>Let's Accelerate Your Project</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Deliver at <span className="text-primary">2X Speed</span>?
                  </h2>
                  <p className="text-foreground/70 mb-8">
                    Schedule a call with our experts to discuss how we can help you achieve your technology goals in
                    half the time.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Quick Consultation</h4>
                        <p className="text-sm text-foreground/70">30-minute call with our tech experts</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Fast Response</h4>
                        <p className="text-sm text-foreground/70">Get a proposal within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary to-secondary p-8 md:p-12 text-white">
                  <h3 className="text-2xl font-bold mb-6">Schedule a Meeting</h3>
                  <form className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Company"
                        className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Project Description"
                        className="bg-white/20 border-white/30 placeholder:text-white/70 text-white"
                      />
                    </div>
                    
                                  <a 
                                    href="https://calendly.com/critonyx/30min" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hidden md:flex bg-primary hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-primary-foreground"
                                  >
                                    Schedule Now
                                  </a>
                    <p className="text-xs text-white/70 text-center mt-4">
                      By submitting this form, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
