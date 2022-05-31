import { createContext, useState } from "react";

export const CartDropdownContext = createContext({
  isCartDropdownOpen: null,
  toggleCartDropdown: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [isCartDropdownOpen, toggleCartDropdown] = useState(false);
  const value = { isCartDropdownOpen, toggleCartDropdown };

  return (
    <CartDropdownContext.Provider value={value}>
      {children}
    </CartDropdownContext.Provider>
  );
};
