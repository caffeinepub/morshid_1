import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Header Navigation
  'nav.home': { en: 'Home', fr: 'Accueil' },
  'nav.forFarmers': { en: 'For Farmers', fr: 'Pour les Agriculteurs' },
  'nav.contact': { en: 'Contact', fr: 'Contact' },

  // Home Page - Hero
  'home.hero.title': { en: 'Your Complete Farming Companion — From Seed to Sale', fr: 'Votre Compagnon Agricole Complet — De la Graine à la Vente' },
  'home.hero.subtitle': { en: 'Get personalized advice, protect your crops, discover better prices, and connect to services — all via simple WhatsApp messages.', fr: 'Obtenez des conseils personnalisés, protégez vos cultures, découvrez de meilleurs prix et accédez aux services — tout via de simples messages WhatsApp.' },
  'home.hero.cta': { en: 'Get Free Help on WhatsApp', fr: 'Obtenez de l\'Aide Gratuite sur WhatsApp' },
  'home.hero.availability': { en: 'Available 24/7 • Free • Voice & Text', fr: 'Disponible 24h/24 • Gratuit • Voix et Texte' },

  // Home Page - Four Pillars
  'home.pillars.title': { en: 'How MORSHID Supports You', fr: 'Comment MORSHID Vous Aide' },
  'home.pillars.subtitle': { en: 'Beyond Advice — A Complete Farming Solution', fr: 'Au-delà des Conseils — Une Solution Agricole Complète' },
  'home.pillars.advice.title': { en: 'Smart Farming Advice', fr: 'Conseils Agricoles Intelligents' },
  'home.pillars.advice.desc': { en: 'Instant diagnosis for plant diseases. Personalized crop care plans. Daily tips for your region.', fr: 'Diagnostic instantané des maladies des plantes. Plans de soins personnalisés. Conseils quotidiens pour votre région.' },
  'home.pillars.secure.title': { en: 'Secure Your Livelihood', fr: 'Sécurisez Votre Revenu' },
  'home.pillars.secure.desc': { en: 'Access crop insurance information. Learn about government aid. Find affordable credit options.', fr: 'Accédez aux informations sur l\'assurance récolte. Découvrez les aides gouvernementales. Trouvez des options de crédit abordables.' },
  'home.pillars.sell.title': { en: 'Sell Smarter', fr: 'Vendez Plus Intelligemment' },
  'home.pillars.sell.desc': { en: 'Get live market prices. Know the best time to sell. Connect with trustworthy buyers.', fr: 'Obtenez les prix du marché en direct. Sachez quand vendre au meilleur moment. Connectez-vous avec des acheteurs de confiance.' },
  'home.pillars.inputs.title': { en: 'Trusted Inputs', fr: 'Intrants de Confiance' },
  'home.pillars.inputs.desc': { en: 'Find quality seeds and fertilizers. Compare prices from local suppliers.', fr: 'Trouvez des semences et engrais de qualité. Comparez les prix des fournisseurs locaux.' },

  // Home Page - Videos
  'home.videos.title': { en: 'See MORSHID in Action', fr: 'Voyez MORSHID en Action' },

  // Home Page - How It Works
  'home.howItWorks.title': { en: 'How Easy Is It?', fr: 'C\'est Facile ?' },
  'home.howItWorks.subtitle': { en: '3 Simple Steps on WhatsApp', fr: '3 Étapes Simples sur WhatsApp' },
  'home.howItWorks.step1.title': { en: 'Send a Message', fr: 'Envoyez un Message' },
  'home.howItWorks.step1.desc': { en: 'Open WhatsApp and send your question — text or voice', fr: 'Ouvrez WhatsApp et envoyez votre question — texte ou voix' },
  'home.howItWorks.step2.title': { en: 'MORSHID Understands', fr: 'MORSHID Comprend' },
  'home.howItWorks.step2.desc': { en: 'Our AI finds the best answer for you', fr: 'Notre IA trouve la meilleure réponse pour vous' },
  'home.howItWorks.step3.title': { en: 'Get Your Answer', fr: 'Recevez Votre Réponse' },
  'home.howItWorks.step3.desc': { en: 'Receive clear advice ready to use on your farm', fr: 'Recevez des conseils clairs prêts à utiliser sur votre ferme' },
  'home.howItWorks.cta': { en: 'Try It Now — It\'s Free!', fr: 'Essayez Maintenant — C\'est Gratuit !' },

  // Home Page - Trust
  'home.trust.title': { en: 'Join Moroccan Farmers Who Trust MORSHID', fr: 'Rejoignez les Agriculteurs Marocains qui Font Confiance à MORSHID' },
  'home.trust.testimonial1': { en: '"MORSHID helped me identify a disease on my tomatoes in minutes. I saved my entire crop!"', fr: '"MORSHID m\'a aidé à identifier une maladie sur mes tomates en quelques minutes. J\'ai sauvé toute ma récolte !"' },
  'home.trust.testimonial1.author': { en: '— Ahmed, Agadir', fr: '— Ahmed, Agadir' },
  'home.trust.testimonial2': { en: '"I got better prices for my oranges by knowing when to sell. Thank you MORSHID!"', fr: '"J\'ai obtenu de meilleurs prix pour mes oranges en sachant quand vendre. Merci MORSHID !"' },
  'home.trust.testimonial2.author': { en: '— Fatima, Berkane', fr: '— Fatima, Berkane' },
  'home.trust.testimonial3': { en: '"Simple to use, always available. MORSHID is like having an expert in my pocket."', fr: '"Simple à utiliser, toujours disponible. MORSHID c\'est comme avoir un expert dans ma poche."' },
  'home.trust.testimonial3.author': { en: '— Hassan, Meknes', fr: '— Hassan, Meknès' },
  'home.trust.stat1': { en: 'Farmers Helped', fr: 'Agriculteurs Aidés' },
  'home.trust.stat2': { en: 'Always Available', fr: 'Toujours Disponible' },
  'home.trust.stat3': { en: 'No Hidden Costs', fr: 'Pas de Frais Cachés' },

  // Home Page - Final CTA
  'home.finalCta.title': { en: 'Ready to Transform Your Farm?', fr: 'Prêt à Transformer Votre Ferme ?' },
  'home.finalCta.subtitle': { en: 'Join thousands of Moroccan farmers already using MORSHID. Start getting expert advice today — completely free.', fr: 'Rejoignez des milliers d\'agriculteurs marocains qui utilisent déjà MORSHID. Commencez à recevoir des conseils d\'experts aujourd\'hui — complètement gratuit.' },
  'home.finalCta.cta': { en: 'Start Now on WhatsApp', fr: 'Commencez Maintenant sur WhatsApp' },

  // For Farmers Page - Hero
  'forFarmers.hero.title': { en: 'Everything You Need to Succeed — Right on WhatsApp', fr: 'Tout ce dont Vous Avez Besoin pour Réussir — Directement sur WhatsApp' },
  'forFarmers.hero.subtitle': { en: 'From planting to selling, MORSHID is your trusted farming partner. Get instant answers, protect your crops, and maximize your profits.', fr: 'De la plantation à la vente, MORSHID est votre partenaire agricole de confiance. Obtenez des réponses instantanées, protégez vos cultures et maximisez vos profits.' },
  'forFarmers.hero.cta': { en: 'Chat with MORSHID Now', fr: 'Discutez avec MORSHID Maintenant' },

  // For Farmers Page - Services
  'forFarmers.services.title': { en: 'What MORSHID Can Do for You', fr: 'Ce que MORSHID Peut Faire pour Vous' },
  'forFarmers.services.subtitle': { en: 'Comprehensive Support for Every Stage of Farming', fr: 'Soutien Complet pour Chaque Étape de l\'Agriculture' },
  'forFarmers.services.cropCare.title': { en: 'Crop Care Advice', fr: 'Conseils de Soins des Cultures' },
  'forFarmers.services.cropCare.desc': { en: 'Get personalized tips for planting, watering, fertilizing, and harvesting your crops.', fr: 'Obtenez des conseils personnalisés pour planter, arroser, fertiliser et récolter vos cultures.' },
  'forFarmers.services.disease.title': { en: 'Disease Detection', fr: 'Détection des Maladies' },
  'forFarmers.services.disease.desc': { en: 'Send a photo of your plant and get instant diagnosis with treatment recommendations.', fr: 'Envoyez une photo de votre plante et obtenez un diagnostic instantané avec des recommandations de traitement.' },
  'forFarmers.services.market.title': { en: 'Market Prices', fr: 'Prix du Marché' },
  'forFarmers.services.market.desc': { en: 'Stay updated with real-time market prices to sell your produce at the best rates.', fr: 'Restez informé des prix du marché en temps réel pour vendre vos produits aux meilleurs tarifs.' },
  'forFarmers.services.inputs.title': { en: 'Input Sourcing', fr: 'Approvisionnement en Intrants' },
  'forFarmers.services.inputs.desc': { en: 'Find trusted suppliers for seeds, fertilizers, and equipment at competitive prices.', fr: 'Trouvez des fournisseurs de confiance pour les semences, engrais et équipements à des prix compétitifs.' },

  // For Farmers Page - FAQ
  'forFarmers.faq.title': { en: 'Common Questions', fr: 'Questions Fréquentes' },
  'forFarmers.faq.q1': { en: 'Is MORSHID really free?', fr: 'MORSHID est-il vraiment gratuit ?' },
  'forFarmers.faq.a1': { en: 'Yes! MORSHID is 100% free for all farmers. No hidden fees, no subscriptions. Just send a message on WhatsApp and get help.', fr: 'Oui ! MORSHID est 100% gratuit pour tous les agriculteurs. Pas de frais cachés, pas d\'abonnements. Envoyez simplement un message sur WhatsApp et obtenez de l\'aide.' },
  'forFarmers.faq.q2': { en: 'What languages does MORSHID support?', fr: 'Quelles langues MORSHID supporte-t-il ?' },
  'forFarmers.faq.a2': { en: 'MORSHID understands Arabic, French, and Darija (Moroccan Arabic). You can send messages in text or voice in any of these languages.', fr: 'MORSHID comprend l\'arabe, le français et le darija (arabe marocain). Vous pouvez envoyer des messages en texte ou en voix dans n\'importe laquelle de ces langues.' },
  'forFarmers.faq.q3': { en: 'How accurate is the advice?', fr: 'Quelle est la précision des conseils ?' },
  'forFarmers.faq.a3': { en: 'MORSHID uses advanced AI trained on agricultural data specific to Morocco. Our advice is reviewed by farming experts and continuously improved based on farmer feedback.', fr: 'MORSHID utilise une IA avancée formée sur des données agricoles spécifiques au Maroc. Nos conseils sont vérifiés par des experts agricoles et constamment améliorés grâce aux retours des agriculteurs.' },
  'forFarmers.faq.q4': { en: 'Can I use MORSHID without internet?', fr: 'Puis-je utiliser MORSHID sans internet ?' },
  'forFarmers.faq.a4': { en: 'You need an internet connection to send messages on WhatsApp. However, MORSHID works on slow connections and uses minimal data.', fr: 'Vous avez besoin d\'une connexion internet pour envoyer des messages sur WhatsApp. Cependant, MORSHID fonctionne sur des connexions lentes et utilise très peu de données.' },
  'forFarmers.faq.q5': { en: 'What if MORSHID doesn\'t understand my question?', fr: 'Et si MORSHID ne comprend pas ma question ?' },
  'forFarmers.faq.a5': { en: 'If MORSHID needs more information, it will ask follow-up questions. You can also rephrase your question or send a photo to help explain your situation.', fr: 'Si MORSHID a besoin de plus d\'informations, il posera des questions complémentaires. Vous pouvez aussi reformuler votre question ou envoyer une photo pour mieux expliquer votre situation.' },

  // For Farmers Page - CTA
  'forFarmers.cta.title': { en: 'Start Getting Expert Help Today', fr: 'Commencez à Recevoir de l\'Aide d\'Experts Aujourd\'hui' },
  'forFarmers.cta.subtitle': { en: 'No registration, no downloads, no cost. Just open WhatsApp and start chatting with MORSHID.', fr: 'Pas d\'inscription, pas de téléchargements, pas de coût. Ouvrez simplement WhatsApp et commencez à discuter avec MORSHID.' },
  'forFarmers.cta.button': { en: 'Get Started on WhatsApp', fr: 'Commencez sur WhatsApp' },

  // Contact Page
  'contact.title': { en: 'Get in Touch', fr: 'Contactez-Nous' },
  'contact.subtitle': { en: 'Have questions? We\'re here to help. Reach out through any of these channels.', fr: 'Vous avez des questions ? Nous sommes là pour vous aider. Contactez-nous par l\'un de ces canaux.' },
  'contact.whatsapp.title': { en: 'WhatsApp', fr: 'WhatsApp' },
  'contact.whatsapp.desc': { en: 'Chat with us directly on WhatsApp for instant support and farming advice.', fr: 'Discutez avec nous directement sur WhatsApp pour un soutien instantané et des conseils agricoles.' },
  'contact.whatsapp.button': { en: 'Open WhatsApp', fr: 'Ouvrir WhatsApp' },
  'contact.email.title': { en: 'Email', fr: 'Email' },
  'contact.email.desc': { en: 'Send us an email for detailed inquiries or partnership opportunities.', fr: 'Envoyez-nous un email pour des demandes détaillées ou des opportunités de partenariat.' },
  'contact.email.button': { en: 'Send Email', fr: 'Envoyer un Email' },
  'contact.phone.title': { en: 'Phone', fr: 'Téléphone' },
  'contact.phone.desc': { en: 'Call us directly to speak with our team about MORSHID services.', fr: 'Appelez-nous directement pour parler avec notre équipe des services MORSHID.' },
  'contact.phone.button': { en: 'Call Now', fr: 'Appeler Maintenant' },
  'contact.responseTime': { en: 'We typically respond within 24 hours on all channels.', fr: 'Nous répondons généralement dans les 24 heures sur tous les canaux.' },

  // WhatsApp Floating Button
  'whatsapp.aria': { en: 'Contact us on WhatsApp', fr: 'Contactez-nous sur WhatsApp' },

  // Logo Popup
  'popup.title': { en: 'With MORSHID', fr: 'Avec MORSHID' },
  'popup.message': { en: 'Nothing to lose, everything to gain. Expert advice, saved time, better harvests, higher profits.', fr: 'Rien à perdre, tout à gagner. Conseils d\'experts, temps économisé, meilleures récoltes, profits plus élevés.' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
