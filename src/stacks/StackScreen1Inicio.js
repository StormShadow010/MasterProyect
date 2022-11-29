import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import InicioScreen0Modulos from '../screens/Stack1/InicioScreen0Modulos';
import InicioScreen1Leccciones from '../screens/Stack1/InicioScreen1Leccciones';
import InicioScreen2Explicacion from '../screens/Stack1/InicioScreen2Explicacion';
import InicioScreen3Ejercicio from '../screens/Stack1/InicioScreen3Ejercicio';
import InicioScreen4Codigo from '../screens/Stack1/InicioScreen4Codigo';
import InicioScreen5Terminal from '../screens/Stack1/InicioScreen5Terminal';
import InicioScreen6Siguiente from '../screens/Stack1/InicioScreen6Siguiente';
import {IntroScreen0Empezar} from '../screens/Stack0/IntroScreen0Empezar';
import {IntroScreen1Ingresar} from '../screens/Stack0/IntroScreen1Ingresar';
import {IntroScreen2Registrarse} from '../screens/Stack0/IntroScreen2Registrarse';
import IntroScreen3Presentacion from '../screens/Stack0/IntroScreen3Presentacion';
import { NavigationContainer } from '@react-navigation/native';

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

const StackScreen1Inicio = () => {
  const IntoStack = createStackNavigator();
  
    return (
        <NavigationContainer>
        <IntoStack.Navigator>
            <IntoStack.Screen 
                name="Intro1" 
                component={IntroScreen0Empezar}
                options={{
                    title:false,
                    headerStyle: {
                        backgroundColor: '#1F646D',
                        shadowColor:'transparent',
                    },
                }}/>
            <IntoStack.Screen 
                name="Intro2" 
                component={IntroScreen1Ingresar}
                options={{
                    title:"Ingresar",
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color:'#ffffff',
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
                name="Intro3" 
                component={IntroScreen2Registrarse}
                options={{
                  title:"Registro",
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    color:'#ffffff',
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
                name="Intro4" 
                component={IntroScreen3Presentacion}
                options={{
                  title:"Bienvenid@",
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    color:'#ffffff',
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
                name="Inicio1" 
                component={InicioScreen0Modulos}
                options={{
                    title:false,
                    headerStyle: {
                        backgroundColor: '#1F646D',
                        shadowColor:'transparent',
                    },
                }}/>
            <IntoStack.Screen 
                name="Inicio2" 
                component={InicioScreen1Leccciones}
                options={{
                    title:"Ingresar",
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color:'#ffffff',
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
                name="Inicio3" 
                component={InicioScreen2Explicacion}
                options={{
                    title:false,
                    headerTitle:{
                        color: 'white',
                    },
                    headerBackImage: BackImage,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                    },
                    }}/>
            <IntoStack.Screen 
                name="Inicio4" 
                component={InicioScreen3Ejercicio}
                options={{
                  title:false,
                  headerTitle:{
                      color: 'white',
                  },
                  headerBackImage: BackImage,
                  headerStyle: {
                      backgroundColor: 'transparent',
                      shadowColor: 'transparent',
                  },
                  }}/>
            <IntoStack.Screen 
                name="Inicio5" 
                component={InicioScreen4Codigo}
                options={{
                  title:false,
                  headerTitle:{
                      color: 'white',
                  },
                  headerBackImage: BackImage,
                  headerStyle: {
                      backgroundColor: 'transparent',
                      shadowColor: 'transparent',
                  },
                  }}/>
            <IntoStack.Screen 
                name="Inicio6" 
                component={InicioScreen5Terminal}
                options={{
                  title:false,
                  headerTitle:{
                      color: 'white',
                  },
                  headerBackImage: BackImage,
                  headerStyle: {
                      backgroundColor: 'transparent',
                      shadowColor: 'transparent',
                  },
                  }}/>
            <IntoStack.Screen 
                name="Inicio7" 
                component={InicioScreen6Siguiente}
                options={{
                  title:false,
                  headerTitle:{
                      color: 'white',
                  },
                  headerBackImage: BackImage,
                  headerStyle: {
                      backgroundColor: 'transparent',
                      shadowColor: 'transparent',
                  },
                  }}/>
        </IntoStack.Navigator>
        </NavigationContainer>
    )
}

export default StackScreen1Inicio