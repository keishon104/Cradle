
import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Main from './main';

class AddCard extends Component {
  handlePress = () => {
    this.props.navigator.push({
      screen: 'Main',
      title: 'Screen 3',
      animated: true,
      animationType: 'fade',
      backButtonHidden: false,
    });
  };

  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text onPress={this.handlePress}> Hello from Adding Card Screen </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddCard;
