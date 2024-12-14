import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, } from "react-native";
import ProductsSreen from './src/screens/ProductsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

     <ProductsSreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// Todo: 34:38 