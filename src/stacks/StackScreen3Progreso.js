import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ProgresoScreen0 from '../screens/Stack3/ProgresoScreen0';

const StackScreen3Progreso = () => {
  const IntoStack = createStackNavigator();
  
    return (
        <IntoStack.Navigator>
            <IntoStack.Screen 
                name="Progreso1" 
                component={ProgresoScreen0}
                options={{
                    title:false,
                    headerStyle: {
                        backgroundColor: '#1F646D',
                        shadowColor:'transparent',
                    },
                }}/>
        </IntoStack.Navigator>
    )
}

export default StackScreen3Progreso