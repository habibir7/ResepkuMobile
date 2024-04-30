import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const ForgotPassword = () => {
    const navigation = useNavigation();
    const navigateToResetPassword = () => {
        navigation.navigate('ResetPassword');
    };
  return (
    <View style={styles.container}>
        <View style={styles.MyInfo}>
        <Image style={styles.Image} source={require('../img/Lock.png')} />
        <Text style={styles.Name}>Forgot Password ?</Text>
        <Text style={styles.Namesmall}>We just need your registered e-mail addres to send your password reset</Text>
        <View style={styles.inputTitle}>
        <Ionicons name="person-outline" color="#EFC81A" size={28} style={styles.icon} />
        <TextInput style={styles.input} placeholder='examplexxx@gmail.com' />
      </View>
      <TouchableOpacity style={styles.PostButton}  onPress={() => navigateToResetPassword()}>
		<Text style={styles.PostButtonText}>Reset Password</Text>
	  </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    marginTop: 100,
    width: 200,
    height: 200,
    borderRadius: 50
  },
  container: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  MyInfo: {
    alignItems: 'center',
	paddingHorizontal:8,
	width:"100%",
	borderRadius:8,
    height: '100%',
  },
  Name: {
     margin: 15,
     fontSize: 20,
     fontWeight: '700',
     marginTop: 40,
     color: '#EEC302'
    },
  Namesmall: {
    fontSize: 10,
    textAlign: 'center',
    color: '#C4C4C4',
    width: '80%'
  },
  Detail: {
    padding: 25,
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between'
  },
  icon: {
    marginRight: 10,
  },
  inputTitle: {
    backgroundColor:"white",
    flexDirection: 'row',
    alignItems: 'center',
	paddingHorizontal:8,
	width:"80%",
	borderRadius:8,
    marginTop: 20
  },
  input: {
     backgroundColor: 'white',
     width: '80%',
     borderRadius:8,
     color:"black",
     paddingHorizontal:10,
     margin:10,
     alignItems:"flex-start",
    },
    PostButton:{
        marginTop:80,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#EFC81A",
        width:"85%",
        borderRadius:8,
  },
  PostButtonText:{
      fontSize:20,
      color:'white',
      margin: 5
    },
});

export default ForgotPassword;
