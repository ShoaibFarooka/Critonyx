import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Award, ArrowRight, Target } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Users size={16} className="mr-2" />
              <span>About Critonyx</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We Deliver Technology at <span className="text-primary">2X Speed</span>
            </h1>
            <p className="text-lg text-foreground/80 mb-8">
              Founded with a mission to revolutionize how technology solutions are delivered, SpeedTech combines
              technical excellence with unprecedented speed to help businesses transform and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-20" />
              <img
                src="/projectimages/about.jpg"
                alt="SpeedTech Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Critonyx Story */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Critonyx Story</h2>
          <p className="text-lg text-foreground/80 mb-10 text-center">
            Here's a sneak peek of our workspace, in-house & remote developers, and activities.
          </p>

          {/* Slideshow/Images Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/projectimages/1.png"
                alt="Critonyx Workspace"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/projectimages/2.png"
                alt="Critonyx Developers"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/projectimages/3.png"
                alt="Critonyx Activities"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Meet The Founder */}
          
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Values</h2>
            <p className="text-lg text-foreground/80">
              At Critonyx, we accelerate your digital growth by delivering web development, data migration and other
              solutions at twice the industry speed. That too, without compromising on quality or alignment with your
              business goals.
            </p>
            <p className="text-lg text-foreground/80 mt-4">
              We strive to be Asia's noteworthy partner for SaaS founders and tech companies, turning ambitious ideas
              into scalable, high-performance products through business-first engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Speed</h3>
                <p className="text-foreground/70">
                  We believe in rapid delivery without compromising quality. Our optimized processes and specialized
                  teams enable us to deliver projects in half the time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-foreground/70">
                  We maintain the highest standards in everything we do. Our stack-specific experts ensure technical
                  excellence across all projects.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-foreground/70">
                  We constantly push the boundaries of what's possible, embracing new technologies and methodologies to
                  deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
     

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Accelerate Your Digital Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the hundreds of businesses that have transformed with our speed-first approach.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
                href="https://calendly.com/critonyx/30min" 
                target="_blank" 
                rel="noopener noreferrer"
              >
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Schedule a Meeting
              <ArrowRight size={16} className="ml-2" />
            </Button>
            </a>
            <Link href="./services">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Explore Services
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
