import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, Image } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  const [left, setLeft] = useState(50);
  const [right, setRight] = useState(50);
  const [countLeft, setCountLeft] = useState(0);
  const [countRigth, setCountRight] = useState(0)
  const [changeimage, setChangeImage] = useState('01')

  const PK = (_p) => {
    if (left != 100 && right != 100) {
      switch (_p) {
        case 'L':
          setCountLeft(countLeft + 1)
          setLeft(left + 1)
          setRight(right - 1)
          console.log("點到左邊")
          // countLeft +1 是因為他會先抓到渲染前的值
          if (parseInt(countLeft + 1) % 5 == 0) {
            // 取0~50隨機整數 因為只有50張照片
            let randomPhoto = (Math.floor(Math.random() * 49) + 1).toString()
            // 三元運算
            console.log(`隨機照片:${randomPhoto}`)
            setChangeImage(randomPhoto < 10 ? `0${randomPhoto}` : randomPhoto)
            console.log("換圖片")
          }
          break
        case 'R':
          setCountRight(countRigth + 1)
          setRight(right + 1)
          setLeft(left - 1)
          console.log("點到右邊")
          break
      }
    }

    if (_p == 'RE') {
      setLeft(50)
      setRight(50)
      setCountLeft(0)
      setCountRight(0)
      console.log('重新開始')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={{ height: '50%', width: '100%', borderColor: '#fff', borderWidth: 3, flexDirection: 'row' }}>
          <View style={[styles.competition, styles.left, { width: left + '%', }]}></View>
          <View style={[styles.competition, styles.right, { width: right + '%' }]}></View>
        </View>
      </View>
      <View style={{ backgroundColor: '#7EB8FC', width: '100%', alignItems: 'center', flexDirection: 'row' }}>
        <Text style={[styles.countText, { width: "30%" }]}>{countLeft}</Text>
        <View style={styles.RE}>
          <Button title="重新開始" onPress={() => PK('RE')}></Button>
        </View>
        <Text style={[styles.countText, { width: '30%' }]}>{countRigth}</Text>
      </View>
      <View style={styles.down}>
        {/*TouchableOpacity 可以包多個  */}
        <TouchableOpacity style={styles.buttonSize} onPress={() => PK('L')}>
          <Image
            style={{ width: '100%', height: '80%' }}
            source={{ uri: `https://www.ghibli.jp/gallery/chihiro0${changeimage}.jpg` }}
          />
          < Text > Touch Me</Text >
        </TouchableOpacity >
        {/*TouchableHighlight 只能包一個  */}
        <TouchableHighlight style={styles.buttonSize} onPress={() => PK('R')}>
          <Text>Touch Me</Text>
        </TouchableHighlight>
      </View >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'

  },
  top: {
    flex: 1,
    backgroundColor: '#7EB8FC',
    width: '100%',
    justifyContent: 'center'
  },
  down: {
    flex: 1,
    backgroundColor: '#FAF4C6',
    width: '100%',
    flexDirection: 'row'
  },
  competition: {

    height: '100%',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 3
  },
  left: {
    backgroundColor: 'red',

  },
  right: {
    backgroundColor: 'blue',
  },
  buttonSize: {
    height: '100%',
    width: '50%',
    backgroundColor: '#C0D2DA',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1
  },
  RE: {
    backgroundColor: '#FFF7A7',
    width: '40%',
  },
  countText: {
    paddingHorizontal: '10%',
    fontSize: 25,
    backgroundColor: '#8FD0CA'
  }
});
