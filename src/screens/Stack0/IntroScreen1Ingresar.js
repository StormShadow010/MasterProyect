import React from 'react';
import { StyleSheet, Text, View, ImageBackground,TextInput, TouchableOpacity,Image,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../../../firebase-config';

const yourPicture = require('../../../imagenes/login2.jpg');

function LoginScreen(){
  const [correo, setCorreo] = React.useState('');
  const [contra, setContra] = React.useState('');

  const app=initializeApp(firebaseConfig);
  const auth=getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth,correo,contra)
    .then((userCredential)=>{
      console.log('Signed in!')
      const user = userCredential.user
      console.log(user)
      navigation.navigate('Intro4');
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  const navigation=useNavigation();
  return(
    <View style={styles.container}>
    <ImageBackground source={yourPicture} resizeMode="cover" style={styles.image}>
      <View style={styles.containerdata}>
        <View>
          <TextInput onChangeText={(text) => setCorreo(text)} style={styles.input} placeholder="Correo"></TextInput>
        </View>
        <View>
          <TextInput onChangeText={(text) => setContra(text)} style={styles.input} placeholder="Contraseña"></TextInput>
        </View>
        <View>
          <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={{fontSize:18,fontWeight:'500',color:'white',fontWeight: "bold"}}>Ingresar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Intro3")}>
            <Text style={{fontSize:18,fontWeight:'500',color:'white',fontWeight: "bold"}}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  </View>
  );

}

export const IntroScreen1Ingresar = () => {

  return (
    <LoginScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  containerdata:{
    marginTop:495,
    borderRadius:10,
    padding:50,
    alignItems:'center',
  }, 
  input:{
    width:330,
    height:40,
    borderColor:'#fff',
    borderWidth:2,
    borderRadius:10,
    padding:10,
    backgroundColor:'#ffffff',
    marginBottom:20,
    color:"black",
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
});

