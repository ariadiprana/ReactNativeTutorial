'use strict';

import React,{Component} from 'react'
import ReactNative,{ActivityIndicator,TextInput,StyleSheet,Text,View,NavigatorIOS} from 'react-native'
var SearchPage = require('./SearchPage');
var SearchScreen = require('./SearchScreen');



class testReact extends React.Component {
  render() {
    return (
      <NavigatorIOS style={styles.container} initialRoute={
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

ReactNative.AppRegistry.registerComponent('testReact', function() { return testReact });
