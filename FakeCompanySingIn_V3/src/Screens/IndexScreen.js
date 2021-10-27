import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'
import SettingScreen from './Setting/SettingScreen'
import HomeDetailScreen from './Home/HomeDetailScreen'
import HomeScreen from './Home/HomeScreen';


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


function MainScreen(props) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#565656' },
        headerTintColor: 'white',
        headerTitle: 'HR系統',
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} options={{
        headerTitle: "打卡紀錄",
      }} />
    </Stack.Navigator>
  )
}

function Setting(props) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerStyle: { backgroundColor: '#565656' },
        headerTintColor: 'white',
        headerTitle: '設定',
        headerBackTitleVisible: false,
        headerLeft: null,
      }}>
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      {/* 後續待新增 */}
      <Stack.Screen name="ViewStyle" component={Setting} />
      <Stack.Screen name="Attendance" component={Setting} />
      <Stack.Screen name="Shift" component={Setting} />
      <Stack.Screen name="LouOut" component={Setting} />
    </Stack.Navigator>
  )

}
export default function IndexScreen(props) {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, focused }) => {

          let iconName;
          if (route.name == 'Main') {
            iconName = focused ? "home" : 'home-outline'
          }
          else if (route.name == 'Setting') {
            iconName = focused ? "settings" : 'settings-outline'
          }
          return <Ionicons name={iconName} size={25} color={'#5E6266'} />
        }
      })}
    >
      <Tab.Screen name='Main' component={MainScreen} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
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

