'use strict';

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  Platform,
  ListView
} from 'react-native';

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


class SearchPage extends Component {
  render() {
    console.log("TEST");
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for your personal note!
        </Text>
        <Text style={styles.description}>
          Search by username or userID.
        </Text>

        <View style={styles.flowRight}>
            <TextInput
              style={styles.searchInput}
              placeholder='Searching criteria'/>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Go</Text>
            </TouchableHighlight>
        </View>
        <Image source={require('./Resources/note.png')} style={styles.image}/>
      </View>
    );
  }
}

module.exports = SearchPage;
