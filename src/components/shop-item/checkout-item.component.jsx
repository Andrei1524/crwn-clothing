import { Fragment, useContext } from "react";

import "./checkout-item.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const ShopItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;

  const { addItemToCart, removeItemFromCart, decrementItemQuantityFromCart } =
    useContext(CartContext);

  return (
    <Fragment>
      <td>
        <div
          className="item-image"
          style={{ backgroundImage: "url(" + imageUrl + ")" }}
        ></div>
      </td>
      <td>{name}</td>
      <td>
        <span onClick={() => decrementItemQuantityFromCart(item)}>
          &#10094;
        </span>{" "}
        {quantity} <span onClick={() => addItemToCart(item)}>&#10095;</span>
      </td>
      <td>{price}</td>
      <td onClick={() => removeItemFromCart(item)}>X</td>
    </Fragment>
  );
};

export default ShopItem;
