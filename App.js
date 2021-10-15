import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import HomeScreen from './screens/HomeScreen'


const App = () => {
  return (
    <ScrollView style={appStyle.app}>
      <HomeScreen />
    </ScrollView>
  );
}

const appStyle = StyleSheet.create({
  app: {
    marginLeft: 10,
    marginRight: 10
  }
})

export default App;