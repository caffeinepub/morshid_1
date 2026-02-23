import { MorshidButton } from "@/components/MorshidButton";
import { MorshidCard, CardContent } from "@/components/MorshidCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sprout, Bug, DollarSign, Package, Phone, MessageCircle } from "lucide-react";

export default function ForFarmersPage() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/morshid-for-farmers-hero-hands-whatsapp.dim_1920x1080.png)' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
            Everything You Need to Succeed — Right on WhatsApp
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            From planting to selling, MORSHID is your trusted farming partner. Get instant answers, protect your crops, and maximize your profits.
          </p>
          <MorshidButton 
            size="lg"
            className="text-lg px-8 py-6 h-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white"
            asChild
          >
            <a 
              href="https://wa.me/212623237732" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Chat with MORSHID Now
            </a>
          </MorshidButton>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What MORSHID Can Do for You</h2>
            <p className="text-xl text-gray-600">Comprehensive Support for Every Stage of Farming</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Service 1 */}
            <MorshidCard topBorderColor="#25D366">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <Sprout className="w-12 h-12 mx-auto mb-4 text-[#25D366]" />
                <h3 className="text-xl font-bold mb-3">Crop Care Advice</h3>
                <p className="text-base text-gray-600">
                  Get personalized tips for planting, watering, fertilizing, and harvesting your crops.
                </p>
              </CardContent>
            </MorshidCard>

            {/* Service 2 */}
            <MorshidCard topBorderColor="#FF5722">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <Bug className="w-12 h-12 mx-auto mb-4" style={{ color: '#FF5722' }} />
                <h3 className="text-xl font-bold mb-3">Disease Detection</h3>
                <p className="text-base text-gray-600">
                  Send a photo of your plant and get instant diagnosis with treatment recommendations.
                </p>
              </CardContent>
            </MorshidCard>

            {/* Service 3 */}
            <MorshidCard topBorderColor="#FF8F00">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-4" style={{ color: '#FF8F00' }} />
                <h3 className="text-xl font-bold mb-3">Market Prices</h3>
                <p className="text-base text-gray-600">
                  Know the current market prices for your crops and find the best time to sell.
                </p>
              </CardContent>
            </MorshidCard>

            {/* Service 4 */}
            <MorshidCard topBorderColor="#795548">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <Package className="w-12 h-12 mx-auto mb-4" style={{ color: '#795548' }} />
                <h3 className="text-xl font-bold mb-3">Input Suppliers</h3>
                <p className="text-base text-gray-600">
                  Find trusted suppliers for seeds, fertilizers, and equipment at competitive prices.
                </p>
              </CardContent>
            </MorshidCard>
          </div>
        </div>
      </section>

      {/* HOW TO USE SECTION */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Use MORSHID</h2>
            <p className="text-xl text-gray-600">It's as Easy as Sending a Message</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <MorshidCard>
              <CardContent className="pt-6 pb-6 px-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Open WhatsApp</h3>
                  <p className="text-base text-gray-600">
                    Click the button below or search for our number: +212 623 237 732
                  </p>
                </div>
              </CardContent>
            </MorshidCard>

            <MorshidCard>
              <CardContent className="pt-6 pb-6 px-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ask Your Question</h3>
                  <p className="text-base text-gray-600">
                    Type or send a voice message. You can also send photos of your crops.
                  </p>
                </div>
              </CardContent>
            </MorshidCard>

            <MorshidCard>
              <CardContent className="pt-6 pb-6 px-6 flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Get Expert Advice</h3>
                  <p className="text-base text-gray-600">
                    Receive personalized recommendations within seconds, 24/7.
                  </p>
                </div>
              </CardContent>
            </MorshidCard>
          </div>

          <div className="text-center mt-12">
            <MorshidButton 
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-[#25D366] hover:bg-[#25D366]/90 text-white"
              asChild
            >
              <a 
                href="https://wa.me/212623237732" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Chatting on WhatsApp
              </a>
            </MorshidButton>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything You Need to Know About MORSHID</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Is MORSHID really free?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  Yes! MORSHID is completely free for all farmers. There are no hidden costs, subscriptions, or fees. We're here to support Moroccan agriculture.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  What languages does MORSHID support?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  MORSHID understands Arabic, French, and Darija (Moroccan Arabic). You can communicate in whichever language you're most comfortable with.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Can I send voice messages?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  Absolutely! You can send text messages, voice messages, or photos. MORSHID understands all formats and will respond accordingly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  How accurate is the plant disease detection?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  MORSHID uses advanced AI trained on thousands of plant images. While highly accurate, we always recommend consulting with a local agronomist for serious issues.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  What crops does MORSHID support?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  MORSHID supports all major crops grown in Morocco, including cereals, vegetables, fruits, and olives. If you have a specific question, just ask!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-semibold text-left">
                  Is my information private?
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  Yes. We respect your privacy and never share your personal information or farming data with third parties. Your conversations are confidential.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 bg-[#25D366]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Farm Deserves the Best Support
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Don't let questions hold you back. Get instant expert advice and take your farming to the next level with MORSHID.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MorshidButton 
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-white text-[#25D366] hover:bg-white/90"
              asChild
            >
              <a 
                href="https://wa.me/212623237732" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </MorshidButton>
            <MorshidButton 
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-white text-[#25D366] hover:bg-white/90"
              asChild
            >
              <a 
                href="tel:+212623237732"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +212 623 237 732
              </a>
            </MorshidButton>
          </div>
        </div>
      </section>
    </div>
  );
}
