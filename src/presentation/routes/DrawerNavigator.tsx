import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { colors } from '../theme/theme';
import { Text, useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabNavigator';
import Ionicons from '../components/shared/Ionicons';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator

      drawerContent={(props) => <CustomDrawerContent {...props}/>}

      screenOptions={{
        headerShown: false,
        drawerType: (dimensions.width > 758) ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: colors.background,
        drawerActiveTintColor: colors.darkGrey,
        drawerInactiveTintColor: colors.lightGrey,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 16,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen name='BottomTabNavigator' component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: colors.primary,
          marginBottom: 30,
          marginHorizontal: 16,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Ionicons name='person-circle-outline' size={100} color={colors.white} />
      </View>

      <DrawerItemList {...props} />

      <Text>Drawer text</Text>
    </DrawerContentScrollView>
  )
}