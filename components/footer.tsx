"use client"

import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

const services = [
  "Landscaping Design",
  "Fall Cleanups",
  "Tree Trimming",
  "Snow Removal",
  "Lawn Maintenance",
  "Property Maintenance",
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">Griffin's Property Care</h3>
            <p className="text-muted-foreground mb-4 text-pretty">
              Professional landscaping and property maintenance services in Amherst, MA. Transforming outdoor spaces
              with quality and care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:617-699-6607" className="text-muted-foreground hover:text-accent transition-colors">
                  (617) 699-6607
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <a
                  href="mailto:Griffinspropertycare@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Griffinspropertycare@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span className="text-muted-foreground">
                  Butterfield Terrace
                  <br />
                  Amherst, MA 01002
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Griffin's Property Care. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
