import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { type RootStackParams } from '../../routes/StackNavigator'

import { globalStyles } from '../../theme/theme'
import { FlatList } from 'react-native-gesture-handler'
import PrimaryButton from '../../components/shared/PrimaryButton'

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
  },
  {
    id: 4,
    name: 'Product 4',
    price: 400,
  },
  {
    id: 5,
    name: 'Product 5',
    price: 500,
  }
]

const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={globalStyles.card}>
            <Text style={globalStyles.cardText}>{item.name}</Text>
            <Text style={globalStyles.cardText}>{item.price}</Text>
            <PrimaryButton
              label='Details'
              onPress={() => navigation.navigate('Product', {id: item.id, name: item.name, price: item.price})} />
          </View>
        )}
      />

      <Text style={globalStyles.title}>Total: {products.reduce((acc, item) => acc + item.price, 0)}</Text>
      
      <Text style={globalStyles.buttonText}>Ajustes</Text>
      <PrimaryButton
        label='Settings'
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({})