import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="text-primary">Amazing Together</span>
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            Ready to accelerate your digital transformation? Get in touch with our team and let's discuss how we can
            help you achieve your goals at 2X speed.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input placeholder="Your Company" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select className="w-full p-3 border border-border rounded-md bg-background">
                    <option>Select a service</option>
                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>Custom Software</option>
                    <option>UX/UI Design</option>
                    <option>Business Applications</option>
                    <option>Emerging Technologies</option>
                    <option>Data & AI</option>
                    <option>Cloud Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Description</label>
                  <Textarea placeholder="Tell us about your project..." rows={4} />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
              <p className="text-foreground/80 mb-8">
                We're here to help you transform your ideas into reality. Reach out to us through any of the channels
                below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-foreground/70">contact@critonyx.com</p>
                  <p className="text-foreground/70">sales@critonyx.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-foreground/70">+1 (555) 123-4567</p>
                  <p className="text-foreground/70">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Office</h3>
                  <p className="text-foreground/70">123 Tech Street</p>
                  <p className="text-foreground/70">San Francisco, CA 94105</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Business Hours</h3>
                  <p className="text-foreground/70">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p className="text-foreground/70">Saturday: 10:00 AM - 4:00 PM PST</p>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-primary to-secondary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Schedule a Free Consultation</h3>
                <p className="mb-4 opacity-90">
                  Book a 30-minute call with our experts to discuss your project requirements.
                </p>
                 <Link href="https://calendly.com/critonyx/30min" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-primary hover:bg-white/90">
                  Book a Call
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
