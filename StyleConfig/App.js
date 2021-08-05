import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DateTime from './src/ShowDateTime';

export default function App() {
  function printLog() {
    console.log('測試')
  }
  return (
    <View style={styles.container}>
      <Text>自製時鐘並且可切換輸入的顏色</Text>
      <View style={{ width: '80%', borderWidth: 1 }}>
        <DateTime
          // 選擇是否加入切換預設
          isChange={true}
          // 選填
          value={['blue', 'white']}
        ></DateTime>

      </View>
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
});
