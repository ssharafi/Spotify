import React, { useState } from 'react';
import { Button } from 'react-native';
import { FlatList, StyleSheet, Text, View, TouchableOpacity,  } from 'react-native';

const Home = ({ navigation }) => {
         
  return (
    <View style={styles.container}>
        <Text style={styles.header} >Profile:</Text>
        <Button title="Top Tracks" onPress={() => navigation.navigate('Top Tracks')} />
        <Button title="Top Artists" onPress={() => navigation.navigate('Top Artists')}/>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
     paddingTop: 50,
     paddingBottom: 50
    },
    item: {
      padding: 10,
      fontSize: 25,
      height: 54,
    },
    border: {
      borderWidth: 1,
      borderColor: "gray",
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
    }
  });  

export default Home;