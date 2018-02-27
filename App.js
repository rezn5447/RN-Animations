import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ball from './src/components/Ball';
import Watermelon from './src/components/Watermelon';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Ball />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    color: 'red'
  }
});
