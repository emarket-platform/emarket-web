// Отвечает за создание экземпляра маршрутизатора и его передачу React-приложению
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';

const router = createBrowserRouter(routes);

export function AppRouter() {
    return <RouterProvider router={router} />;
}