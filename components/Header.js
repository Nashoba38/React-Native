import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
      <View style={ styles.container }>
        <Text style={ styles.titre }>Liste des lieux</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: '#ccff99',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 100,
        borderBottomColor: 'yellow',
        borderBottomWidth: 2
    },
    titre: {
        fontSize: 24,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    }
});
