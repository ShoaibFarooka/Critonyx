import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Palette, CheckCircle, Eye, Users, Target, Zap } from "lucide-react"
import Link from "next/link"

export default function UXUIDesignPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section with Design Process Visualization */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Palette size={16} className="mr-2" />
              <span>UX/UI Design Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              User-Centered <span className="text-primary">Design Solutions</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Create exceptional user experiences that engage, convert, and delight. Our design team crafts intuitive
              interfaces that users love and businesses benefit from.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Design Project
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View Design Portfolio
                </Button>
              </Link>
            </div>
          </div>

          {/* Design Process Visualization */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central Design Hub */}
              <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <Palette size={32} className="text-white" />
              </div>

              {/* Design Process Steps */}
              {[
                {
                  icon: <Users size={20} />,
                  label: "Research",
                  position: "top-4 left-1/2 transform -translate-x-1/2",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: <Target size={20} />,
                  label: "Strategy",
                  position: "top-1/2 right-4 transform -translate-y-1/2",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: <Eye size={20} />,
                  label: "Design",
                  position: "bottom-4 left-1/2 transform -translate-x-1/2",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: <Zap size={20} />,
                  label: "Test",
                  position: "top-1/2 left-4 transform -translate-y-1/2",
                  color: "from-orange-500 to-red-500",
                },
              ].map((step, index) => (
                <div key={index} className={`absolute ${step.position}`}>
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white shadow-lg animate-pulse`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {step.icon}
                  </div>
                  <div className="text-center mt-2 text-sm font-medium">{step.label}</div>
                </div>
              ))}

              {/* Connecting Arrows */}
              <svg className="absolute inset-0 w-full h-full opacity-30">
                <defs>
                  <marker id="arrow-+  " markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                  </marker>
                </defs>

                {/* Circular flow arrows */}
                <path
                  d="M 50 20 A 30 30 0 0 1 80 50"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  className="animate-pulse"
                />
                <path
                  d="M 80 50 A 30 30 0 0 1 50 80"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  className="animate-pulse"
                />
                <path
                  d="M 50 80 A 30 30 0 0 1 20 50"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  className="animate-pulse"
                />
                <path
                  d="M 20 50 A 30 30 0 0 1 50 20"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  className="animate-pulse"
                />
              </svg>

              {/* Design Elements */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/40 rounded-full animate-ping"
                  style={{
                    top: `${25 + Math.random() * 50}%`,
                    left: `${25 + Math.random() * 50}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random()}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services with Enhanced Cards */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Design Services</h2>
            <p className="text-lg text-foreground/80">Comprehensive UX/UI design services for digital products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "User Research",
                description: "Deep insights into user behavior, needs, and pain points.",
                features: ["User Interviews", "Surveys & Analytics", "Persona Development"],
                icon: <Users className="h-8 w-8" />,
                gradient: "from-blue-500 to-cyan-500",
                metrics: { research: "500+", insights: "1000+", accuracy: "95%" },
              },
              {
                title: "UX Design",
                description: "Strategic user experience design that drives engagement.",
                features: ["User Journey Mapping", "Information Architecture", "Wireframing"],
                icon: <Target className="h-8 w-8" />,
                gradient: "from-green-500 to-emerald-500",
                metrics: { journeys: "200+", conversion: "+150%", satisfaction: "92%" },
              },
              {
                title: "UI Design",
                description: "Beautiful, intuitive interfaces that users love to interact with.",
                features: ["Visual Design", "Design Systems", "Interactive Prototypes"],
                icon: <Palette className="h-8 w-8" />,
                gradient: "from-purple-500 to-pink-500",
                metrics: { designs: "300+", systems: "50+", prototypes: "150+" },
              },
              {
                title: "Usability Testing",
                description: "Validate designs with real users to ensure optimal experience.",
                features: ["User Testing", "A/B Testing", "Accessibility Testing"],
                icon: <Eye className="h-8 w-8" />,
                gradient: "from-orange-500 to-red-500",
                metrics: { tests: "1000+", improvement: "+200%", accessibility: "100%" },
              },
              {
                title: "Design Systems",
                description: "Scalable design systems for consistent user experiences.",
                features: ["Component Libraries", "Style Guides", "Design Tokens"],
                icon: <Zap className="h-8 w-8" />,
                gradient: "from-indigo-500 to-purple-500",
                metrics: { components: "500+", consistency: "100%", efficiency: "+300%" },
              },
              {
                title: "Mobile Design",
                description: "Mobile-first design approaches for all screen sizes.",
                features: ["Responsive Design", "Mobile Optimization", "Touch Interfaces"],
                icon: <Target className="h-8 w-8" />,
                gradient: "from-teal-500 to-cyan-500",
                metrics: { screens: "All", mobile: "100%", touch: "Optimized" },
              },
            ].map((service, index) => (
              <Card key={index} className="border hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white relative overflow-hidden`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-lg font-bold">{Object.values(service.metrics)[0]}</div>
                        <div className="text-xs opacity-80">{Object.keys(service.metrics)[0]}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {Object.entries(service.metrics).map(([key, value], i) => (
                        <div key={i} className="bg-white/10 rounded p-2">
                          <div className="text-sm font-bold">{value}</div>
                          <div className="text-xs opacity-80 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Animated Background */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
                  </div>

                  <div className="p-6">
                    <p className="text-foreground/70 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle size={16} className="text-primary mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools with Progress Bars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Design Tools & Technologies We Master</h2>
            <p className="text-lg text-foreground/80">Industry-leading tools for professional design workflows</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Figma", category: "Design",  },
              { name: "Adobe XD", category: "Prototyping",  },
              { name: "Sketch", category: "UI Design",  },
              { name: "InVision", category: "Collaboration",  },
              { name: "Principle", category: "Animation",  },
              { name: "Framer", category: "Interactive",  },
              { name: "Miro", category: "Ideation",  },
              { name: "Hotjar", category: "Analytics",  },
              { name: "Maze", category: "Testing",  },
              { name: "Optimal Workshop", category: "Research",  },
              { name: "Zeplin", category: "Handoff",  },
              { name: "Abstract", category: "Version Control",  },
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-4 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <div className="font-medium text-sm mb-1">{tool.name}</div>
                <div className="text-xs text-foreground/60 mb-2">{tool.category}</div>

                {/* Expertise Bar */}
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 border border-white rounded-full animate-ping"></div>
              <div
                className="absolute top-8 right-8 w-6 h-6 border border-white rounded-full animate-ping"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-8 left-8 w-4 h-4 border border-white rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance User Experience?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's create designs that users love and drive business results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Start Design Project
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    View Our Designs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
