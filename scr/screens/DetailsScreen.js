import React, { useState, useEffect } from "react";
import {Text, View, Button, Image, FlatList} from 'react-native';
import DataGit from "../api/DataGit";
// import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

const DetailsScreen = props => {
  const [stargazer, setStargazer] = useState([])
  const {navigation} = props;
  const {username, namerepo} = props.route.params;

  useEffect(() => {
    DataGit.getStar(username, namerepo).then(res => setStargazer(res));
  },[])
  const renderItemsStar = (item) =>{
    return(
      <View>
        <Image source={{
          uri: item.avatar_url,
        }}/>
        <Text>{item.login}</Text>
      </View>
    )
  }
  console.log('star',stargazer);
  return (
    <View>
      <FlatList
        data={stargazer}
        renderItem={({ item }) =>  renderItemsStar(item)}
      />
      {/*<Button*/}
      {/*  title="Go to home"*/}
      {/*  onPress={() => navigation.navigate('Home')}*/}
      {/*/>*/}
    </View>
  );
};
export default DetailsScreen;
