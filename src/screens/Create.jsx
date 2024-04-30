import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Create = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Your Recipes</Text>
      <View style={styles.inputTitle}>
        <Ionicons name="book" color="grey" size={28} style={styles.icon} />
        <TextInput style={styles.input} placeholder='Title' />
      </View>
      <TextInput style={styles.textarea}  placeholder='Ingredients'/>
      <TextInput style={styles.inputPhoto} placeholder='Add Photo' />
      <TextInput style={styles.inputPhoto} placeholder='Category' />
	  <TouchableOpacity style={styles.PostButton} >
		<Text style={styles.PostButtonText}>Post</Text>
	  </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#EFC81A',
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 40,
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
	  borderRadius:8
  },
  input: {
     backgroundColor: 'white',
     width: '80%',
     borderRadius:8,
     color:"black",
     paddingHorizontal:8,
     alignItems:"flex-start",
    },
  textarea: {
	  marginTop:20,
	  height:200,
    backgroundColor: 'white',
    width: '80%',
    borderRadius:8,
    color:"black",
    paddingHorizontal:8,
    verticalAlign:'top'
  },
  inputPhoto: {
    marginTop:20,
    backgroundColor: 'white',
     width: '80%',
     borderRadius:8,
     color:"black",
     paddingHorizontal:8,
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
	  width:"60%",
	  borderRadius:8,
},
PostButtonText:{
	  fontSize:20,
	  fontWeight:"700",
    color:'white',
    margin: 5
  }
});

export default Create;
