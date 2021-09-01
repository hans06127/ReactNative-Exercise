import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';


export default function NewDetailScreen(props) {

  const passProps = props.route.params.passProps || ' Some default value'

  return (
    <ScrollView>
      <View style={{ justifyContent: 'center', alignItems: 'center', margin: 5 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{passProps.title}</Text>
        <Image style={{ height: 200, width: 350, justifyContent: 'center', margin: 5 }} source={{ uri: passProps.imageUrl }} />

      </View>
      <Text style={{ paddingHorizontal: 5, fontSize: 16 }}>{passProps.content}</Text>
      <View style={{ height: 50 }}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  MainView: {
    flexDirection: 'row',
    alignItems: "center",
  }

});
