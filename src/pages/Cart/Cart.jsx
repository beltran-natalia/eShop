import React from "react";
import styles from "./Cart.module.scss";
import { Link } from "react-router-dom";
import { showToast } from "../../services/toast";

export const Cart = ({ cart, setCart }) => {
  const cartProductIds = Object.keys(cart); // ["hammer-red", "table-blue"]

  const tableLines = cartProductIds.map((key) => {
    const item = cart[key];

    const minusOne = () => {
      const newCart = { ...cart }; // create a copy of the current cart
      newCart[key].quantity--; // reduce quantity by 1
      setCart(newCart); // updates the cart state, to force a re-render
    };
    const plusOne = () => {
      const newCart = { ...cart }; // create a copy of the current cart
      newCart[key].quantity++; // increases quantity by 1
      setCart(newCart); // updates the cart state, to force a re-render
    };

    const removeItemFromCart = () => {
      const newCart = { ...cart }; // create a copy of the current cart
      delete newCart[key]; // delete the property for this item
      setCart(newCart); // updates the cart state, to force a re-render
      showToast(`Removed ${item.variant} ${item.name} from your shopping cart`);
    };

    return (
      <tr key={key}>
        <td>{item.name}</td>
        <td>{item.variant}</td>
        <td>${item.price.toFixed(2)}</td>
        <td>
          <button onClick={minusOne} disabled={item.quantity === 1}>
            -
          </button>{" "}
          {item.quantity}{" "}
          <button onClick={plusOne} disabled={item.quantity >= item.stock}>
            +
          </button>
        </td>
        <td>${(item.price * item.quantity).toFixed(2)}</td>
        <td>
          <button onClick={removeItemFromCart}>Remove</button>
        </td>
      </tr>
    );
  });

  const cartTotal = cartProductIds.reduce((acc, current) => {
    const item = cart[current];
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <>
      <h1>Shopping Cart</h1>

      {cartProductIds.length === 0 && (
        <>
          <p>Your shopping cart is empty.</p>
          <p>
            <Link to="/">Back to products list</Link>
          </p>
        </>
      )}

      {cartProductIds.length > 0 && (
        <>
          <table>
            <tbody>
              <tr>
                <td>Product</td>
                <td>Variant</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Total</td>
                <td></td>
              </tr>
              {tableLines}
              <tr>
                <td colSpan={4}></td>
                <td>Total ${cartTotal.toFixed(2)}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <button>Pay with card</button>
        </>
      )}
    </>
  );
};
