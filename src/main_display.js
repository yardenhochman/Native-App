import React from 'react';
import { ViewPagerAndroid,Image, StyleSheet, Text, View } from 'react-native';

export default class MainDisplay extends React.Component {
  render() {
    return <View style={styles.container}>
        <Text>{this.props.poses[0].name} </Text>
        <ViewPagerAndroid>
          {this.props.poses.map(pose => <View key={pose.img}>
              <Image key={pose.img} source={{ uri: `${pose.img}` }} />
            </View>)}
        </ViewPagerAndroid>
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

