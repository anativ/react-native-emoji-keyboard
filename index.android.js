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
  View
} from 'react-native';

import RootView from './RootView';

class EmojiKeyboard extends Component {
  render() {
    return <RootView/>
  }
}


AppRegistry.registerComponent('EmojiKeyboard', () => EmojiKeyboard);
