import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen";
import TrainingScreen from "./src/screens/TrainingScreen";
import ExerciseDashboard from "./src/screens/ExerciseDashboard";
import ExerciseList from "./src/screens/ExerciseList";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Training" component={TrainingScreen}/>
        <Stack.Screen name="ExerciseDashBoard" component={ExerciseDashboard}/>
        <Stack.Screen name="ExerciseList" component={ExerciseList}/>
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
