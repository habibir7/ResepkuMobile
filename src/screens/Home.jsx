import {React,useEffect,useState} from 'react';
import {View, Button, Text, StyleSheet,ScrollView, Image, TouchableOpacity} from 'react-native';
import Search from '../component/Searchbar';
import axios from 'axios';
import MyCarousel from '../component/Carousel';
import Carousel2 from '../component/Carousel2';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
    const navigateToPopular = () => {
        navigation.navigate('Popular');
    };
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.dataContainer}>
      <Search
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
      </View>
      <View style={{marginBottom:20}}>
      <Text style={styles.title}>Popular Recipes</Text>
      <Text style={{fontWeight:'bold'}}>Popular Check</Text>
      <MyCarousel/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between', marginRight:20}}>  
        <Text style={styles.title}>New Recipes</Text>
        <TouchableOpacity onPress={() => navigateToPopular()}>
        <Text style={{color:'#6D61F2',marginVertical:20}}>More Info</Text>
        </TouchableOpacity>
      </View>
    <View style={{ flexDirection: 'row', marginTop: 17,justifyContent: 'space-evenly', marginRight:10}}>
    <View style={styles.imageContainer}>
        <Image source={require('../img/img1.png')} style={styles.logo} />
        <Text style={styles.caption}>Soup</Text>
    </View>
    <View style={styles.imageContainer}>
        <Image source={require('../img/img2.png')} style={styles.logo} />
        <Text style={styles.caption}>Salad</Text>
    </View>
    <View style={styles.imageContainer}>
        <Image source={require('../img/img3.png')} style={styles.logo} />
        <Text style={styles.caption}>Main Course</Text>
    </View>
    <View style={styles.imageContainer}>
        <Image source={require('../img/img4.png')} style={styles.logo} />
        <Text style={styles.caption}>Dessert</Text>
    </View>
</View>
    <View>
      <Text style={styles.title}>Popular Recipes</Text>
    </View>
    <Carousel2 />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 20,
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
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  logo: {
    width: 65,
    height: 65,
    resizeMode: 'cover',
  },
  caption: {
    marginTop: 5,
    fontSize: 10,
    textAlign: 'center',
  },
  title: {
    fontSize:20,
    fontWeight:'100',
    marginVertical:10,
  }
});

export default Home;
