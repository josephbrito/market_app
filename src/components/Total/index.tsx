import React from "react";
import { Button, Text, View } from "react-native";
import { useCart } from "../../context/cart";
import { usePrice } from "../../context/total";

import { styles } from "./styles";

const Total: React.FC = () => {
  const { currentPrice } = usePrice();
  const { cartData } = useCart();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.price}>
          <Text style={{ color: "black" }}>Total: </Text>$
          {currentPrice.reduce((accumulator, value) => {
            return accumulator + value;
          }, 0)}
        </Text>
        <View>
          <Button title="FINISH" disabled={cartData.length ? false : true} />
        </View>
      </View>
    </View>
  );
};

export default Total;
