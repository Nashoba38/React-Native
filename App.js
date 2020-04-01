import React from 'react';
import Header from './components/Header';
import Place from './components/Place';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
<View>
    <Header />
    
    {/* Quand j'aurais avancé, faire une boucle pour afficher les "Place" */}
    <Place />
    <Place />
    <Place />
    <Place />
    <Place />
    <Place />
</View>
  );
}


