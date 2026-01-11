import React from "react";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

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
    <Link to={`/products/${product.id}`}>
      <div className={styles.product__card}>
        <div className={styles.product__info}>
          <img src={product.image} alt={"about the toy"} />
          <p>{product.name}</p>
          <p>Colours {product.colours}</p>
          <p>{product.pricePerUnit}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
