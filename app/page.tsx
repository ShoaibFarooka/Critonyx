import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import SpeedSection from "@/components/speed-section"
import TechStackSection from "@/components/tech-stack-section"
import CaseStudyHighlight from "@/components/case-study-highlight"

import CTASection from "@/components/cta-section"
import ClientLogosCarousel from "@/components/client-logos-carousel"

export default function Home() {
  const caseStudies = [
    
    {
      id: "healthcare-app",
      title: "Healthcare App Reduces Administrative Work by 60%",
      clientName: "MediCare Solutions",
      clientLogo: "/projectimages/healthcare-mobile-app-logo.png",
      personName: "",
      personTitle: "",
      personImage: "",
      productImage: "/projectimages/healthcare-mobile-app.png",
      description:
        "MediCare needed a mobile application that would allow healthcare providers to access patient information and manage prescriptions on the go. Our cross-platform solution transformed their workflow efficiency.",
      metrics: [
        { value: "60%", label: "Less Admin Work" },
        { value: "40%", label: "Patient Satisfaction" },
        { value: "25%", label: "Cost Savings" },
        { value: "16 Weeks", label: "Development Time" },
      ],
      caseStudyLink: "/case-studies/healthcare-app",
    },
    
    {
      id: "manufacturing-automation",
      title: "Manufacturing Automation Reduces Costs by 35%",
      clientName: "Industrial Innovations",
      clientLogo: "/projectimages/manufacturing-automation-logo.png",
      personName: "",
      personTitle: "",
      personImage: "",
      productImage: "/projectimages/manufacturing-automation.png",
      description:
        "Industrial Innovations needed to automate their manufacturing processes to reduce costs and improve efficiency. Our custom software solution delivered remarkable results in operational optimization.",
      metrics: [
        { value: "35%", label: "Cost Reduction" },
        { value: "50%", label: "More Efficient" },
        { value: "20%", label: "Fewer Defects" },
        { value: "18 Weeks", label: "Implementation" },
      ],
      caseStudyLink: "/case-studies/manufacturing-automation",
    },
    {
      id: "virtual-showroom",
      title: "Virtual Showroom Increases Engagement by 80%",
      clientName: "LuxuryCars Inc.",
      clientLogo: "/projectimages/virtual-showroom-logo.png",
      personName: "",
      personTitle: "",
      personImage: "",
      productImage: "/projectimages/virtual-showroom-main.png",
      description:
        "LuxuryCars wanted to create an immersive virtual showroom experience for customers. Our AR/VR solution transformed how customers interact with their products, leading to significant business growth.",
      metrics: [
        { value: "80%", label: "More Engagement" },
        { value: "35%", label: "Sales Boost" },
        { value: "50%", label: "Lower Costs" },
        { value: "20 Weeks", label: "VR Timeline" },
      ],
      caseStudyLink: "/case-studies/virtual-showroom",
    },
    
    
    {
      id: "financial-services-firm",
      title: "Investment Bank Reduces Trading Latency from 215ms to 47ms",
      clientName: "Tier-3 Investment Bank",
      clientLogo: "/projectimages/financial-services-firm-logo.png",
      personName: "",
      personTitle: "",
      personImage: "",
      productImage: "/projectimages/financial-services-firm.png",
      description:
        "A Tier-3 investment bank was experiencing high latency in trading applications and complex firewall management. Our low-latency SD-WAN solution reduced latency by 78% and passed SEC audit with zero findings.",
      metrics: [
        { value: "47ms", label: "Average Latency" },
        { value: "78%", label: "Latency Reduction" },
        { value: "5 Months", label: "ROI Timeline" },
        { value: "Zero", label: "SEC Findings" },
      ],
      caseStudyLink: "/case-studies/financial-services-firm",
    },
  ]

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <SpeedSection />
      <ServicesSection />
      <TechStackSection />
      <CaseStudyHighlight caseStudies={caseStudies} />
      <ClientLogosCarousel />
      
      <CTASection />
    </div>
  )
}
