import React from 'react'
import { View, Text, Image } from 'react-native'

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
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackScreen2Retos from './StackScreen2Retos';
import StackScreen3Progreso from './StackScreen3Progreso';
import StackScreen4Calendario from './StackScreen4Calendario';
import StackScreen5Perfi from './StackScreen5Perfil';

const FondoHeader = () => (
  <Image
    source={require('../../imagenes/header.png')}
    //style={{width: 300, height: '180%', }}
    style={{width: '100%', height: '180%'}}
  />
);
const FondoHeader2 = () => (
    <Image
      source={require('../../imagenes/header2.png')}
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

const BackImage2 = () => (
    <Image
      source={require('../../imagenes/arrow2.png')}
      style={{width: 35, height: 35, marginLeft:15}}
    />
  );

function HomeStack() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: "#000",
            activeBackgroundColor: "#feb72b",
          }}>
        <Tab.Screen name="InicioMenu" component={InicioScreen0Modulos}/>
        <Tab.Screen name="RetosMenu" component={StackScreen2Retos}/>
        <Tab.Screen name="ProgresoMenu" component={StackScreen3Progreso}/>
        <Tab.Screen name="CalendarioMenu" component={StackScreen4Calendario}/>
        <Tab.Screen name="PerfilMenu" component={StackScreen5Perfi}/>
    </Tab.Navigator>
    );
  }



export const IntroScreen1Inicio = () => {
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
                }}
                />
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
                name="Intro4" 
                component={IntroScreen3Presentacion}
                options={{
                    title:"Bienvenid@",
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color:'#1F646D',
                      fontSize:25,
                      marginLeft:-10,
                    },
                    headerTransparent: true,
                    headerBackImage: BackImage2,
                    headerStyle: {
                        backgroundColor: 'transparent',
                        shadowColor: 'transparent',
                        
                    },
                    headerBackground:FondoHeader2,
                    }}/>
            <IntoStack.Screen 
                name="Inicio1" 
                component={HomeStack} 
                options={{
                    headerShown: false,
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
                    }} />
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
    );
}