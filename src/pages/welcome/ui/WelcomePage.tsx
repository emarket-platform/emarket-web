import { Header } from "@/widgets/header";
import { HeroSection } from "@/widgets/hero-section";

import styles from "./WelcomePage.module.css";

export function WelcomePage() {
  return (
    <div className={styles.page}>
      <Header />

      <main>
        <HeroSection />
      </main>
    </div>
  );
}
