import React, { useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native';

const HamburgerMenu = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>HMenu</Text>
        </Pressable>
      )
    })
  } ,[]);
  
  return (<></>)
}

export default HamburgerMenu

const styles = StyleSheet.create({})