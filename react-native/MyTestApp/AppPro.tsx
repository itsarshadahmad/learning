/* eslint-disable prettier/prettier */
// Importing react and react native library + some components from react native
import React from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World
      </Text>
    </View>
  );
}

// Setting styles for components. Container is name of object which can be refer to
// apply all styles mensioned inside it. Object can be named anything you want.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  darkText: {
    color: '#000',
  },
});

export default AppPro;
