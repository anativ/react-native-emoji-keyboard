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
import Keyboard from './Keyboard';

export default class TabbedView extends Component {
  constructor(props) {
    super(props);
    this.state = {page:'first'};
  }


  render() {
    return (

      <ScrollableTabView>
        <Keyboard
          tabLabel="😐"
          onPress={(x)=>alert(x)}
        />
        <Keyboard tabLabel="😶" />
        <Keyboard tabLabel="😏" />
      </ScrollableTabView>
    );
  }
}

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
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
