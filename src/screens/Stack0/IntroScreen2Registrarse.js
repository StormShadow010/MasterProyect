import React from 'react';
import { StyleSheet, Text, View, ImageBackground,TextInput, TouchableOpacity,Image,Alert, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import svg,{Path, Svg} from 'react-native-svg'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from '../../../firebase-config';
import {  getDatabase, ref, set } from "firebase/database";
//import { SafeAreaView } from 'react-native-safe-area-context';

function RegisterScreen(){
  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [grado, setGrado] = React.useState('');
  const [correo, setCorreo] = React.useState('');
  const [contra, setContra] = React.useState('');
  const [contracon, setContracon] = React.useState('');

  const app=initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const db=getDatabase(app);

  
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
      handleCreaUserdatabase()
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }

  const handleCreaUserdatabase = () =>{
    set(ref(db, 'users/' + nombre), {
      username: nombre+" "+apellido,
      email: correo,
      curse: grado,
      password: contracon
    }).then(()=>{
      alert('Data submitted!');
      navigation.navigate('Intro2')
    }).catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }
  
  
  const navigation=useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.bottom}>
        <SafeAreaView style={styles.box1}>
        <Svg
          height={'270%'}//980
          width={Dimensions.get('screen').width}
          viewBox="0 0 1400 50"
          style={styles.bottomWavy}
          >
            <Path
              fill="#E2E2E2"
              d="M0,294L30,277.7C60,261,120,229,180,228.7C240,229,300,261,360,285.8C420,310,480,327,540,310.3C600,294,660,245,720,228.7C780,212,840,229,900,269.5C960,310,1020,376,1080,343C1140,310,1200,180,1260,179.7C1320,180,1380,310,1440,359.3C1500,408,1560,376,1620,351.2C1680,327,1740,310,1800,253.2C1860,196,1920,98,1980,57.2C2040,16,2100,33,2160,49C2220,65,2280,82,2340,147C2400,212,2460,327,2520,351.2C2580,376,2640,310,2700,261.3C2760,212,2820,180,2880,138.8C2940,98,3000,49,3060,24.5C3120,0,3180,0,3240,0C3300,0,3360,0,3420,65.3C3480,131,3540,261,3600,294C3660,327,3720,261,3780,220.5C3840,180,3900,163,3960,155.2C4020,147,4080,147,4140,130.7C4200,114,4260,82,4290,65.3L4320,49L4320,490L4290,490C4260,490,4200,490,4140,490C4080,490,4020,490,3960,490C3900,490,3840,490,3780,490C3720,490,3660,490,3600,490C3540,490,3480,490,3420,490C3360,490,3300,490,3240,490C3180,490,3120,490,3060,490C3000,490,2940,490,2880,490C2820,490,2760,490,2700,490C2640,490,2580,490,2520,490C2460,490,2400,490,2340,490C2280,490,2220,490,2160,490C2100,490,2040,490,1980,490C1920,490,1860,490,1800,490C1740,490,1680,490,1620,490C1560,490,1500,490,1440,490C1380,490,1320,490,1260,490C1200,490,1140,490,1080,490C1020,490,960,490,900,490C840,490,780,490,720,490C660,490,600,490,540,490C480,490,420,490,360,490C300,490,240,490,180,490C120,490,60,490,30,490L0,490Z"
            />
          </Svg>
          <Svg
          height={'230%'}//750
          width={Dimensions.get('screen').width}
          viewBox="0 0 1440 400"
          style={styles.bottomWavy}
          >
            <Path
              fill="#CCCECE"
              d="M0,147L30,179.7C60,212,120,278,180,253.2C240,229,300,114,360,65.3C420,16,480,33,540,73.5C600,114,660,180,720,187.8C780,196,840,147,900,138.8C960,131,1020,163,1080,187.8C1140,212,1200,229,1260,220.5C1320,212,1380,180,1440,196C1500,212,1560,278,1620,253.2C1680,229,1740,114,1800,114.3C1860,114,1920,229,1980,294C2040,359,2100,376,2160,351.2C2220,327,2280,261,2340,261.3C2400,261,2460,327,2520,310.3C2580,294,2640,196,2700,196C2760,196,2820,294,2880,294C2940,294,3000,196,3060,138.8C3120,82,3180,65,3240,98C3300,131,3360,212,3420,236.8C3480,261,3540,229,3600,228.7C3660,229,3720,261,3780,294C3840,327,3900,359,3960,383.8C4020,408,4080,425,4140,408.3C4200,392,4260,343,4290,318.5L4320,294L4320,490L4290,490C4260,490,4200,490,4140,490C4080,490,4020,490,3960,490C3900,490,3840,490,3780,490C3720,490,3660,490,3600,490C3540,490,3480,490,3420,490C3360,490,3300,490,3240,490C3180,490,3120,490,3060,490C3000,490,2940,490,2880,490C2820,490,2760,490,2700,490C2640,490,2580,490,2520,490C2460,490,2400,490,2340,490C2280,490,2220,490,2160,490C2100,490,2040,490,1980,490C1920,490,1860,490,1800,490C1740,490,1680,490,1620,490C1560,490,1500,490,1440,490C1380,490,1320,490,1260,490C1200,490,1140,490,1080,490C1020,490,960,490,900,490C840,490,780,490,720,490C660,490,600,490,540,490C480,490,420,490,360,490C300,490,240,490,180,490C120,490,60,490,30,490L0,490Z"
            />
          </Svg>
          <Svg
          height={'230%'}//720
          width={Dimensions.get('screen').width}
          viewBox="0 0 1440 320"
          style={styles.bottomWavy}
          >
            <Path
              fill="#1F646D"
              d="M0,441L30,408.3C60,376,120,310,180,294C240,278,300,310,360,277.7C420,245,480,147,540,130.7C600,114,660,180,720,212.3C780,245,840,245,900,228.7C960,212,1020,180,1080,187.8C1140,196,1200,245,1260,294C1320,343,1380,392,1440,367.5C1500,343,1560,245,1620,204.2C1680,163,1740,180,1800,220.5C1860,261,1920,327,1980,334.8C2040,343,2100,294,2160,269.5C2220,245,2280,245,2340,245C2400,245,2460,245,2520,261.3C2580,278,2640,310,2700,326.7C2760,343,2820,343,2880,318.5C2940,294,3000,245,3060,220.5C3120,196,3180,196,3240,163.3C3300,131,3360,65,3420,89.8C3480,114,3540,229,3600,236.8C3660,245,3720,147,3780,114.3C3840,82,3900,114,3960,179.7C4020,245,4080,343,4140,359.3C4200,376,4260,310,4290,277.7L4320,245L4320,490L4290,490C4260,490,4200,490,4140,490C4080,490,4020,490,3960,490C3900,490,3840,490,3780,490C3720,490,3660,490,3600,490C3540,490,3480,490,3420,490C3360,490,3300,490,3240,490C3180,490,3120,490,3060,490C3000,490,2940,490,2880,490C2820,490,2760,490,2700,490C2640,490,2580,490,2520,490C2460,490,2400,490,2340,490C2280,490,2220,490,2160,490C2100,490,2040,490,1980,490C1920,490,1860,490,1800,490C1740,490,1680,490,1620,490C1560,490,1500,490,1440,490C1380,490,1320,490,1260,490C1200,490,1140,490,1080,490C1020,490,960,490,900,490C840,490,780,490,720,490C660,490,600,490,540,490C480,490,420,490,360,490C300,490,240,490,180,490C120,490,60,490,30,490L0,490Z"
            />
          </Svg>
          <ScrollView>
          <SafeAreaView style={styles.datos}>
          <SafeAreaView style={styles.campodato}>
            <Text style={styles.dato}>Nombres</Text>
            <TextInput onChangeText={(text) => setNombre(text)}  style={styles.input}></TextInput>
          </SafeAreaView>
          <SafeAreaView style={styles.campodato}>
            <Text style={styles.dato}>Apellidos</Text>
            <TextInput onChangeText={(text) => setApellido(text)}  style={styles.input}></TextInput>
          </SafeAreaView>
          <SafeAreaView style={styles.campodato}>
            <Text style={styles.dato}>Grado</Text>
            <TextInput onChangeText={(text) => setGrado(text)} style={styles.input}></TextInput>
          </SafeAreaView>
          <SafeAreaView style={styles.campodato}>
            <Text style={styles.dato}>Correo</Text>
            <TextInput onChangeText={(text) => setCorreo(text)}  style={styles.input}></TextInput>
          </SafeAreaView>
          <SafeAreaView style={styles.campodato}>
            <Text style={styles.dato}>Contraseña</Text>
            <TextInput onChangeText={(text) => setContra(text)}  style={styles.input}></TextInput>
          </SafeAreaView>
          <SafeAreaView style={styles.campodato}>
            <Text style={styles.dato}>Confirmar contraseña</Text>
            <TextInput onChangeText={(text) => setContracon(text)} style={styles.input}></TextInput>
          </SafeAreaView>
          <SafeAreaView>
            <TouchableOpacity style={styles.button} onPress={refpass}>
            <Text style={{fontSize:18,fontWeight:'500',color:'white',fontWeight: "bold"}}>Registrarse</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
        </ScrollView>
        </SafeAreaView>
      </SafeAreaView>
        
    </SafeAreaView>
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
    backgroundColor:'#FFFFFF',
  },
  image: {
    flex: 1,
  },
  datos:{
    //marginTop:'-18%',
    alignItems:"center",
    justifyContent:"center",
    //width:"100%",
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
    //marginBottom:5,
    color:"black",
  },
  campodato:{
    marginVertical:'1%',
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
  bottom:{
    position:'absolute',
    width:Dimensions.get('screen').width,
    bottom:0,
  },
  box1:{
    backgroundColor:'#1F646D',
    height:Dimensions.get('screen').height-330,//320
  },
  bottomWavy:{
    position:'absolute',
    bottom:0,
  }
});
