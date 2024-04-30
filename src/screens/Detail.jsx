import {React,useEffect,useState} from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const Detail = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { idresep } = route.params;
    const handleBack = () => {
      navigation.goBack();
  };

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://resepku-rouge.vercel.app/resep/${idresep}`);
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(()=> {
        console.log(data)
    },[data])
    return (
      <View style={styles.container}>
      <View style={styles.imageContainer}>
          {data.foto ? <Image source={{ uri: data.foto }} style={styles.image} resizeMode="cover" /> :
          <Image source={require('../img/tmb.png')} style={styles.image} resizeMode="cover" />
          }
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
              <Ionicons name="arrow-back-outline" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.overlay}>
                    <Text style={styles.namaResep}>{data.namaresep}</Text>
                    <Text style={styles.author}>By : {data.author}</Text>
          </View>
      </View>
      <View style={styles.contentContainer}>
          <Text style={{fontSize:20}}>Ingredients :</Text>
      </View>
      <View style={styles.ingredient}>
      {data?.komposisi?.split(',').map((item, index) => (
                        <Text key={index} style={{fontWeight:'700',backgroundColor: '#FAF7ED',}}>- {item.trim()}</Text>
                    ))}
      </View>
  </View>
    );
   
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
imageContainer: {
    flex: 2.75,
    justifyContent: 'flex-end',
},
image: {
    width: '100%',
    height: '100%',
},
contentContainer: {
    paddingTop: 40,
    paddingLeft: 40,
    borderBottomWidth: 5,
    borderBottomColor:'yellow',
},
backButton: {
  position: 'absolute',
  top: 20,
  left: 20,
  padding: 10,
},
ingredient: {
  padding: 40,
  
},
overlay: {
  position: 'absolute',
  bottom: 20,
  left: 20,
},
namaResep: {
  fontSize: 24,
  fontWeight: 'bold',
  color: 'white',
  textShadowColor: 'black',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 2,
  marginBottom: 5,
},
author: {
  fontSize: 18,
  color: 'white',
  textShadowColor: 'black',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 2,
},
})



export default Detail;