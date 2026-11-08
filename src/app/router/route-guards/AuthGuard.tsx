/*
    AuthGuard защищает только пользовательские страницы.
    Этот компонент защищает страницы авторизованного пользователя.
    Сценарий 1. Пользователь открывает /profile, но не авторизован.
        /profile
            |
            v
        AuthGuard
            |
            v
        unauthenticated
            |
            v
         /login

     Сценарий 2. Пользователь авторизован.
         /profile
            |
            v
        AuthGuard
            |
            v
        authenticated
            |
            v
        ProfilePage

     Сценарий 3. Проверка сессии ещё выполняется
         /profile
            |
            v
        AuthGuard
            |
            v
        checking
            |
            v
         Loading...
*/

import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuthSession } from '@/core/auth/auth-session';

export function AuthGuard() {
    const { status } = useAuthSession();
    const location = useLocation();

    if (status === 'checking') {
        return <div>Loading...</div>;
    }

    if (status === 'unauthenticated') {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location }}
            />
        );
    }

    return <Outlet />;
}