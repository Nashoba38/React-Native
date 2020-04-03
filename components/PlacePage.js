import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Rating } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Comments from './Comments'

export default function PlacePage() {
  return (
      <View>
            <ScrollView>
                <View style={ styles.container }>
                    <Text style={ styles.titre }>Fiche du lieu</Text>
                </View>
                <View style={ styles.placeContainerImage }>
                    <Image
                        style={styles.principaleImage}
                        source={require('../assets/plage.jpeg')}
                    />
                </View>
                <View style={ styles.containerTexts }>
                    <Text style={ styles.texts }>Description :</Text>
                    <Text style={ styles.texts }>Tarifs :</Text>
                    <Text style={ styles.texts }>Horaires :</Text>
                </View>
                <View style={styles.notesContainer}>
                    <View style={styles.ratingContainer}>
                        <Text style={ styles.texts }>Note générale :</Text>
                        <Rating style={styles.rating}
                                        type='custom'
                                        startingValue={3.3}
                                        imageSize={20}
                                        tintColor='#ccddff'
                                        ratingColor='orange'
                                        />
                    </View>
                    <View style={styles.ratingContainer}>
                        <Text style={ styles.texts }>Qualité de services/produits :</Text>
                        <Rating style={styles.rating}
                                        type='custom'
                                        startingValue={3.3}
                                        imageSize={20}
                                        tintColor='#ccddff'
                                        ratingColor='orange'
                                        />
                    </View>
                    <View style={styles.ratingContainer}>
                        <Text style={ styles.texts }>Ambiance/Accueil :</Text>
                        <Rating style={styles.rating}
                                        type='custom'
                                        startingValue={3.3}
                                        imageSize={20}
                                        tintColor='#ccddff'
                                        ratingColor='orange'
                                        />
                    </View>
                </View>
                <View style={styles.commentairesContainer}>
                    <View style={ styles.commentTitleContainer }>
                        <Text style={ styles.titre }>Commentaires</Text>
                    </View>
                    <View>
                        <Comments/>
                        <Comments/>
                        <Comments/>
                        <Comments/>

                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableHighlight style={styles.button1} >
                    <Text style={styles.textButton}> Ajouter en Favori </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button2} >
                    <Text style={styles.textButton}> Ajouter un commentaire </Text>
                </TouchableHighlight>
            </View>
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
    },
    principaleImage: {
        resizeMode: "contain",
    },
    placeContainerImage: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    containerTexts: {
        paddingStart: 20
    },
    texts: {
        paddingVertical: 10,
        fontWeight: 'bold'
    },
    notesContainer: {
        paddingVertical: 10,
        backgroundColor: '#ccddff'
    },
    ratingContainer: {
        backgroundColor: '#ccddff',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal: 30
    },
    commentTitleContainer: {
        marginVertical: 20,
        backgroundColor:'yellow',
        height: 80,
        alignItems:'center',
        paddingTop: 20
    },
    commentairesContainer: {
        backgroundColor: '#ffffcc'
    },
    buttonContainer: {
        height: 60,
        position:'absolute',
        flexDirection:'row',
        bottom: 0,
        justifyContent:'center',
        flex:1,
        right:0,
        left:0
    },
    button1: {
        alignContent: "center",
        backgroundColor: "#0080ff",
        flex:1,
        borderRightWidth:2,
        borderRightColor:'black'
    },
    button2: {
        alignContent: "center",
        backgroundColor: "#0080ff",
        flex:1,
        borderRightWidth:2,
        borderRightColor:'black'
    },
    textButton: {
        textAlign: 'center',
        fontSize:18,
        paddingVertical:5,
        paddingHorizontal:30,
    }
});
