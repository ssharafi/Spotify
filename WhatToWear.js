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
    if (weather.weather[0].main === "Rain") {
        outfitSuggestion2 = 'It is currently raining! Make sure you are also wearing a raincoat!';
    } else if (weather.weather[0].main === "Snow") {
        outfitSuggestion2 = 'It is currently snowing! Make sure you are also wearing your snowboots!';
    }


    
    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.header}>What to wear!</Text>
                <Text style={styles.item}>It is {temperature}°F out right now.</Text>
                <Text style={styles.item}>Outfit Suggestion: {outfitSuggestion} {outfitSuggestion2}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 50,
        flex: 1, 
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        flexWrap: 'wrap', 
        width: '100%', 
    },
    item: {
        fontSize: 25,
        textAlign: 'center', 
        marginBottom: 10, 
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10, 
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
