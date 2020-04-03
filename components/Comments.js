import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Comments() {
  return (
      <View style={ styles.container }>
        <Text style={ styles.nom }>Jesappel GROOT :</Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nisi nunc, facilisis a metus at, interdum vehicula magna.</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height:90,
        padding: 5,
        marginBottom: 20
    },
    nom: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 5
    }
});
