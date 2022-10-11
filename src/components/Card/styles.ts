import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "100%",
    backgroundColor: "#EFF1F3",
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },

  content: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  content_info: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },

  text: {
    maxWidth: 200,
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 2,
    backgroundColor: "dodgerblue",
  },

  container_modal: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, .7)",
  },

  content_modal: {
    height: "80%",
    width: "95%",
    backgroundColor: "rgba(0, 0, 0, .5)",
    paddingVertical: 10,
  },

  data_modal: {
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  image_modal: {
    height: "50%",
    width: "70%",
  },

  category_modal: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
    marginVertical: 10,
  },

  data_text_modal: {
    alignItems: "center",
  },

  description_modal: {
    color: "white",
    fontSize: 16,
    backgroundColor: "rgba(0, 0, 0, .4)",
    padding: 5,
  },

  price_modal: {
    color: "#118C4F",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
