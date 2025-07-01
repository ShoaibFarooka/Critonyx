import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, CheckCircle, Server, Database, Zap, Settings } from "lucide-react"
import Link from "next/link"

export default function CustomSoftwarePage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section with Software Architecture */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Code size={16} className="mr-2" />
              <span>Custom Software Development</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tailored <span className="text-primary">Software Solutions</span> for Your Business
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Build custom software applications that perfectly fit your business requirements. From enterprise
              solutions to specialized tools, we create software that drives efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Discuss Your Project
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View Success Stories
                </Button>
              </Link>
            </div>
          </div>

          {/* Software Architecture Diagram */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central Server */}
              <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Server size={32} className="text-white" />
              </div>

              {/* Surrounding Components */}
              {[
                {
                  icon: <Database size={20} />,
                  position: "top-8 left-1/2 transform -translate-x-1/2",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: <Code size={20} />,
                  position: "top-1/2 right-8 transform -translate-y-1/2",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: <Settings size={20} />,
                  position: "bottom-8 left-1/2 transform -translate-x-1/2",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: <Zap size={20} />,
                  position: "top-1/2 left-8 transform -translate-y-1/2",
                  color: "from-orange-500 to-red-500",
                },
              ].map((component, index) => (
                <div
                  key={index}
                  className={`absolute ${component.position} w-16 h-16 bg-gradient-to-r ${component.color} rounded-lg flex items-center justify-center text-white shadow-lg animate-pulse`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {component.icon}
                </div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Lines from center to components */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="20%"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="80%"
                  y2="50%"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="80%"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="20%"
                  y2="50%"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
              </svg>

              {/* Data Flow Particles */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/60 rounded-full animate-ping"
                  style={{
                    top: `${30 + Math.random() * 40}%`,
                    left: `${30 + Math.random() * 40}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1.5 + Math.random()}s`,
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Custom Development Services</h2>
            <p className="text-lg text-foreground/80">
              End-to-end software development tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Software",
                description: "Large-scale applications for enterprise-level operations and workflows.",
                features: ["Scalable Architecture", "Security Compliance", "Integration Capabilities"],
                icon: <Server className="h-8 w-8" />,
                gradient: "from-blue-500 to-cyan-500",
                metrics: { projects: "200+", users: "1M+", uptime: "99.9%" },
              },
              {
                title: "SaaS Applications",
                description: "Cloud-based software solutions with subscription-based models.",
                features: ["Multi-tenant Architecture", "Subscription Management", "API-first Design"],
                icon: <Code className="h-8 w-8" />,
                gradient: "from-green-500 to-emerald-500",
                metrics: { saas: "50+", revenue: "$10M+", growth: "300%" },
              },
              {
                title: "Desktop Applications",
                description: "Cross-platform desktop software for Windows, Mac, and Linux.",
                features: ["Cross-platform", "Native Performance", "Offline Capabilities"],
                icon: <Settings className="h-8 w-8" />,
                gradient: "from-purple-500 to-pink-500",
                metrics: { platforms: "3+", performance: "95%", offline: "100%" },
              },
              {
                title: "Microservices",
                description: "Modular architecture for scalable and maintainable applications.",
                features: ["Service-oriented", "Independent Deployment", "Technology Diversity"],
                icon: <Zap className="h-8 w-8" />,
                gradient: "from-orange-500 to-red-500",
                metrics: { services: "500+", deployment: "10x", scalability: "Auto" },
              },
              {
                title: "Legacy Modernization",
                description: "Upgrade and modernize existing software systems and applications.",
                features: ["System Migration", "Technology Upgrade", "Performance Improvement"],
                icon: <Database className="h-8 w-8" />,
                gradient: "from-indigo-500 to-purple-500",
                metrics: { migrations: "100+", improvement: "200%", cost: "-50%" },
              },
              {
                title: "API Development",
                description: "Custom APIs for seamless integration and data exchange.",
                features: ["RESTful Services", "GraphQL", "Real-time APIs"],
                icon: <Code className="h-8 w-8" />,
                gradient: "from-teal-500 to-cyan-500",
                metrics: { apis: "1000+", response: "50ms", reliability: "99.9%" },
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

      {/* Technologies with Progress Bars */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Development Technologies We Master</h2>
            <p className="text-lg text-foreground/80">Modern technologies for robust software solutions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Java", category: "Enterprise",  },
              { name: "Python", category: "Backend",  },
              { name: ".NET", category: "Microsoft",  },
              { name: "Node.js", category: "JavaScript",  },
              { name: "Go", category: "Systems",  },
              { name: "Rust", category: "Performance",  },
              { name: "PostgreSQL", category: "Database",  },
              { name: "MongoDB", category: "NoSQL",  },
              { name: "Redis", category: "Cache",  },
              { name: "Docker", category: "Containers",  },
              { name: "Kubernetes", category: "Orchestration",  },
              { name: "AWS", category: "Cloud",  },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-4 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="font-medium text-sm mb-1">{tech.name}</div>
                <div className="text-xs text-foreground/60 mb-2">{tech.category}</div>

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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Custom Software?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's create a software solution that perfectly fits your business needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Start Your Project
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    View Case Studies
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
