import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { DATA } from './src/assets/data';
import Ball from './src/components/Ball';
import Deck from './src/components/Deck';
import Watermelon from './src/components/Watermelon';

export default class App extends Component {
  renderCard(item) {
    return (
      <Card title={item.text} image={{ uri: item.uri }}>
        <Text style={{ marginBottom: 10 }}>
          I can customize the card further
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="View Now!"
        />
      </Card>
    );
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
