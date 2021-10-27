import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import * as StorageHelper from '../../helper/StorageHelper'
//或
// import { setUserState, getUserState } from '../../helper/StorageHelper'


// for redux
import { useMappedState, useDispatch } from 'redux-react-hook';
import { changeStyle } from '../../redux/action';

export default function SettingScreen(props) {
  const NowBasicStyle = useMappedState(state => state.basicStyle)
  const dispatch = useDispatch()

  // 切換深色背景
  const changeDeepColor = async () => {
    try {
      // 從AsyncStorage 引入參數
      let changeDeep = await StorageHelper.getUserState('nowDeep') == 'on' ? 'off' : 'on'
      // 寫入AsyncStorage nowDeep
      await StorageHelper.setUserState('nowDeep', changeDeep)
      // 寫入redux changeDeep
      dispatch(changeStyle(changeDeep))

    } catch (err) {
      console.error(err)
    }
  }
  return (
    <View style={[styles.container, { backgroundColor: NowBasicStyle.backgroundColor }]}>
      <TouchableOpacity style={styles.buttonBorder} onPress={() => Alert.alert('規劃中')}>
        <Text style={styles.buttonText}>補漏刷卡</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBorder} onPress={() => changeDeepColor()}>
        <Text style={styles.buttonText}>顯示設定</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBorder} onPress={() => Alert.alert('規劃中')}>
        <Text style={styles.buttonText}>帳號管理</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBorder} onPress={() => Alert.alert('規劃中')}>
        <Text style={styles.buttonText}>考勤系統(網頁)</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBorder} onPress={() => Alert.alert('規劃中')}>
        <Text style={styles.buttonText}>移機申請</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
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


