import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartListItem from "../components/CartListItem";
import cart from "../data/cart";


const ShoppingCartTotals = () => (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>410,00 USD</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>10 USD</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>10 USD</Text>
      </View>
    </View>
  )

const ShoppingCart = () => {
  const Checkout = () => {
    console.log("Add checkout");
  };
  return (
    <>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals()}
      />
      <Pressable onPress={Checkout} style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },

  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  // footer: {
  //     position: "absolute",
  //     bottom: 0,
  //     width: "100%",
  //     backgroundColor: "white",
  //     borderColor: "gainsboro",
  //     borderTopWidth: 1,
  //     padding: 20,
  // },

  button: {
    position: "absolute",
    width: "90%",
    backgroundColor: "black",
    bottom: 30,
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
    alignSelf: 'center',

  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ShoppingCart;
