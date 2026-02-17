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
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/morshid-for-farmers-hero-hands-whatsapp.dim_1920x1080.png)' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Everything You Need to Farm Better
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-3xl mx-auto">
            From crop advice to market prices — all on WhatsApp
          </p>
          <MorshidButton 
            size="lg"
            className="text-lg px-8 py-6 h-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Start Now on WhatsApp
            </a>
          </MorshidButton>
        </div>
      </section>

      {/* SECTION 2 - SERVICES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Can MORSHID Do for You?
            </h2>
            <p className="text-lg text-gray-600">
              Real solutions for real farmers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <MorshidCard key={index} topBorderColor={service.borderColor}>
                <CardContent className="pt-8 pb-6 px-6">
                  <service.icon
                    className="w-12 h-12 mb-4"
                    style={{ color: service.borderColor }}
                  />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <MorshidButton
                    className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                    asChild
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
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - FAQ */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-lg shadow-md px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION 4 - CTA */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Send your first message now — it's free!
          </p>
          <MorshidButton 
            size="lg"
            className="text-lg px-8 py-6 h-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Open WhatsApp
            </a>
          </MorshidButton>
          <p className="text-gray-600 mt-4">+212 623 237 732</p>
        </div>
      </section>
    </div>
  );
}
