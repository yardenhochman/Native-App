import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MainDisplay extends React.Component {
  render() {
    return <View style={styles.container}>
        <Text>{this.props.poses[0].name} </Text>
        <Image source={{ uri: `${this.props.poses[0].img}` }} style={{ width: 40, height: 40 }} />
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

