import type { LabelHTMLAttributes } from "react";

import styles from "./label.module.scss";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={[styles.label, className].filter(Boolean).join(" ")}
    />
  );
}
