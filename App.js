import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LottieView
          source={require('./star.json')}
          autoPlay
          loop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
