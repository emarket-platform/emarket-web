import { ArrowRight, Sparkles } from "lucide-react";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>
          <Sparkles size={15} />
          DISCOVER SOMETHING NEW
        </span>

        <h1>
          Shopping made
          <span> simple & beautiful.</span>
        </h1>

        <p>
          Discover thoughtfully selected products for your everyday life.
          Quality, convenience and inspiration in one place.
        </p>

        <div className={styles.actions}>
          <a href="#categories" className={styles.primaryButton}>
            Explore marketplace
            <ArrowRight size={18} />
          </a>

          <a href="#benefits" className={styles.secondaryButton}>
            Learn more
          </a>
        </div>

        <div className={styles.socialProof}>
          <strong>One place.</strong>
          <span>Everything you love.</span>
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          src="/images/hero/marketplace-hero.jpg"
          alt="A curated selection of lifestyle products"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
