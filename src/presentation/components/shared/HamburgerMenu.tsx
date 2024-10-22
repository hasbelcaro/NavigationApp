import React, { useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Ionicons from './Ionicons';

const HamburgerMenu = () => {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Ionicons name="reorder-four-outline" size={30} color="black" />
        </Pressable>
      )
    })
  } ,[]);
  
  return (<></>)
}

export default HamburgerMenu

const styles = StyleSheet.create({})