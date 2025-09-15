import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do you offer seasonal contracts?",
    answer:
      "Yes, we offer seasonal contracts for services like lawn maintenance, snow removal, and regular property upkeep. Seasonal contracts often provide better value and ensure consistent service throughout the year.",
  },
  {
    question: "How quickly can you schedule a service?",
    answer:
      "We typically can schedule most services within 3-5 business days, depending on the season and service type. For urgent needs like storm cleanup or emergency tree removal, we offer same-day or next-day service when possible.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Griffin's Property Care is fully licensed and insured. We carry comprehensive liability insurance and workers' compensation to protect both our team and your property.",
  },
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes, we provide free, no-obligation estimates for all our services. We'll visit your property, assess your needs, and provide a detailed written estimate with no hidden fees.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve Amherst, MA and surrounding areas including Northampton, Hadley, South Hadley, and Belchertown. Contact us to confirm service availability in your specific location.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, check, and all major credit cards. For seasonal contracts, we also offer convenient payment plans to spread costs throughout the service period.",
  },
  {
    question: "Do you clean up after completing work?",
    answer:
      "Yes, cleanup is always included in our services. We believe in leaving your property cleaner than we found it, removing all debris and ensuring your satisfaction with the final result.",
  },
  {
    question: "Can you work around my schedule?",
    answer:
      "We understand that everyone has different schedules and preferences. We offer flexible scheduling options and can often accommodate specific timing requests to minimize disruption to your routine.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Find answers to common questions about our services, scheduling, and policies.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left text-card-foreground hover:text-accent transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-pretty">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
