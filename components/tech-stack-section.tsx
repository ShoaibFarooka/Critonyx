"use client"
import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import yomoloko from "../weblogos/aure.png"
const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState("frontend")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const techStacks = {
    frontend: [
      { name: "React", logo: "/weblogos/react.png" },
      { name: "Vue.js", logo: "/weblogos/vue.png" },
      { name: "Angular", logo: "/weblogos/angular.png" },
      { name: "Next.js", logo: "/weblogos/next.png" },
      { name: "Svelte", logo: "/weblogos/svelte.png" },
      { name: "TypeScript", logo: "/weblogos/typescript.png" },
    ],
    backend: [
      { name: "Node.js", logo: "/weblogos/node.png" },
      { name: "Python", logo: "/weblogos/python.png" },
      { name: "Java", logo: "/weblogos/java.png" },
      { name: ".NET", logo: "/weblogos/dotnet.png" },
      { name: "PHP", logo: "/weblogos/php.png" },
      { name: "Go", logo: "/weblogos/go.png" },
    ],
    mobile: [
      { name: "React Native", logo: "/weblogos/react.png" },
      { name: "Flutter", logo: "/weblogos/flutter.png" },
      { name: "Swift", logo: "/weblogos/swift.png" },
      { name: "Kotlin", logo: "/weblogos/kotlin.png" },
      { name: "Xamarin", logo: "/weblogos/xamarin.png" },
      { name: "Ionic", logo: "/weblogos/ionic.png" },
    ],
    ai: [
      { name: "TensorFlow", logo: "/weblogos/tensorflow.png" },
      { name: "PyTorch", logo: "/weblogos/pytorch.png" },
      { name: "OpenAI", logo: "/weblogos/openai.png" },
      { name: "Scikit-learn", logo: "/weblogos/scikit-learn.png" },
      { name: "Keras", logo: "/weblogos/keras.png" },
      { name: "Hugging Face", logo: "/weblogos/huggingface.png" },
    ],
    cloud: [
      { name: "AWS", logo: "/weblogos/aws.png" },
      { name: "Azure", logo: "/weblogos/azure.png" },
      { name: "Google Cloud", logo: "/weblogos/googlecloud.jpg" },
      { name: "Kubernetes", logo: "/weblogos/kubernetes.png" },
      { name: "Docker", logo: "/weblogos/docker.png" },
      { name: "Terraform", logo: "/weblogos/terraform.png" },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  }

  // Function to handle image loading errors and try different extensions
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, techName: string) => {
    const img = e.target as HTMLImageElement
    const currentSrc = img.src

    // Try different extensions if the current one fails
    if (currentSrc.includes(".png")) {
      img.src = currentSrc.replace(".png", ".jpg")
    } else if (currentSrc.includes(".jpg")) {
      img.src = currentSrc.replace(".jpg", ".jpeg")
    } else {
      // If all fail, hide the image and show a fallback
      img.style.display = "none"
      const parent = img.parentElement
      if (parent) {
        parent.innerHTML = `<div class="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold text-sm">${techName.charAt(0)}</div>`
      }
    }
  }

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Yes.</span> We Support Your Entire Tech Stack
          </h2>
          <p className="text-foreground/70 text-lg">
            Our stack-specific developers are experts in a wide range of technologies, ensuring you get the best
            solution for your needs.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-3xl">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="ai">AI/ML</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(techStacks).map((stack) => (
            <TabsContent key={stack} value={stack} className="mt-0">
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={activeTab === stack && isInView ? "visible" : "hidden"}
              >
                {techStacks[stack as keyof typeof techStacks].map((tech, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <div className="bg-background rounded-lg p-4 border border-border flex flex-col items-center justify-center text-center h-full tech-icon hover:shadow-lg transition-shadow duration-300">
                      <div className="w-12 h-12 mb-3 flex items-center justify-center">
                        <img
                          src={tech.logo || "/placeholder.svg"}
                          alt={`${tech.name} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => handleImageError(e, tech.name)}
                          loading="lazy"
                        />
                      </div>
                      <span className="font-medium text-sm">{tech.name}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-lg font-medium mb-4">Don't see your technology? We probably support it too!</p>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <span>100+ Technologies Supported</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStackSection
