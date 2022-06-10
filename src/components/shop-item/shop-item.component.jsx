import { Fragment, useContext } from "react";
import { Td } from "../../routes/checkout/checkout.styles";
import "./shop-item.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const ShopItem = ({ item }) => {
  const { name, imageUrl, quantity, price } = item;

  const { addItemToCart, removeItemFromCart, decrementItemQuantityFromCart } =
    useContext(CartContext);

  return (
    <Fragment>
      <Td>
        <div
          className="item-image"
          style={{ backgroundImage: "url(" + imageUrl + ")" }}
        ></div>
      </Td>
      <Td>{name}</Td>
      <Td>
        <span onClick={() => decrementItemQuantityFromCart(item)}>
          &#10094;
        </span>{" "}
        {quantity} <span onClick={() => addItemToCart(item)}>&#10095;</span>
      </Td>
      <Td>{price}</Td>
      <Td onClick={() => removeItemFromCart(item)}>X</Td>
    </Fragment>
  );
};

export default ShopItem;
