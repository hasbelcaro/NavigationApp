import { createStackNavigator } from '@react-navigation/stack';

import { globalStyles, theme } from '../theme/theme';

import HomeScreen from '../screens/home/HomeScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import ProductsScreen from '../screens/products/ProductsScreen';
import ProductScreen from '../screens/products/ProductScreen';

export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Product: {
    id: number;
    name: string;
    price: number;
  };
  Settings: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        elevation: 0,
        backgroundColor: theme.colors.transparent,
      },
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}