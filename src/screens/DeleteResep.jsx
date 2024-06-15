import {React,useEffect,useState} from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const Delete = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { idresep } = route.params;
    const authData = useSelector(state => state.auth.data)
    const token = authData?.token

    const handleBack = () => {
      navigation.goBack();
  };

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const headers = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`
        }
      };

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://resepku-rouge.vercel.app/resep/${idresep}`);
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const deleteData = async () => {
        try{
            const response = await axios.delete(`https://resepku-rouge.vercel.app/resep/${idresep}`, headers);
            navigation.navigate('myProfile')
        } catch (error){
            console.error('Error Delete data', error)
        }
    }

    useEffect(()=> {
        console.log(data)
    },[data])
    return (
    <View style={styles.container}>
        <View style={styles.confirmation}>
        <Image source={require('../img/warn.jpg')} style={styles.image} resizeMode="cover" />
        <Text style={styles.textDelete}>Are you Want To Delete {data?.namaresep} ?</Text>
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={deleteData}>
                <Text style={styles.yesButton}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleBack}>
                <Text style={styles.noButton}>No</Text>
            </TouchableOpacity>
        
        </View>
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
    width: 150,
    height: 150,
},
contentContainer: {
  paddingTop: 20,
  paddingHorizontal: 40,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  backgroundColor: 'white',
  marginTop: -30, 
},
line: {
  width: 50,
  borderBottomWidth: 5,
  borderBottomColor: '#EEC302',
},
backButton: {
  position: 'absolute',
  top: 20,
  left: 20,
  padding: 10,
},
confirmation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
textDelete: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 30,
},
yesButton:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginHorizontal: 50,
    borderWidth: 2,
    borderColor: 'red',
    padding : 30
},
noButton:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginHorizontal: 50,
    borderWidth: 2,
    borderColor: 'blue',
    padding : 30
}
})



export default Delete;