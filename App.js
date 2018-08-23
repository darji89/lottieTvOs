import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Lottie example project</Text>
        <LottieView
          source={require('./star.json')}
          autoPlay
          loop
          style={{
            height: 200,
            width: 200,
          }}
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
