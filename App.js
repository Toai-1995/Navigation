import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './scr/navigation/AppNavigation';
import {Provider} from "react-redux";
import store from './scr/store/'

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation/>
    </Provider>
  );
};

export default App;
