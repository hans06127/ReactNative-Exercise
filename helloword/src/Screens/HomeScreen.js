import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';



export default function HomeScreen(props) {
  return (
    <ImageBackground style={[styles.container, { width: '100%', height: '100%' }]} source={require('../img/background.jpg')} resizeMode='cover'>
      <TouchableOpacity style={styles.buttonBouder} onPress={() => props.navigation.push('New')}>
        <Text style={styles.buttonText}>頭條新聞</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBouder}>
        <Text style={styles.buttonText}>總體經濟</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBouder}>
        <Text style={styles.buttonText}>國際股市</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBouder}>
        <Text style={styles.buttonText}>基金</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBouder}>
        <Text style={styles.buttonText}>產品原物料</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBouder}>
        <Text style={styles.buttonText}>外匯市場</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 100,
    // backgroundColor: 'red',

  },
  buttonBouder: {
    width: 150,
    height: 150,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 15
  },
  buttonText: {
    fontSize: 30
  }
});
