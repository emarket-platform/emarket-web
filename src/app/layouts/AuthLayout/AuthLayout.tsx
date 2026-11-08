// AuthLayout используется для страниц авторизации.
import { Outlet } from 'react-router-dom';

import styles from './AuthLayout.module.scss';

export function AuthLayout() {
    return (
        <main className={styles.authLayout}>
            <div className={styles.container}>
                <Outlet />
            </div>
        </main>
    );
}