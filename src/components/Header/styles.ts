import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#9c538c",
    height: "13%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  backblend: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, .2)",
  },

  text: {
    color: "white",
    letterSpacing: 1,
    fontWeight: "bold",
    fontSize: 18,
  },
});
