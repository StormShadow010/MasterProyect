import React from 'react';
import { StyleSheet, Text, View, ImageBackground,TextInput, TouchableOpacity,Image,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../../../firebase-config';

const yourPicture = require('../../../imagenes/Registro.png')

function RegisterScreen(){
  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [grado, setGrado] = React.useState('');
  const [correo, setCorreo] = React.useState('');
  const [contra, setContra] = React.useState('');
  const [contracon, setContracon] = React.useState('');

  const app=initializeApp(firebaseConfig);
  const auth=getAuth(app);

  const refpass= () =>{
    if(contra===contracon){
      console.log("Contraseña igual");
      handleCreateAccount()
    }else{
      console.log("Contraseña diferente");
    }
  }

  const handleCreateAccount = () =>{
    createUserWithEmailAndPassword(auth, correo,contra)
    .then((userCredential)=>{
      console.log('Account created!')
      const user = userCredential.user
      console.log(user)
      navigation.navigate('Intro2')
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
        <View style={styles.datos}>
          <View style={styles.campodato}>
            <Text style={styles.dato}>Nombres</Text>
            <TextInput onChangeText={(text) => setNombre(text)}  style={styles.input}></TextInput>
          </View>
          <View style={styles.campodato}>
            <Text style={styles.dato}>Apellidos</Text>
            <TextInput onChangeText={(text) => setApellido(text)}  style={styles.input}></TextInput>
          </View>
          <View style={styles.campodato}>
            <Text style={styles.dato}>Grado</Text>
            <TextInput onChangeText={(text) => setGrado(text)} style={styles.input}></TextInput>
          </View>
          <View style={styles.campodato}>
            <Text style={styles.dato}>Correo</Text>
            <TextInput onChangeText={(text) => setCorreo(text)}  style={styles.input}></TextInput>
          </View>
          <View style={styles.campodato}>
            <Text style={styles.dato}>Contraseña</Text>
            <TextInput onChangeText={(text) => setContra(text)}  style={styles.input}></TextInput>
          </View>
          <View style={styles.campodato}>
            <Text style={styles.dato}>Confirmar contraseña</Text>
            <TextInput onChangeText={(text) => setContracon(text)} style={styles.input}></TextInput>
          </View>
          <View>
            <TouchableOpacity style={styles.button} onPress={refpass}>
            <Text style={{fontSize:18,fontWeight:'500',color:'white',fontWeight: "bold"}}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}


export const IntroScreen2Registrarse = () => {
  return (
    <RegisterScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#CCCECE',
  },
  image: {
    flex: 1,
  },
  datos:{
    marginTop:280,
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
  },
  dato:{
    marginBottom:5,
    fontSize:18,
    fontWeight:"bold",
    color:"white",
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
  campodato:{
    marginVertical:-5,
  },
  button:{
    width:250,
    height:40,
    borderRadius:10,
    backgroundColor:"#FFAD2B",
    alignItems:'center',
    justifyContent: 'center',
    marginTop:10,
    borderColor:'#fff',
    borderWidth:2,
  },
});
