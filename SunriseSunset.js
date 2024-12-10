import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';

const SunriseSunset = ({ route }) => {
  const { weather } = route.params;

  const tempInFahrenheit = Math.round(((weather.main.temp - 273.15) * 9) / 5 + 32);

  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [dayLength, setDayLength] = useState(null);
  const [firstLight, setFirstLight] = useState(null);
  const [lastLight, setLastLight] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSunriseSunset = async () => {
      try {
        const lat = weather.coord.lat;
        const lon = weather.coord.lon;
        const response = await fetch(`https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}`);
        const data = await response.json();
        
        if (data.status === "OK") {
          setSunrise(data.results.sunrise);
          setSunset(data.results.sunset);
          setDayLength(data.results.day_length);
          setFirstLight(data.results.first_light);
          setLastLight(data.results.last_light);
        } else {
          console.error("Error fetching sunrise/sunset data:", data.status);
        }
      } catch (error) {
        console.error("Error fetching sunrise/sunset data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSunriseSunset();
  }, [weather]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading sunrise and sunset times...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.header}>Sunrise and Sunset Times</Text>
        <View style={styles.iconContainer}>
          <Image
            source={{ uri: 'https://i.postimg.cc/028YfwrC/sunrise.png' }} // Replace with your sunrise icon URL
            style={styles.icon}
          />
          <Text style={styles.item}>Sunrise: {sunrise}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={{ uri: 'https://i.postimg.cc/2Sy4pNQb/sunset.png' }} // Replace with your sunset icon URL
            style={styles.icon}
          />
          <Text style={styles.item}>Sunset: {sunset}</Text>
        </View>
        <Text style={styles.underlinedText}>Other Information</Text>
        <Text style={styles.smallItem}>First Light: {firstLight}</Text>
        <Text style={styles.smallItem}>Last Light: {lastLight}</Text>
        <Text style={styles.smallItem}>Day Length: {dayLength}</Text>
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
    smallItem: {
        fontSize: 20,
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
    underlinedText: {
        textDecorationLine: 'underline',
        fontSize: 20,
        textAlign: 'center', 
        marginBottom: 10,  
    },
});

export default SunriseSunset;