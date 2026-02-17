import { Outlet } from '@tanstack/react-router';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFloatingButton />
    </div>
  );
}
