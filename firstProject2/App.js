import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const Hans = "0912345678";
  const [phoneNumber, setPhoneNumber] = useState('');
  const [PhoneText, setPhoneText] = useState('請輸入');


  function userPhone(_number) {
    setPhoneNumber(_number)
    if (_number.length == 10) {
      if (_number == Hans) {
        setPhoneText("你好Hans")
      } else {
        setPhoneText("輸入錯誤")
      }
    }
    else {
      console.log(_number)
      setPhoneText("請輸入號碼")
    }
  }
  return (
    <View style={styles.container}>
      <Text>請輸入電話號碼</Text>
      <Text>電話號碼:{phoneNumber}</Text>
      <Text>{PhoneText}</Text>
      {/* <StatusBar style="auto" /> */}
      <TextInput
        style={styles.numberInput}
        onChangeText={(text) => userPhone(text)}
        value={phoneNumber}
        keyboardType={'numeric'}
        maxLength={10}
      ></TextInput>

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
  numberInput: {
    height: 50,
    width: 300,
    borderColor: "#E7DCD9",
    borderWidth: 5,
    backgroundColor: "#FD9193",
    color: 'black',
    fontSize: 20,
    textAlign: "center"
  }
});
