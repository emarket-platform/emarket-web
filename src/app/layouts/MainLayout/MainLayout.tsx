import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';

/*
MainLayout — основной шаблон пользовательской части магазина.
В дальнейшем здесь будут:
- Header.
- Navigation.
- Main content.
- Footer.
*/
export function MainLayout() {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <span>eMarket</span>
                </div>
            </header>

            <main className={styles.main}>
                <Outlet />
            </main>

            <footer className={styles.footer}>
                <div className={styles.container}>
                    <span>© eMarket</span>
                </div>
            </footer>
        </div>
    );
}