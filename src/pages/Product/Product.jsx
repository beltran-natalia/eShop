import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getToyById } from "../../services/database";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import styles from "./Product.module.scss";

export const Product = ({ cart, setCart }) => {
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

  const onSubmit = (values) => {
    setCart({
      [`${toyDetails.name}-${values.colour}`]: {
        name: toyDetails.name,
        price: toyDetails.pricePerUnit,
        quantity: values.quantity,
        variant: values.colour,
        stock: toyDetails.stock,
      },

      ...cart,
    });
  };

  return (
    <>
      {fetchStatus === "LOADING" && <p>"Loading..."</p>}
      {fetchStatus === "SUCCESS" && (
        <>
          <h2>{toyDetails.name}</h2>
          <div className={styles.main_container}>
            <div className={styles.image_container}>
              <img src={toyDetails.image} alt={toyDetails.name} />
            </div>
            <div className={styles.details_container}>
              <p>Price ${toyDetails.pricePerUnit}</p>
              <p>Available in stock: {toyDetails.stock}</p>
              <small>Product code: {productId}</small>

              <fieldset>
                <Formik
                  initialValues={{ quantity: 1, colour: toyDetails.colours[0] }}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <label htmlFor="quantity">Quantity</label>
                    <Field
                      id="quantity"
                      name="quantity"
                      type="number"
                      min={1}
                      max={toyDetails.stock}
                    />

                    <div id="colour">Colour</div>
                    <div role="group" aria-labelledby="colour">
                      {toyDetails.colours.map((option) => (
                        <label key={option}>
                          <Field type="radio" name="colour" value={option} />
                          {option}
                        </label>
                      ))}
                    </div>

                    <button type="submit">Add to Cart</button>
                  </Form>
                </Formik>
              </fieldset>
            </div>
          </div>
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
