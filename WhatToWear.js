import React, { useState } from 'react';
import { Button } from 'react-native';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, } from 'react-native';
import axios from 'axios';

const WhatToWear = ({route}) => {
    
    const { weather } = route.params;

    const tempInFahrenheit = Math.round(((weather.main.temp - 273.15) * 9) / 5 + 32);
    const [temperature, setTemperature] = useState(tempInFahrenheit);

    let outfitSuggestion = '';
    if (temperature > 75) {
        outfitSuggestion = 'Wear light clothing like shorts and a t-shirt.';
    } else if (temperature > 50) {
        outfitSuggestion = 'Consider wearing a jacket and pants.';
    } else {
        outfitSuggestion = 'Dress warmly with a coat, scarf, and gloves.';
    }

    let outfitSuggestion2 = '';
    if (weather.weather[0].main == "Rain")
        outfitSuggestion2 = 'It is raining! Make sure you are wearing a raincoat!';

    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Want to know what to wear?</Text>
            <Text>It is {temperature}°F out right now.</Text>
            <Text>Outfit Suggestion: {outfitSuggestion} {outfitSuggestion2}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 50,
      },
      center: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        fontSize: 25,
        height: 54, 
      },
      item: {
        padding: 10,
        fontSize: 25,
        height: 54,
      },
      header: {
        fontSize: 32,
        fontWeight: 'bold',
      },
      iconContainer: {
        backgroundColor: '#add8e6',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
      },
      icon: {
        width: 100,
        height: 100,
        marginVertical: 10,
      },
});

export default WhatToWear;
