import React, { useState, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, FlatList } from 'react-native'
import PropTypes from "prop-types"

export default function DateTime(props) {
  const [nowTime, setNowTime] = useState()
  const [nowDate, setNowDate] = useState()
  // 顏色預設狀態
  const [colorState, setColorState] = useState(props)
  // Run時間 更改useEffect
  useEffect(() => {
    const now = setInterval(() => {
      var dateTime = new Date()
      setNowDate(`${dateTime.getFullYear()} / ${dateTime.getMonth() + 1} / ${dateTime.getDate()}`)
      setNowTime(`${addZero(dateTime.getHours())} : ${addZero(dateTime.getMinutes())} : ${addZero(dateTime.getSeconds())}`)

    }, 500)
    return () => {
      clearInterval(now)
    }
  }, [nowTime, nowDate])
  // 補0
  const addZero = (_n) => _n < 10 ? '0' + _n : _n

  function changeColor() {
    // 使用者輸入顏色/切換成預設
    colorState.State ? setColorState({ value: [props.value[0], props.value[1]], State: false }) : setColorState({ value: [DateTime.defaultProps.backgroundColor, DateTime.defaultProps.timeFontColor], State: true })
  }

  return (
    < View style={{ flexDirection: 'row', justifyContent: 'center', width: '95%', backgroundColor: colorState.value[1], borderRadius: 10 }} >
      <View style={[DateStyle.showDateTime_border, { width: '90%', backgroundColor: colorState.value[1] }]}>
        <Text style={[DateStyle.showDateTime_text, { color: colorState.value[0], backgroundColor: colorState.value[1] }]}>{nowDate}</Text>
        <Text style={[DateStyle.showDateTime_text, { color: colorState.value[0], backgroundColor: colorState.value[1] }]}>{nowTime}</Text>
      </View>
      {/* 不更換顏色display=none */}
      <TouchableOpacity style={{ display: props.isChange ? '' : 'none', justifyContent: 'center', alignItems: 'center', backgroundColor: colorState.value[0], width: '10%' }}
        onPress={() => changeColor()}>
        <Text style={{ color: colorState.value[1], backgroundColor: colorState.value[0] }}>切換</Text>
      </TouchableOpacity>
    </View>
  )
}


const DateStyle = StyleSheet.create({
  showDateTime_border: {
    justifyContent: 'center',
    alignItems: 'center',
  }, showDateTime_text: {
    fontSize: 30,
    backgroundColor: 'white'
  }
});

DateTime.propTypes = {
  value: PropTypes.array,
  isChange: PropTypes.bool.isRequired
}

DateTime.defaultProps = {
  value: ['rgba(0,0,0,0)', 'black'],
  State: false
}

