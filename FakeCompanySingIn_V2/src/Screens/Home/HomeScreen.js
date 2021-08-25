import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import DateTime from './ShowDateTime'

export default function HomeScreen(props) {
  console.log(loginUser)
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Hi {loginUser.name}</Text>
      <View style={styles.timeBorder}>
        <DateTime isChange={false} value={['rgba(0,0,0,0)', 'black']} >
        </DateTime>
      </View>
      <TouchableOpacity style={styles.buttonBorder} onPress={() => Alert.alert("打卡成功")}>
        <Text style={styles.buttonFont}>打卡</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonBorder, { backgroundColor: 'white' }]}
        onPress={() => props.navigation.push('HomeDetailScreen')}>
        <Text style={styles.buttonFont}>查詢</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeBorder: {
    borderWidth: 20,
    borderColor: '#DBE4ED',
    width: 300,
    height: 300,
    marginTop: 50,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 255
  },
  buttonBorder: {
    width: '70%',
    height: '9%',
    backgroundColor: '#4C82C0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10
  },
  buttonFont: {
    fontSize: 25,
  }
});
