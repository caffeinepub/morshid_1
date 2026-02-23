import { useState } from "react";
import { MorshidButton } from "@/components/MorshidButton";
import { MorshidCard, CardContent } from "@/components/MorshidCard";
import { LogoPopup } from "@/components/LogoPopup";
import { Lightbulb, Shield, TrendingUp, Package, MessageCircle, Cpu, CheckCircle, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t } = useLanguage();

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
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            {t('home.hero.subtitle')}
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
              {t('home.hero.cta')}
            </a>
          </MorshidButton>
          <p className="text-white text-base">
            {t('home.hero.availability')}
          </p>
        </div>
      </section>

      {/* SECTION 2 - FOUR PILLARS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.pillars.title')}</h2>
            <p className="text-xl text-gray-600">{t('home.pillars.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Green */}
            <MorshidCard topBorderColor="#25D366">
              <CardContent className="pt-8 pb-6 px-6">
                <Lightbulb className="w-12 h-12 mb-4 text-[#25D366]" />
                <h3 className="text-xl font-bold mb-3">{t('home.pillars.advice.title')}</h3>
                <p className="text-base text-gray-600">
                  {t('home.pillars.advice.desc')}
                </p>
              </CardContent>
            </MorshidCard>

            {/* Card 2 - Blue */}
            <MorshidCard topBorderColor="#03A9F4">
              <CardContent className="pt-8 pb-6 px-6">
                <Shield className="w-12 h-12 mb-4" style={{ color: '#03A9F4' }} />
                <h3 className="text-xl font-bold mb-3">{t('home.pillars.secure.title')}</h3>
                <p className="text-base text-gray-600">
                  {t('home.pillars.secure.desc')}
                </p>
              </CardContent>
            </MorshidCard>

            {/* Card 3 - Orange */}
            <MorshidCard topBorderColor="#FF8F00">
              <CardContent className="pt-8 pb-6 px-6">
                <TrendingUp className="w-12 h-12 mb-4" style={{ color: '#FF8F00' }} />
                <h3 className="text-xl font-bold mb-3">{t('home.pillars.sell.title')}</h3>
                <p className="text-base text-gray-600">
                  {t('home.pillars.sell.desc')}
                </p>
              </CardContent>
            </MorshidCard>

            {/* Card 4 - Brown */}
            <MorshidCard topBorderColor="#795548">
              <CardContent className="pt-8 pb-6 px-6">
                <Package className="w-12 h-12 mb-4" style={{ color: '#795548' }} />
                <h3 className="text-xl font-bold mb-3">{t('home.pillars.inputs.title')}</h3>
                <p className="text-base text-gray-600">
                  {t('home.pillars.inputs.desc')}
                </p>
              </CardContent>
            </MorshidCard>
          </div>
        </div>
      </section>

      {/* SECTION 3 - VIDEOS */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('home.videos.title')}</h2>
          
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('home.howItWorks.title')}</h2>
            <p className="text-xl text-gray-600">{t('home.howItWorks.subtitle')}</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-4 max-w-5xl mx-auto mb-12">
            {/* Step 1 */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[#25D366]" />
              <h3 className="text-xl font-bold mb-2">{t('home.howItWorks.step1.title')}</h3>
              <p className="text-base text-gray-600">
                {t('home.howItWorks.step1.desc')}
              </p>
            </div>

            {/* Arrow */}
            <ArrowRight className="hidden lg:block w-8 h-8 text-gray-400 shrink-0" />

            {/* Step 2 */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <Cpu className="w-12 h-12 mx-auto mb-4 text-[#25D366]" />
              <h3 className="text-xl font-bold mb-2">{t('home.howItWorks.step2.title')}</h3>
              <p className="text-base text-gray-600">
                {t('home.howItWorks.step2.desc')}
              </p>
            </div>

            {/* Arrow */}
            <ArrowRight className="hidden lg:block w-8 h-8 text-gray-400 shrink-0" />

            {/* Step 3 */}
            <div className="flex-1 text-center">
              <div className="w-20 h-20 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-[#25D366]" />
              <h3 className="text-xl font-bold mb-2">{t('home.howItWorks.step3.title')}</h3>
              <p className="text-base text-gray-600">
                {t('home.howItWorks.step3.desc')}
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
                {t('home.howItWorks.cta')}
              </a>
            </MorshidButton>
          </div>
        </div>
      </section>

      {/* SECTION 5 - TRUST */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('home.trust.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Testimonial 1 */}
            <MorshidCard>
              <CardContent className="pt-8 pb-6 px-6">
                <p className="text-base text-gray-700 mb-4 italic">
                  {t('home.trust.testimonial1')}
                </p>
                <p className="font-bold text-[#25D366]">{t('home.trust.testimonial1.author')}</p>
              </CardContent>
            </MorshidCard>

            {/* Testimonial 2 */}
            <MorshidCard>
              <CardContent className="pt-8 pb-6 px-6">
                <p className="text-base text-gray-700 mb-4 italic">
                  {t('home.trust.testimonial2')}
                </p>
                <p className="font-bold text-[#25D366]">{t('home.trust.testimonial2.author')}</p>
              </CardContent>
            </MorshidCard>

            {/* Testimonial 3 */}
            <MorshidCard>
              <CardContent className="pt-8 pb-6 px-6">
                <p className="text-base text-gray-700 mb-4 italic">
                  {t('home.trust.testimonial3')}
                </p>
                <p className="font-bold text-[#25D366]">{t('home.trust.testimonial3.author')}</p>
              </CardContent>
            </MorshidCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-[#25D366] mb-2">10,000+</div>
              <p className="text-base text-gray-600">{t('home.trust.stat1')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#25D366] mb-2">24/7</div>
              <p className="text-base text-gray-600">{t('home.trust.stat2')}</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#25D366] mb-2">100% Free</div>
              <p className="text-base text-gray-600">{t('home.trust.stat3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - FINAL CTA */}
      <section className="py-16 md:py-24 bg-[#25D366]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('home.finalCta.title')}
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            {t('home.finalCta.subtitle')}
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
              {t('home.finalCta.cta')}
            </a>
          </MorshidButton>
        </div>
      </section>

      <LogoPopup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
