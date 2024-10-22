import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HamburgerMenu from '../../components/shared/HamburgerMenu'
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from '../../components/shared/Ionicons';

const Tab1Screen = () => {

  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      {/* <Icon name="rocket-outline" size={100} color="#900" /> */}
      <Ionicons name="rocket-outline" />
    </View>
  )
}

export default Tab1Screen

const styles = StyleSheet.create({})