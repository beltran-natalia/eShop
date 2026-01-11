import React from "react";
import styles from "./Home.module.scss";
import Carousel from "../../components/Carousel/Carousel";

export const Home = () => {
  return (
    <div>
      <nav>
        <img src="#" alt="" />
        <a href="#">My Account</a>
        <a href="#">Cart</a>
      </nav>
      <Carousel />
      <section className={styles.toy_carousel}>
        <div></div>
      </section>
      <section className={styles.toy_grid}>
        <div></div>
      </section>
    </div>
  );
};
