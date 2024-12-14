import React from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import CartListItem from '../components/CartListItem';

export default function ShoppingCart() {
  return (
    <FlatList 
        data={cart}
        renderItem={({item}) => <CartListItem cartItem={item}/>}  \
        ListFooterComponents = {() => (
            <View style={styles.totalsContainer}>
                <View style={styles.row}>
                    <Text style={styles.text}>SubTotal</Text>
                    <Text style={styles.text}>410,00</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>Delivery</Text>
                    <Text style={styles.text}>16.50</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textBold}>Total</Text>
                    <Text style={styles.textBold}>426,50</Text>
                </View>

                <View style={styles.footer}>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Checkout</Text>
                    </Pressable>
                </View>

            </View>
            
        )}
        
    />
    
    

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
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "white",
        borderColor: "gainsboro",
        borderTopWidth: 1,
        padding: 20,
    },

    button: {
        width: "100%",
        backgroundColor: "black",
        alignSelf: "center",
        alignItem: "center",
        padding: 20,
        borderRadius: 200,
    },
    buttonText: {
        color: 'white',
        fontWeight: "500",
        fontSize: 16,
    }
})