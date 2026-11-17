import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "@/shared/ui/label";
import { Button } from "@/shared/ui/button";
import { Link } from "@/shared/ui/link";

import { useLoginMutation } from "../api/login.mutation";
import { loginSchema, type LoginFormValues } from "../model/login.schema";

import styles from "./login-form.module.scss";

export function LoginForm() {
  const navigate = useNavigate();
  const loginMutation = useLoginMutation();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      await loginMutation.mutateAsync(values);

      navigate("/", { replace: true });
    } catch {
      // API error is displayed below the form.
    }
  };

  const errorMessage = loginMutation.isError
    ? "Unable to sign in. Please check your credentials and try again."
    : null;

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.field}>
        <Label htmlFor="email">
          Email <span className={styles.required}>*</span>
        </Label>

        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          disabled={loginMutation.isPending}
          {...register("email")}
        />

        {errors.email && (
          <span id="email-error" className={styles.fieldError}>
            {errors.email.message}
          </span>
        )}
      </div>

      <div className={styles.field}>
        <div className={styles.passwordLabel}>
          <Label htmlFor="password">Password</Label>

          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <div className={styles.passwordInput}>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            autoComplete="current-password"
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? "password-error" : undefined}
            disabled={loginMutation.isPending}
            {...register("password")}
          />

          <button
            type="button"
            className={styles.passwordToggle}
            aria-label={showPassword ? "Hide password" : "Show password"}
            aria-pressed={showPassword}
            onClick={() => setShowPassword((value) => !value)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {errors.password && (
          <span id="password-error" className={styles.fieldError}>
            {errors.password.message}
          </span>
        )}
      </div>

      {errorMessage && (
        <div className={styles.apiError} role="alert">
          {errorMessage}
        </div>
      )}

      <Button type="submit" disabled={loginMutation.isPending}>
        {loginMutation.isPending ? "Signing in..." : "Sign in"}
      </Button>

      <div className={styles.separator}>
        <span />
        <span className={styles.separatorText}>OR</span>
        <span />
      </div>

      <button
        type="button"
        className={styles.googleButton}
        disabled
        title="Google authentication is not configured yet"
      >
        <GoogleIcon />
        <span>Sign in with Google</span>
      </button>

      <p className={styles.registerText}>
        Don't have an account? <Link to="/register">Create an account</Link>
      </p>
    </form>
  );
}

function GoogleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5.1h6.6c3.9-3.6 6.1-8.9 6.1-15Z"
      />
      <path
        fill="#34A853"
        d="M24 44c5.5 0 10.1-1.8 13.5-4.9l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3A20 20 0 0 0 24 44Z"
      />
      <path
        fill="#FBBC05"
        d="M12.6 27.6a12 12 0 0 1 0-7.2v-5.3H5.8a20 20 0 0 0 0 17.8l6.8-5.3Z"
      />
      <path
        fill="#EA4335"
        d="M24 12c3 0 5.7 1 7.8 3l5.8-5.8C34.1 5.9 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.3C14.2 15.6 18.7 12 24 12Z"
      />
    </svg>
  );
}
