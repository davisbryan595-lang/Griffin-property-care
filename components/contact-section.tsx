"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get Your Free Quote Today</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to transform your property? Contact us for a free estimate and let's discuss how we can help you
            achieve your landscaping goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-input border-border text-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                      Phone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-input border-border text-foreground"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-input border-border text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-input border-border text-foreground min-h-[120px]"
                    placeholder="Tell us about your project and what services you're interested in..."
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                    Sorry, there was an error sending your message. Please try again or call us directly.
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                    asChild
                  >
                    <a href="tel:617-699-6607" className="flex items-center justify-center">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Phone</h3>
                    <a href="tel:617-699-6607" className="text-accent hover:text-accent/80 transition-colors">
                      (617) 699-6607
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Email</h3>
                    <a
                      href="mailto:Griffinspropertycare@gmail.com"
                      className="text-accent hover:text-accent/80 transition-colors"
                    >
                      Griffinspropertycare@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Butterfield Terrace
                      <br />
                      Amherst, MA 01002
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency Services Only</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Map */}
            <Card className="bg-card border-border">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">Butterfield Terrace, Amherst, MA</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
