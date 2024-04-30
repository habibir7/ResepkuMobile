import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const MyCarousel = () => {
    const navigation = useNavigation();
    const navigateToDetail = (idresep) => {
        navigation.navigate('Detail', { idresep });
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://resepku-rouge.vercel.app/resep');
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(()=> {
        console.log(data)
    },[data])
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigateToDetail(item.idresep)}>
        <View style={styles.item}>
            {item.foto ? (<Image source={{ uri : item.foto}} style={styles.image}/>) : 
           ( <Image source={require('../img/tmb.png')} style={styles.image}/>)}
            <Text style={styles.title}>{item.nama_resep}</Text>
        </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.idresep}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    item: {
        width: viewportWidth * 0.7,
        height: viewportHeight * 0.3,
        marginHorizontal: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    title: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default MyCarousel;