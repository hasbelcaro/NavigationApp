import React from 'react'
import { Pressable, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { globalStyles } from '../../theme/theme'

interface Props {
  label: string,
  onPress: () => void
}

const PrimaryButton = (props: Props) => {
  const {label, onPress} = props;
  
  return (
    <Pressable
      onPress={onPress}
      style={globalStyles.primaryButton} >
      <Text style={globalStyles.buttonText}>Go to {label}</Text>
    </Pressable>
  )
}

export default PrimaryButton