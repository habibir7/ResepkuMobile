import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList } from 'react-native';
import axios from 'axios';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const Carousel2 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

    const fetchData = async () => {
        try {
            const response = await axios.get('https://resepku-rouge.vercel.app/resep');
            const shuffledData = shuffleArray(response.data.data);
            setData(shuffledData.slice(0, 5)); // Limit to show only 5 items
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            {item.foto ?
          <Image source={{ uri: item.foto }} style={styles.image} /> 
          :
          <Image source={require('../img/tmb.png')} style={styles.image} />
          }
            <View style={styles.cardContent}>
                <Text style={styles.title}>{item.nama_resep}</Text>
                <Text style={styles.caption}>{item.nama_resep} with {item.komposisi}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.idresep}
            horizontal={true} // Set to true for horizontal layout
            showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
        />
    );
};

const styles = StyleSheet.create({
    card: {
        width: viewportWidth * 0.7,
        marginHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardContent: {
        padding: 10,
    },
    image: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    caption: {
        fontSize: 11,
        color: '#555',
    },
});

export default Carousel2;
