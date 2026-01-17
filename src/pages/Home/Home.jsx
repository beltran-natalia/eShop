import React from "react";
import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import Carousel from "../../components/Carousel/Carousel";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { getToys } from "../../services/database";

export const Home = () => {
  const [toys, setToys] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("LOADING");
  const [error, setError] = useState(null);

  useEffect(() => {
    getToys()
      .then((data) => {
        setFetchStatus("SUCCESS");
        setToys(data);
      })
      .catch((e) => {
        setError(e);
        setFetchStatus("FAILURE");
      });
  }, []);

  const featuredToys = toys.filter((toy) => toy.featured);

  return (
    <div>
      {fetchStatus === "LOADING" && <p>Loading...</p>}
      {fetchStatus === "FAILURE" && (
        <p>Sorry, we have some issues loading the page.</p>
      )}
      {fetchStatus === "SUCCESS" && (
        <>
          <section className={styles.toy_carousel}>
            <Carousel featuredProducts={featuredToys} />
          </section>

          <section className={styles.toy_grid}>
            <ProductGrid productList={toys} />
          </section>
        </>
      )}
    </div>
  );
};
