/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import EmojiKeyboard from './Keyboard';

export default class RootView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 140, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
        />
        <EmojiKeyboard/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
