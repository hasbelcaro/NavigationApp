import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { type RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';

const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: params.name })
  }, [])
  

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>ProductScreen</Text>
      <Text style={globalStyles.buttonText}>{params.id} - {params.name} - {params.price}</Text>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({})