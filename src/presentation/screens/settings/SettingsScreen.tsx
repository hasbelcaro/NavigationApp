import { Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../../theme/theme'
import PrimaryButton from '../../components/shared/PrimaryButton'
import { NavigationProp, StackActions, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../routes/StackNavigator'

const SettingsScreen = () => {
  const navigation = useNavigation();
  
  return (
    <View style={globalStyles.container}>
      <Text>SettingsScreen</Text>

      <PrimaryButton
        label="Back"
        onPress={() => navigation.goBack()}
      />

      <PrimaryButton
        label="Home"
        onPress={() => navigation.dispatch(StackActions.popToTop())}
      />
    </View>
  )
}

export default SettingsScreen