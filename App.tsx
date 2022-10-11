import { View } from "react-native";

import Layout from "./src/components/Layout";
import { DataProvider } from "./src/context";

export default function App() {
  return (
    <DataProvider>
      <View>
        <Layout />
      </View>
    </DataProvider>
  );
}
