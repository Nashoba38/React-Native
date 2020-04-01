import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Rating } from 'react-native-elements';



export default function Place() {
    
    return (
        
            <View style={ styles.placeContainer }>
                <View style={ styles.placeContainerImage }>
                    <Image
                        style={styles.principaleImage}
                        source={require('../assets/plage.jpeg')}
                    />
                </View>
                <View style={ styles.textContainer }>
                    <View style={ styles.headerContainer }>
                        <Text style={ styles.titre }>Nom du Lieu</Text>
                        <Image
                            style={styles.image}
                            source={require('../assets/star.png')}
                        />
                    </View>
                    <Text>Description : </Text>
                    <Text>Adresse : </Text>
                    <Rating style={styles.rating}
                        type='custom'
                        startingValue={3.3}
                        imageSize={20}
                        tintColor='#ffe6ff'
                        ratingColor='orange'
                        />
                    {/* <Rating startingValue= {4}
                        
                        ratingColor='orange'
                        style={styles.rating}/> */}
                </View>
            </View>
    );
    
}



const styles = StyleSheet.create({
    placeContainer: {
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#ffe6ff',
        flexDirection: 'row',
        alignItems:'center',
        height: 130,
        borderBottomColor: '#990099',
        borderBottomWidth: 1,
        borderTopColor: '#990099',
        borderTopWidth: 1,
    },
    titre: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    headerContainer: {
        paddingStart: 30,
        paddingEnd: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems:'flex-end',
        justifyContent: 'space-between',
    },
    image: {
        height: 30,
        width: 30
    },
    principaleImage: {
        width: 90,
        resizeMode: "contain",
    },
    placeContainerImage: {
        flex: 0
    },
    textContainer: {
        paddingStart: 10,
        flex: 1,
        justifyContent:'space-evenly'
    },
    rating: {
        alignItems:'flex-end',
        paddingEnd: 10
    }
});
