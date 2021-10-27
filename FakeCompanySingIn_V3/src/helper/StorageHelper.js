// import AsyncStorage from '@react-native-community/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
*{string}name

 */

export const setUserState = (key, value) => AsyncStorage.setItem(key, value)
export const getUserState = (key) => AsyncStorage.getItem(key)