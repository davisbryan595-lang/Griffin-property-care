"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight } from "lucide-react"

const backgroundImages = ["/beautiful-landscaped-garden-with-lush-green-lawn-a.jpg", "/professional-tree-trimming-and-landscaping-work-in.jpg", "/well-maintained-property-with-pristine-landscaping.jpg"]

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Landscaping work ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/70" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Transform Your Property with <span className="text-accent">Professional Care</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty">
            Expert landscaping, tree trimming, fall cleanups, and snow removal services in Amherst, MA. Your property
            deserves the best.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
              onClick={() => scrollToSection("contact")}
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg bg-transparent"
              onClick={() => scrollToSection("services")}
            >
              View Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection("services")}
          className="text-accent hover:text-accent/80 transition-colors animate-bounce"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
}
