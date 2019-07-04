import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
  },
});
export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
                onPress={() => {
                  navigation.navigate('order');
                }}
                title="go to order"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
                onPress={() => {
                  navigation.navigate('info');
                }}
                title="go to info"
                color="#841584"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
                onPress={() => {
                  navigation.navigate('bottom');
                }}
                title="go to bottom"
                color="#234345"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
                onPress={() => {
                  navigation.navigate('user');
                }}
                title="go to user info"
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
                onPress={() => {
                  navigation.navigate('type');
                }}
                title="go to drawer"
            />
          </View>
        </View>
    );
  }
};
