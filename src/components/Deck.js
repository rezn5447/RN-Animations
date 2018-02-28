import React, { Component } from 'react';
import { View, PanResponder, Animated } from 'react-native';

export default class Deck extends Component {
  constructor(props) {
    super(props);

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log(gesture);
      },
      onPanResponderRelease: () => {}
    });

    this.panResponder = panResponder;
  }

  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }
  render() {
    return <View {...this.panResponder.panHandlers}>{this.renderCards()}</View>;
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });
