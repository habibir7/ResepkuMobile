import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const navigateToRegister = () => {
        navigation.navigate('Register');
    };
    const navigateToForgotPassword = () => {
        navigation.navigate('ForgotPassword')
    };
    const navigateToHome = () => {
        navigation.navigate('Home');
    };
  return (
    <View style={styles.container}>
        <View style={styles.Top}>
            <Image style={styles.Image} source={require('../img/tmb.png')}/>
        </View>
      <Text style={styles.title}>Welcome !</Text>
      <Text style={{fontSize:10,color:'#C4C4C4'}}>Log in to your existing account.</Text>
      <View style={styles.inputTitle}>
        <Ionicons name="person-outline" color="#EFC81A" size={28} style={styles.icon} />
        <TextInput style={styles.input} placeholder='examplexxx@gmail.com' />
      </View>
      <View style={styles.inputTitle}>
        <Ionicons name="lock-closed-outline" color="#EFC81A" size={28} style={styles.icon} />
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Password' />
      </View>
      <TouchableOpacity style={styles.forgotpasswordtext} onPress={() => navigateToForgotPassword()}>
        <Text style={styles.forgotpassword}>Forgot Password ?</Text>
      </TouchableOpacity>
	  <TouchableOpacity style={styles.PostButton} onPress={() => navigateToHome()}>
		<Text style={styles.PostButtonText}>Login</Text>
	  </TouchableOpacity>
      <View style={styles.register}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigateToRegister()}>
            <Text style={styles.registertext}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#EFC81A',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
  },
  container: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
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
  Top: {
	width:'100%',
    height: 250,
  },
  Image: {
    width:'100%',
    height: 250
  },
  icon: {
    marginRight: 10,
  },
  PostButton:{
	  marginTop:20,
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
  forgotpassword:{
    fontSize:10,
  },
  forgotpasswordtext:{
    alignSelf:'flex-end',
    marginRight:40,
    marginTop:10
  },
  register: {
    flexDirection:'row'
  },
  registertext: {
    color: '#EFC81A',
  }
});

export default Login;
