/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
  ActivityIndicator,
  Switch,
  TextInput,
} from 'react-native';

const emptyFunction = () => {};
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text>dsfds</Text>
      <Button color="#17BF63" onPress={emptyFunction} title="Button" />
      <ActivityIndicator color="#1DA1F2" size="small" />
      <Switch value={false} />
      <Text style={{color: 'red'}}>Red color</Text>
      <TextInput maxLength={5} placeholder="maxLength" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  item: {
    paddingHorizontal: 10,
  },
});

export default App;
