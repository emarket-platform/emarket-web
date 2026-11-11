import { ProductCard } from "@/entities/product";
import { mockProducts } from "@/entities/product/model/mock-products";

import styles from "./FeaturedProducts.module.css";

export function FeaturedProducts() {
  return (
    <section id="featured" className={styles.section}>
      <div className={styles.heading}>
        <div>
          <span>OUR SELECTION</span>
          <h2>Featured products</h2>
          <p>Discover products selected for your everyday life.</p>
        </div>

        <a href="#categories">Explore all</a>
      </div>

      <div className={styles.grid}>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
