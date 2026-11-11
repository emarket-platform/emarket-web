/*
    GuestGuard ограничивает доступ к страницам авторизации.
    Этот компонент запрещает авторизованным пользователям открывать страницы Login и Register.
    Поведение:

    /login
       |
       v
    GuestGuard
       |
       +-- unauthenticated --> LoginPage
       |
       +-- authenticated ----> /profile
       |
       +-- checking --------> Loading...


    GuestGuard
    │
    └── AuthLayout
        │
        ├── LoginPage            /login
        ├── RegisterPage         /register
        ├── ForgotPasswordPage   /forgot-password
        └── ResetPasswordPage    /reset-password
 */
import { Navigate, Outlet } from 'react-router-dom';

import { useAuthSession } from '@/core/auth/auth-session';
export function GuestGuard() {
  const { status } = useAuthSession();

  if (status === 'checking') {
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    return <Navigate to="/profile" replace />;
  }

  return <Outlet />;
}
