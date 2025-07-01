"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const ClientLogosCarousel = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // You can replace these with your actual client logos
  const clientLogos = [
    { name: "Client 1", logo: "/projectimages/virtual-showroom-logo.png" },
    { name: "Client 2", logo: "/projectimages/healthcare-app-logo.png" },
    { name: "Client 3", logo: "/projectimages/financial-services-firm-logo.png" },
    { name: "Client 4", logo: "/projectimages/ecommerce-platform-logo.png" },
    { name: "Client 5", logo: "/projectimages/Global-Retail-logo.png" },
    { name: "Client 6", logo: "/projectimages/manufacturing-automation-logo.png" },
    { name: "Client 7", logo: "/projectimages/financial-app-redesign-logo.png" },
    { name: "Client 8", logo: "/projectimages/healthcare-mobile-app-logo.png" },
  ]

  return (
    <section className="py-16 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We've partnered with companies across various industries to deliver exceptional results and drive digital
            transformation.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center bg-white rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="max-w-32 max-h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center bg-white rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  className="max-w-32 max-h-16 object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-foreground/60">
            Join 500+ companies that trust Critonyx for their digital transformation needs
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default ClientLogosCarousel
