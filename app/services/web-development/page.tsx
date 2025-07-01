import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Globe, CheckCircle, Code, Zap, Monitor, Smartphone } from "lucide-react"
import Link from "next/link"

export default function WebDevelopmentPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section with Code Animation */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Globe size={16} className="mr-2" />
              <span>Web Development Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Custom <span className="text-primary">Web Development</span> Solutions
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Build powerful, scalable web applications with our expert development team. From responsive websites to
              complex web platforms, we deliver solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Your Project
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>

          {/* Code Editor Mockup */}
          <div className="relative">
            <div className="bg-gray-900 rounded-lg p-6 border border-border shadow-2xl">
              {/* Editor Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-gray-400 text-sm">index.tsx</div>
              </div>

              {/* Code Content */}
              <div className="space-y-2 text-sm font-mono">
                <div className="text-purple-400">
                  import <span className="text-blue-400">React</span> from{" "}
                  <span className="text-green-400">'react'</span>
                </div>
                <div className="text-purple-400">
                  import <span className="text-blue-400">{"{ NextPage }"}</span> from{" "}
                  <span className="text-green-400">'next'</span>
                </div>
                <div className="text-gray-500">// Building amazing web experiences</div>
                <div className="text-blue-400">
                  const <span className="text-yellow-400">HomePage</span>:{" "}
                  <span className="text-blue-400">NextPage</span> = {"() => {"}
                </div>
                <div className="ml-4 text-purple-400">return (</div>
                <div className="ml-8 text-gray-300">
                  {"<div className="}
                  <span className="text-green-400">"hero-section"</span>
                  {">"}
                </div>
                <div className="ml-12 text-gray-300">{"<h1>"}</div>
                <div className="ml-16 text-primary">2X Speed Development</div>
                <div className="ml-12 text-gray-300">{"</h1>"}</div>
                <div className="ml-8 text-gray-300">{"</div>"}</div>
                <div className="ml-4 text-purple-400">)</div>
                <div className="text-blue-400">{"}"}</div>
              </div>

              {/* Animated Cursor */}
              <div className="w-2 h-5 bg-primary animate-pulse mt-2"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce">
              <Code size={24} className="text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
              <Globe size={20} className="text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Services with Enhanced Cards */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Web Development Services</h2>
            <p className="text-lg text-foreground/80">Comprehensive web solutions tailored to your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Responsive Web Design",
                description: "Mobile-first designs that work perfectly on all devices and screen sizes.",
                features: ["Mobile Optimization", "Cross-browser Compatibility", "SEO-friendly Structure"],
                icon: <Monitor className="h-8 w-8" />,
                gradient: "from-blue-500 to-cyan-500",
                metrics: { devices: "All", performance: "95%", seo: "100%" },
              },
              {
                title: "E-commerce Development",
                description: "Complete online stores with payment integration and inventory management.",
                features: ["Payment Gateway Integration", "Inventory Management", "Order Processing"],
                icon: <Globe className="h-8 w-8" />,
                gradient: "from-green-500 to-emerald-500",
                metrics: { conversion: "+200%", sales: "$2M+", uptime: "99.9%" },
              },
              {
                title: "Web Applications",
                description: "Custom web apps built with modern frameworks and technologies.",
                features: ["React/Vue/Angular", "Real-time Features", "API Integration"],
                icon: <Code className="h-8 w-8" />,
                gradient: "from-purple-500 to-pink-500",
                metrics: { frameworks: "10+", apps: "100+", speed: "2X" },
              },
              {
                title: "Progressive Web Apps",
                description: "App-like experiences that work offline and install on devices.",
                features: ["Offline Functionality", "Push Notifications", "App-like Experience"],
                icon: <Smartphone className="h-8 w-8" />,
                gradient: "from-orange-500 to-red-500",
                metrics: { offline: "100%", engagement: "+300%", install: "Easy" },
              },
              {
                title: "CMS Development",
                description: "Content management systems for easy website updates and maintenance.",
                features: ["Custom CMS", "WordPress/Drupal", "Content Workflows"],
                icon: <Zap className="h-8 w-8" />,
                gradient: "from-indigo-500 to-purple-500",
                metrics: { cms: "5+", updates: "Real-time", ease: "100%" },
              },
              {
                title: "API Development",
                description: "RESTful and GraphQL APIs for seamless data integration.",
                features: ["RESTful APIs", "GraphQL", "Third-party Integrations"],
                icon: <Globe className="h-8 w-8" />,
                gradient: "from-teal-500 to-cyan-500",
                metrics: { apis: "500+", response: "50ms", reliability: "99.9%" },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Web Technologies We Master</h2>
            <p className="text-lg text-foreground/80">Cutting-edge technologies for modern web development</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React", category: "Frontend",  },
              { name: "Vue.js", category: "Frontend",  },
              { name: "Angular", category: "Frontend",  },
              { name: "Next.js", category: "Framework",  },
              { name: "Node.js", category: "Backend",  },
              { name: "Express", category: "Backend",  },
              { name: "TypeScript", category: "Language",  },
              { name: "JavaScript", category: "Language",  },
              { name: "HTML5", category: "Markup",  },
              { name: "CSS3", category: "Styling",  },
              { name: "Tailwind", category: "CSS Framework",  },
              { name: "Bootstrap", category: "CSS Framework",  },
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

      {/* Development Process */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our 2X Speed Development Process</h2>
            <p className="text-lg text-foreground/80">A proven methodology that delivers results in half the time</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your requirements and goals",
                  icon: <Globe size={24} />,
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Creating wireframes and visual designs",
                  icon: <Monitor size={24} />,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building your web solution with best practices",
                  icon: <Code size={24} />,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  step: "04",
                  title: "Launch",
                  description: "Testing, deployment, and ongoing support",
                  icon: <Zap size={24} />,
                  color: "from-orange-500 to-red-500",
                },
              ].map((phase, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${phase.color} text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {phase.icon}
                  </div>
                  <div className="text-sm text-primary font-bold mb-2">STEP {phase.step}</div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-foreground/70">{phase.description}</p>
                </div>
              ))}
            </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Web Solution?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss your project and create a web solution that drives results.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Get Started Today
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    View Our Work
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
