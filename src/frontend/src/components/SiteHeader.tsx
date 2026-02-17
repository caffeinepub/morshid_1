import { Link, useRouterState } from '@tanstack/react-router';

export default function SiteHeader() {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'For Farmers', path: '/for-farmers' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-2xl font-bold text-morshid-dark">
          MORSHID
        </Link>
        <nav className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-morshid-primary ${
                currentPath === link.path ? 'text-morshid-primary' : 'text-morshid-text'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
