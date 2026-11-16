import styles from "./logo.module.scss";

interface LogoProps {
  size?: number;
}

export function Logo({ size = 48 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={styles.logo}
      role="img"
      aria-label="emarket logo"
    >
      <path d="M24 1L46 17V31L24 47L2 31V17L24 1Z" fill="#2563EB" />
      <path d="M24 1L39 19V29L24 47V1Z" fill="#60A5FA" />
      <path d="M24 1V47L9 29V19L24 1Z" fill="#1D4ED8" />
      <path d="M24 1V47L39 29V19L24 1Z" fill="#FFFFFF" />
    </svg>
  );
}
