import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, } from "react-native";
import ProductsSreen from './src/screens/ProductsScreen';
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import ShoppingCart from "./src/screens/ShoppingCart";
import Navigation from './src/navigation'; 
import {Provider} from 'react-redux'; 
import {store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
     <Navigation />

      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
});

// Todo: 2:24:37