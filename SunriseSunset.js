import React, { useState } from 'react';
import { Button } from 'react-native';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, } from 'react-native';
import axios from 'axios';

const SunriseSunset = ({route}) => {
    
    const { weather } = route.params;

    const tempInFahrenheit = Math.round(((weather.main.temp - 273.15) * 9) / 5 + 32);
    const [temperature, setTemperature] = useState(tempInFahrenheit);

    const sunriseTime = weather.sys.sunrise;
    const sunsetTime = weather.sys.sunset;
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the "Sunrise Sunset" page!</Text>
            <Text>Temperature: {temperature}°F</Text>
            <Text>Sunrise: {sunriseTime}</Text>
            <Text>Sunset: {sunsetTime}</Text>
            <Text></Text>
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
