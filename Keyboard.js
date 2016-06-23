// @flow
import _ from 'lodash'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  TouchableHighlight,
  Image
} from 'react-native';

const THUMB_URLS = ['https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851549_767334479959628_274486868_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851561_767334496626293_1958532586_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851579_767334503292959_179092627_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851589_767334513292958_1747022277_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851563_767334559959620_1193692107_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851593_767334566626286_1953955109_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851591_767334523292957_797560749_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851567_767334529959623_843148472_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851548_767334489959627_794462220_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851575_767334539959622_441598241_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-ash3/t39.1997/p128x128/851573_767334549959621_534583464_n.png', 'https://fbcdn-dragon-a.akamaihd.net/hphotos-ak-prn1/t39.1997/p128x128/851583_767334573292952_1519550680_n.png'];


export default class Keyboard extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    emojis: React.PropTypes.array,
    onPress: React.PropTypes.func
  };

  componentDidMount() {
    // let data = Array(30).map((_,i)=>String.fromCharCode("😀".charCodeAt(0) + i))

    // let data = this.props.emojis
    let emojis = ["😀", "😬", "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😉", "😊",
                    "🙂", "🙃", "☺", "😋", "😌", "😍", "😘", "😗", "😙", "😚",
                    "😜", "😝", "😛", "🤑", "🤓", "😎", "🤗", "😏", "😶", "😐",
                    "😑", "😒", "🙄", "🤔", "😳", "😞", "😟", "😠", "😡", "😔",
                    "😕", "🙁", "☹", "😣", "😖", "😫", "😩", "😤", "😮", "😱",
                    "😨", "😰", "😯", "😦", "😧", "😢", "😥", "😪", "😓", "😭",
                    "😵", "😲", "🤐", "😷", "🤒", "🤕", "😴", "💤", "💩", "😈",
                    "👿", "👹", "👺", "💀", "👻", "👽", "🤖", "😺", "😸", "😹",
                    "😻", "😼", "😽", "🙀", "😿", "😾", "🙌", "🙌🏻", "🙌🏼", "🙌🏽",
                    "👯", "👫", "👬", "👭", "🙇", "🙇🏻", "🙇🏼", "🙇🏽", "🙇🏾", "🙇🏿",
                    "💁", "💁🏻", "💁🏼", "💁🏽", "💁🏾", "💁🏿", "🙅", "🙅🏻", "🙅🏼", "🙅🏽",
                    "🙅🏾", "🙅🏿", "🙆", "🙆🏻", "🙆🏼", "🙆🏽", "🙆🏾", "🙆🏿", "🙋", "🙋🏻",
                    "💘", "💝"];
    let data = _.shuffle(emojis);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
        dataSource: ds.cloneWithRows(this.props.data)
      });
    }



  render() {
    if (this.state.dataSource) {
      return (
        <View >
          <ListView contentContainerStyle={styles.list}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            initialListSize={1000}
          />
        </View>
      );
    }
    return null;

  }

  hashCode(str) {
    var hash = 15;
    for (var ii = str.length - 1; ii >= 0; ii--) {
      hash = ((hash << 5) - hash) + str.charCodeAt(ii);
    }
    return hash;
  };

  _pressRow(row) {
    if (this.props.onPress) {
      this.props.onPress(row);
    }
  }


  _renderRow(rowData: string, sectionID: number, rowID: number) {
    // return (<Text style={styles.row}>{rowData}</Text>)
     let rowHash = Math.abs(this.hashCode(rowData));
     return (
       <TouchableHighlight onPress={() => this._pressRow(rowData)} underlayColor='rgba(0,0,0,0)'>
         <View>
           <View style={styles.row}>
             <Text style={styles.text}>
               {rowData}
             </Text>
           </View>
         </View>
       </TouchableHighlight>
     );
   }

}

const styles = StyleSheet.create({
  list: {
  // justifyContent: 'center',
  flexDirection: 'row',
  flexWrap: 'wrap',
  backgroundColor: '#F6F6F6',

},
  row: {
    justifyContent: 'center',
    padding: 5,
    // margin: 10,
    // width: 100,
    // height: 100,
    // backgroundColor: '#F6F6F6',
    alignItems: 'center',
    // borderWidth: 1,
    // borderRadius: 5,
    borderColor: '#CCC',
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold',
    width:17,
    color: 'black'
  }
});
