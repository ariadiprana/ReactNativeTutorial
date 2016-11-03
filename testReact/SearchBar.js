'use strict'
import React, {Component} from 'react'
import {ActivityIndicator,TextInput,StyleSheet,Text,View} from 'react-native'

class SearchBar extends Component{
  render(){
    return(
      <View style={styles.searchBar}>
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChange={this.props.onSearchChange}
        placeholder="search notes...."
        onFocus={this.props.onFocus}
        style={styles.searchBarInput}/>
        <ActivityIndicator
          animating={this.props.isLoading}
          style={styles.spinner}
        />
      </View>
    )
  }
}
