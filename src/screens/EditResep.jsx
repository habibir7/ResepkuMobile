import React, { useState, useEffect } from 'react';
import { Image, PermissionsAndroid, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import { useRoute, useNavigation } from '@react-navigation/native';

const base_url = "https://resepku-rouge.vercel.app/";

const Update = () => {
  const [photo, setPhoto] = useState(null);
  const [res, setRes] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [namaresep, setNamaresep] = useState('');
  const [komposisi, setKomposisi] = useState('');
  const route = useRoute();
  const navigation = useNavigation();
  const { idresep } = route.params;
  const [data, setData] = useState(null);

  const authData = useSelector(state => state.auth.data);
  const token = authData?.token;
  const idusers = authData?.idusers;

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${base_url}resep/${idresep}`);
      const recipeData = response.data.data;
      setData(recipeData);
      setNamaresep(recipeData.namaresep);
      setKomposisi(recipeData.komposisi);
      setSelectedCategory(recipeData.idkategori);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${base_url}kategori`);
      setCategories(response.data.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    if (res) {
      navigation.navigate('myResep');
    }
  }, [res, navigation]);

  const uploadRecipe = async () => {
    try {
      const formData = new FormData();
      formData.append('namaresep', namaresep);
      formData.append('komposisi', komposisi);
      formData.append('idkategori', selectedCategory);
      formData.append('idusers', idusers);
      if (photo) {
        formData.append('foto', {
          uri: photo.uri,
          name: photo.fileName,
          type: photo.type,
        });
      }

      const headers = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.put(`${base_url}resep/${idresep}`, formData, headers);
      setRes(response.data);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA, {
          title: 'App Camera Permission',
          message: 'This app needs camera permission',
          buttonPositive: 'OK',
          buttonNegative: 'Decline'
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission granted");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.log("Camera permission error", err);
    }
  };

  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      if (res.didCancel) {
        console.log('User cancelled camera');
      } else if (res.error) {
        console.log('Camera error', res.errorMessage);
      } else {
        setPhoto(res.assets[0]);
      }
    });
  };

  const galleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User cancelled gallery');
      } else if (res.error) {
        console.log('Gallery error', res.errorMessage);
      } else {
        setPhoto(res.assets[0]);
      }
    });
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title} onPress={requestPermission}>Update Your Recipes</Text>
        <View style={styles.inputTitle}>
          <Ionicons name="book" color="grey" size={28} style={styles.icon} />
          <TextInput 
            style={styles.input} 
            placeholder='Nama Resep' 
            value={namaresep} 
            onChangeText={text => setNamaresep(text)}
          />
        </View>
        <TextInput 
          style={styles.textarea}  
          placeholder='Ingredients' 
          value={komposisi} 
          onChangeText={text => setKomposisi(text)}
        />
        <TouchableOpacity style={{width: "100%", alignItems: 'center'}} onPress={cameraLaunch}>
          <Text style={styles.inputPhoto}>Add Photo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: "100%", alignItems: 'center'}} onPress={galleryLaunch}>
          <Text style={styles.inputPhoto}>Add Photo From Gallery</Text>
        </TouchableOpacity>
        {photo ? 
          <Image style={{height: 200, width: 200}} source={{uri: photo.uri}} /> 
          : data?.foto && <Image style={{height: 200, width: 200}} source={{uri: data.foto}} />
        }
        <View>
          <Picker
            style={{height: 40, width: 320, backgroundColor: 'white', marginVertical: 20}}
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) => handleCategoryChange(itemValue)}
          >
            <Picker.Item label="Select a category" value={null} />
            { categories.map(category => (
              <Picker.Item key={category.idkategori} label={category.nama} value={category.idkategori} />
            ))}
          </Picker>
        </View>
        <TouchableOpacity style={styles.PostButton} onPress={uploadRecipe}>
          <Text style={styles.PostButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#EFC81A',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 40,
  },
  container: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  inputTitle: {
    backgroundColor:"white",
    flexDirection: 'row',
    alignItems: 'center',
	  paddingHorizontal:8,
	  width:"80%",
	  borderRadius:8
  },
  input: {
     backgroundColor: 'white',
     width: '80%',
     borderRadius:8,
     color:"black",
     paddingHorizontal:8,
     alignItems:"flex-start",
    },
  textarea: {
	  marginTop:20,
	  height:200,
    backgroundColor: 'white',
    width: '80%',
    borderRadius:8,
    color:"black",
    paddingHorizontal:8,
    verticalAlign:'top'
  },
  inputPhoto: {
    marginTop:20,
    backgroundColor: 'white',
     width: '80%',
     borderRadius:8,
     color:"black",
     paddingHorizontal:8,
     textAlign:'center',
     paddingVertical:10
  },
  icon: {
    marginRight: 10,
  },
  PostButton:{
	  marginTop:20,
	  height:50,
	  justifyContent:'center',
	  alignItems:'center',
	  backgroundColor:"#EFC81A",
	  width:"60%",
	  borderRadius:8,
},
PostButtonText:{
	  fontSize:20,
	  fontWeight:"700",
    color:'white',
    margin: 5
  }
});

export default Update;
