import type { Product } from "../model/types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={styles.content}>
        <span className={styles.category}>{product.category}</span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className={styles.footer}>
          <strong>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: product.currency,
            }).format(product.price)}
          </strong>

          <span aria-label={`Rating ${product.rating} out of 5`}>
            ★ {product.rating}
          </span>
        </div>
      </div>
    </article>
  );
}
