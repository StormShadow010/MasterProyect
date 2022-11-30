import React,{useState} from 'react';
import { View, Text, ImageBackground, StyleSheet,Button, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native'


const yourPicture = require('../../../imagenes/DivIntro4.png');

const IntroScreen3Presentacion = ({navigation}) => {

  return (
    <View style={styles.containerPapa}>
      <Image
        source={require('../../../imagenes/DivIntro4.png')}
        style={{width: 350, height: 420}}
      />
      <SafeAreaView style={styles.cajatexto}>
        <Text xt style={styles.texto}>
          Esta aplicación busca enseñar sobre funciones, variables, control de flujos y muchas cosas  más del leguaje de programacion Python de una manera divertda, ha sido diseñada con estrategias pedagógicas para incentivarte a aprende cada día más, está dirigida a los estudiantes de la educacion basica y media, sin embargo, se encuentra adaptada para cualquier edad.
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cajaimagen}>
      <Image
        source={require('../../../imagenes/robot2.png')}
        style={{width: 150, height: 263,}}
      />
      </SafeAreaView>
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
      paddingTop:'40%',
      height: Dimensions.get('screen').height,
      width: Dimensions.get('screen').width,
      backgroundColor:'#1F646D',
      alignItems:'center',
    },
    button:{
      width:'80%',
      height:'7%',
      borderRadius:10,
      backgroundColor:"#FFAD2B",
      alignItems:'center',
      justifyContent: 'center',
      marginTop:"8%",
    },
    image: {
      marginTop:'5%',
      position: 'relative',
      width: '90%',//380
      height: '70%',//460
      alignItems:'center',
      justifyContent: "center",
      //
    },
    cajatexto:{
      
      alignItems:'center',
      position:'relative',
      marginTop:'-95%',
      height: '50%',
      width: '62%',
    },
    cajaimagen:{
      
      alignItems:'flex-end',
      position:'relative',
      marginLeft:'30%',
      marginTop:'-20%',
      height: '35%',
      width: '65%',
    },
    texto:{
      
      textAlign:'center',
      fontSize:18,
      fontWeight:"500",
      color:"#1F646D",
    },
    text2: {
      fontSize: 25,
      color: '#FFFFFF',
      fontWeight: '700'
    },
})


export default IntroScreen3Presentacion