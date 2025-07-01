"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.head.appendChild(script)

    // Load Calendly CSS
    const link = document.createElement("link")
    link.href = "https://assets.calendly.com/assets/external/widget.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      // Cleanup
      document.head.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  const navItems = [
    {
      title: "Services",
      dropdown: true,
      items: [
        { name: "Web Development", href: "/services/web-development" },
        { name: "App Development", href: "/services/app-development" },
        { name: "Custom Software", href: "/services/custom-software" },
        { name: "UX/UI Design", href: "/services/ux-ui-design" },
        { name: "Business Applications", href: "/services/business-applications" },
        { name: "Emerging Technologies", href: "/services/emerging-technologies" },
        { name: "Data & AI", href: "/services/data-ai" },
        { name: "Cloud", href: "/services/cloud" },
      ],
    },
    { title: "About Us", href: "/about" },
    { title: "Case Studies", href: "/case-studies" },
    
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-md bg-[#4254ED]">
              <img
                src="/logo.png"
                alt="Critonyx Logo"
                width={50}
                height={50}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold">
              Critonyx<span className="text-primary"></span>
            </span>
          </Link>

          {!isMobile ? (
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center space-x-1">
                        <span>{item.title}</span>
                        <ChevronDown size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.items?.map((subItem, subIndex) => (
                        <DropdownMenuItem key={subIndex}>
                          <Link href={subItem.href} className="w-full">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={index}
                    href={item.href || "/"}
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.title}
                  </Link>
                ),
              )}
            </nav>
          ) : null}

          <div className="flex items-center space-x-3">
            <ModeToggle />
              <a 
                href="https://calendly.com/critonyx/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:flex bg-primary hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-primary-foreground"
              >
                Schedule a Call
              </a>
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="mt-4 py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <div key={index} className="flex flex-col space-y-2">
                    <div className="font-medium">{item.title}</div>
                    <div className="pl-4 flex flex-col space-y-2">
                      {item.items?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="text-foreground/70 hover:text-foreground transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link key={index} href={item.href || "/"} className="font-medium">
                    {item.title}
                  </Link>
                ),
              )}
              <button
                className="w-full mt-2 bg-primary hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 text-primary-foreground"
                onClick={() => {
                  // @ts-ignore
                  if (window.Calendly) {
                    // @ts-ignore
                    window.Calendly.initPopupWidget({
                      url: "https://calendly.com/your-calendly-username/30min",
                    })
                  }
                  setIsMenuOpen(false)
                }}
              >
                Schedule a Call
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
