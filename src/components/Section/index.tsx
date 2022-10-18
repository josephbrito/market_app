import React, { useState } from "react";
import { Image, Modal, Pressable, Text, View } from "react-native";

import { useData } from "../../context";

import { callData } from "../../services";

import Icon from "../../assets/logo.png";
import CartIcon from "../../assets/cart.png";

import { styles } from "./styles";
import { IData } from "../../context/types";
import Cart from "../Cart";
import Total from "../Total";

const Section: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

  const { setData } = useData();

  const setCategory = async (category: string) => {
    if (category === "all") {
      let datas = await callData();
      setData(datas);
      return;
    }

    let datas: IData[] = await callData();
    let filtredCategory = datas.filter((d) => d.category === category);

    setData(filtredCategory);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Pressable onPress={() => setIsOpen(true)}>
          <Image source={Icon} style={styles.image} />
        </Pressable>

        <Pressable onPress={() => setCartIsOpen(true)}>
          <Image source={CartIcon} style={{ width: 35, height: 30 }} />
        </Pressable>

        {/* Modal to cart */}
        <Modal
          visible={cartIsOpen}
          onRequestClose={() => setCartIsOpen(!cartIsOpen)}
          animationType={"slide"}
          transparent={false}
        >
          <View style={styles.container_modal}>
            <View style={styles.content_modal_cart}>
              <Pressable
                onPress={() => setCartIsOpen(!cartIsOpen)}
                style={styles.close_cart}
              >
                <Text style={{ color: "white" }}>X</Text>
              </Pressable>
              <Cart />
              <Total />
            </View>
          </View>
        </Modal>

        {/* Modal to filter category */}
        <Modal
          visible={isOpen}
          animationType="fade"
          transparent={true}
          onRequestClose={() => setIsOpen(!isOpen)}
        >
          <View style={styles.container_modal}>
            <Pressable
              style={styles.button}
              onPress={() => {
                setCategory("all");
                setIsOpen(!isOpen);
              }}
            >
              <Text>All</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                setCategory("men's clothing");
                setIsOpen(!isOpen);
              }}
            >
              <Text>men's clothing</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                setCategory("jewelery");
                setIsOpen(!isOpen);
              }}
            >
              <Text>jewelery</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                setCategory("electronics");
                setIsOpen(!isOpen);
              }}
            >
              <Text>electronics</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                setCategory("women's clothing");
                setIsOpen(!isOpen);
              }}
            >
              <Text>women's clothing</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Section;
