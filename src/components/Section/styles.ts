import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "8%",
  },

  content: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  button: {
    padding: 10,
    backgroundColor: "#ccc",
  },

  image: {
    width: 50,
    height: 50,
  },

  container_modal: {
    height: "100%",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .7)",
  },

  content_modal_cart: {
    height: "80%",
    backgroundColor: "#fff",
    position: "relative",
  },

  close_cart: {
    backgroundColor: "red",
    position: "absolute",
    left: 0,
    padding: 10,
    zIndex: 2,
    borderRadius: 1,
  },
});
