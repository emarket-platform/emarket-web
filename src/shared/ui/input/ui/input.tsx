import type { InputHTMLAttributes } from "react";

import styles from "./input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={[styles.input, className].filter(Boolean).join(" ")}
    />
  );
}
