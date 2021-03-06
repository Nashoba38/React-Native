import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


// or any pure javascript modules available in npm
import { Header } from './components/Header';

export default function App() {
  return (
    <View>
      <View>
        <Header />
      </View>

      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change code in the editor and watch it change on your phone! Save to
          get a shareable url.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
