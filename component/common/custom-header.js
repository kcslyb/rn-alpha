import React, {Component} from 'react';
import {Button, View} from 'react-native';

export default class CustomHeader extends Component{
  render() {
    return (
        <View>
          <Button
              title={'CustomHeader'}
          />
        </View>
    )
  }
}
