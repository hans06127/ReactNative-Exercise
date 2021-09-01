import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import NewScreen from './src/Screens/NewScreen'
import NewDetailScreen from './src/Screens/NewDateilScreen';




export default function App() {
  const stack = createStackNavigator()
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <stack.Screen name="New" component={NewScreen} options={{ title: "頭條新聞", headerStyle: styles.newHeader, headerBackTitle: '首頁' }} />
        <stack.Screen name="NewDeatil" component={NewDetailScreen} options={{ headerBackTitleVisible: false, headerTitle: '新聞', headerStyle: styles.newHeader }} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 100,

  },
  buttonBouder: {
    width: 150,
    height: 150,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    borderRadius: 15
  },
  buttonText: {
    fontSize: 30
  },
  newHeader: {
    backgroundColor: '#F3F3F3'
  }
});
