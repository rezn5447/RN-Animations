import React, { Component } from 'react';
import { View, PanResponder, Animated } from 'react-native';

export default class Deck extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {}
    });

    this.panResponder = panResponder;
    this.position = position;
  }

  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }
  render() {
    return (
      <Animated.View
        style={this.position.getLayout()}
        {...this.panResponder.panHandlers}
      >
        {this.renderCards()}
      </Animated.View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });
