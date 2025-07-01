import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Database, CheckCircle, BarChart, Users, Settings, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function BusinessApplicationsPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section with Interactive Dashboard Preview */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Database size={16} className="mr-2" />
              <span>Business Applications</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise <span className="text-primary">Business Solutions</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Streamline your operations with custom business applications. From ERP systems to CRM solutions, we build
              enterprise-grade applications that scale with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Business Solution
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View Enterprise Cases
                </Button>
              </Link>
            </div>
          </div>

          {/* Interactive Dashboard Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-border">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg">Business Dashboard</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background rounded-lg p-4 border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground/70">Revenue</span>
                    <TrendingUp size={16} className="text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-primary">$2.4M</div>
                  <div className="text-xs text-green-500">+12.5%</div>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-foreground/70">Users</span>
                    <Users size={16} className="text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold text-primary">1,247</div>
                  <div className="text-xs text-blue-500">+8.2%</div>
                </div>
              </div>

              {/* Chart Representation */}
              <div className="bg-background rounded-lg p-4 border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">Performance Analytics</span>
                  <BarChart size={16} className="text-primary" />
                </div>
                <div className="flex items-end space-x-2 h-20">
                  {[40, 65, 45, 80, 55, 70, 85].map((height, i) => (
                    <div
                      key={i}
                      className="bg-gradient-to-t from-primary to-secondary rounded-t flex-1 opacity-80"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services with Icon Grid */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Business Application Services</h2>
            <p className="text-lg text-foreground/80">Comprehensive enterprise solutions for modern businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ERP Systems",
                description: "Complete enterprise resource planning solutions for streamlined operations.",
                features: ["Financial Management", "Supply Chain", "Human Resources"],
                icon: <Settings className="h-8 w-8" />,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "CRM Solutions",
                description: "Customer relationship management systems that drive sales growth.",
                features: ["Lead Management", "Sales Pipeline", "Customer Analytics"],
                icon: <Users className="h-8 w-8" />,
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Business Intelligence",
                description: "Data-driven insights and reporting for informed decision making.",
                features: ["Real-time Dashboards", "Advanced Analytics", "Custom Reports"],
                icon: <BarChart className="h-8 w-8" />,
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Workflow Automation",
                description: "Automate repetitive tasks and streamline business processes.",
                features: ["Process Automation", "Task Management", "Approval Workflows"],
                icon: <TrendingUp className="h-8 w-8" />,
                color: "from-orange-500 to-red-500",
              },
              {
                title: "Document Management",
                description: "Secure document storage, sharing, and collaboration systems.",
                features: ["Version Control", "Access Management", "Digital Signatures"],
                icon: <Database className="h-8 w-8" />,
                color: "from-indigo-500 to-blue-500",
              },
              {
                title: "Integration Services",
                description: "Connect your existing systems for seamless data flow.",
                features: ["API Integration", "Data Synchronization", "Legacy System Connection"],
                icon: <Settings className="h-8 w-8" />,
                color: "from-teal-500 to-green-500",
              },
            ].map((service, index) => (
              <Card key={index} className="border hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      {service.icon}
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <CheckCircle size={20} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
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

      {/* Technology Stack with Visual Icons */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Enterprise Technologies</h2>
            <p className="text-lg text-foreground/80">Robust technologies for enterprise-grade applications</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "Microsoft D365", category: "ERP" },
              { name: "Salesforce", category: "CRM" },
              { name: "SAP", category: "Enterprise" },
              { name: "Oracle", category: "Database" },
              { name: "Power BI", category: "Analytics" },
              { name: "SharePoint", category: "Collaboration" },
              { name: "Azure", category: "Cloud" },
              { name: "AWS", category: "Infrastructure" },
              { name: "Tableau", category: "Visualization" },
              { name: "ServiceNow", category: "Workflow" },
              { name: "Workday", category: "HR" },
              { name: "NetSuite", category: "Business" },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-4 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="font-medium text-sm mb-1">{tech.name}</div>
                <div className="text-xs text-foreground/60">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Business Operations</h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to streamline your processes with custom business applications?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Start Your Transformation
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  View Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
