import { create } from 'zustand';

/*
    Не рекомендую проверять авторизацию через localStorage или просто наличие JWT.
    В проекте состояние сессии должно определяться результатом взаимодействия с Backend for Frontend.
    Почему начальное значение — checking?
    Потому что после обновления страницы frontend ещё не знает, существует ли действующая сессия.
    Сначала нужно проверить её через backend.
    Необходимо реализовать эту проверку через:
    GET /api/v1/web/auth/me
 */
export type AuthStatus =
  | 'checking' // Проверяем текущую пользовательскую сессию
  | 'authenticated' // Пользователь авторизован
  | 'unauthenticated'; // Пользователь не авторизован

interface AuthSessionState {
  status: AuthStatus;

  setStatus: (status: AuthStatus) => void;
}

// После реализации useCurrentUser.ts состояние должно определяться результатом проверки сессии через BFF.
/*-
    При status: 'unauthenticated'
    URL	Ожидаемый результат:
    /	HomePage
    /login	LoginPage
    /register	RegisterPage
    /forgot-password	ForgotPasswordPage
    /reset-password	ResetPasswordPage
    /products	ProductsPage
    /profile	Redirect на /login
    /profile/addresses	Redirect на /login
    /profile/preferences	Redirect на /login
    /403	ForbiddenPage
    /unknown	NotFoundPage

    При status: 'authenticated'
    URL	Ожидаемый результат:
    /	HomePage
    /login	Redirect на /profile
    /register	Redirect на /profile
    /forgot-password	Redirect на /profile
    /reset-password	Redirect на /profile
    /products	ProductsPage
    /profile	ProfilePage
    /profile/addresses	AddressesPage
    /profile/preferences	PreferencesPage
    /403	ForbiddenPage
    /unknown	NotFoundPage
 */
export const useAuthSession = create<AuthSessionState>((set) => ({
  // Это правильное поведение для полноценного приложения,
  // но пока мы не реализовали API авторизации, страницы будут показывать Loading....
  status: 'checking',

  setStatus: (status) => set({ status }),
}));
