import React, { useState } from 'react';
import { StyleSheet, Text, View, Picker, TextInput, TouchableOpacity, Image} from 'react-native';
import { GOOGLE_PLACES_API_KEY } from "react-native-dotenv";
import PlacesInput from "react-native-places-input";
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import PickImage from './PickImage';


const handlePlaceSelect = place => {
  const name = place.result.name;
  const coords = {
    latitude: place.result.geometry.location.lat,
    longitude: place.result.geometry.location.lng
  }
   
  console.log(place);
  console.log("name: ", name);
  console.log("coords: ", coords);
}

export default function AddPlace() {
  const [selectedValue, setSelectedValue] = useState("");
  const [value, onChangeText] = React.useState('');
  
  const [selectedImage, setSelectedImage] = useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Nous avons besoin d'accéder à votre galerie photo !");
      return;
    }

    let pickerResult = await ImagePicker.requestCameraRollPermissionsAsync();
    console.log(pickerResult);
    setSelectedImage(pickerResult.uri);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.titre}>
            <Text>Trouvez un lieu :</Text>
          </View>
          <View style={styles.input}>
            <PlacesInput
            googleApiKey={GOOGLE_PLACES_API_KEY}
            searchRadius={1000} // meters
            searchLatitude={45.899362}
            searchLongitude={6.129552}
            queryTypes="establishment"
            placeHolder={"Cherchez un lieu"}
            onSelect={handlePlaceSelect}
            />
          </View>
        </View>
        <View style={styles.contentPlace}>
            <Text>Quel type de lieu ?</Text>
        
            <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150, backgroundColor:'#b3d9ff' }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Bar" value="bar" />
              <Picker.Item label="Restaurant" value="restaurant" />
              <Picker.Item label="Discothèque" value="discothèque" />
            </Picker>
        </View>
        <View style={styles.contentPlace2}>
            <Text>Quel niveau de prix ?</Text>
        
            <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150, backgroundColor:'#b3d9ff' }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Petit budget" value="petit_budget" />
              <Picker.Item label="Budget normal" value="budget_normal" />
              <Picker.Item label="Budget luxe" value="budget_luxe" />
            </Picker>
        </View>
        <View style={styles.content}>
          <View style={styles.titre}>
            <Text>Description :</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal:10 }}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
          </View>
        </View>
        <View style={styles.content}>
          <PickImage />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    flex:1,
    backgroundColor: '#ccddff',
    flexDirection:'column'
  },
  content: {
    marginVertical:20
  },
  contentPlace: {
    flexDirection:'row',
    marginTop:60,
    justifyContent:'space-between',
    alignItems:'center'
  },
  contentPlace2: {
    flexDirection:'row',
    marginTop:30,
    justifyContent:'space-between',
    alignItems:'center'
  },
  logo: {
    width: 300,
    height: 160,
    marginBottom: 20
  },
  instruction: {
    color: '#888',
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 10
  }
});