import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg rounded-md flex items-center justify-center">
                <img
                src="/logo.png"
                alt="Critonyx Logo"
                width={50}
                height={50}
                className="w-full h-full object-contain"
              />
              </div>
              <span className="text-xl font-bold">Critonyx</span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Accelerating digital transformation with cutting-edge technology solutions. We deliver results 2X faster
              than industry standards.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-foreground text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-foreground/70 hover:text-foreground text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-foreground/70 hover:text-foreground text-sm transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              
              <li>
                <Link href="/contact" className="text-foreground/70 hover:text-foreground text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-foreground/70 hover:text-foreground text-sm transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-development"
                  className="text-foreground/70 hover:text-foreground text-sm transition-colors"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cloud"
                  className="text-foreground/70 hover:text-foreground text-sm transition-colors"
                >
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data-ai"
                  className="text-foreground/70 hover:text-foreground text-sm transition-colors"
                >
                  Data & AI
                </Link>
              </li>
              <li>
                <Link
                  href="/services/custom-software"
                  className="text-foreground/70 hover:text-foreground text-sm transition-colors"
                >
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm text-foreground/70">
                <Mail className="h-4 w-4" />
                <span>contact@critonyx.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-foreground/70">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-foreground/70">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2 text-sm">Newsletter</h4>
              <div className="flex space-x-2">
                <Input placeholder="Enter email" className="text-sm" />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-foreground/70">© 2024 Critonyx. All rights reserved.</div>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
