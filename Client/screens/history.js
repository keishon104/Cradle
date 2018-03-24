import React, { Component } from 'react';
import { Text } from 'react-native';

class History extends Component {
  handlePress = () => {
    this.props.navigator.push({
      screen: 'Screen3',
      title: 'Screen 3',
    });
  };

  render() {
    return (
      <Text> Hello from the history Page </Text>

    );
  }
}

export default History;
