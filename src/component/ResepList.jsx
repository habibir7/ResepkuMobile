import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const ResepList = () => {
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

    const [isLiked, setIsLiked] = useState(false);
    const handleBack = () => {
        navigation.goBack();
    };

    const handleLike = (idresep) => {
        setData(prevData => prevData.map(recipe =>
            recipe.idresep === idresep ? { ...recipe, isLiked: !recipe.isLiked } : recipe
        ));
    };

    const handleBookmark = (idresep) => {
        setData(prevData => prevData.map(recipe =>
            recipe.idresep === idresep ? { ...recipe, isBookmarked: !recipe.isBookmarked } : recipe
        ));
    };

    useEffect(()=> {
    },[data])

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigateToDetail(item.idresep)}>
        <View style={styles.item}>
            <View style={styles.rowContainer}>
                {item.foto ? (
                    <Image source={{ uri: item.foto }} style={styles.image} />
                ) : (
                    <Image source={require('../img/tmb.png')} style={styles.image} />
                )}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.nama_resep}</Text>
                    <Text style={styles.author}>by {item.author}</Text>
                </View>
                <TouchableOpacity onPress={() => handleLike(item.idresep)}>
                    <Image
                        source={item.isLiked ? require('../img/liked.png') : require('../img/notliked.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleBookmark(item.idresep)}>
                    <Image
                        source={item.isBookmarked ? require('../img/bookmarked.png') : require('../img/notbookmarked.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </TouchableOpacity>
    );
    

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.idresep}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 999,
    },
    item: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 1
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    author: {
        fontSize: 14,
        color: 'gray',
    },
    icon: {
        width: 40,
        height: 40,
    },
});


export default ResepList;
