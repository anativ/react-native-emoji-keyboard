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
  TouchableOpacity,
  TextInput,
  Keyboard,
  Dimensions
} from 'react-native';

import TabbedView from './TabbedView';
import dismissKeyboard from 'react-native-dismiss-keyboard';

export default class RootView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      emoji: false,
      visibleHeight: Dimensions.get('window').height
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, flexDirection: 'row', alignItems:'center', paddingTop: 20}}>
        <TouchableOpacity onPress={this.toggleEmoji.bind(this)}>
          <Text style={{width: 50, fontSize: 30, textAlign:'center'}}>😀</Text>
        </TouchableOpacity>
        <TextInput
          style={{height: this.state.visibleHeight, borderColor: 'gray', borderWidth: 1,flex:1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline={true}
        />
        </View>
        {this.state.emoji && <TabbedView onPress={this.onPress.bind(this)}/>}
      </View>
    );
  }

  toggleEmoji() {
    const oldEmoji = this.state.emoji;
    dismissKeyboard();
    this.setState({emoji: !oldEmoji});
  }

  componentWillMount () {
    Keyboard.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
    Keyboard.addListener('keyboardWillHide', this.keyboardWillHide.bind(this))
  }

  keyboardWillShow (e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height
    this.setState({visibleHeight: newSize})
    this.setState({emoji: false});
  }

  keyboardWillHide (e) {
    this.setState({visibleHeight: Dimensions.get('window').height})
  }

  onPress(x) {
    this.setState({
      text: this.state.text + x
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
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
