import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, StatusBar, TextInput, Pressable } from 'react-native'
import React from 'react'

import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';

const SignInPage = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#626059' barStyle="light-content"></StatusBar>

      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../asstes/img/pageoneimg.jpg')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>

      <Animatable.View style={styles.MidleContent} animation="fadeInUpBig">
        <View style={styles.btncontainer}>

          <View >
            <TextInput
              style={styles.TextInput}
              placeholder="  Name"
              placeholderTextColor='#fff'
            />
          </View>

          <View>
            <TextInput
              style={styles.TextInput}
              placeholder="  Email"
              placeholderTextColor='#fff'
            />
          </View>

          <View>
            <TextInput
              style={styles.TextInput}
              placeholder="  Vehical Catagary"
              placeholderTextColor='#fff'
            />
          </View>

          <View >
            <TextInput
              style={styles.TextInput}
              placeholder="  Password"
              placeholderTextColor='#fff'
            />
          </View>

          <View>
            <TextInput
              style={styles.TextInput}
              placeholder="  Set Password"
              placeholderTextColor='#fff'
            />
          </View>

        </View>

      </Animatable.View>

      <Animatable.View style={styles.footer}  animation="fadeInUpBig">
        <View style={styles.btnarea}>
          <View>
            <TouchableOpacity style={[styles.button,styles.shadowProp]} onPress={() => { navigation.navigate('SignInPage') }}>
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

          </View>
          <View style={{ flex: 1, flexDirection: "row", marginTop: '1%' }}>
            <Text style={styles.Text1}>
              <Text>Dont have an account? </Text>
            </Text>
            <Pressable onPress={() => { navigation.navigate('LoginPage') }}>
              <Text style={styles.Text2}>
                <Text>Sign In</Text>
              </Text>
            </Pressable>
          </View>

        </View>

      </Animatable.View>
    </View>
  )
}

export default SignInPage;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.46;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDBDBD'
  },
  header: {
    flex: 3.5,
    alignItems: 'center',

  },
  MidleContent: {
    flex: 1.5,
    paddingVertical: 50,
    paddingHorizontal: 30,

  },
  btncontainer: {
    flex: 1,
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',

  },
  footer:{
    flex: 0.8,
  },
  
  btnarea: {
    flex:1,
    alignItems: 'center'

  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100

  },
  TextInput: {
    backgroundColor: '#6E6C6B',
    height: 45,
    width: 300,
    borderRadius: 5,
    fontSize: 20

  },
  buttonText: {
    color: "#ffffff",
    fontSize: 25,
    fontFamily: 'Inder',
    letterSpacing: 0.5,

  },
  button: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 2, width: 2 }, // IOS
    shadowOpacity: 6, // IOS
    shadowRadius: 6, //IOS
    elevation: 10, // Android

    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FF6B3E',
  },
  Text1: {
    fontWeight: '600',
    fontSize: 15,
    color: "#000",

  },
  Text2: {
    fontSize: 15,
    fontWeight: '600',
    fontStyle:'italic',
    textDecorationLine: 'underline',

  },
  // shadowProp: {  
  //   shadowOffset: {width: -2, height: 4},  
  //   shadowColor: '#171717',  
  //   shadowOpacity: 0.2,  
  //   shadowRadius: 3,  
  // },  
  // shadowProp: { 
  //   // color: '#fff', 
  //   // shadowOffset: {width: -2, height: 4},  
  //   // shadowColor: '#171717',  
  //   // shadowOpacity: 0.2,  
  //   // shadowRadius: 3,  
  // },  
});
