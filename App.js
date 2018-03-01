import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { DATA } from './src/assets/data';
import { Ball, Deck, Watermelon } from './src/components';

export default class App extends Component {
  renderCard(item) {
    return (
      <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
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

  renderNoMoreCards() {
    return (
      <Card title="All Done">
        <Text style={{ marginBottom: 10 }}> There's no more content here!</Text>
        <Button backgroundColor="#03A9F4" title="View Now!" />
      </Card>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  },
  text: {
    color: 'red'
  }
});
