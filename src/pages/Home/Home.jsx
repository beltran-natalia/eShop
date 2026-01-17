import React from "react";
import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import Carousel from "../../components/Carousel/Carousel";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
// import productList from "../../components/ProductGrid/ProductList";
import { getToys } from "../../services/database";

export const Home = () => {
  const [toys, setToys] = useState([]);
  const [fetchStatus, setFetchStatus] = useState("PENDING");
  const [error, setError] = useState(null);

  useEffect(() => {
    setFetchStatus("LOADING");
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

  return (
    <div>
      <section className={styles.toy_carousel}>
        <Carousel />
      </section>

      <section className={styles.toy_grid}>
        {fetchStatus === "LOADING" && <p>Loading...</p>}
        {fetchStatus === "FAILURE" && (
          <p>Sorry, we have some issues loading the page.</p>
        )}
        {fetchStatus === "SUCCESS" && <ProductGrid productList={toys} />}
      </section>
    </div>
  );
};
