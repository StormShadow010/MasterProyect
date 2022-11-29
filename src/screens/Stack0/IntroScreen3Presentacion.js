import React,{useState} from 'react';
import { View, Text, ImageBackground, StyleSheet,Button, Image, TouchableOpacity } from 'react-native'


const IntroScreen3Presentacion = ({navigation}) => {

  return (
    <View style={styles.containerPapa}>
      <TouchableOpacity  
                    style={styles.button}
                    onPress={()=> navigation.navigate("Inicio1")}>
                    <Text style={styles.text2}>Empeza la aventura</Text>
                </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPapa: {
      marginTop:'15%',
      paddingTop:'20%',
      height:'100%',
      width:'100%',
      backgroundColor:'#1F646D',
      alignItems:'center',
    },
    button:{
      width:250,
      height:40,
      borderRadius:10,
      backgroundColor:"#FFAD2B",
      alignItems:'center',
      justifyContent: 'center',
      marginVetical:10,
      marginTop:28,
      borderColor:'#fff',
      borderWidth:2,
    },
  
})


export default IntroScreen3Presentacion