import React from 'react';
import Place from './components/Place';
import AddPlace from './components/AddPlace';
import PlacePage from './components/PlacePage';
import PickImage from './components/PickImage';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Liste des Lieux" component={Place} />

        <Stack.Screen name="PlacePage" component={PlacePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:'#ccff99',
      flex:1
  }
});


