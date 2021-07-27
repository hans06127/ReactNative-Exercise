import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [loginText, setLoginText] = useState('');
  const [statusColor, setStatusColor] = useState('black');
  const Employee = [
    {
      name: 'hans',
      number: '0001',
      password: '12345'
    },
    {
      name: 'james',
      number: '0002',
      password: '0000',
    }]


  const login = () => {
    var feedback;
    var _color
    // 帳號或密碼不得空白
    if (account != "" && password != "") {
      // 搜尋是否找到此人
      var user = Employee.filter(x => x.number == account && x.password == password)
      // 找到
      if (user[0] != undefined) {
        feedback = `登入成功${user[0].name}`
        _color = 'blue'
      } else {
        feedback = '帳號或密碼輸入錯誤'
        _color = 'red'
      }
    } else {
      feedback = "請輸入帳號或密碼"
      _color = 'red'
    }
    setStatusColor(_color)
    return setLoginText(feedback)
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.Home_Loge}
        source={{ uri: ('https://www.ghibli.jp/gallery/nausicaa001.jpg') }}
      ></Image>
      <Text style={[styles.loginText, { color: statusColor }]}>{loginText}</Text>
      <TextInput
        style={styles.Home_Account_Input}
        placeholder="帳號"
        keyboardType={'numeric'}
        onChangeText={(text) => setAccount(text)}
        value={account}
        maxLength={4}
      ></TextInput>
      <TextInput
        style={styles.Home_Account_Input}
        placeholder="密碼"
        onChangeText={(text) => setPassword(text)}
        value={password}
      ></TextInput>
      <TouchableOpacity style={styles.Home_singIn}
        onPress={() => login()}>
        <Text style={{ fontSize: 15, color: '#fff' }}>登入</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEFEFE',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Home_Loge: {
    width: '70%',
    height: '15%',
    borderColor: 'black',
    resizeMode: 'contain',
    marginBottom: '15%',
    marginTop: '30%'

  },
  Home_Account_Input: {
    marginBottom: 5,
    backgroundColor: '#E4E5f0',
    width: '70%',
    height: '8%',
    alignItems: 'center',
    borderRadius: 5,
    fontSize: 15,
    paddingLeft: 10
  },
  Home_singIn: {
    width: '70%',
    height: '8%',
    backgroundColor: '#5882E0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: '5%',
  },
  loginText: {
    padding: 10,
  }
});
