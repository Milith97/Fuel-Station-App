import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './Pages/WelcomePage';
import LogiInPage from './Pages/LoginPage';
import SignInPage from './Pages/SignInPage';
import PageOne from './Pages/PageOne';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="WelcomePage" component={WelcomePage} />
        <Stack.Screen options={{headerShown: false}} name="PageOne" component={PageOne} />
        <Stack.Screen options={{headerShown: false}} name="LoginPage" component={LogiInPage} />
        <Stack.Screen options={{headerShown: false}} name="SignInPage" component={SignInPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}