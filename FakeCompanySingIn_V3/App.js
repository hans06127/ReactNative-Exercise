import React, { useState, useEffect } from 'react';
import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Screens/LoginScreen';
import IndexScreen from './src/Screens/IndexScreen'

// for redux
import configureStore from './src/redux/store';
import { StoreContext } from 'redux-react-hook';
import { useMappedState, useDispatch } from 'redux-react-hook';


// for AsyncStorage
import * as StorageHelper from './src/helper/StorageHelper'
import { changeStyle } from './src/redux/action'
const Stack = createStackNavigator();
function App() {
  // 從AsyncStorage 寫入redux 全域
  const disPatch = useDispatch()
  const loadStorage = async () => {
    let deepGet = await StorageHelper.getUserState('nowDeep')
    // 寫入全域變更Style
    if (deepGet == 'on') {
      disPatch(changeStyle('on'))
    } else {
      disPatch(changeStyle('off'))
    }
  }
  useEffect(() => {
    loadStorage()
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: 'red' },
          headerBackTitle: '返回',
          headerTintColor: 'white',
          headerShown: false
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>

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

const store = configureStore()
export default function MyApp() {
  return (

    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  )
}