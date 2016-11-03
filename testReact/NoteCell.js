'use strict'

import React, {component} from 'react'
import ReactNative, {Image, Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native'

export default class NoteCell extends Component{
  render(){
    return(
      <View>
        <TouchableHighlight onPress={this.props.onSelect}
        onShowUnderlay={this.props.onHighlight}
        onHideUnderlay={this.props.onUnHighlight}>
          <View style={styles.row}>
            <Image source="a" style={styles.cellImage}/>
            <View style={style.textContainer}
              <Text style={styles.noteTitle}>
                {this.props.note.title}
              </Text
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex:1
  },
  noteTitle:{
    flex:1,
    fontSize:16,
    fontWeight: '500',
    marginBottom:2
  },
  row:{
    alignItems:'center',
    backgroundColor: 'white',
    flexDirection:'row',
    padding:5
  },
  cellImage:{
    backgroundColor:'#dddddd',
    height:85,
    marginRight:10,
    width:85
  },
  cellBorder:{
    backgroundColor:'rgba(0,0,0,0.1)',
    height:Style.hairlineWidth,
    marginLeft:4
  }
})
