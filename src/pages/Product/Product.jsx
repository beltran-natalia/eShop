import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getToyById } from "../../services/database";
import { Link } from "react-router-dom";
import styles from "./Product.module.scss";

export const Product = () => {
  let { productId } = useParams();

  const [toyDetails, setToyDetails] = useState({});
  const [fetchStatus, setFetchStatus] = useState("PENDING");
  const [error, setError] = useState(null);

  useEffect(() => {
    setFetchStatus("LOADING");
    getToyById(productId)
      .then((data) => {
        setFetchStatus("SUCCESS");
        setToyDetails(data);
      })
      .catch((e) => {
        setError(e);
        setFetchStatus("FAILURE");
      });
  }, []);

  return (
    <>
      {fetchStatus === "LOADING" && <p>"Loading..."</p>}
      {fetchStatus === "SUCCESS" && (
        <>
          <img src={toyDetails.image} alt={toyDetails.name} />
          <p>{toyDetails.name}</p>
          <p>Colours {toyDetails.colours}</p>
          <p>${toyDetails.pricePerUnit}</p>
          <small>Product code: {productId}</small>
        </>
      )}
      {fetchStatus === "FAILURE" && (
        <>
          <div>Sorry, we had a problem loading your product.</div>
          <p>
            <small>{error.message}</small>
          </p>
          <p>
            <Link to="/">Back to products list</Link>
          </p>
        </>
      )}
    </>
  );
};
