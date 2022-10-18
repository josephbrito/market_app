import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#ccc",
    width: "100%",
    height: 70,
  },

  content: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  price: {
    color: "#118C4F",
    fontSize: 16,
    fontWeight: "bold",
  },
});
