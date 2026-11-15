import { ForgotPasswordForm } from "@/features/request-password-reset/ui/forgot-password-form";

import styles from "./forgot-password-page.module.scss";

export function ForgotPasswordPage() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        {/* Увеличенная иконка */}
        <div className={styles.iconContainer}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Тень / Подложка конверта */}
            <rect x="10" y="18" width="44" height="32" rx="8" fill="#FBBF24" />
            <path d="M10 24L32 38L54 24" fill="#F59E0B" />
            {/* Градиент или внутренняя заливка конверта */}
            <path
              d="M12 20L32 34L52 20C52 18.8954 51.1046 18 50 18H14C12.8954 18 12 18.8954 12 20Z"
              fill="#FCD34D"
            />
            <path
              d="M10 26V46C10 47.1046 10.8954 48 12 48H52C53.1046 48 54 47.1046 54 46V26L33.4 39.3333C32.5556 39.8963 31.4444 39.8963 30.6 39.3333L10 26Z"
              fill="#F59E0B"
            />

            {/* Круглый синий бейдж с замком */}
            <circle
              cx="48"
              cy="20"
              r="12"
              fill="#2563EB"
              stroke="white"
              strokeWidth="3"
            />
            <path
              d="M45 18.5V17C45 15.6193 46.1193 14.5 47.5 14.5C48.8807 14.5 50 15.6193 50 17V18.5M44 18.5H51C51.5523 18.5 52 18.9477 52 19.5V23C52 23.5523 51.5523 24 51 24H44C43.4477 24 43 23.5523 43 23V19.5C43 18.9477 43.4477 18.5 44 18.5Z"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <header className={styles.header}>
          <div className={styles.heading}>
            <h1 id="forgetpassword-title">Forget password?</h1>
            <p className={styles.description}>
              No worries, enter your user account&apos;s email and we will send
              you a password reset link.
            </p>
          </div>
        </header>

        <ForgotPasswordForm />
      </section>
    </main>
  );
}
