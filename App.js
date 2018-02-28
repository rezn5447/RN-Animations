import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DATA from './src/assets/data';
import Ball from './src/components/Ball';
import Watermelon from './src/components/Watermelon';

export default class App extends Component {
  renderCard(item) {
    return <Text>{item.text}</Text>;
  }
  render() {
    return (
      <View style={styles.container}>
        <Deck data={DATA} renderCard={this.renderCard} />
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
