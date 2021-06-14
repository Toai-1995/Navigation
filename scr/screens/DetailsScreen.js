import React from 'react';
import {Text, View, Button} from 'react-native';
// import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

const DetailsScreen = props => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};
export default DetailsScreen;
