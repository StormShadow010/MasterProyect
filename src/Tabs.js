//pestaña o menu
import React,{useState} from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' //para pestañas de menu
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
//stacks
import StackScreen5Perfil from './stacks/StackScreen5Perfil';
import StackScreen0Intro from './stacks/StackScreen0Intro';
import StackScreen1Inicio from './stacks/StackScreen1Inicio';
import StackScreen2Retos from './stacks/StackScreen2Retos';
import StackScreen3Progreso from './stacks/StackScreen3Progreso';
import StackScreen4Calendario from './stacks/StackScreen3Progreso';


/*export const Tabmenu2= () => {
    const tabbool=false;
    if(tabbool){
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
                <Tab.Screen 
                    name="InicioMenu" 
                    component={StackScreen1Inicio}
                    options={{
                        headerShown: false,
                        //tabBarStyle: { display: [props.data]},
                        tabBarStyle: { display: "flex"},
                    }}/>
                <Tab.Screen 
                    name="RetosMenu" 
                    component={StackScreen2Retos}
                    options={{
                        headerShown: false,
                    }}/>
                <Tab.Screen 
                    name="ProgresoMenu" 
                    component={StackScreen3Progreso}
                    options={{
                        headerShown: false,
                    }}/>
                <Tab.Screen 
                    name="CalendarioMenu" 
                    component={StackScreen4Calendario}
                    options={{
                        headerShown: false,
                    }}/>
                <Tab.Screen 
                    name="PerfilMenu" 
                    component={StackScreen5Perfil}
                    options={{
                        headerShown: false,
                    }}/>
            </Tab.Navigator>
    );
}else{
    const Tab = createBottomTabNavigator();
    return(
    <Tab.Navigator>
            <Tab.Screen 
                name="IntoMenu" //quitar
                component={StackScreen0Intro}
                options={{
                    headerShown: false,
                    tabBarStyle: { display: 'none'},
                }}
                />
    </Tab.Navigator>)
}
}*/

export const Getinfo = ({handleJoin}) => {
    console.log(handleJoin);
    const Tab = createBottomTabNavigator();
    if(handleJoin=="true"){
        return (
            <Tab.Navigator 
                tabBarOptions={{
                activeTintColor: "#000",
                activeBackgroundColor: "#feb72b",
              }}>
                <Tab.Screen 
                    name="InicioMenu" 
                    component={StackScreen1Inicio}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="ios-home" size={size} color={color} />
                        ),
                    }}/>
                <Tab.Screen 
                    name="RetosMenu" 
                    component={StackScreen2Retos}
                    options={{
                        headerShown: false,
                    }}/>
                <Tab.Screen 
                    name="ProgresoMenu" 
                    component={StackScreen3Progreso}
                    options={{
                        headerShown: false,
                    }}/>
                <Tab.Screen 
                    name="CalendarioMenu" 
                    component={StackScreen4Calendario}
                    options={{
                        headerShown: false,
                    }}/>
                <Tab.Screen 
                    name="PerfilMenu" 
                    component={StackScreen5Perfil}
                    options={{
                        headerShown: false,
                    }}/>
            </Tab.Navigator>
        );
    }else{
        return (
        <Tab.Navigator>
            <Tab.Screen 
                name="IntoMenu"
                component={StackScreen0Intro}
                options={{
                    headerShown: false,
                    tabBarStyle: { display: 'none'},
                }}
            />
        </Tab.Navigator>
          );  
    }
}

export const Tabnavigation = () => {
  return (
    <NavigationContainer>
        <Getinfo />
    </NavigationContainer>
  )
}
