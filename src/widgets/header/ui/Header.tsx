import { Search, ShoppingBag } from "lucide-react";

import { ThemeSwitcher } from "@/features/theme-switcher";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo} aria-label="eMarket home">
          <ShoppingBag size={25} />
          <span>eMarket</span>
        </a>

        <nav className={styles.navigation} aria-label="Main navigation">
          <a href="#categories">Categories</a>
          <a href="#featured">Featured</a>
          <a href="#benefits">About us</a>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.searchButton}
            aria-label="Search"
          >
            <Search size={19} />
          </button>

          <ThemeSwitcher />

          <a href="#categories" className={styles.signIn}>
            Sign in
          </a>

          <a href="#categories" className={styles.getStarted}>
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
