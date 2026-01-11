import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  /*
  example product: 

    name: "Montessori Color Matching Game",
    quantity: 35,
    colours: ["red", "blue", "green", "yellow"],
    pricePerUnit: 16.49,
    favourited: false,
  */
  return (
    <div className={styles.product__card}>
      <div className={styles.product__info}>
        <img src={product.image} alt={"about the toy"} />
        <p>{product.name}</p>
        <p>Colours {product.colours}</p>
        <p>{product.pricePerUnit}</p>
      </div>
    </div>
  );
};

export default ProductCard;
