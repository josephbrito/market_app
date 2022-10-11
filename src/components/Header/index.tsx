import React from "react";
import { View, Text, ImageBackground } from "react-native";

import { styles } from "./styles";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.backblend} />
      <Text style={styles.text}>Fake Store API</Text>
    </View>
  );
};

export default Header;
