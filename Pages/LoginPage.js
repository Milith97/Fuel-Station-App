import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';

import 'react-native-gesture-handler'


const { width, height } = Dimensions.get("window")



export default function PageOne({ navigation }) {

    return (
        <View style={styles.container}>

            <View style={[StyleSheet.absoluteFill]}>
                <ImageBackground style={styles.backgroundImg}
                    source={require('../asstes/img/pageoneimg.jpg')} clipPath="url(#clipPathId)">
                </ImageBackground>
            </View>


            <View style={{ width: 60, height: 60, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={styles.roundButton} onPress={() => { navigation.navigate('PageOne') }}>
                    <Icon name="x" size={30} color="#000" />
                </TouchableOpacity>
            </View>


            <View style={styles.btncontainer}>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity style={styles.button1} onPress={() => { navigation.navigate('LoginPage') }}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity style={styles.button1} onPress={() => { navigation.navigate('SignInPage') }}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View >



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#BDBDBD'


    },
    backgroundImg: {
        flex: 1,
        height: height,
        width: width
    },
    button1: {
        width: 320,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#FF6B3E',
        margin: 10,

    },
    buttonText: {
        color: "#ffffff",
        fontSize: 25,
        fontFamily: 'Inder',
        letterSpacing: 0.5
    },
    btncontainer: {
        justifyContent: 'center',
        height: height / 3,
    },
    Textinput: {
        margin: 10,
        height: 60,
        width: 350,
        marginHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#2D2928',
        opacity: 0.7,
        fontSize: 22,
        fontFamily: 'Marvel-Bold'
    },
    button2: {
        width: 200,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FF6B3E',
        margin: 10,
    },
    roundButton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#FF6B3E',

    },
})