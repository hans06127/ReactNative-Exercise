import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Alert } from 'react-native';
import DateTime from './ShowDateTime'

// for redux
import { useMappedState } from 'redux-react-hook';

// for post
import { fetchData } from '../../api/postUserData';

import { strToDate } from '../../api/strToDate';

export default function HomeScreen(props) {
  const nowBasicStyle = useMappedState(state => state.basicStyle)
  const userInformation = useMappedState(state => state.userInformation)
  const [todayRecord, setTodayRecord] = useState(userInformation.todayRecord)

  const setRecord = async (_setData) => {
    let fetchJson = {
      doing: 'PUNCHIN',
      punchIn: _setData
    }
    await fetchData(fetchJson).then(respone => {
      if (respone.state == 'success') {
        // 更新當日紀錄
        lastRecord()
        Alert.alert('上傳成功')
      } else {
        Alert.alert('打卡失敗，請確認網路或連繫MI')
      }
    }).catch(err => {
      console.log('失敗', err)
    })
  }

  const lastRecord = () => {
    var fetchJson = {
      doing: 'SELECT',
      action: 'DEFULT',
      account: userInformation.user.account,
      interval: ['', '']
    }

    fetchData(fetchJson).then(response => {
      let last = response.punchInRecord.slice(-1)[0]
      setTodayRecord(last)
    }).catch(err => {
      console.log(err)
    })
  }
  const punchIn = (_action, _time) => {
    let account = userInformation.user.account
    let loginCode = "123:456:789"
    var punchInData = [account, loginCode, _time, _action]
    // 判斷是否今天有打卡紀錄
    if (todayRecord) {
      // 上班未打過卡 或 下班未打過卡
      if ((_action == '簽到' && todayRecord[3] == '') || (_action == '簽退' && todayRecord[4] == '')) {
        // 帶入當日SN
        punchInData.splice(0, 0, todayRecord[0])
        // 上傳
        setRecord(punchInData)
      } else {
        // 給予打卡(後果自付)
        punchInData.splice(0, 0, todayRecord[0])
        Alert.alert(`今日 ${_action} 已經打過卡，是否覆蓋 ${_action}`, null,
          [
            {
              text: "確定",
              // 確認上傳(覆蓋)
              onPress: () => setRecord(punchInData),
              style: "cancel"
            },
            {
              text: "取消",
              onPress: () => console.log("取消"),
              style: "cancel"
            },
          ])

      }
    } else {
      // 當日第一次打卡，新增空字串，API會新增新SN
      punchInData.splice(0, 0, '')
      console.log('新增新SN')
      setRecord(punchInData)

    }
  }

  const showPunchAlert = () => {
    let now = new Date()
    let nowDateTime = strToDate('', now)
    let nowTime = strToDate('time', now)
    Alert.alert(`現在時間:${nowTime}`, null,
      [
        {
          text: "簽到",
          onPress: () => punchIn('簽到', nowDateTime),
          style: "cancel"
        },
        {
          text: '簽退',
          onPress: () => punchIn('簽退', nowDateTime),
          style: "destructive"
        },
        {
          text: "取消",
          onPress: () => console.log("取消"),
          style: "cancel"
        }
      ])
  }

  return (
    <View style={[styles.container, { backgroundColor: nowBasicStyle.backgroundColor }]}>
      <Text style={{ fontSize: 25, color: nowBasicStyle.fontColor, }}>Hi {userInformation.user.name}</Text>
      <View style={styles.timeBorder}>
        <DateTime isChange={false} value={[nowBasicStyle.fontColor, nowBasicStyle.backgroundColor]} >
        </DateTime>
      </View>
      <TouchableOpacity style={styles.buttonBorder} onPress={() => showPunchAlert()}>
        <Text style={styles.buttonFont}>打卡</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.buttonBorder]}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeBorder: {
    borderWidth: 20,
    borderColor: '#DBE4ED',
    width: 300,
    height: 300,
    marginTop: 50,
    alignItems: 'center',
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
