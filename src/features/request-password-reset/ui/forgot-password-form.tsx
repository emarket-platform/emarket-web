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
      // Do not reveal whether an account exists.
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

        <input
          id="forgot-email"
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          disabled={mutation.isPending}
          {...register("email")}
        />

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
        {mutation.isPending ? "Sending..." : "Send reset instructions"}
      </button>

      <Link to="/login">Back to sign in</Link>
    </form>
  );
}
