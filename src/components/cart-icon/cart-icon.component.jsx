import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartDropdownOpen, cartCount, toggleCartDropdown } =
    useContext(CartContext);

  const toggleIsCartOpen = () => toggleCartDropdown(!isCartDropdownOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
