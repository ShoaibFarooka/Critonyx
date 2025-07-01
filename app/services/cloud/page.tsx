"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Cloud, CheckCircle, Server, Shield, Zap, Database, Globe } from "lucide-react"
import Link from "next/link"

export default function CloudPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section with Cloud Infrastructure Visualization */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Cloud size={16} className="mr-2" />
              <span>Cloud Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Scalable <span className="text-primary">Cloud Infrastructure</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Build, deploy, and scale applications with confidence using modern cloud technologies. From migration to
              optimization, we provide end-to-end cloud solutions that grow with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Start Cloud Journey
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View Cloud Projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Cloud Infrastructure Diagram */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Cloud */}
              <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                <Cloud size={40} className="text-white" />
              </div>

              {/* Floating Services */}
              {[
                {
                  icon: <Database size={20} />,
                  position: "top-4 left-8",
                  delay: "0s",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: <Server size={20} />,
                  position: "top-8 right-4",
                  delay: "0.5s",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  icon: <Shield size={20} />,
                  position: "bottom-8 left-4",
                  delay: "1s",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: <Globe size={20} />,
                  position: "bottom-4 right-8",
                  delay: "1.5s",
                  color: "from-orange-500 to-red-500",
                },
                {
                  icon: <Zap size={20} />,
                  position: "top-1/2 left-0",
                  delay: "2s",
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  icon: <Database size={20} />,
                  position: "top-1/2 right-0",
                  delay: "2.5s",
                  color: "from-indigo-500 to-purple-500",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`absolute ${service.position} w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-white shadow-lg animate-bounce`}
                  style={{ animationDelay: service.delay, animationDuration: "3s" }}
                >
                  {service.icon}
                </div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-20">
                <defs>
                  <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {/* Connecting lines from center to services */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="20%"
                  y2="15%"
                  stroke="url(#cloudGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="80%"
                  y2="20%"
                  stroke="url(#cloudGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="15%"
                  y2="80%"
                  stroke="url(#cloudGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="85%"
                  y2="85%"
                  stroke="url(#cloudGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="5%"
                  y2="50%"
                  stroke="url(#cloudGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
                <line
                  x1="50%"
                  y1="50%"
                  x2="95%"
                  y2="50%"
                  stroke="url(#cloudGradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                />
              </svg>

              {/* Floating Data Particles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/40 rounded-full animate-ping"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services with Infrastructure Cards */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cloud Services</h2>
            <p className="text-lg text-foreground/80">Comprehensive cloud solutions for modern applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Migration",
                description: "Seamlessly move your applications and data to the cloud with zero downtime.",
                features: ["Assessment & Planning", "Data Migration", "Application Modernization"],
                icon: <Cloud className="h-8 w-8" />,
                metrics: { uptime: "99.9%", migration: "100+", time: "50%" },
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "DevOps & CI/CD",
                description: "Automate your deployment pipeline for faster, more reliable releases.",
                features: ["Continuous Integration", "Automated Deployment", "Infrastructure as Code"],
                icon: <Zap className="h-8 w-8" />,
                metrics: { deployment: "10x", downtime: "90%", efficiency: "75%" },
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Serverless Architecture",
                description: "Build scalable applications without managing servers or infrastructure.",
                features: ["Function as a Service", "Auto-scaling", "Pay-per-use"],
                icon: <Server className="h-8 w-8" />,
                metrics: { cost: "60%", scale: "Auto", response: "100ms" },
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Container Orchestration",
                description: "Deploy and manage containerized applications at scale with Kubernetes.",
                features: ["Docker Containers", "Kubernetes", "Service Mesh"],
                icon: <Database className="h-8 w-8" />,
                metrics: { containers: "1000+", availability: "99.99%", scaling: "Auto" },
                color: "from-orange-500 to-red-500",
              },
              {
                title: "Cloud Security",
                description: "Protect your cloud infrastructure with enterprise-grade security measures.",
                features: ["Identity Management", "Encryption", "Compliance"],
                icon: <Shield className="h-8 w-8" />,
                metrics: { security: "100%", compliance: "SOC2", threats: "0" },
                color: "from-indigo-500 to-purple-500",
              },
              {
                title: "Multi-Cloud Strategy",
                description: "Leverage multiple cloud providers for optimal performance and reliability.",
                features: ["AWS", "Azure", "Google Cloud"],
                icon: <Globe className="h-8 w-8" />,
                metrics: { providers: "3+", redundancy: "99.9%", latency: "50ms" },
                color: "from-teal-500 to-cyan-500",
              },
            ].map((service, index) => (
              <Card key={index} className="border hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
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

      {/* Cloud Providers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cloud Platforms & Technologies</h2>
            <p className="text-lg text-foreground/80">Leading cloud platforms and modern DevOps tools</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "AWS", category: "Cloud Provider",  },
              { name: "Azure", category: "Microsoft Cloud",  },
              { name: "Google Cloud", category: "GCP",  },
              { name: "Kubernetes", category: "Orchestration",  },
              { name: "Docker", category: "Containers",  },
              { name: "Terraform", category: "IaC",  },
              { name: "Jenkins", category: "CI/CD",  },
              { name: "GitLab", category: "DevOps",  },
              { name: "Prometheus", category: "Monitoring",  },
              { name: "Grafana", category: "Visualization",  },
              { name: "Helm", category: "Package Manager",  },
              { name: "Istio", category: "Service Mesh",  },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-4 border border-border hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                    <Cloud className="h-6 w-6 text-primary" />
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

      {/* Architecture Diagram */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cloud Architecture</h2>
            <p className="text-lg text-foreground/80">Modern cloud infrastructure patterns and best practices</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-background rounded-2xl p-8 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Frontend Layer */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Frontend</h3>
                  <div className="space-y-2">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-2 text-sm">CDN</div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-2 text-sm">Load Balancer</div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-2 text-sm">Web App</div>
                  </div>
                </div>

                {/* Backend Layer */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Backend</h3>
                  <div className="space-y-2">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded p-2 text-sm">API Gateway</div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded p-2 text-sm">Microservices</div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded p-2 text-sm">Container Orchestration</div>
                  </div>
                </div>

                {/* Data Layer */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Database size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Data</h3>
                  <div className="space-y-2">
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-2 text-sm">Database</div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-2 text-sm">Cache</div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-2 text-sm">Storage</div>
                  </div>
                </div>
              </div>

              {/* Connection Arrows */}
              <div className="flex justify-center items-center mt-8 space-x-8">
                <ArrowRight className="text-primary" />
                <ArrowRight className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              {/* Floating cloud elements */}
              <div className="absolute top-4 left-8 w-16 h-10 bg-white rounded-full opacity-20 animate-float"></div>
              <div
                className="absolute top-12 right-12 w-12 h-8 bg-white rounded-full opacity-15 animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-8 left-16 w-20 h-12 bg-white rounded-full opacity-10 animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute bottom-4 right-8 w-14 h-9 bg-white rounded-full opacity-20 animate-float"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Scale in the Cloud?</h2>
              <p className="text-xl mb-8 opacity-90">
                Transform your infrastructure with modern cloud solutions that scale with your business.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Start Cloud Migration
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    View Cloud Success Stories
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
