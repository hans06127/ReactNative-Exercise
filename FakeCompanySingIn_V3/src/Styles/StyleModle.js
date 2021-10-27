import { StyleSheet } from 'react-native'
// 引入AsyncStorage
const test = 0
const Default = {
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
const After = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
export default function variblrColor(_p) {
  var variableFontColor = _p === 'default' ? 'black' : '#fff'
  var variableBorderColor = _p === 'default' ? '#fff' : 'black'
}
// variable
export const defaultStyles = StyleSheet.create(test == 0 ? Default : After);