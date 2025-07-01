import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Smartphone, CheckCircle, Zap, Apple, Play, Code } from "lucide-react"
import Link from "next/link"

export default function AppDevelopmentPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section with Phone Mockup */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Smartphone size={16} className="mr-2" />
              <span>Mobile App Development</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Native & Cross-Platform <span className="text-primary">Mobile Apps</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Create powerful mobile applications for iOS and Android. From native apps to cross-platform solutions, we
              build mobile experiences that engage and convert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Your App Project
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View App Portfolio
                </Button>
              </Link>
            </div>
          </div>

          {/* Phone Mockups */}
          <div className="relative">
            <div className="flex justify-center space-x-4">
              {/* iPhone Mockup */}
              <div className="relative">
                <div className="w-40 h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-b from-primary/20 to-secondary/20 rounded-2xl relative overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-full"></div>

                    {/* App Content */}
                    <div className="pt-8 p-4 space-y-3">
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <Apple size={16} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="h-2 bg-white/40 rounded mb-1"></div>
                            <div className="h-1 bg-white/30 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white/15 rounded-lg p-2 h-16"></div>
                        <div className="bg-white/15 rounded-lg p-2 h-16"></div>
                      </div>

                      <div className="bg-white/20 rounded-lg p-3 h-20"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce">
                  <Apple size={20} className="text-white" />
                </div>
              </div>

              {/* Android Mockup */}
              <div className="relative">
                <div className="w-40 h-80 bg-gray-800 rounded-2xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-b from-green-500/20 to-emerald-500/20 rounded-xl relative overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-6 bg-gray-900/50 flex items-center justify-between px-2">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      <div className="text-white text-xs">100%</div>
                    </div>

                    {/* App Content */}
                    <div className="p-4 space-y-3">
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Play size={16} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="h-2 bg-white/40 rounded mb-1"></div>
                            <div className="h-1 bg-white/30 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="bg-white/15 rounded-lg p-2 h-12"></div>
                        <div className="bg-white/15 rounded-lg p-2 h-12"></div>
                        <div className="bg-white/15 rounded-lg p-2 h-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                  <Play size={20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services with Enhanced Cards */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mobile Development Services</h2>
            <p className="text-lg text-foreground/80">
              Comprehensive mobile app development for all platforms and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "iOS App Development",
                description: "Native iOS apps built with Swift and SwiftUI for optimal performance.",
                features: ["Swift/SwiftUI", "App Store Optimization", "iOS Design Guidelines"],
                icon: <Apple className="h-8 w-8" />,
                gradient: "from-blue-500 to-cyan-500",
                metrics: { apps: "50+", rating: "4.8★", downloads: "1M+" },
              },
              {
                title: "Android App Development",
                description: "Native Android apps using Kotlin and modern Android frameworks.",
                features: ["Kotlin/Java", "Material Design", "Google Play Store"],
                icon: <Play className="h-8 w-8" />,
                gradient: "from-green-500 to-emerald-500",
                metrics: { apps: "60+", rating: "4.7★", users: "2M+" },
              },
              {
                title: "Cross-Platform Apps",
                description: "Single codebase apps that work on both iOS and Android platforms.",
                features: ["React Native", "Flutter", "Xamarin"],
                icon: <Smartphone className="h-8 w-8" />,
                gradient: "from-purple-500 to-pink-500",
                metrics: { platforms: "2+", efficiency: "60%", time: "50%" },
              },
              {
                title: "UI/UX Design",
                description: "User-centered design that creates engaging mobile experiences.",
                features: ["User Research", "Prototyping", "Usability Testing"],
                icon: <Zap className="h-8 w-8" />,
                gradient: "from-orange-500 to-red-500",
                metrics: { designs: "100+", satisfaction: "95%", conversion: "+200%" },
              },
              {
                title: "App Maintenance",
                description: "Ongoing support, updates, and feature enhancements for your app.",
                features: ["Bug Fixes", "Performance Optimization", "Feature Updates"],
                icon: <Code className="h-8 w-8" />,
                gradient: "from-indigo-500 to-purple-500",
                metrics: { uptime: "99.9%", updates: "Monthly", support: "24/7" },
              },
              {
                title: "App Store Deployment",
                description: "Complete app store submission and optimization services.",
                features: ["Store Submission", "ASO Optimization", "Review Management"],
                icon: <Smartphone className="h-8 w-8" />,
                gradient: "from-teal-500 to-cyan-500",
                metrics: { approval: "98%", ranking: "Top 10", visibility: "+300%" },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mobile Technologies We Master</h2>
            <p className="text-lg text-foreground/80">Latest mobile development frameworks and tools</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "React Native", category: "Cross-Platform",  },
              { name: "Flutter", category: "Cross-Platform",  },
              { name: "Swift", category: "iOS Native",  },
              { name: "Kotlin", category: "Android Native",  },
              { name: "Xamarin", category: "Microsoft",  },
              { name: "Ionic", category: "Hybrid",  },
              { name: "Firebase", category: "Backend",  },
              { name: "SQLite", category: "Database",  },
              { name: "Core Data", category: "iOS Storage",  },
              { name: "Realm", category: "Database",  },
              { name: "GraphQL", category: "API",  },
              { name: "REST APIs", category: "Integration",  },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-4 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                  <Smartphone className="h-6 w-6 text-primary" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Mobile App?</h2>
              <p className="text-xl mb-8 opacity-90">
                Transform your idea into a powerful mobile application that users love.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Start Development
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    See Our Apps
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
