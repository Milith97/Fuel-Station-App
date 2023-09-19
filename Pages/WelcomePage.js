import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';
import PageOne from './PageOne';

export default function WelcomePage({ navigation }) {
  return (
    <View style={styles.container}>
   

      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <LottieView autoPlay style={{ width: 325, height: 325, marginTop: '20%' }}
          source={{ uri: "https://lottie.host/eb4556d9-5ce4-4e15-9291-c0bb5e00d00c/hh0OOjGObv.json" }} />
      </View>

      <View style={{ flex: 1, }}>
        <Text style={{ fontSize: 50, fontFamily: 'AllertaStencil-Regular', color: '#ED3F23', marginLeft: '4%', marginTop: '10%' }} >Fast &</Text>
        <Text style={{ fontSize: 50, fontFamily: 'AllertaStencil-Regular', color: '#000', marginLeft: '4%' }} >Reliable</Text>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: '12%', marginLeft: '5%' }} >Get Fuel whenever You need we are there</Text>
      </View>

      <View style={{ flex: 1, marginLeft: '65%', }}>
        <TouchableOpacity style={styles.roundButton} onPress={() => { navigation.navigate('PageOne') }}>
          <Icon name="navigate-next" size={70} color="#000" />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDBDBD',
  },
  roundButton: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#FF6B3E',

  },



})