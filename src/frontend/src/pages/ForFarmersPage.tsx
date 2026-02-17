import { MorshidButton } from "@/components/MorshidButton";
import { MorshidCard, CardContent } from "@/components/MorshidCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Camera, Shield, DollarSign, Truck } from "lucide-react";

export default function ForFarmersPage() {
  const whatsappLink = "https://wa.me/212623237732";

  const services = [
    {
      icon: Camera,
      title: "Diagnose Crop Problems",
      description:
        "Take a photo of your sick plant. Send it on WhatsApp. Get diagnosis and treatment in minutes.",
      buttonText: "Try Now",
      borderColor: "#25D366",
    },
    {
      icon: Shield,
      title: "Protect Your Income",
      description:
        "Learn about MAMDA crop insurance. Find out if you qualify for government aid. We explain everything simply.",
      buttonText: "Ask About Insurance",
      borderColor: "#03A9F4",
    },
    {
      icon: DollarSign,
      title: "Know Market Prices",
      description:
        "Ask about today's prices for your crops. Find buyers in your region. Never sell at a loss again.",
      buttonText: "Check Prices",
      borderColor: "#FF8F00",
    },
    {
      icon: Truck,
      title: "Find Quality Supplies",
      description:
        "Looking for good seeds or fertilizer? Ask us for trusted suppliers near you at fair prices.",
      buttonText: "Find Suppliers",
      borderColor: "#795548",
    },
  ];

  const faqs = [
    {
      question: "Is MORSHID free?",
      answer: "Yes! MORSHID is 100% free. No subscription, no hidden fees.",
    },
    {
      question: "I can't read, can I use MORSHID?",
      answer:
        "Of course! Just send a voice message and MORSHID will reply with voice.",
    },
    {
      question: "Is MORSHID available 24/7?",
      answer: "Yes, MORSHID works 24 hours a day, 7 days a week.",
    },
    {
      question: "How do I start?",
      answer: "Just click the green button and send 'Hello' on WhatsApp!",
    },
    {
      question: "Who answers, a human or AI?",
      answer:
        "MORSHID is AI trained on Moroccan farming, but if you want a human expert, we can arrange that.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* SECTION 1 - HERO */}
      <section
        className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/assets/generated/morshid-for-farmers-hero-hands-whatsapp.dim_1920x1080.png)",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            MORSHID Speaks Your Language
          </h1>
          <p className="mb-8 text-xl text-white md:text-2xl">
            Have a question about your crops? Just ask us!
          </p>
          <MorshidButton
            asChild
            size="lg"
            className="text-lg px-8 py-6 h-auto bg-morshid-primary hover:bg-morshid-primary/90 text-white"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Chatting
            </a>
          </MorshidButton>
        </div>
      </section>

      {/* SECTION 2 - SERVICES */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Everything You Need, One Place
          </h2>

          {/* Service cards grid - 2x2 on desktop, stack on mobile */}
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <MorshidCard
                  key={index}
                  topBorderColor={service.borderColor}
                  className="overflow-hidden transition-shadow hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <div
                      className="mb-4 inline-flex rounded-full p-3"
                      style={{ backgroundColor: `${service.borderColor}20` }}
                    >
                      <Icon
                        className="h-8 w-8"
                        style={{ color: service.borderColor }}
                      />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-gray-600">
                      {service.description}
                    </p>
                    <MorshidButton
                      asChild
                      className="w-full bg-morshid-primary hover:bg-morshid-primary/90 text-white"
                    >
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {service.buttonText}
                      </a>
                    </MorshidButton>
                  </CardContent>
                </MorshidCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 - FAQ */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Common Questions
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-lg border bg-white px-6 shadow-md"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 4 - FINAL CTA */}
      <section className="bg-morshid-primary py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Start Using MORSHID Today
          </h2>
          <p className="mb-8 text-xl">
            Free advice, 24/7 support, in your language
          </p>
          <MorshidButton
            asChild
            size="lg"
            className="text-lg px-8 py-6 h-auto bg-white text-gray-900 hover:bg-gray-100"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message Us on WhatsApp
            </a>
          </MorshidButton>
        </div>
      </section>
    </div>
  );
}
