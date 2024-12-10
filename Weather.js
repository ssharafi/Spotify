import React, { useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import axios from 'axios';

const Weather = ({ navigation }) => {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [town, setTown] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLatLong = async () => {
    if (!town || !stateCode) {
      alert('Please enter both the town and state code.');
      return;
    }

    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/zipcode?city=${town}&state=${stateCode}`,
        {
          headers: { 'X-Api-Key': 'L3XXqARYtUlUq4G4dfs+fA==2HqTb49LgCRITmrp' }, 
        }
      );

      const data = response.data[0];
      if (data) {
        setLat(data.lat);
        setLon(data.lon);
        fetchWeather(data.lat, data.lon);
      } else {
        alert('Location not found. Please check your inputs.');
      }
    } catch (error) {
      console.error('Error fetching latitude and longitude:', error);
      alert('Failed to fetch latitude and longitude.');
    }
  };

  const fetchWeather = async (latitude, longitude) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6d55b6badf47898eac818efde2f0dd34`
      );
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('Failed to fetch weather data.');
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.header}>Weather App</Text>
      </View>
      <TextInput
        style={styles.item}
        placeholder="Enter Town Name"
        value={town}
        onChangeText={setTown}
      />
      <TextInput
        style={styles.item}
        placeholder="Enter State Code"
        value={stateCode}
        onChangeText={setStateCode}
      />
      <Button title="Get Weather" onPress={fetchLatLong} />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        weather && (
          <View>
            <View>
                <Text style={styles.center}>{town}</Text>
            </View>
            <Text style={styles.item}>
              Temperature: {Math.round(((weather.main.temp - 273.15) * 9) / 5 + 32)}°F
            </Text>
            <Text style={styles.item}>Weather: {weather.weather[0].description}</Text>
            <View style={styles.iconContainer}>
              <Image
                source={{
                  uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
                }}
                style={styles.icon}
              />
            </View>
            <Button
              title="Weather Map"
              onPress={() => navigation.navigate('WeatherMap', { weather })}
            />
            <Button
              title="What Should I Wear?"
              onPress={() => navigation.navigate('WhatToWear', { weather })}
            />
          </View>
        )
      )}
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
    flexWrap: 'wrap', 
    width: '100%', 
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

export default Weather;



// import React, { useState } from 'react';
// import { Button } from 'react-native';
// import { FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput, Image, } from 'react-native';
// import axios from 'axios';

// const Weather = ({navigation}) => {

//     const [lat, setLat] = useState();
//     const [long, setLong] = useState();
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchWeather = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6d55b6badf47898eac818efde2f0dd34`
//       );
//       setWeather(response.data);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//     setLoading(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Weather App</Text>
//       <TextInput 
//         style={styles.item}
//         placeholder="Enter Latitude"
//         value={lat}
//         onChangeText={setLat}
//       />
//       <TextInput
//         style={styles.item}
//         placeholder="Enter Longitude"
//         value={long}
//         onChangeText={setLong}
//       />
//       <Button title="Get Weather" onPress={fetchWeather} />
//       {loading ? (
//         <Text>Loading...</Text>
//       ) : (
//         weather && (
//           <View>
//             <Text style={styles.item}>Location: {weather.name}</Text>
//             <Text style={styles.item}>
//                 Temperature: {Math.round(((weather.main.temp - 273.15) * 9) / 5 + 32)}°F
//             </Text>
//             <Text style={styles.item}>Weather: {weather.weather[0].description}</Text>
//             <Text style={styles.item}>Icon:</Text>
//             <View style={styles.iconContainer}>
//                 <Image
//                 source={{
//                     uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
//                 }}
//                 style={styles.icon}
//                 />
//             </View>
//             <Button
//                 title="What Should I Wear?"
//                 onPress={() => navigation.navigate('WhatToWear', { weather })}
//             />
//           </View>
//         )
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//      paddingTop: 50,
//      paddingBottom: 50
//     },
//     item: {
//       padding: 10,
//       fontSize: 25,
//       height: 54,
//     },
//     border: {
//       borderWidth: 1,
//       borderColor: "gray",
//     },
//     header: {
//         fontSize: 32,
//         fontWeight: 'bold',
//     },
//     iconContainer: {
//         backgroundColor: '#add8e6', // Light blue background
//         borderRadius: 10,
//         padding: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginVertical: 10,
//     },
//     icon: {
//         width: 100,
//         height: 100, // Ensures the image has dimensions to display
//         marginVertical: 10,
//     },
//   }); 

// export default Weather;