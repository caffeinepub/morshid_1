import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { InternetIdentityProvider } from './hooks/useInternetIdentity';
import { LanguageProvider } from './contexts/LanguageContext';
import SiteLayout from './layouts/SiteLayout';
import HomePage from './pages/HomePage';
import ForFarmersPage from './pages/ForFarmersPage';
import ContactPage from './pages/ContactPage';

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const forFarmersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/for-farmers',
  component: ForFarmersPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([indexRoute, forFarmersRoute, contactRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <InternetIdentityProvider>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </InternetIdentityProvider>
    </QueryClientProvider>
  );
}
