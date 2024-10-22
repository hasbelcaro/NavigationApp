import React, { useEffect } from 'react'
import { Pressable, View, Text } from 'react-native'

import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';

import { globalStyles } from '../../theme/theme'
import PrimaryButton from '../../components/shared/PrimaryButton';
import HamburgerMenu from '../../components/shared/HamburgerMenu';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable
  //         onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
  //         <Text>Menu</Text>
  //       </Pressable>
  //     )
  //   });
  // }, [])
  

  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      
      <PrimaryButton
        label="Products"
        onPress={() => navigation.navigate('Products')} />

    <PrimaryButton
        label="Settings"
        onPress={() => navigation.navigate('Settings')} />
    </View>
  )
}

export default HomeScreen