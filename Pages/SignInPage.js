import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, StatusBar, TextInput } from 'react-native'
import React from 'react'

import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
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
          <View style={{ justifyContent: 'center', alignItems: 'center', }}>

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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },
  footer: {
    flex: 1,
    backgroundColor: '#BDBDBD',
    /*  borderTopLeftRadius: 30,
     borderTopRightRadius: 30, */
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80

  },
  /*   signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
    }, */
  /*   textSign: {
      color: 'white',
      fontWeight: 'bold'
    }, */
  TextInput: {
    backgroundColor: '#6E6C6B',
    height: 45,
    width: 300,
    borderRadius:5,
  
    
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 25,
    fontFamily: 'Inder',
    letterSpacing: 0.5,
    marginLeft: '3%',
  },
  button1: {
    width: 200,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#FF6B3E',
    margin: 10,

  },
  btncontainer: {
    alignItems:'center'

  },
});
