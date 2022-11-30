import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import RetosScreen0Inicio from '../screens/Stack2/RetosScreen0Inicio';
import RetosScreen1Reto1 from '../screens/Stack2/RetosScreen1Reto1';

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

const StackScreen2Retos = () => {
  const IntoStack = createStackNavigator();
  
    return (
        <IntoStack.Navigator>
            <IntoStack.Screen 
                name="Reto1" 
                component={RetosScreen0Inicio}
                options={{
                    title:false,
                    headerStyle: {
                        backgroundColor: '#B404F4',
                        shadowColor:'transparent',
                    },
                }}/>
            <IntoStack.Screen 
                name="Reto2" 
                component={RetosScreen1Reto1}
                options={{
                    title:"Ingresar",
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      color:'#ffffff',
                      fontFamily: 'Montserrat',
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

export default StackScreen2Retos