import React, {Component} from 'react';
import {AppRegistry, Alert, Button, StyleSheet, TextInput, View} from 'react-native';

export default class Order extends Component{
  render() {
    return (
        <View style={{
          flex: 1,
          justifyContent: 'center',
        }}>
          <Button
            style={{flex: 1}}
            title={'order'}
          />
        </View>
    )
  }
}
