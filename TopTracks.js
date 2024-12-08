import React, { useState } from 'react';
import { Button } from 'react-native';
import { FlatList, StyleSheet, Text, View, TouchableOpacity,  } from 'react-native';

const TopTracks = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.header} >Top Tracks Page</Text>
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

export default TopTracks;