import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Cpu, CheckCircle, Zap, Eye, Blocks, Shield } from "lucide-react"
import Link from "next/link"

export default function EmergingTechnologiesPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section with 3D Visual Elements */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Cpu size={16} className="mr-2" />
              <span>Emerging Technologies</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Future-Ready <span className="text-primary">Technology Solutions</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Stay ahead of the curve with cutting-edge technologies. From AR/VR experiences to blockchain solutions, we
              help you leverage tomorrow's technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explore Innovation
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View Tech Demos
                </Button>
              </Link>
            </div>
          </div>

          {/* 3D Tech Visualization */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Central Core */}
              <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-pulse">
                <Cpu size={32} className="text-white" />
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <Eye size={20} />
                </div>
              </div>

              <div
                className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
                style={{ animationDelay: "1s" }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <Blocks size={20} />
                </div>
              </div>

              <div
                className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
                style={{ animationDelay: "2s" }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <Shield size={20} />
                </div>
              </div>

              <div
                className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow"
                style={{ animationDelay: "3s" }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white shadow-lg absolute -top-16 left-1/2 transform -translate-x-1/2">
                  <Zap size={20} />
                </div>
              </div>

              {/* Connecting Lines */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-1/2 w-px h-24 bg-gradient-to-t from-primary to-transparent transform -translate-x-1/2 origin-bottom"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services with Animated Cards */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Emerging Technology Services</h2>
            <p className="text-lg text-foreground/80">Cutting-edge solutions for forward-thinking businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AR/VR Development",
                description: "Immersive experiences that transform how users interact with your brand.",
                features: ["Virtual Showrooms", "Training Simulations", "Interactive Experiences"],
                icon: <Eye className="h-8 w-8" />,
                gradient: "from-blue-500 via-purple-500 to-pink-500",
                metrics: { projects: "50+", accuracy: "95%", engagement: "300%" },
              },
              {
                title: "Blockchain Solutions",
                description: "Secure, transparent, and decentralized applications for modern business.",
                features: ["Smart Contracts", "DeFi Applications", "NFT Platforms"],
                icon: <Blocks className="h-8 w-8" />,
                gradient: "from-green-500 via-emerald-500 to-teal-500",
                metrics: { transactions: "1M+", security: "100%", efficiency: "80%" },
              },
              {
                title: "IoT Integration",
                description: "Connect devices and systems for intelligent automation and monitoring.",
                features: ["Device Connectivity", "Real-time Monitoring", "Predictive Analytics"],
                icon: <Zap className="h-8 w-8" />,
                gradient: "from-orange-500 via-red-500 to-pink-500",
                metrics: { devices: "10K+", uptime: "99.9%", insights: "Real-time" },
              },
              {
                title: "Web3 Development",
                description: "Decentralized web applications and blockchain-based solutions.",
                features: ["dApps", "Wallet Integration", "Decentralized Storage"],
                icon: <Shield className="h-8 w-8" />,
                gradient: "from-purple-500 via-violet-500 to-indigo-500",
                metrics: { dApps: "25+", users: "100K+", gas: "Low" },
              },
              {
                title: "Metaverse Platforms",
                description: "Virtual worlds and digital spaces for next-generation interactions.",
                features: ["Virtual Environments", "Avatar Systems", "Social Features"],
                icon: <Cpu className="h-8 w-8" />,
                gradient: "from-cyan-500 via-blue-500 to-indigo-500",
                metrics: { worlds: "15+", users: "50K+", immersion: "100%" },
              },
              {
                title: "Edge Computing",
                description: "Distributed computing solutions for low-latency applications.",
                features: ["Edge Deployment", "Real-time Processing", "Distributed Architecture"],
                icon: <Zap className="h-8 w-8" />,
                gradient: "from-yellow-500 via-orange-500 to-red-500",
                metrics: { latency: "5ms", nodes: "500+", processing: "Real-time" },
              },
            ].map((service, index) => (
              <Card key={index} className="border hover:shadow-xl transition-all duration-500 overflow-hidden group">
                <CardContent className="p-0 relative">
                  <div className={`bg-gradient-to-br ${service.gradient} p-6 text-white relative overflow-hidden`}>
                    <div className="relative z-10">
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
                    </div>

                    {/* Animated Background Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-500"></div>
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

      {/* Technology Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Emerging Tech Stack</h2>
            <p className="text-lg text-foreground/80">Next-generation tools and frameworks</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Unity", category: "AR/VR",  },
              { name: "Unreal Engine", category: "3D/VR",  },
              { name: "Solidity", category: "Blockchain",  },
              { name: "Web3.js", category: "Web3",  },
              { name: "Three.js", category: "3D Web",  },
              { name: "ARKit", category: "iOS AR",  },
              { name: "ARCore", category: "Android AR",  },
              { name: "Ethereum", category: "Blockchain",  },
              { name: "IPFS", category: "Storage",  },
              { name: "WebXR", category: "Web VR",  },
              { name: "TensorFlow", category: "AI/ML",  },
              { name: "OpenCV", category: "Computer Vision",  },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-4 border border-border hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-medium text-sm mb-1">{tech.name}</div>
                  <div className="text-xs text-foreground/60 mb-2">{tech.category}</div>

                  {/* Usage Indicator */}
                  
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="absolute top-12 right-8 w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-white/25 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-8 w-1 h-1 bg-white/30 rounded-full"></div>
              <div className="absolute top-1/3 right-12 w-1.5 h-1.5 bg-white/25 rounded-full"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Embrace the Future?</h2>
              <p className="text-xl mb-8 opacity-90">Let's build tomorrow's technology solutions today.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Start Innovation
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Explore Demos
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
