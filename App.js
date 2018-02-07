import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainDisplay from './src/main_display';
import Header from './src/header';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <MainDisplay />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
