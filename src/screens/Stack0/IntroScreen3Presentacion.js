import React,{useState} from 'react';
import { View, Text, ImageBackground, StyleSheet,Button, Image, TouchableOpacity } from 'react-native'
import { Getinfo} from '../../Tabs';

const IntroScreen3Presentacion = () => {
  const [isSelected, setSelection] = useState(false);

  const handleJoin = () => {
    setSelection(current => !current);
  }
  return (
    <View style={styles.containerPapa}>
      <TouchableOpacity  
                    style={styles.button}
                    onPress={handleJoin}>
                    <Text style={styles.text2}>Empeza la aventura</Text>
                    <Getinfo  handleJoin={isSelected} />
                </TouchableOpacity>
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