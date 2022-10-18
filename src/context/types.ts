export interface IData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IPropsData {
  data: IData[];
  setData: (data: IData[]) => void;
}

export const DEFAULT_VALUE = {
  data: [],
  setData: () => {},
};

export interface IPropsCart {
  cartData: IData[];
  setCartData: (data: IData[]) => void;
}

export const DEFAULT_VALUE_CART = {
  cartData: [],
  setCartData: () => {},
};
