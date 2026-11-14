import { LoginForm } from "@/features/auth-by-email";
import { Logo } from "@/shared/ui/logo";

import styles from "./login-page.module.scss";

export function LoginPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card} aria-labelledby="login-title">
        <header className={styles.header}>
          <Logo size={48} />

          <div className={styles.heading}>
            <h1 id="login-title">Welcome to emarket</h1>

            <p>Please enter your details to sign in</p>
          </div>
        </header>

        <LoginForm />
      </section>
    </main>
  );
}
