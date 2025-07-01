"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Zap, Code, Play } from "lucide-react"
import { motion } from "framer-motion"

const HeroSection = () => {
  const [mounted, setMounted] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
    if (videoRef.current) {
      videoRef.current.play()
    }
  }

  if (!mounted) return null

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden min-h-screen flex items-center">
        {/* Background gradient that extends behind video */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />

        {/* Additional background layers for seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/30 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,background_70%)] -z-10" />

        {/* Enhanced left-side blending gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 via-background/40 to-transparent -z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 via-background/20 to-transparent -z-10" />

        {/* Speed lines animation */}
        <div className="absolute inset-0 -z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-primary/15 to-transparent animate-speed-line"
              style={{
                top: `${3 + i * 5}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Floating particles with enhanced left-side density */}
        <div className="absolute inset-0 -z-10">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/15 rounded-full"
              style={{
                left: `${Math.random() * 70}%`, // More particles on left side
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.1, 0.6, 0.1],
                scale: [1, 1.8, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div
              className="order-2 lg:order-1 relative z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary backdrop-blur-sm">
                <Zap size={16} className="mr-2" />
                <span>Critonyx - Delivering Technology at 2X Speed</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Accelerate Your
                <span className="gradient-text block"> Digital Transformation</span>
              </h1>

              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl">
                We deliver tech solutions in half the time with stack-specific developers for all your digital needs.
                From web development to AI, we've got you covered.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                
                <Button size="lg" variant="outline" className="bg-primary hover:bg-primary/90 backdrop-blur-sm">
                  Explore Services
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center mr-3 border border-primary/20">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">2X</div>
                    <div className="text-sm text-foreground/70">Faster Delivery</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center mr-3 border border-primary/20">
                    <Code size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">100+</div>
                    <div className="text-sm text-foreground/70">Technologies</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center mr-3 border border-primary/20">
                    <Zap size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">24/7</div>
                    <div className="text-sm text-foreground/70">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Video Section - Enhanced Left-Side Blending */}
            <motion.div
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Video container with enhanced left-side integration */}
              <div className="relative w-full aspect-video">
                {/* Enhanced background glow with left-side emphasis */}
                <div className="absolute -inset-12 bg-gradient-to-r from-primary/3 via-primary/8 to-secondary/3 rounded-full blur-3xl opacity-70" />
                <div className="absolute -inset-8 bg-gradient-to-r from-background/20 via-primary/5 to-secondary/5 rounded-full blur-2xl" />

                {/* Video element with enhanced left-side blending */}
                <div className="relative w-full h-full">
                  {/* Enhanced gradient overlays for seamless left-side blending */}
                  <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 via-transparent to-background/10 z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/15 to-transparent z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/15 via-transparent to-background/10 z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/15 z-10 pointer-events-none" />

                  {/* Video Element with AI Advancements */}
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover rounded-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onLoadedData={handleVideoLoad}
                    poster="/placeholder.svg?height=600&width=800"
                    style={{
                      maskImage:
                        "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), radial-gradient(ellipse at center, black 70%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%), radial-gradient(ellipse at center, black 70%, transparent 100%)",
                      maskComposite: "intersect",
                      WebkitMaskComposite: "source-in",
                    }}
                  >
                    <source src="/Video_Ready_AI_Advancements.mp4" type="video/mp4" />
                    {/* Fallback for browsers that don't support video */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center rounded-lg">
                      <div className="text-center text-foreground">
                        <Play size={48} className="mx-auto mb-4 text-primary" />
                        <p className="text-primary">AI Advancements</p>
                        <p className="text-sm text-foreground/70">Technology Transformation</p>
                      </div>
                    </div>
                  </video>

                  {/* Minimal overlay content */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    
                  </div>
                </div>
              </div>

              {/* Floating elements that blend with background - positioned for left-side harmony */}
              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-primary/5 backdrop-blur-sm border border-primary/10 flex items-center justify-center"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <Code size={28} className="text-primary/70" />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-secondary/5 backdrop-blur-sm border border-secondary/10 flex items-center justify-center"
                animate={{
                  rotate: -360,
                  y: [0, -10, 0],
                }}
                transition={{
                  rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  y: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <Zap size={20} className="text-secondary/70" />
              </motion.div>

              {/* Additional ambient elements for enhanced left-side blending */}
              <motion.div
                className="absolute top-1/2 -left-16 w-8 h-8 rounded-full bg-primary/10"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1,
                }}
              />

              <motion.div
                className="absolute top-1/4 -left-12 w-6 h-6 rounded-full bg-primary/15"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.5,
                }}
              />

              <motion.div
                className="absolute top-3/4 -left-10 w-4 h-4 rounded-full bg-secondary/15"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 1.5,
                }}
              />

              <motion.div
                className="absolute top-1/3 -right-6 w-4 h-4 rounded-full bg-secondary/20"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: 0.5,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection
