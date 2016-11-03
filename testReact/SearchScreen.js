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
import configNote from './config.note.js'

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

extend default class SearchScreen extends Component {
  constructor(props){
    this.state = {
      isLoading:false,
      filter:'',
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

  renderSeparator(sectionID: number | string, rowID : number|string, adjacentRowHighlighted: boolean){
    let style = styles.rowSeparator;
    if(adjacentRowHighlighted){
      style= [style,styles.rowSeparatorHide]
    }
    return(
      <View key={'SEP_'+sectionID+'_'+rowID} style={style} />
    )
  }

  renderRow(note:Object,sectionID: number|string,rowID,number|string,
    highlightRowFunc:(sectionID: ?number | string,
      rowID: ?number |string)
  ){
    return (
        <NoteCell
        key={node.id}
        onSelect={()=> this.selectNote(note)}
        onHighlight={() => highlightRowFunc(sectionID,rowID)}
        onUnHighlight={()=> highlightRowFunc(null,null)}
        note={note}
      />
    )
  }

  render(){
    let content = this.state.dataSource.getRowCount()===0 ?
      <NoNotes filter={this.state.filter} isLoading={this.state.isLoading}/>
      :
      <ListView
       ref="listview"
       renderSeparator={this.renderSeparator}
       dataSource={this.state.dataSource}
       renderRow={this.renderRow}
       automaticallyAdjustContentInsets={false}
       keyboardDismissMode="on-drag"
       keyboardShouldPersistTips={true}
       showsVerticalScrollIndicator={false}
      />

      return(
        <View style={styles.container}>
          <SearchBar
          onSearchChange={this.onSearchChange.bind(this)}
          isLoading={this.state.isLoading}
          onFocus={()=>this.refs.listview&&this.refs.listview.getScrollResponder().scrollTo({x:0,y:0})}
          />
          <View style={styles.separator}/>
          {content}
        </View>
      )
  }
}

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  centerText:{
    alignItems:'center'
  },
  noNotesText:{
    marginTop:80,
    color: '#888888'
  },
  separator:{
    height:1,
    backgroundColor:'#eeeeee'
  },
  scrollSpinner:{
    marginVertical:20
  },
  rowSeparator:{
    backgroundColor:'rgba(0,0,0,0.1)',
    height:1,
    marginLeft:4
  },
  rowSeparatorHide:{
    opacity:0.0
  }
});
