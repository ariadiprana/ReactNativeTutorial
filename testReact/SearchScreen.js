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
  ListView
} from 'react-native';
import NoteScreen from './NoteScreen'
import NoteCell from './NoteCell'
import SearchBar from './SearchBar'
import configNote from './config.note.js'
import NoNotes from './NoNotes.js'



export default class SearchScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading:false,
      filter:'',
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 != row2
      }),
    }
  }

  componentDidMount(){
    this.searchNote('')
  }

  _urlForQueryAndPage(query){
    if(query){
      return `${configNote.resturl}/search/${query}`
    }else{
      return `${configNote.resturl}`
    }
  }

  getDataSource(notes:Array<any>) : ListView.dataSource{
    return this.state.dataSource.cloneWithRows(notes)
  }

  SearchNote(query: string){
    this.setState({filter:query})
    fetch(this._urlForQueryAndPage(query))
      .then((response)=>{
        return response.json()
      })
      .catch((error)=>{
        this.setState({dataSource: this.getDataSource([])},isLoading:false)
      })
      .then((notes)=>{
        if(this.state.filter!== query){
          return
        }
        this.setState({
          isLoading:false,
          dataSource:this.getDataSource(notes)
        })
      })
  }

  onSearchChange(event: Object){
    let filter = event
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

  renderRow(note:Object,
    sectionID: number|string,rowID:number|string,
    highlightRowFunc:(sectionID: ?number | string, rowID: ?number |string)=>void
  )
  {
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
      console.log('ARIDISINI',content);

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
