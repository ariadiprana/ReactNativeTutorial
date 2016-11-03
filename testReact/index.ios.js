'use strict';

var React = require('react');
import {ActivityIndicator,TextInput,StyleSheet,Text,View,NavigatorIOS} from 'react-native'
var SearchPage = require('./SearchPage');

import SearchScreen from './SearchScreem'

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

class testReact extends React.Component {
  render() {
    return (
      <NavigatorIOS style={syles.container} initialRoute={
        {title: 'Personal Note', component: SearchScreen}
      }/>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF'
  }
});

ReactNative.AppRegistry.registerComponent('testReact', function() { return PropertyFinderApp });
