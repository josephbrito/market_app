import React from "react";
import { Pressable, Text } from "react-native";
import { useCart } from "../../context/cart";
import { usePrice } from "../../context/total";

import { IData } from "../../context/types";
import { useId } from "../../context/uniqueId";

import { styles } from "./styles";

const ButtonAdd: React.FC<IData> = ({
  id,
  category,
  description,
  image,
  price,
  rating,
  title,
}: IData) => {
  const { cartData, setCartData } = useCart();
  const { currentPrice, setCurrentPrice } = usePrice();
  const { uniqueId, setUniqueId } = useId();

  return (
    <Pressable
      style={styles.cart}
      onPress={() => {
        setUniqueId([...uniqueId, id]);
        setCartData([
          ...cartData,
          {
            id,
            category,
            description,
            image,
            price,
            rating,
            title,
          },
        ]);
        setCurrentPrice([...currentPrice, price]);
      }}
    >
      <Text style={styles.cart_text}>ADD CART</Text>
    </Pressable>
  );
};

export default ButtonAdd;
