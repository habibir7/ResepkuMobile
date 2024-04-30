import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Create = () => {
  return (
    <View style={styles.container}>
      <View style={styles.MyInfo}>
        <Image style={styles.Image} source={require('../img/tmb.png')} />
        <Text style={styles.Name}> My Name</Text>
      </View>
      <View style={styles.ProfileDetail}>
      <TouchableOpacity>
        <View style={styles.Detail}>
            <View style={{flexDirection:'row'}}>
            <Ionicons name="person-outline" color="#EEC302" size={28} style={styles.icon} />
            <Text>Edit Profile</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color="grey" size={28} style={styles.icon} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.Detail}>
            <View style={{flexDirection:'row'}}>
            <Ionicons name="ribbon-outline" color="#EEC302" size={28} style={styles.icon} />
            <Text>My Recipes</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color="grey" size={28} style={styles.icon} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.Detail}>
            <View style={{flexDirection:'row'}}>
            <Ionicons name="bookmark-outline" color="#EEC302" size={28} style={styles.icon} />
            <Text>Saved Recipes</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color="grey" size={28} style={styles.icon} />
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.Detail}>
            <View style={{flexDirection:'row'}}>
            <Ionicons name="thumbs-up-outline" color="#EEC302" size={28} style={styles.icon} />
            <Text>Liked Recipes</Text>
            </View>
            <Ionicons name="chevron-forward-outline" color="grey" size={28} style={styles.icon} />
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  container: {
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  MyInfo: {
    backgroundColor:"#EEC302",
    alignItems: 'center',
	paddingHorizontal:8,
	width:"100%",
	borderRadius:8,
    height: 300,
    justifyContent:'center'
  },
  Name: {
     margin: 15,
     fontSize: 20,
     fontWeight: '700',
     color: 'white'
    },
  ProfileDetail: {
	width: '100%',
    padding: 10,
    borderRadius: 20,
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
});

export default Create;
