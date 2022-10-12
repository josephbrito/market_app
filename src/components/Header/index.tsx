import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Store</Text>
    </View>
  );
};

export default Header;
