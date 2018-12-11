import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store';

import Router from './navgators/Index';

if (__DEV__) {
  require('react-devtools');
}

export default class App extends React.Component {

  componentDidMount() {

    SplashScreen.hide();
  }


  render() {
    return (
      <Provider store={store}> 
        <PersistGate loading={null} persistor={persistor}>
          <View style={{ flex: 1 }} >
            <StatusBar
              hidden
            />
            <Router></Router>
          </View>
        </PersistGate >
      </Provider>
    );
  }
}
/* import SplashScreen from 'react-native-splash-screen';
import storybook from "./../storybook";
SplashScreen.hide();
export default storybook; */