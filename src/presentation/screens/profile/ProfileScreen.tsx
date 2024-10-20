import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import PrimaryButton from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../theme/theme';

const ProfileScreen = () => {

  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={{
      paddingTop: top
    }}>
      <Text style={globalStyles.title}>Profile Screen</Text>

      <PrimaryButton
        label="Open Menu"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
      />
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})