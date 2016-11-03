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

export default class NoteScreen extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.mainSection}>
          <Image source="https://source.unsplash.com/random/85x85" style={style.detailsImage}>
          <View style={styles.rightPane}>
            <Text style={styles.noteTitle}>{this.props.note.title}</Text>
          </View>
          <View style={styles.separator} />
          <View>
            {this.props.note.content}
          </View>
        </View>
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
    width:134,
    height:200,
    backgroundColor:'#eaeaea',
    marginRight: 10
  },
  separator: {
    backgroundColor:'rgba(0,0,0,0.1)',
    height: StyleSheet.hairlineWidth,
    marginVertical: 10
  }
})
