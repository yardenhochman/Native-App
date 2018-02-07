import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainDisplay from './src/main_display';
import Header from './src/header';

export default class App extends React.Component {
  render() {
    return <View style={styles.container}>
        <Header />
        <MainDisplay poses={poses} />
      </View>;
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
const poses = [
  {
    name: 'Moon Bridge',
    type: 'L-Base',
    difficulty: 'Intermediate',
    number_of_people: '2 Person',
    img: 'https://www.acropedia.org/wp-content/uploads/2017/01/3.jpg',
  },
  {
    name: 'Double Throne',
    type: 'L-Base',
    difficulty: 'Intermediate',
    number_of_people: '3 Person',
    img: 'https://www.acropedia.org/wp-content/uploads/2016/09/double-throne.jpg',
  },
];