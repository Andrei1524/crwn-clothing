import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  let foundItemIndex = cartItems.indexOf(productToRemove);

  cartItems.splice(foundItemIndex, 1);

  return [...cartItems];
};

const decrementItemQuantity = (cartItems, productToDecrement) => {
  let foundItemIndex = cartItems.indexOf(productToDecrement);

  cartItems[foundItemIndex].quantity -= 1;

  if (cartItems[foundItemIndex].quantity <= 0) {
    return removeCartItem(cartItems, productToDecrement);
  }
  return [...cartItems];
};

export const CartContext = createContext({
  isCartDropdownOpen: null,
  toggleCartDropdown: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  decrementItemQuantityFromCart: () => {},
  cartCount: 0,
  setCartCount: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartDropdownOpen, toggleCartDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd, actionType) => {
    setCartItems(addCartItem(cartItems, productToAdd, actionType));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const decrementItemQuantityFromCart = (productToDecrement) => {
    setCartItems(decrementItemQuantity(cartItems, productToDecrement));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, currentVal) => {
      return acc + currentVal.quantity;
    }, 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((acc, currentVal) => {
      return acc + currentVal.price * currentVal.quantity;
    }, 0);

    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    isCartDropdownOpen,
    toggleCartDropdown,
    addItemToCart,
    removeItemFromCart,
    decrementItemQuantityFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
