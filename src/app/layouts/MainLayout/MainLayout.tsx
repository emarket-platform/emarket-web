import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';

/*
    MainLayout — основной шаблон пользовательской части магазина.
    MainLayout используется для основной части магазина.

    MainLayout
    │
    ├── HomePage                 /
    │
    ├── ProductsPage             /products
    │
    ├── AuthGuard
    │   │
    │   ├── ProfilePage          /profile
    │   ├── AddressesPage        /profile/addresses
    │   └── PreferencesPage      /profile/preferences
    │
    ├── ForbiddenPage            /403
    │
    └── NotFoundPage             *
*/
const appName = import.meta.env.VITE_APP_NAME;
export function MainLayout() {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <span>{appName}</span>
                </div>
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>

            <footer className={styles.footer}>
                <div className={styles.container}>
                    <span>© {appName}</span>
                </div>
            </footer>
        </div>
    );
}