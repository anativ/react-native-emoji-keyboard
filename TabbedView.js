// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Tabs from 'react-native-tabs';
import Keyboard from './Keyboard';

export default class TabbedView extends Component {
  constructor(props) {
    super(props);
    this.state = {page:'first'};
  }

  render() {
    return (
      <View style={styles.container} >
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="people" selectedIconStyle={styles.iconStyle}>😃</Text>
            <Text name="animals" selectedIconStyle={styles.iconStyle}>🐻</Text>
            <Text name="food" selectedIconStyle={styles.iconStyle}>🍔</Text>
            <Text name="sports" selectedIconStyle={styles.iconStyle}>⚽</Text>
            <Text name="travel" selectedIconStyle={styles.iconStyle}>🌇</Text>
            <Text name="objects" selectedIconStyle={styles.iconStyle}>💡</Text>
            <Text name="symbols" selectedIconStyle={styles.iconStyle}>🔣</Text>
            <Text name="flags" selectedIconStyle={styles.iconStyle}>🎌</Text>
        </Tabs>
        <Text style={styles.instructions}>
            Selected page: {this.state.page}
        </Text>
        <Keyboard/>
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
