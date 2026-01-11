import React from "react";
import { useParams } from "react-router";
import productList from "../../components/ProductGrid/ProductList";

export const Product = () => {
  let { productId } = useParams();

  const productDetails = productList.filter(
    (product) => `${product.id}` === productId
  )[0];

  return (
    <>
      <div>This is the Product Page for #{productId}</div>
      <p>{productDetails.name}</p>
    </>
  );
};
