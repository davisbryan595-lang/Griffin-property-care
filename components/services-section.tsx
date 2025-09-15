"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Scissors, Trash2, Snowflake, TreePine, Shovel } from "lucide-react"

const services = [
  {
    icon: Leaf,
    title: "Landscaping Design",
    description:
      "Custom landscape design and installation to transform your outdoor space into a beautiful, functional environment.",
    features: ["Garden Design", "Plant Selection", "Hardscaping", "Irrigation Systems"],
  },
  {
    icon: Trash2,
    title: "Fall Cleanups",
    description: "Comprehensive fall cleanup services to prepare your property for winter and maintain its health.",
    features: ["Leaf Removal", "Gutter Cleaning", "Bed Preparation", "Lawn Care"],
  },
  {
    icon: Scissors,
    title: "Tree Trimming",
    description:
      "Professional tree trimming and pruning services to maintain tree health and enhance your property's appearance.",
    features: ["Pruning", "Shaping", "Dead Branch Removal", "Safety Trimming"],
  },
  {
    icon: Snowflake,
    title: "Snow Removal",
    description:
      "Reliable snow removal services to keep your driveways and walkways safe and accessible all winter long.",
    features: ["Driveway Clearing", "Walkway Maintenance", "Salt Application", "Emergency Service"],
  },
  {
    icon: TreePine,
    title: "Lawn Maintenance",
    description: "Regular lawn care services to keep your grass healthy, green, and perfectly manicured year-round.",
    features: ["Mowing", "Fertilization", "Weed Control", "Aeration"],
  },
  {
    icon: Shovel,
    title: "Property Maintenance",
    description: "Complete property maintenance solutions to keep your outdoor spaces looking their absolute best.",
    features: ["Mulching", "Edging", "Cleanup", "Seasonal Care"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Professional Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            From landscape design to seasonal maintenance, we provide comprehensive property care services to keep your
            outdoor spaces beautiful year-round.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-card-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-card-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
