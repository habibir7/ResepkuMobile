import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const ResepListUser = () => {
    const navigation = useNavigation();
    const navigateToDetail = (idresep) => {
        navigation.navigate('Detail', { idresep });
    };

    const navigateToUpdate = (idresep) => {
        navigation.navigate('updateResep', { idresep });
    };

    const navigateToDelete = (idresep) => {
        navigation.navigate('deleteResep', { idresep });
    };

    const dispatch = useDispatch()
    const authData = useSelector(state => state.auth.data)
    const idusers = authData.userData.idusers
    let token = authData.token


    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            console.log(idusers)
            const response = await axios.get(`https://resepku-rouge.vercel.app/resep/users/${idusers}`,{
                headers: {
                    "Authorization" : `Bearer ${token}`
                }
            })
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
                    <Text style={styles.title}>{item.namaresep}</Text>
                    <Text style={styles.author}>{item.kategori}</Text>
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigateToUpdate(item.idresep)}>
                    <Text style={styles.editText}>Edit Recipe</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToDelete(item.idresep)}>
                    <Text style={styles.deleteText}>Delete Recipe</Text>
                </TouchableOpacity>
                </View>
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
        marginTop: 50,
        flex: 1,
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
    editText: {
        borderWidth: 1,
        borderColor: 'yellow',
        backgroundColor: 'yellow',
        padding:5,
        paddingHorizontal:15,
        color: 'white'
    },
    deleteText:{
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red',
        padding:5,
        color: 'white'
    }
});


export default ResepListUser;
