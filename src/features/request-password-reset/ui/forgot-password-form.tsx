import { useState } from "react";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useForgotPasswordMutation } from "../api/forgot-password.mutation";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormValues,
} from "../model/forgot-password.schema";

import styles from "./forgot-password-form.module.scss";

export function ForgotPasswordForm() {
  const mutation = useForgotPasswordMutation();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      await mutation.mutateAsync(values);
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status">
        <h2>Check your email</h2>
        <p>
          If an account exists for this email, you will receive instructions to
          reset your password.
        </p>
        <Link to="/login">Back to sign in</Link>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.field}>
        <label htmlFor="forgot-email">Email</label>

        <div className={styles.inputWrapper}>
          <span className={styles.icon}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>

          <input
            id="forgot-email"
            type="email"
            placeholder="Enter your email address"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            disabled={mutation.isPending}
            {...register("email")}
          />
        </div>

        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}
      </div>

      {mutation.isError && (
        <p className={styles.error} role="alert">
          Something went wrong. Please try again.
        </p>
      )}

      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? "Sending..." : "Reset password"}
      </button>

      <div className={styles.backLink}>
        <Link to="/login">Back to sign in</Link>
      </div>
    </form>
  );
}
