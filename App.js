import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Weather from './Weather';
import WhatToWear from './WhatToWear';
import WeatherMap from './WeatherMap';
import SunriseSunset from './SunriseSunset';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Weather">
        <Stack.Screen name="Weather" component={Weather} /> 
        <Stack.Screen name="WhatToWear" component={WhatToWear} /> 
        <Stack.Screen name="WeatherMap" component={WeatherMap} />
        <Stack.Screen name="SunriseSunset" component={SunriseSunset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
