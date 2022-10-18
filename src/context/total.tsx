import React, { createContext, useContext, useState } from "react";

interface IPrice {
  currentPrice: number[];
  setCurrentPrice: (price: number[]) => void;
}

const DEFAULT_VALUE = {
  currentPrice: [],
  setCurrentPrice: () => {},
};

const priceContext = createContext<IPrice>(DEFAULT_VALUE);

export function PriceProvider({ children }: { children: React.ReactNode }) {
  const [currentPrice, setCurrentPrice] = useState<number[]>([]);

  return (
    <priceContext.Provider value={{ currentPrice, setCurrentPrice }}>
      {children}
    </priceContext.Provider>
  );
}

export function usePrice() {
  const { currentPrice, setCurrentPrice } = useContext(priceContext);

  return { currentPrice, setCurrentPrice };
}
