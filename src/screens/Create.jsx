import React,{useState,useEffect} from 'react';
import {Image, PermissionsAndroid, ScrollView,StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from "react-native-image-picker";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Picker } from '@react-native-picker/picker';

const base_url = "https://resepku-rouge.vercel.app/"




const Create = () => {
  const [photo,setPhoto] = useState(null)
  const [res,setRes] = useState(null)
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [namaresep, setnamaresep] = useState('');
  const [komposisi, setkomposisi] = useState('');


  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(base_url + 'kategori');
      console.log(response.data.data)
      setCategories(response.data.data); 
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const authData = useSelector(state => state.auth.data)
  const token = authData?.token
  const idusers = authData?.idusers

  console.log(token)
  useEffect(()=>{
    res && navigation.navigate("ListRecipes")
  },res)

  let uploadRecipe = async () => {
    try {
      const formData = new FormData();
      formData.append('namaresep', namaresep);
      formData.append('komposisi', komposisi);
      formData.append('idkategori', selectedCategory);
      formData.append('idusers', idusers)
      formData.append('foto', {
        uri: photo.uri,
        name: photo.fileName,
        type: photo.type
      });

      const headers = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        }
      };

      const response = await axios.post(base_url + "resep", formData, headers);
      console.log(response.data);
      navigation.navigate('Home')
    } catch (error) {
      console.error('Error posting recipe:', error);
    }
  }
  const requestPermission = async ()=> {
    try{
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA, {
          title: 'App Camera Permission',
          message: 'this app need camera permission',
          buttonPositive: 'Oke',
          buttonNegative: 'Decline'
        }
      )

      if(granted === PermissionsAndroid.RESULTS.GRANTED){
        console.log("success camera permission")
      } else{
        console.log("failed camera permission")
        console.log(PermissionsAndroid.RESULTS.GRANTED)
      }
    } catch (err){
      console.log("failed camera permission")
      console.log(PermissionsAndroid.RESULTS.GRANTED)
    }
  }

  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, res => {
      console.log('response camera ', res);
      if (res.didCancel) {
        console.log('user cancel camera');
      } else if (res.error) {
        console.log('camera error', res.errorMessage);
      } else {
        console.log('camera success');
        console.log(res);
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
      console.log('response gallery ', res);
      if (res.didCancel) {
        console.log('user cancel gallery');
      } else if (res.error) {
        console.log('gallery error', res.errorMessage);
      } else {
        console.log('gallery success');
        console.log(res);
        setPhoto(res.assets[0]);
      }
    });
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  return (
    <ScrollView >
    <View style={styles.container}>
      <Text style={styles.title} onPress={()=>requestPermission()} >Add Your Recipes</Text>
      <View style={styles.inputTitle}>
        <Ionicons name="book" color="grey" size={28} style={styles.icon} />
        <TextInput style={styles.input} placeholder='Title' onChangeText={text => setnamaresep(text)}/>
      </View>
      <TextInput style={styles.textarea}  placeholder='Ingredients' onChangeText={text => setkomposisi(text)}/>
      <TouchableOpacity style={{width:"100%",alignItems:'center'}} onPress={()=>cameraLaunch()}>
		<Text style={styles.inputPhoto}>Add Photo</Text>
	  </TouchableOpacity>
    <TouchableOpacity style={{width:"100%",alignItems:'center'}} onPress={()=>galleryLaunch()} >
		<Text style={styles.inputPhoto}>Add Photo From Galerry</Text>
	  </TouchableOpacity>
    {
      photo ? 
      <Image style={{height:200,width:200}} source={{uri:photo.uri}} />
      :null
    }
    <View>
      <Picker
        style={{height:40,width:320,backgroundColor:'white',marginVertical:20}}
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

export default Create;
