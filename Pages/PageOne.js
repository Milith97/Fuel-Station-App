import { StyleSheet, Text, View, ImageBackground, TouchableOpacity ,StatusBar } from 'react-native'
import React from 'react'

export default function PageOne({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#626059' barStyle="light-content"></StatusBar>
            <ImageBackground style={styles.backgroundImg}
                source={require('../asstes/img/pageoneimg.jpg')}>

                <View style={{ position: 'absolute', bottom: 20, marginLeft: '15%', }}>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
                        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('LoginPage') }}>
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
                        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('SignInPage') }}>
                            <Text style={styles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ImageBackground >
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    backgroundImg: {
        flex: 1,
    },
    button: {
        margin: 10,
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#FF6B3E',

    },
    buttonText: {
        fontSize: 27,
        color: "#ffffff",
        fontFamily:'Inder',
        letterSpacing:0.5

    }
})