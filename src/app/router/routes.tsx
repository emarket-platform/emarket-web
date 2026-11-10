// Предполагается, что страницы в соответствующих feature-модулях экспортируются через их index.ts.
import { lazy, Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';

import { AuthGuard } from './route-guards/AuthGuard';
import { GuestGuard } from './route-guards/GuestGuard';

import { MainLayout } from '../layouts/MainLayout';
import { AuthLayout } from '../layouts/AuthLayout';

// App pages
const HomePage = lazy(() =>
  import('../pages/HomePage').then((module) => ({
    default: module.HomePage,
  })),
);

const ProductsPage = lazy(() =>
  import('../pages/ProductsPage').then((module) => ({
    default: module.ProductsPage,
  })),
);

const ForbiddenPage = lazy(() =>
  import('../pages/ForbiddenPage').then((module) => ({
    default: module.ForbiddenPage,
  })),
);

const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage').then((module) => ({
    default: module.NotFoundPage,
  })),
);

// Auth feature pages
const LoginPage = lazy(() =>
  import('../../features/auth/pages/LoginPage').then((module) => ({
    default: module.LoginPage,
  })),
);

const RegisterPage = lazy(() =>
  import('../../features/auth/pages/RegisterPage').then((module) => ({
    default: module.RegisterPage,
  })),
);

const ForgotPasswordPage = lazy(() =>
  import('../../features/auth/pages/ForgotPasswordPage').then((module) => ({
    default: module.ForgotPasswordPage,
  })),
);

const ResetPasswordPage = lazy(() =>
  import('../../features/auth/pages/ResetPasswordPage').then((module) => ({
    default: module.ResetPasswordPage,
  })),
);

// User feature pages
const ProfilePage = lazy(() =>
  import('../../features/user-profile/pages/ProfilePage').then((module) => ({
    default: module.ProfilePage,
  })),
);

const AddressesPage = lazy(() =>
  import('../../features/user-addresses/pages/AddressesPage').then((module) => ({
    default: module.AddressesPage,
  })),
);

const PreferencesPage = lazy(() =>
  import('../../features/user-preferences/pages/PreferencesPage').then((module) => ({
    default: module.PreferencesPage,
  })),
);

function PageLoader() {
  return <div>Loading page...</div>;
}

function loadPage(element: React.ReactNode) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
}

export const routes: RouteObject[] = [
  // Main application layout
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true, // true означает, что HomePage отображается непосредственно на URL /.
        element: loadPage(<HomePage />),
      },
      {
        path: 'products',
        element: loadPage(<ProductsPage />),
      },

      // Authenticated routes
      {
        element: <AuthGuard />,
        children: [
          {
            // 'profile' задаёт дочерний маршрут относительно родительского маршрута /.
            // Итоговый URL: /profile
            path: 'profile',
            element: loadPage(<ProfilePage />),
          },
          {
            path: 'profile/addresses',
            element: loadPage(<AddressesPage />),
          },
          {
            path: 'profile/preferences',
            element: loadPage(<PreferencesPage />),
          },
        ],
      },

      {
        path: '403',
        element: loadPage(<ForbiddenPage />),
      },
      {
        path: '*',
        element: loadPage(<NotFoundPage />),
      },
    ],
  },

  // Guest routes
  {
    element: <GuestGuard />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: '/login',
            element: loadPage(<LoginPage />),
          },
          {
            path: '/register',
            element: loadPage(<RegisterPage />),
          },
          {
            path: '/forgot-password',
            element: loadPage(<ForgotPasswordPage />),
          },
          {
            path: '/reset-password',
            element: loadPage(<ResetPasswordPage />),
          },
        ],
      },
    ],
  },
];
