import type { Product } from "./types";

export const mockProducts: Product[] = [
  {
    id: "product-1",
    name: "Minimal Ceramic Vase",
    description: "Elegant ceramic design for modern interiors.",
    price: 39.99,
    currency: "USD",
    image: "/images/products/vase.jpg",
    category: "Home Decor",
    rating: 4.9,
  },
  {
    id: "product-2",
    name: "Everyday Backpack",
    description: "A practical backpack with timeless design.",
    price: 69.99,
    currency: "USD",
    image: "/images/products/backpack.jpg",
    category: "Accessories",
    rating: 4.8,
  },
  {
    id: "product-3",
    name: "Wireless Headphones",
    description: "Comfortable sound for everyday use.",
    price: 99.99,
    currency: "USD",
    image: "/images/products/headphones.jpg",
    category: "Electronics",
    rating: 4.9,
  },
  {
    id: "product-4",
    name: "Minimal Desk Lamp",
    description: "Warm lighting for your workspace.",
    price: 54.99,
    currency: "USD",
    image: "/images/products/lamp.jpg",
    category: "Home Decor",
    rating: 4.7,
  },
];
