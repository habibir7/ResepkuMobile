import {React,useEffect,useState} from 'react';
import {View, Button, Text, StyleSheet,ScrollView,Image} from 'react-native';
import axios from 'axios';

const Home = ({navigation}) => {
  const base_url = 'https://resepku-rouge.vercel.app'
  const  [data,setData] = useState([])
  async function getData(){
    try{
            let res = await axios.get(`${base_url}/resep`)
            console.log(res.data.data)
            setData(res.data.data)
    }catch(err){
            console.log(err)
    }
}

useEffect(()=>{
    getData()
},[])

useEffect(()=> {
    console.log(data)
},[data])
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Test</Text>
      <View style={styles.dataContainer}>
        {data.map((item, index) => (
          <View style={styles.item} key={index}>
            <Text>Resep : {item.nama_resep}</Text>
            <Text>Komposisi : {item.komposisi}</Text>
            <Text>Author : {item.author}</Text>
            {item.foto ? (<Image source={{ uri : item.foto}} style={{width:100,height:100,}}/>) : 
           ( <Image source={require('../img/tmb.png')} style={{width:100,height:100,}}/>)}
            
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataContainer: {
    flexDirection: 'column',
    alignItems: 'stretch', // Wrap items to next line if they exceed the container width
  },
  item: {
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default Home;
