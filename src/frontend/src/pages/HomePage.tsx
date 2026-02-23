import { useState } from "react";
import { MorshidButton } from "@/components/MorshidButton";
import { MorshidCard, CardContent } from "@/components/MorshidCard";
import { LogoPopup } from "@/components/LogoPopup";
import { Lightbulb, Shield, TrendingUp, Package, MessageCircle, Cpu, CheckCircle, ArrowRight } from "lucide-react";

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="w-full">
      {/* SECTION 1 - HERO */}
      <section 
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/generated/morshid-hero-farmer-family.dim_1920x1080.png)' }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="cursor-pointer hover:opacity-90 transition-opacity"
            aria-label="Learn more about MORSHID"
          >
            <img 
              src="/assets/logo%20MORSHID.png" 
              alt="MORSHID Logo" 
              className="h-24 w-auto mx-auto mb-8"
            />
          </button>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
            Your Complete Farming Companion — From Seed to Sale
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Get personalized advice, protect your crops, discover better prices, and connect to services — all via simple WhatsApp messages.
          </p>
          <MorshidButton 
            size="lg"
            className="text-lg px-8 py-6 h-auto mb-4 bg-[#25D366] hover:bg-[#25D366]/90 text-white"
            asChild
          >
            <a 
              href="https://wa.me/212623237732" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Free Help on WhatsApp
            </a>
          </MorshidButton>
          <p className="text-white text-base">
            Available 24/7 • Free • Voice & Text
          </p>
        </div>
      </section>

      {/* SECTION 2 - FOUR PILLARS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How MORSHID Supports You</h2>
            <p className="text-xl text-gray-600">Beyond Advice — A Complete Farming Solution</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Green */}
            <MorshidCard topBorderColor="#25D366">
              <CardContent className="pt-8 pb-6 px-6">
                <Lightbulb className="w-12 h-12 mb-4 text-[#25D366]" />
                <h3 className="text-xl font-bold mb-3">Smart Farming Advice</h3>
                <p className="text-base text-gray-600">
                  Instant diagnosis for plant diseases. Personalized crop care plans. Daily tips for your region.
                </p>
              </CardContent>
            </MorshidCard>

            {/* Card 2 - Blue */}
            <MorshidCard topBorderColor="#03A9F4">
              <CardContent className="pt-8 pb-6 px-6">
                <Shield className="w-12 h-12 mb-4" style={{ color: '#03A9F4' }} />
                <h3 className="text-xl font-bold mb-3">Secure Your Livelihood</h3>
                <p className="text-base text-gray-600">
                  Access crop insurance information. Learn about government aid. Find affordable credit options.
                </p>
              </CardContent>
            </MorshidCard>

            {/* Card 3 - Orange */}
            <MorshidCard topBorderColor="#FF8F00">
              <CardContent className="pt-8 pb-6 px-6">
                <TrendingUp className="w-12 h-12 mb-4" style={{ color: '#FF8F00' }} />
                <h3 className="text-xl font-bold mb-3">Sell Smarter</h3>
                <p className="text-base text-gray-600">
                  Get live market prices. Know the best time to sell. Connect with trustworthy buyers.
                </p>
              </CardContent>
            </MorshidCard>

            {/* Card 4 - Brown */}
            <MorshidCard topBorderColor="#795548">
              <CardContent className="pt-8 pb-6 px-6">
                <Package className="w-12 h-12 mb-4" style={{ color: '#795548' }} />
                <h3 className="text-xl font-bold mb-3">Trusted Inputs</h3>
                <p className="text-base text-gray-600">
                  Find quality seeds and fertilizers. Compare prices from local suppliers.
                </p>
              </CardContent>
            </MorshidCard>
          </div>
        </div>
      </section>

      {/* SECTION 3 - VIDEOS */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See MORSHID in Action</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/19kU6cAwXXk"
                title="MORSHID Demo Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/DnTsf91_UCk"
                title="MORSHID Demo Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/FAGAphpcsHI"
                title="MORSHID Demo Video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/15sPMyEQtbk"
                title="MORSHID Demo Video 4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/lbUlArhso58"
                title="MORSHID Demo Video 5"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - HOW IT WORKS */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Easy Is It?</h2>
            <p className="text-xl text-gray-600">3 Simple Steps on WhatsApp</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 max-w-5xl mx-auto mb-12">
            {/* Step 1 */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[#25D366]" />
              <h3 className="text-xl font-bold mb-2">Send a Message</h3>
              <p className="text-base text-gray-600">
                Open WhatsApp and send your question — text or voice
              </p>
            </div>

            {/* Arrow */}
            <ArrowRight className="hidden lg:block w-8 h-8 text-gray-400 flex-shrink-0" />

            {/* Step 2 */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <Cpu className="w-12 h-12 mx-auto mb-4 text-[#25D366]" />
              <h3 className="text-xl font-bold mb-2">MORSHID Understands</h3>
              <p className="text-base text-gray-600">
                Our AI finds the best answer for you
              </p>
            </div>

            {/* Arrow */}
            <ArrowRight className="hidden lg:block w-8 h-8 text-gray-400 flex-shrink-0" />

            {/* Step 3 */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-[#25D366]" />
              <h3 className="text-xl font-bold mb-2">Get Your Answer</h3>
              <p className="text-base text-gray-600">
                Receive clear advice ready to use on your farm
              </p>
            </div>
          </div>

          <div className="text-center">
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
                Try It Now — It's Free!
              </a>
            </MorshidButton>
          </div>
        </div>
      </section>

      {/* SECTION 5 - TRUST */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Join Moroccan Farmers Who Trust MORSHID</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Testimonial 1 */}
            <MorshidCard>
              <CardContent className="pt-8 pb-6 px-6">
                <p className="text-base text-gray-700 mb-4 italic">
                  "MORSHID helped me identify a disease on my tomatoes in minutes. I saved my entire crop!"
                </p>
                <p className="font-bold text-[#25D366]">— Ahmed, Agadir</p>
              </CardContent>
            </MorshidCard>

            {/* Testimonial 2 */}
            <MorshidCard>
              <CardContent className="pt-8 pb-6 px-6">
                <p className="text-base text-gray-700 mb-4 italic">
                  "I got better prices for my oranges by knowing when to sell. Thank you MORSHID!"
                </p>
                <p className="font-bold text-[#25D366]">— Fatima, Berkane</p>
              </CardContent>
            </MorshidCard>

            {/* Testimonial 3 */}
            <MorshidCard>
              <CardContent className="pt-8 pb-6 px-6">
                <p className="text-base text-gray-700 mb-4 italic">
                  "Simple to use, always available. MORSHID is like having an expert in my pocket."
                </p>
                <p className="font-bold text-[#25D366]">— Hassan, Meknes</p>
              </CardContent>
            </MorshidCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-[#25D366] mb-2">10,000+</div>
              <p className="text-base text-gray-600">Farmers Helped</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#25D366] mb-2">24/7</div>
              <p className="text-base text-gray-600">Always Available</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#25D366] mb-2">100% Free</div>
              <p className="text-base text-gray-600">No Hidden Costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - FINAL CTA */}
      <section className="py-16 md:py-24 bg-[#25D366]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join thousands of Moroccan farmers already using MORSHID. Start getting expert advice today — completely free.
          </p>
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
              Start Now on WhatsApp
            </a>
          </MorshidButton>
        </div>
      </section>

      <LogoPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
