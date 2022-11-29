import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack' // crea un stack de navegacion nativo para el telefono
//Screens
import {IntroScreen0Empezar} from '../screens/Stack0/IntroScreen0Empezar';
import {IntroScreen1Ingresar} from '../screens/Stack0/IntroScreen1Ingresar';
import {IntroScreen2Registrarse} from '../screens/Stack0/IntroScreen2Registrarse';
import IntroScreen3Presentacion from '../screens/Stack0/IntroScreen3Presentacion';
//import { useFonts } from '@expo-google-fonts/montserrat'
import { useFonts } from 'expo-font';


const FondoHeader = () => (
  <Image
    source={require('../../imagenes/header.png')}
    //style={{width: 300, height: '180%', }}
    style={{width: '100%', height: '180%'}}
  />
);

const BackImage = () => (
  <Image
    source={require('../../imagenes/arrow.png')}
    style={{width: 70, height: 70}}
  />
);

const StackScreen0Intro = () => {

  const IntoStack = createStackNavigator();
    return (
        <IntoStack.Navigator>
            <IntoStack.Screen 
                name="Intro10" 
                component={IntroScreen0Empezar}
                options={{
                    title:false,
                    headerStyle: {
                        backgroundColor: '#1F646D',
                        shadowColor:'transparent',
                    },
                }}/>
            <IntoStack.Screen 
                name="Intro20" 
                component={IntroScreen1Ingresar}
                options={{
                    title:"Ingresar",
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color:'#ffffff',
                      fontFamily: 'Monstrat',
                      fontSize:25,
                      marginLeft:-30,
                    },
                    headerTransparent: true,
                    headerBackImage: BackImage,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                        
                    },
                    headerBackground:FondoHeader,
                    }}/>
            <IntoStack.Screen 
                name="Intro30" 
                component={IntroScreen2Registrarse}
                options={{
                  title:"Registro",
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    color:'#ffffff',
                    fontFamily: 'Monstrat',
                    fontSize:25,
                    marginLeft:-30,
                  },
                  headerTransparent: true,
                  headerBackImage: BackImage,
                  headerStyle: {
                      backgroundColor: 'transparent',
                      shadowColor: 'transparent',
                      
                  },
                  headerBackground:FondoHeader,
                    }}/>
            <IntoStack.Screen 
                name="Intro40" 
                component={IntroScreen3Presentacion}
                options={{
                  title:"Bienvenid@",
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    color:'#ffffff',
                    fontFamily: 'Monstrat',
                    fontSize:25,
                    marginLeft:-30,
                  },
                  headerTransparent: true,
                  headerBackImage: BackImage,
                  headerStyle: {
                      backgroundColor: 'transparent',
                      shadowColor: 'transparent',
                      
                  },
                  headerBackground:FondoHeader,
                  }}/>
        </IntoStack.Navigator>
    )
}

export default StackScreen0Intro