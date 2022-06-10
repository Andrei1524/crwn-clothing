import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CardDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} />;
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Link to="/checkout">
        <Button>Go to checkout</Button>
      </Link>
    </CartDropdownContainer>
  );
};

export default CardDropdown;
