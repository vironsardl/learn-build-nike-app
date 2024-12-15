import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, } from "react-native";
import ProductsSreen from './src/screens/ProductsScreen';
import ProductDetailScreen from "./src/screens/ProductDetailScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

     <ProductDetailScreen />
     {/* <ProductsSreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

// Todo: 38:09 