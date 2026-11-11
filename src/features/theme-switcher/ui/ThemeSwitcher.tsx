import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "../model/theme.store";
import styles from "./ThemeSwitcher.module.css";

export function ThemeSwitcher() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={styles.button}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      {isDark ? <Sun size={19} /> : <Moon size={19} />}
    </button>
  );
}
