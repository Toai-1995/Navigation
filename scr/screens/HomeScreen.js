import React, {useState} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {getData} from '../store/slice/getDataSlice';
import DataGit from "../api/DataGit";

const HomeScreen = props => {
  const {navigation} = props;
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const pressGet = username => {
    DataGit.get(username)
      .then(res => dispatch(getData(res)));
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <TextInput
          placeholder="your username on github"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TouchableOpacity
          onPress={() => {
            pressGet(username);
          }}>
          <Text>GET</Text>
        </TouchableOpacity>
        <FlatList />
      </View>
      <Button
        title="Go to Detail"
        onPress={() =>
          navigation.navigate('Details', {item: 'pram from HomeScreen'})
        }
      />
    </View>
  );
};
export default HomeScreen;
