import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';

export const ButtonPersonalized = ({name, action}) => {
  return (
    <TouchableOpacity onPress={action} style={styles.button_st}>
      {name}
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput placerholder="test" style={styles.input_colors}/>
      <TouchableOpacity onPress={() => {
        console.log('Press');}} 
        style={styles.button_st}>Press moi</TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_colors: {
    border: "2px solid #00B663",
    borderRadius: "5px",
  },
  button_st: {
    backgroundColor: "#000000",
    color: "white",
    borderRadius: "5px",
    padding: "10px",
  },
});
