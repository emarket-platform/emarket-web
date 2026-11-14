import { ForgotPasswordForm } from "@/features/request-password-reset/ui/forgot-password-form";
import { Logo } from "@/shared/ui/logo";

import styles from "./forgot-password-page.module.scss";

export function ForgotPasswordPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Logo size={48} />

        <header>
          <h1>Forgot password?</h1>
          <p>
            Enter your email address and we'll send you instructions to reset
            your password.
          </p>
        </header>

        <ForgotPasswordForm />
      </section>
    </main>
  );
}
