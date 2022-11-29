import React from 'react'
import { View, Text, Image } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import CalendarioScreen0 from '../screens/Stack4/CalendarioScreen0';

const StackScreen4Calendario = () => {
  const IntoStack = createStackNavigator();
    return (
        <IntoStack.Navigator>
            <IntoStack.Screen 
                name="Calendario1" 
                component={CalendarioScreen0}
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

export default StackScreen4Calendario