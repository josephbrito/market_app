import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  Pressable,
  Modal,
  ScrollView,
  Button,
} from "react-native";
import { IData } from "../../context/types";
import { styles } from "./styles";

import { useId } from "../../context/uniqueId";

import OneStar from "../../assets/one.png";
import TwoStar from "../../assets/two.png";
import ThreeStar from "../../assets/three.png";
import FourStar from "../../assets/four.png";
import FiveStar from "../../assets/five.png";

import ButtonAdd from "../ButtonAdd";
import { useCart } from "../../context/cart";
import { usePrice } from "../../context/total";

interface IProps extends IData {
  btn: boolean;
}

const Card: React.FC<IProps> = ({
  id,
  category,
  description,
  image,
  price,
  rating,
  title,
  btn,
}: IProps) => {
  const { uniqueId, setUniqueId } = useId();
  const { cartData, setCartData } = useCart();
  const { currentPrice, setCurrentPrice } = usePrice();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleRemoveCart = () => {
    const filtredCart = cartData.filter((obj) => {
      const filtredId = [...uniqueId];
      const idValue = filtredId.indexOf(obj.id);

      delete filtredId[idValue];

      const filtredPrice = [...currentPrice];
      const priceValue = filtredPrice.indexOf(obj.price);

      filtredPrice[priceValue] = 0;

      setCurrentPrice(filtredPrice);

      setUniqueId(filtredId);
      return obj.id !== id;
    });

    setCartData(filtredCart);
  };

  return (
    <Pressable onPress={() => setIsOpen(true)}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text># {id}</Text>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        <View style={styles.content_info}>
          <Text style={styles.text}>{title}</Text>
          <View>
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
                <Image
                  source={FourStar}
                  style={[styles.stars, { width: 80 }]}
                />
              )}
              {Math.floor(rating.rate) == 5 && (
                <Image
                  source={FiveStar}
                  style={[styles.stars, { width: 100 }]}
                />
              )}
            </Text>
          </View>
          <Text style={styles.price_modal}>${price}</Text>
          {btn ? (
            <ButtonAdd
              id={id}
              category={category}
              description={description}
              image={image}
              price={price}
              rating={rating}
              title={title}
              key={id}
            />
          ) : (
            <Pressable onPress={handleRemoveCart} style={styles.removeCart}>
              <Text style={{ color: "red" }}>Remove</Text>
            </Pressable>
          )}
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
                  backgroundColor: "rgba(0, 0, 0, .6)",
                  paddingHorizontal: 15,
                  paddingVertical: 8,
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>X</Text>
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
