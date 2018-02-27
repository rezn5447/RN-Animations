import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

export default class Deck extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the Deck component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
