export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-morshid-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <img 
            src="/assets/logo%20MORSHID.png" 
            alt="MORSHID Logo" 
            className="h-16 w-auto mb-2"
          />
          <div className="text-base text-white">
            Rabat, Morocco | hello@tmu.ai | +212 623 237 732 | © TMU SARL
          </div>
          <div className="mt-2 text-sm text-white/80">
            Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'morshid-app'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
