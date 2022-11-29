import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { IntroScreen1Inicio } from './src/stacks/StackScreen1Inicio';


export default function App() {
  return <IntroScreen1Inicio />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});