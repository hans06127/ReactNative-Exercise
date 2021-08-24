import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function SettingScreen(props) {
  return (
    <View style={styles.container}>
      <Text>功能還沒做起來，後面階段再逐漸新增</Text>
      <TouchableOpacity style={styles.buttonBorder}>
        <Text style={styles.buttonText}>顯示設定</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBorder}>
        <Text style={styles.buttonText}>帳號管理</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBorder}>
        <Text style={styles.buttonText}>考勤系統(網頁)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBorder}>
        <Text style={styles.buttonText}>移機申請</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBorder}>
        <Text style={styles.buttonText}>登出</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBorder: {
    backgroundColor: '#5B9BE6',
    width: 300,
    height: 100,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 28,
    color: '#2A2A2A'
    // fontFamily: "Cochin"
  }
});


