import { View } from "react-native";

import Layout from "./src/components/Layout";
import { DataProvider } from "./src/context";
import { CartProvider } from "./src/context/cart";
import { PriceProvider } from "./src/context/total";
import { ProviderId } from "./src/context/uniqueId";

export default function App() {
  return (
    <PriceProvider>
      <ProviderId>
        <CartProvider>
          <DataProvider>
            <View>
              <Layout />
            </View>
          </DataProvider>
        </CartProvider>
      </ProviderId>
    </PriceProvider>
  );
}
