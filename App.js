import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './Home';
import TopTracks from './TopTracks';
import TopArtists from './TopArtists';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Profile' component={Home} />
        <Stack.Screen name='Top Tracks' component={TopTracks} />  
        <Stack.Screen name='Top Artists' component={TopArtists} />  
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
