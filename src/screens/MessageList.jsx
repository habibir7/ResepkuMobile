import {React,useEffect,useState} from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';


const MessageList = () => {
    return(
        <View>
            <Image source={require('../img/maintenance.png')} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
        marginVertical: 120
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
export default MessageList;