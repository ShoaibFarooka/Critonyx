import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart, CheckCircle, Brain, TrendingUp, Zap, Target, Database } from "lucide-react"
import Link from "next/link"

export default function DataAIPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section with AI Neural Network Visualization */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <BarChart size={16} className="mr-2" />
              <span>Data & AI Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Intelligent <span className="text-primary">Data & AI</span> Solutions
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Transform your data into actionable insights with AI-powered solutions. From machine learning models to
              predictive analytics, we help you harness the power of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Unlock AI Power
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button size="lg" variant="outline">
                  View AI Projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Neural Network Visualization */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Neural Network Nodes */}
              <div className="absolute inset-0">
                {/* Input Layer */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-8">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={`input-${i}`}
                      className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>

                {/* Hidden Layer 1 */}
                <div className="absolute left-1/3 top-1/2 transform -translate-y-1/2 space-y-6">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`hidden1-${i}`}
                      className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>

                {/* Hidden Layer 2 */}
                <div className="absolute left-2/3 top-1/2 transform -translate-y-1/2 space-y-6">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`hidden2-${i}`}
                      className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Output Layer */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 space-y-12">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={`output-${i}`}
                      className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  {/* Input to Hidden1 connections */}
                  {[...Array(4)].map((_, i) =>
                    [...Array(6)].map((_, j) => (
                      <line
                        key={`input-hidden1-${i}-${j}`}
                        x1="5%"
                        y1={`${30 + i * 10}%`}
                        x2="33%"
                        y2={`${20 + j * 10}%`}
                        stroke="url(#gradient1)"
                        strokeWidth="1"
                        className="animate-pulse"
                      />
                    )),
                  )}

                  {/* Hidden1 to Hidden2 connections */}
                  {[...Array(6)].map((_, i) =>
                    [...Array(6)].map((_, j) => (
                      <line
                        key={`hidden1-hidden2-${i}-${j}`}
                        x1="33%"
                        y1={`${20 + i * 10}%`}
                        x2="67%"
                        y2={`${20 + j * 10}%`}
                        stroke="url(#gradient2)"
                        strokeWidth="1"
                        className="animate-pulse"
                      />
                    )),
                  )}

                  {/* Hidden2 to Output connections */}
                  {[...Array(6)].map((_, i) =>
                    [...Array(3)].map((_, j) => (
                      <line
                        key={`hidden2-output-${i}-${j}`}
                        x1="67%"
                        y1={`${20 + i * 10}%`}
                        x2="95%"
                        y2={`${35 + j * 15}%`}
                        stroke="url(#gradient3)"
                        strokeWidth="1"
                        className="animate-pulse"
                      />
                    )),
                  )}

                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Central Brain Icon */}
                <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center animate-pulse">
                  <Brain size={32} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services with Data Visualization Cards */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI & Data Services</h2>
            <p className="text-lg text-foreground/80">Comprehensive AI solutions for data-driven businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Machine Learning",
                description: "Custom ML models that learn from your data and improve over time.",
                features: ["Predictive Models", "Classification", "Regression Analysis"],
                icon: <Brain className="h-8 w-8" />,
                chartData: [65, 78, 82, 90, 85, 92],
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "Data Analytics",
                description: "Transform raw data into actionable business insights and strategies.",
                features: ["Business Intelligence", "Data Visualization", "Statistical Analysis"],
                icon: <BarChart className="h-8 w-8" />,
                chartData: [45, 52, 68, 75, 82, 88],
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Natural Language Processing",
                description: "AI that understands and processes human language for automation.",
                features: ["Text Analysis", "Sentiment Analysis", "Chatbots"],
                icon: <Zap className="h-8 w-8" />,
                chartData: [30, 45, 60, 72, 85, 91],
                color: "from-purple-500 to-pink-500",
              },
              {
                title: "Computer Vision",
                description: "AI systems that can see, analyze, and understand visual content.",
                features: ["Image Recognition", "Object Detection", "Video Analysis"],
                icon: <Target className="h-8 w-8" />,
                chartData: [25, 40, 55, 70, 80, 87],
                color: "from-orange-500 to-red-500",
              },
              {
                title: "Predictive Analytics",
                description: "Forecast future trends and behaviors using advanced algorithms.",
                features: ["Trend Forecasting", "Risk Assessment", "Demand Planning"],
                icon: <TrendingUp className="h-8 w-8" />,
                chartData: [55, 62, 70, 78, 85, 89],
                color: "from-indigo-500 to-purple-500",
              },
              {
                title: "Big Data Processing",
                description: "Handle and analyze massive datasets for comprehensive insights.",
                features: ["Data Pipeline", "Real-time Processing", "Data Warehousing"],
                icon: <Database className="h-8 w-8" />,
                chartData: [40, 58, 65, 75, 83, 90],
                color: "from-teal-500 to-cyan-500",
              },
            ].map((service, index) => (
              <Card key={index} className="border hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{service.chartData[service.chartData.length - 1]}%</div>
                        <div className="text-xs opacity-80">Accuracy</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>

                    {/* Mini Chart */}
                    <div className="flex items-end space-x-1 h-8 mb-4">
                      {service.chartData.map((value, i) => (
                        <div
                          key={i}
                          className="bg-white/30 rounded-t flex-1 transition-all duration-500 group-hover:bg-white/50"
                          style={{
                            height: `${(value / 100) * 100}%`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
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

      {/* AI Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI & Data Technologies</h2>
            <p className="text-lg text-foreground/80">Advanced tools and frameworks for intelligent solutions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "TensorFlow", category: "ML Framework",  },
              { name: "PyTorch", category: "Deep Learning",  },
              { name: "Scikit-learn", category: "ML Library",  },
              { name: "OpenAI GPT", category: "LLM",  },
              { name: "Pandas", category: "Data Analysis",  },
              { name: "Apache Spark", category: "Big Data",  },
              { name: "Jupyter", category: "Development",  },
              { name: "Tableau", category: "Visualization",  },
              { name: "Power BI", category: "Analytics",  },
              { name: "Elasticsearch", category: "Search",  },
              { name: "Apache Kafka", category: "Streaming",  },
              { name: "MongoDB", category: "Database",  },
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-4 border border-border hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-medium text-sm mb-1">{tech.name}</div>
                  <div className="text-xs text-foreground/60 mb-2">{tech.category}</div>

                  {/* Proficiency Bar */}
                  
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
              <div
                className="absolute bottom-4 right-4 w-10 h-10 border border-white rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Harness AI Power?</h2>
              <p className="text-xl mb-8 opacity-90">
                Transform your data into intelligent insights and automated solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Start AI Journey
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    View AI Cases
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
