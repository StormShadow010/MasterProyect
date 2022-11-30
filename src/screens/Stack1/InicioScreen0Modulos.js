import { View, Text,StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const InicioScreen0Modulos = () => {
  const navigation=useNavigation();
  return (
    <View>
      <TouchableOpacity  
                    style={styles.button}
                    onPress={()=> navigation.navigate("Inicio2")}>
                    <Text style={styles.text2}>Empecemos</Text>
                </TouchableOpacity>
      <Text>InicioScreen0Modulos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerPapa: {
      //paddingTop:15,
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
      marginTop:'10%',
      borderRadius: 20,
      borderWidth: 6,
      borderColor: "#315259",
      width: '70%',
      height: '40%',
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
    container: {
      flex:1,
    },
    bottom:{
      position:'absolute',
      width:Dimensions.get('screen').width,
      bottom:-0,
    },
    box:{
      backgroundColor:'#94F2E1',
      height:40,
    },
    box1:{
      backgroundColor:'#04BF9D',
      height:150,
      alignItems:'center',
    },
    box2:{
      backgroundColor:'#AAADAC',
      height:50,
    },
    bottomWavy:{
      position:'absolute',
      bottom:0,
    }
})

export default InicioScreen0Modulos