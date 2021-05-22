import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import {fetchJSON, articlesRoute, sourcesRoute} from './config';
import headlines from './data/headlines';

// 67752668abc440628948a2c544e6cfb9

// expo init foldername

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.toolbar}>
        <View style={styles.toolBarThird}>
          <Text>First</Text>
        </View>
        <View style={[styles.toolBarThird, styles.toolBarIcons]}>
          <TinyIcon title="Home" />
          <TinyIcon title="Meetings" />
          <TinyIcon title="Contacts" />
        </View>
        <View style={[styles.toolBarThird, {textAlign: 'right'}]}>
          <Text>Third</Text>
        </View>
      </View>
      <View style={styles.contentArea}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const TinyIcon = (props) => {
  return (
    <View style={styles.tinyIcon}>
      <Image 
        style={styles.tinyIconImage}
        source={{
          uri: 'https://reactnative.dev/img/header_logo.svg',
        }}
      />
      <Text>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'column',
  
  },
  toolbar: {
    backgroundColor: '#555',
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentArea: {
    flex: 9,
  },
  toolBarThird: {
    flex: 1,
    borderWidth: 1,
  },
  toolBarIcons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  red: {
    color: 'red',
  },
  blue: {
    color: 'blue',
  },
  green: {
    color: 'pink',
  },
  tinyIcon: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },
  tinyIconImage: {
    width: 25,
    height: 25,
  }
});
