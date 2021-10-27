import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function SettingScreen(props) {
  return (
    <View style={styles.container}>
      <Text>後續新增</Text>
      <Button title="回前頁" onPress={() => props.navigation.pop()}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

export default function ViewStyleScreen(props) {
  return (
    <View style={styles.container}>
      <Text>後續新增</Text>
      <Button title="回前頁" onPress={() => props.navigation.pop()}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

export default function AttendanceScreen(props) {
  return (
    <View style={styles.container}>
      <Text>後續新增</Text>
      <Button title="回前頁" onPress={() => props.navigation.pop()}></Button>
      <StatusBar style="auto" />
    </View>
  );
}
export default function Shift(props) {
  return (
    <View style={styles.container}>
      <Text>後續新增</Text>
      <Button title="回前頁" onPress={() => props.navigation.pop()}></Button>
      <StatusBar style="auto" />
    </View>
  );
}
export default function LouOut(props) {
  return (
    <View style={styles.container}>
      <Text>後續新增</Text>
      <Button title="回前頁" onPress={() => props.navigation.pop()}></Button>
      <StatusBar style="auto" />
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
