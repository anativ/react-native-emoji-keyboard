// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import Tabs from 'react-native-tabs';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import FacebookTabBar from './FacebookTabBar';
import Keyboard from './Keyboard';

export default class TabbedView extends Component {
  constructor(props) {
    super(props);
    this.state = {page:'first'};
  }

  render() {
    return (
      <ScrollableTabView >
        <Keyboard
          tabLabel="One"
          onPress={(x)=>alert(x)}
        />
        <Keyboard tabLabel="Flow" />
        <Keyboard tabLabel="Jest" />
      </ScrollableTabView>
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
  iconStyle: {
    borderTopWidth:2,
    borderTopColor:'red'
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
