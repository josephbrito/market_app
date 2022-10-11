import React, { useState } from "react";
import { View, Image, Text, Pressable, Modal } from "react-native";
import { IData } from "../../context/types";
import { styles } from "./styles";

const Card: React.FC<IData> = ({
  id,
  category,
  description,
  image,
  price,
  rating,
  title,
}: IData) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text># {id}</Text>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.content_info}>
        <Text style={styles.text}>* {title}</Text>
        <Pressable style={styles.button} onPress={() => setIsOpen(true)}>
          <Text style={{ color: "white" }}>+</Text>
        </Pressable>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isOpen}
          onRequestClose={() => setIsOpen(!isOpen)}
        >
          <View style={styles.container_modal}>
            <Pressable
              onPress={() => setIsOpen(!isOpen)}
              style={[styles.button, { backgroundColor: "red" }]}
            >
              <Text style={{ color: "white" }}>X</Text>
            </Pressable>
            <View style={styles.content_modal}>
              <View style={styles.data_modal}>
                <View style={styles.image_modal}>
                  <Image source={{ uri: image }} style={styles.image} />
                </View>
                <View style={styles.data_text_modal}>
                  <Text style={styles.category_modal}>* {title}</Text>
                  <Text style={styles.category_modal}>👜 {category}</Text>
                  <Text style={styles.description_modal}>{description}</Text>
                  <Text style={styles.price_modal}>${price}</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Card;
