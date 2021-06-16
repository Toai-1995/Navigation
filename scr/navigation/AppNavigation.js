import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailsScreen';

const AppStack = createStackNavigator()
const AppNavigation = () =>{
  console.log('tesst');
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        >
        <AppStack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <AppStack.Screen
          name="Details"
          component={DetailScreen}
          options={{title: 'Details'}}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation
