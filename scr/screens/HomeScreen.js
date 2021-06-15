import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../store/slice/getDataSlice";
import DataGit from "../api/DataGit";

const HomeScreen = props => {
  const { navigation } = props;
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [loadmore, setLoadmore] = useState(false);
  const [page,setPage] = useState(1)
  const dispatch = useDispatch();

  const pressGet = (username) => {
    setRepos([])
    DataGit.get(username, 1)
      .then(res => {
        setRepos(res);
        if(res.length === 30){
          setLoadmore(true)
          setPage(page + 1)
        }
        else{setLoadmore(false)}
      });
  };

  const pressLoadmore = () => {
    console.log(page);
    DataGit.get(username,page)
      .then(res => {
        setRepos(repos.concat(res));
        if(res.length === 30){
          setLoadmore(true)
          setPage(page + 1)
        }else{setLoadmore(false)}
      })
  }



  const renderItemsRepos = (repo) => {
    return (
      <View>
        <Text>{repo.item.name}</Text>
        <Text onPress={() => {
          if (repo.item.stargazers_count > 0) {navigation.navigate("Details", { username, namerepo: repo.item.name });}
        }}>Stargazers: {repo.item.stargazers_count}</Text>
      </View>
    );
  };

  const ListFooterComponent = () => {
    return (
      <View>
        <Text onPress={pressLoadmore}>Load more</Text>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <TextInput
          placeholder="username on github"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TouchableOpacity
          onPress={() => {
            pressGet(username);
          }}>
          <Text>GET</Text>
        </TouchableOpacity>
        <FlatList
          data={repos}
          renderItem={(repo) => renderItemsRepos(repo)}
          // onEndReached={handlePageChange}
          // onEndReachedThreshold={0}
          ListFooterComponent={loadmore && <ListFooterComponent />}
        />
      </View>
      {/*<Button*/}
      {/*  title="Go to Detail"*/}
      {/*  onPress={() =>*/}
      {/*    navigation.navigate("Details")*/}
      {/*  }*/}
      {/*/>*/}
    </View>
  );
};
export default HomeScreen;
