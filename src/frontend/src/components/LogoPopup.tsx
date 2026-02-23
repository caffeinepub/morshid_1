import { X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface LogoPopupProps {
  open: boolean;
  onClose: () => void;
}

export function LogoPopup({ open, onClose }: LogoPopupProps) {
  const { t } = useLanguage();

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Card */}
      <div 
        className="relative bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Content */}
        <div className="pr-8">
          <h2 className="text-2xl font-bold mb-4">{t('popup.title')}</h2>
          <p className="text-gray-700 text-base leading-relaxed">
            {t('popup.message')}
          </p>
        </div>
      </div>
    </div>
  );
}
