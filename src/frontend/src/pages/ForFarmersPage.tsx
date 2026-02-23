import { MorshidButton } from "@/components/MorshidButton";
import { MorshidCard, CardContent } from "@/components/MorshidCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sprout, Bug, DollarSign, Package } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function ForFarmersPage() {
  const { t } = useLanguage();

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
            {t('forFarmers.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
            {t('forFarmers.hero.subtitle')}
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
              {t('forFarmers.hero.cta')}
            </a>
          </MorshidButton>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('forFarmers.services.title')}</h2>
            <p className="text-xl text-gray-600">{t('forFarmers.services.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Service 1 */}
            <MorshidCard topBorderColor="#25D366">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <Sprout className="w-12 h-12 mx-auto mb-4 text-[#25D366]" />
                <h3 className="text-xl font-bold mb-3">{t('forFarmers.services.cropCare.title')}</h3>
                <p className="text-base text-gray-600">
                  {t('forFarmers.services.cropCare.desc')}
                </p>
              </CardContent>
            </MorshidCard>

            {/* Service 2 */}
            <MorshidCard topBorderColor="#03A9F4">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <Bug className="w-12 h-12 mx-auto mb-4" style={{ color: '#03A9F4' }} />
                <h3 className="text-xl font-bold mb-3">{t('forFarmers.services.disease.title')}</h3>
                <p className="text-base text-gray-600">
                  {t('forFarmers.services.disease.desc')}
                </p>
              </CardContent>
            </MorshidCard>

            {/* Service 3 */}
            <MorshidCard topBorderColor="#FF8F00">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-4" style={{ color: '#FF8F00' }} />
                <h3 className="text-xl font-bold mb-3">{t('forFarmers.services.market.title')}</h3>
                <p className="text-base text-gray-600">
                  {t('forFarmers.services.market.desc')}
                </p>
              </CardContent>
            </MorshidCard>

            {/* Service 4 */}
            <MorshidCard topBorderColor="#795548">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <Package className="w-12 h-12 mx-auto mb-4" style={{ color: '#795548' }} />
                <h3 className="text-xl font-bold mb-3">{t('forFarmers.services.inputs.title')}</h3>
                <p className="text-base text-gray-600">
                  {t('forFarmers.services.inputs.desc')}
                </p>
              </CardContent>
            </MorshidCard>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#E8F5E9' }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t('forFarmers.faq.title')}</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-bold">
                  {t('forFarmers.faq.q1')}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  {t('forFarmers.faq.a1')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-bold">
                  {t('forFarmers.faq.q2')}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  {t('forFarmers.faq.a2')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-bold">
                  {t('forFarmers.faq.q3')}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  {t('forFarmers.faq.a3')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-bold">
                  {t('forFarmers.faq.q4')}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  {t('forFarmers.faq.a4')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg font-bold">
                  {t('forFarmers.faq.q5')}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  {t('forFarmers.faq.a5')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 bg-[#25D366]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('forFarmers.cta.title')}
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            {t('forFarmers.cta.subtitle')}
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
              {t('forFarmers.cta.button')}
            </a>
          </MorshidButton>
        </div>
      </section>
    </div>
  );
}
