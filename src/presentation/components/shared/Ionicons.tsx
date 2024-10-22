import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

interface IoniconsProps {
  name: string;
  size?: number;
  color?: string;
}

const Ionicons = ({ name, size = 20, color = 'black'}: IoniconsProps) => {
  return (
    <Icon name={name} size={size} color={color} />
  )
}

export default Ionicons