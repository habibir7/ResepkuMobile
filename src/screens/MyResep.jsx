import {React,useEffect,useState} from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useRoute,useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import ResepListUser from '../component/ResepListUser';
import Search from '../component/Searchbar';

const MyResep = ({navigation}) => {
    const handleBack = () => {
        navigation.goBack();
    };
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
            <ResepListUser />
            </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 999,
    },
});

export default MyResep;