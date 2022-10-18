import React from "react";
import { View, Text, FlatList } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useCart } from "../../context/cart";

import Card from "../Card";
import { styles } from "./styles";

const Cart: React.FC = () => {
  const { cartData } = useCart();

  if (!cartData.length)
    return (
      <View
        style={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Nothing here</Text>
      </View>
    );

  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={cartData}
          renderItem={({ item }) => (
            <Card
              key={item.id}
              id={item.id}
              category={item.category}
              description={item.description}
              image={item.image}
              price={item.price}
              rating={item.rating}
              title={item.title}
              btn={false}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Cart;
