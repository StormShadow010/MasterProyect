import React from 'react';
import { View, Text, ImageBackground, StyleSheet,Button, Image, TouchableOpacity } from 'react-native'

const IntroScreen3Presentacion = () => {
  return (
    <View style={styles.containerPapa}>
      <Text>Hola</Text>
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
      //resizeMode:"center",
  },
  text: {
      paddingTop:350,
      fontSize: 50,
      color: '#AAADAC',
      fontWeight: 'bold'
    },
  contaner:{
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


export default IntroScreen3Presentacion