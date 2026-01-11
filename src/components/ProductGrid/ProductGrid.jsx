import React from "react";
import styles from "./ProductGrid.module.scss";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({ productList }) => {
  return (
    <section className={styles.product__container}>
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;
