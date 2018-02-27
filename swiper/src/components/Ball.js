import React, { Component } from 'react';
import { View, Animated, Text, StyleSheet } from 'react-native';

export default class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 }
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />;
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ball: {
    height: 60,
    width: 30,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
});
