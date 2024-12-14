import React from "react";
import { View, Text, FlatList, ScrollView, Pressable } from "react-native";
import products from "../data/products";
import { IonIcons } from "@expo/vector-icons";

const ProductDetailScreen = () => {
  const product = product[0];
  return (
    <View>
      {/* Image Carousel */}
      <FlatList
        data={product.images}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item }}
            style={{ width: "100%", aspectRatio: 1 }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      />

      <ScrollView>
        {/* Title */}
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>{product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>

          {/* Add to cart button */}
          <Pressable style={styles.button} onPress={addToCart}>
            <Text style={styles.buttonText}>Add to cart</Text>
          </Pressable>

          {/* Navigation icon */}
          <Pressable style={styles.icon}>
            <IonIcons name="close" size={24} color="white" />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  button: {
    backGroundColor: "black",
    position: "absolute",
    buttom: 30,
    width: "90%",
    alignSelf: "center",
    alignItem: "center",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    top: 50,
    right: 20,
    backGroundColor: "#000000AA",
    borderRadius: 50,
    padding: 5,
  }
});

export default ProductDetailScreen;
