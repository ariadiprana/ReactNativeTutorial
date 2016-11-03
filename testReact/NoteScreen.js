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

class NoteScreen extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ScrollView contentContainerStyle={styles.contentContainer}>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer:{
    padding:10
  },
  rightPane: {
    justifyContent: 'space-between',
    fles:1
  },
  noteTitle:{
    flex:1,
    fontSize:16,
    fontWeight:'500'
  },
  mainSection:{
    flexDirection:'row'
  },
  detailsImage:{
    width:134
  }
})
