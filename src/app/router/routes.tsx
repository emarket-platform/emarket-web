import type { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <main>
                <h1>eMarket</h1>
                <p>Frontend application is running.</p>
            </main>
        ),
    },
    {
        path: '*',
        element: <h1>404 - Page Not Found</h1>,
    },
];