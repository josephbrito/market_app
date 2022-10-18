import React, { createContext, useContext, useState } from "react";
import { IData, IPropsCart, DEFAULT_VALUE_CART } from "./types";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const CartContext = createContext<IPropsCart>(DEFAULT_VALUE_CART);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartData, setCartData] = useState<IData[]>([]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const { cartData, setCartData } = useContext(CartContext);

  return { cartData, setCartData };
}

// const storeData = async (value:IData[]) => {
//   try {
//     const jsonValue = JSON.stringify(value)
//     await AsyncStorage.setItem('@storage_Key', jsonValue)
//   } catch (e) {
//     console.log(`Error on ${e}`)
//   }
// }
