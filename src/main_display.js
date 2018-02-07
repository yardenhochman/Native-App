import React from 'react';
import { ViewPagerAndroid,Image, StyleSheet, Text, View } from 'react-native';
import { PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator } from 'rn-viewpager';

export default class MainDisplay extends React.Component {
  render() {
    
    return <View style={styles.container}>
        <Text>{this.props.poses[0].name} </Text>
        <IndicatorViewPager>
          {this.props.poses.map(pose => <View key={pose.img}>
              <Image key={pose.img} source={{ uri: `${pose.img}` }} />
            </View>)}
        </IndicatorViewPager>
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

