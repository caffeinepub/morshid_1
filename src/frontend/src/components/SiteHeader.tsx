import { Link, useRouterState } from '@tanstack/react-router';
import { useLanguage } from '../contexts/LanguageContext';

export default function SiteHeader() {
  const router = useRouterState();
  const currentPath = router.location.pathname;
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.forFarmers'), path: '/for-farmers' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/assets/logo%20MORSHID.png" 
            alt="MORSHID Logo" 
            className="h-10 w-auto"
          />
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-bold transition-colors hover:text-[#25D366] hover:underline hover:underline-offset-4 ${
                  currentPath === link.path ? 'text-[#25D366]' : 'text-morshid-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2 text-lg font-bold">
            <button
              onClick={() => setLanguage('en')}
              className={`transition-colors hover:text-[#25D366] ${
                language === 'en' ? 'text-[#25D366]' : 'text-morshid-text'
              }`}
            >
              EN
            </button>
            <span className="text-gray-400">|</span>
            <button
              onClick={() => setLanguage('fr')}
              className={`transition-colors hover:text-[#25D366] ${
                language === 'fr' ? 'text-[#25D366]' : 'text-morshid-text'
              }`}
            >
              FR
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
