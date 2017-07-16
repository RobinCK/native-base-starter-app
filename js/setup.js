import Expo from 'expo';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';

import App from './app';
import configureStore from './configureStore';

import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  componentWillMount() {
    Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'), // eslint-disable-line
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'), // eslint-disable-line
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),// eslint-disable-line
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <StyleProvider style={getTheme(platform)}>
        <Provider store={this.state.store}>
          <App />
        </Provider>
      </StyleProvider>
    );
  }
}
