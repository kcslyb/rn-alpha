import React, {Component} from 'react';
import {Button, View} from 'react-native';

export default class Login extends Component{
  render() {
    const {navigation} = this.props;
    return (
        <View>
          <Button
              onPress={() => {
                navigation.navigate('home')
              }}
              title={'login'}
          />
        </View>
    )
  }
}
