import { MorshidCard, CardContent } from "@/components/MorshidCard";
import { MorshidButton } from "@/components/MorshidButton";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full">
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch with MORSHID</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help you succeed. Choose the best way to reach us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* WhatsApp Card */}
            <MorshidCard topBorderColor="#25D366">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[#25D366]" />
                <h3 className="text-2xl font-bold mb-3">WhatsApp</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Get instant answers to your farming questions 24/7
                </p>
                <MorshidButton 
                  className="text-base w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                  asChild
                >
                  <a 
                    href="https://wa.me/212623237732" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Chat Now
                  </a>
                </MorshidButton>
              </CardContent>
            </MorshidCard>

            {/* Email Card */}
            <MorshidCard topBorderColor="#03A9F4">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4" style={{ color: '#03A9F4' }} />
                <h3 className="text-2xl font-bold mb-3">Email</h3>
                <p className="text-lg text-gray-600 mb-6">
                  For detailed inquiries or partnership opportunities
                </p>
                <MorshidButton 
                  className="text-base w-full"
                  variant="outline"
                  asChild
                >
                  <a href="mailto:hello@tmu.ai">
                    hello@tmu.ai
                  </a>
                </MorshidButton>
              </CardContent>
            </MorshidCard>

            {/* Phone Card */}
            <MorshidCard topBorderColor="#FF8F00">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4" style={{ color: '#FF8F00' }} />
                <h3 className="text-2xl font-bold mb-3">Phone</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Speak directly with our support team
                </p>
                <MorshidButton 
                  className="text-base w-full"
                  variant="outline"
                  asChild
                >
                  <a href="tel:+212623237732">
                    +212 623 237 732
                  </a>
                </MorshidButton>
              </CardContent>
            </MorshidCard>
          </div>

          {/* Location Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <MorshidCard>
              <CardContent className="pt-8 pb-6 px-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <MapPin className="w-12 h-12 text-[#25D366] flex-shrink-0" />
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Our Location</h3>
                    <p className="text-lg text-gray-600">
                      Rabat, Morocco
                    </p>
                    <p className="text-base text-gray-500 mt-2">
                      © TMU SARL — Empowering Moroccan Agriculture
                    </p>
                  </div>
                </div>
              </CardContent>
            </MorshidCard>
          </div>

          {/* Response Time Note */}
          <div className="mt-12 text-center">
            <p className="text-base text-gray-600">
              <strong>Response Time:</strong> WhatsApp messages are answered instantly by our AI. Email and phone inquiries are typically answered within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
