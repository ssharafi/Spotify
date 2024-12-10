import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';

const WeatherMap = ({route}) => {
    
    const { weather } = route.params;

    const latitude = weather.coord.lat;
    const longitude = weather.coord.lon;

    const region = {latitude, longitude, latitudeDelta: 0.2, longitudeDelta: 0.2,};
    
    const baseTileUrl = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";

    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={region}>
                <UrlTile urlTemplate={baseTileUrl} maximumZ={19} flipY={false} />
                <UrlTile urlTemplate="https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=934e6493871a44a01d29166c1a3aa967" maximumZ={19} flipY={false} />
            </MapView>
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default WeatherMap;
