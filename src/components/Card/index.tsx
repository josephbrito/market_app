import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  Pressable,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import { IData } from "../../context/types";
import { styles } from "./styles";

import OneStar from "../../assets/one.png";
import TwoStar from "../../assets/two.png";
import ThreeStar from "../../assets/three.png";
import FourStar from "../../assets/four.png";
import FiveStar from "../../assets/five.png";

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
    <Pressable onPress={() => setIsOpen(true)}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text># {id}</Text>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.content_info}>
          <Text style={styles.text}>{title}</Text>
          <Text>
            {Math.floor(rating.rate) == 1 && (
              <Image source={OneStar} style={styles.stars} />
            )}
            {Math.floor(rating.rate) == 2 && (
              <Image source={TwoStar} style={[styles.stars, { width: 40 }]} />
            )}
            {Math.floor(rating.rate) == 3 && (
              <Image source={ThreeStar} style={styles.stars} />
            )}
            {Math.floor(rating.rate) == 4 && (
              <Image source={FourStar} style={[styles.stars, { width: 80 }]} />
            )}
            {Math.floor(rating.rate) == 5 && (
              <Image source={FiveStar} style={[styles.stars, { width: 100 }]} />
            )}
          </Text>
          <Text style={styles.price_modal}>${price}</Text>

          <Modal
            animationType="slide"
            transparent={true}
            visible={isOpen}
            onRequestClose={() => setIsOpen(!isOpen)}
          >
            <View style={styles.container_modal}>
              <Pressable
                onPress={() => setIsOpen(!isOpen)}
                style={{
                  backgroundColor: "red",
                  padding: 15,
                }}
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
                    <ScrollView>
                      <Text style={styles.description_modal}>
                        {description}
                      </Text>
                    </ScrollView>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
