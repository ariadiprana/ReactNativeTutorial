'use strict';

import React, { Component } from 'react'
import ReactNative, {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  Platform,
  ListView,
  TouchableHighlight
} from 'react-native';
import NoteScreen from './NoteScreen'
import NoteCell from './NoteCell'
import SearchBar from './SearchBar'


var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    width: 50,
    height:70
  }
});

class SearchScreen extends Component {
  constructor(props){
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2
      }),
    }
  }

  selectNote(note: Object){
    if(Platform.OS ==='ios'){
      this.props.navigator.push({
        title: note.title,
        component: NoteScreen,
        passProps: {note}
      })
    }
  }
}
