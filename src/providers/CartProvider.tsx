import React, { createContext, useContext, useMemo, useState } from "react";
import { IProducts } from "../utils/types/IProducts";

interface CartContextInterface {
  cartItems: IProducts[];
  setCartItems: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

interface IChildren {
  children: JSX.Element;
}

const CartContext = createContext<CartContextInterface | null>(null);

const CartProvider: React.FC<IChildren> = ({ children }) => {
  const [cartItems, setCartItems] = useState<IProducts[]>([]);

  const contextData: CartContextInterface = useMemo(
    () => ({
      cartItems,
      setCartItems,
    }),
    [cartItems]
  );

  return (
    <CartContext.Provider value={contextData}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

export const useCartContext = () => useContext(CartContext);
