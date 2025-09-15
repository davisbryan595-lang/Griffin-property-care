"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Amherst, MA",
    rating: 5,
    text: "Griffin's Property Care transformed our backyard into a beautiful oasis. Their attention to detail and professionalism exceeded our expectations. Highly recommend!",
  },
  {
    name: "Mike Chen",
    location: "Northampton, MA",
    rating: 5,
    text: "Reliable snow removal service all winter long. They always show up on time and do thorough work. Our driveway and walkways are always clear and safe.",
  },
  {
    name: "Emily Rodriguez",
    location: "Hadley, MA",
    rating: 5,
    text: "The fall cleanup service was fantastic. They removed all the leaves, cleaned the gutters, and prepared our garden beds for winter. Great value for the price!",
  },
  {
    name: "David Thompson",
    location: "Amherst, MA",
    rating: 5,
    text: "Professional tree trimming service that really knows what they're doing. Our trees look healthier and our property looks amazing. Will definitely use them again.",
  },
  {
    name: "Lisa Park",
    location: "South Hadley, MA",
    rating: 5,
    text: "Griffin's team designed and installed a beautiful landscape for our new home. The project was completed on time and within budget. Couldn't be happier!",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="relative">
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>

              <blockquote className="text-lg text-card-foreground mb-6 text-pretty">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div>
                <div className="font-semibold text-accent text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground">{testimonials[currentIndex].location}</div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-2 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors shadow-lg"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-2 bg-accent text-accent-foreground rounded-full hover:bg-accent/90 transition-colors shadow-lg"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-accent" : "bg-muted"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
