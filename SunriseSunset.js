import React, { useState } from 'react';
import { Button } from 'react-native';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, } from 'react-native';
import axios from 'axios';

const SunriseSunset = ({route}) => {
    
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
            <Text style={styles.text}>Welcome to the "Sunrise Sunset" page!</Text>
            <Text>Temperature: {temperature}°F</Text>
            <Text>Outfit Suggestion: {outfitSuggestion} {outfitSuggestion2}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
});

export default SunriseSunset;
