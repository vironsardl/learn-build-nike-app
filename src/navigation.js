import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import ShoppingCart from './screens/ShoppingCart';

const Stack = createNativeStackNavigator();


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Products" component={ProductsScreen}/>
                <Stack.Screen name="Product Details" component={ProductDetailScreen}/>
                <Stack.Screen name="Cart" component={ShoppingCart}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}