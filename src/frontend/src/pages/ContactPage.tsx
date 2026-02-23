import { MorshidButton } from "@/components/MorshidButton";
import { MorshidCard, CardContent } from "@/components/MorshidCard";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.title')}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* WhatsApp Card */}
            <MorshidCard topBorderColor="#25D366">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[#25D366]" />
                <h3 className="text-xl font-bold mb-3">{t('contact.whatsapp.title')}</h3>
                <p className="text-base text-gray-600 mb-6">
                  {t('contact.whatsapp.desc')}
                </p>
                <MorshidButton 
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                  asChild
                >
                  <a 
                    href="https://wa.me/212623237732" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {t('contact.whatsapp.button')}
                  </a>
                </MorshidButton>
              </CardContent>
            </MorshidCard>

            {/* Email Card */}
            <MorshidCard topBorderColor="#03A9F4">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <Mail className="w-12 h-12 mx-auto mb-4" style={{ color: '#03A9F4' }} />
                <h3 className="text-xl font-bold mb-3">{t('contact.email.title')}</h3>
                <p className="text-base text-gray-600 mb-6">
                  {t('contact.email.desc')}
                </p>
                <MorshidButton 
                  className="w-full"
                  variant="outline"
                  asChild
                >
                  <a href="mailto:hello@tmu.ai">
                    {t('contact.email.button')}
                  </a>
                </MorshidButton>
              </CardContent>
            </MorshidCard>

            {/* Phone Card */}
            <MorshidCard topBorderColor="#FF8F00">
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <Phone className="w-12 h-12 mx-auto mb-4" style={{ color: '#FF8F00' }} />
                <h3 className="text-xl font-bold mb-3">{t('contact.phone.title')}</h3>
                <p className="text-base text-gray-600 mb-6">
                  {t('contact.phone.desc')}
                </p>
                <MorshidButton 
                  className="w-full"
                  variant="outline"
                  asChild
                >
                  <a href="tel:+212623237732">
                    {t('contact.phone.button')}
                  </a>
                </MorshidButton>
              </CardContent>
            </MorshidCard>
          </div>

          <p className="text-center text-base text-gray-600 mt-12">
            {t('contact.responseTime')}
          </p>
        </div>
      </section>
    </div>
  );
}
