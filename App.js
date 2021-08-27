import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homescreen';
import ISSLocation from './screens/ISSlocation';
import MeteorScreen from './screens/meteorscreen';

const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name= "Home" component={HomeScreen}/>
        <Stack.Screen name= "ISS Location" component={ISSLocation}/>
        <Stack.Screen name= "Meteor" component={MeteorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;