import { MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function WhatsAppFloatingButton() {
  const { t } = useLanguage();

  return (
    <a
      href="https://wa.me/212623237732"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-xl"
      style={{ backgroundColor: '#25D366' }}
      aria-label={t('whatsapp.aria')}
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
