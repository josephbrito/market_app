import React from "react";
import { View, FlatList } from "react-native";

import { useData } from "../../context";
import Card from "../Card";

const Main: React.FC = () => {
  const { data } = useData();
  return (
    <View style={{ backgroundColor: "#FFFFFC" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <Card
              id={item.id}
              category={item.category}
              rating={item.rating}
              description={item.description}
              image={item.image}
              price={item.price}
              title={item.title}
              key={item.id}
            />
          );
        }}
      />
    </View>
  );
};

export default Main;
