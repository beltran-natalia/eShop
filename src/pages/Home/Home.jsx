import React from "react";
import styles from "./Home.module.scss";
import Carousel from "../../components/Carousel/Carousel";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import productList from "../../components/ProductGrid/ProductList";

export const Home = () => {
  return (
    <div>
      <nav>
        <img src="#" alt="" />
        <a href="#">My Account</a>
        <a href="#">Cart</a>
      </nav>

      <section className={styles.toy_carousel}>
        <Carousel />
      </section>

      <section className={styles.toy_grid}>
        <ProductGrid productList={productList} />
      </section>
    </div>
  );
};
