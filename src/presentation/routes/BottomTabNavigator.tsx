import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { theme } from '../theme/theme';

import Tab1Screen from '../screens/tabs/Tab1Screen';
import Tab2Screen from '../screens/tabs/Tab2Screen';
import Tab3Screen from '../screens/tabs/Tab3Screen';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import Ionicons from '../components/shared/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: theme.colors.white
      }}
      screenOptions={{
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
          fontSize: 14,
          fontFamily: theme.fonts.medium
        },
        headerStyle: {
          elevation: 0,
          borderColor: theme.colors.transparent,
          shadowColor: theme.colors.transparent,
          backgroundColor: theme.colors.white,
        },
      }}
    >
      <Tab.Screen name="Tab1" options={{ title:'Tab1', tabBarIcon: ({color}) => (<Ionicons name='grid-outline' color={color} />)}} component={Tab1Screen} />
      <Tab.Screen name="Tab2" options={{ title:'Tab2', tabBarIcon: ({color}) => (<Ionicons name='qr-code-outline' color={color} />)}} component={TopTabsNavigator} />
      {/* <Tab.Screen name="Tab2" options={{ title:'Tab2', tabBarIcon: ({color}) => (<Text style={{color}}>Tab2</Text>)}} component={Tab2Screen} /> */}
      <Tab.Screen name="Tab3" options={{ title:'Tab3', tabBarIcon: ({color}) => (<Ionicons name='settings-outline' color={color} />)}} component={StackNavigator} />
      {/* <Tab.Screen name="Tab3" options={{ title:'Tab3', tabBarIcon: ({color}) => (<Text style={{color}}>Tab3</Text>)}} component={Tab3Screen} /> */}
    </Tab.Navigator>
  );
}