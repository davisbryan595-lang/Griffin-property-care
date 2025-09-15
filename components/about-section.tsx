import { Card, CardContent } from "@/components/ui/card"
import { Check, Award, Users, Clock } from "lucide-react"

const whyChooseUs = [
  "Licensed and Insured",
  "Free Estimates",
  "Experienced Team",
  "Quality Guaranteed",
  "Competitive Pricing",
  "Seasonal Contracts Available",
]

const stats = [
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Users, label: "Happy Customers", value: "500+" },
  { icon: Clock, label: "Response Time", value: "24hr" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-slide-in-left">
            <img
              src="/professional-landscaping-team-working-on-beautiful.jpg"
              alt="Griffin's Property Care team at work"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">About Griffin's Property Care</h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              For over 15 years, Griffin's Property Care has been Amherst's trusted partner for professional landscaping
              and property maintenance services. We take pride in transforming outdoor spaces and maintaining them to
              the highest standards.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Our experienced team combines expertise with passion to deliver exceptional results that enhance your
              property's beauty and value. From seasonal cleanups to complete landscape transformations, we're committed
              to exceeding your expectations.
            </p>

            {/* Why Choose Us */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyChooseUs.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-accent" />
                    </div>
                    <span className="text-card-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <Card key={stat.label} className="text-center bg-card border-border">
                  <CardContent className="p-4">
                    <stat.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-accent mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
