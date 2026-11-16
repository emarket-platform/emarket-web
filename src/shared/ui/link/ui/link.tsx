import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router-dom";

import styles from "./link.module.scss";

type LinkProps = RouterLinkProps;

export function Link({ className, ...props }: LinkProps) {
  return (
    <RouterLink
      {...props}
      className={[styles.link, className].filter(Boolean).join(" ")}
    />
  );
}
