import React from "react";
import { View, FlatList } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { useData } from "../../context";
import Card from "../Card";
import { useId } from "../../context/uniqueId";

const Main: React.FC = () => {
  const { uniqueId } = useId();
  const { data } = useData();
  return (
    <ScrollView>
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
                btn={uniqueId.includes(item.id) ? false : true}
              />
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Main;
