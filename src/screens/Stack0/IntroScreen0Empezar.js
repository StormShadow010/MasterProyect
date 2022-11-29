import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, ImageBackground, StyleSheet,Button, Image, TouchableOpacity} from 'react-native'

const yourPicture = require('../../../imagenes/FondoIntro0.png')


export const IntroScreen0Empezar = () => {
    const navigation=useNavigation();
    return (
        <View style={styles.containerPapa}>
            <Image
                style={styles.logo}
                source={require('../../../imagenes/logo.png')}/>
            <Text style={styles.text}>Py.pro</Text>
            <ImageBackground
                style={styles.containerondas}
                source={require('../../../imagenes/OndasIntro.png')}>
                <TouchableOpacity  
                    style={styles.button}
                    onPress={()=> navigation.navigate("Intro2")}>
                    <Text style={styles.text2}>Empecemos</Text>
                </TouchableOpacity>
            </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    containerPapa: {
        paddingTop:15,
        height:'100%',
        width:'100%',
        backgroundColor:'#1F646D',
        alignItems:'center',
      },
    logo: {
        position: 'absolute',
        width: 380,
        height: 380,
    },
    text: {
        paddingTop:350,
        fontSize: 50,
        color: '#AAADAC',
        fontWeight: 'bold'
      },
    containerondas:{
        position: 'absolute',
        marginTop:'120%',
        height:268,
        width:390,
        alignItems:'center',
    },
    button: {
        marginTop:'40%',
        borderRadius: 20,
        borderWidth: 6,
        borderColor: "#315259",
        width: '70%',
        height: '25%',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        textAlignVertical:'center',
        justifyContent: 'center',
    },
    text2: {
        fontSize: 30,
        color: '#315259',
        fontWeight: 'bold'
      },
})
