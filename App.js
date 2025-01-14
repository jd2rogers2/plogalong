import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';


import { Provider } from 'react-redux'
import store from "./redux/store";

import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
          <Provider store={store}>
              <View style={styles.container}>
                  {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
                  <AppNavigator />
              </View>
          </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    // return Promise.all([
    //   Asset.loadAsync([]),
    //   Font.loadAsync({}),
    // ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
