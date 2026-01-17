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
      <div
        className={styles.product__card}
        style={{
          backgroundImage: `url(${product.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.product__info}>
          <p>{product.name}</p>
          <p>${product.pricePerUnit}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
