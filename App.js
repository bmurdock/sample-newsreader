import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import {fetchJSON, articlesRoute, sourceRoute} from './config';
import Headline from './src/Headline';
import headlines from './data/headlines';
import SourceSelector from './src/SourceSelector';
import {Picker} from '@react-native-community/picker';
import { readData, writeData, readArticles} from './util';


export default class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      sources: [],
      sourceItems: [],
      username: '',
      test: [],
      articles: [],
    }
  }

  componentDidMount()
  {
    fetchJSON(sourceRoute)
    .then(({sources}) => {
      this.setState({sources}, () => {
        this.createPickerItems();
      });
    })
    .then(() => {
      readArticles(true)
      .then((articles) =>
      {
        console.log('articles were: ', articles);
        this.setState({articles: articles});
      })
    })
  }

  createPickerItems = () => {
    this.setState({
      sourceItems: this.state.sources.map((source) => {
        return <Picker.Item 
        key={`source_${source.id}`}
        label={source.name}
        value={source.id} />
      })
    })
  }

  setUserName = (value) => {
    writeData('username', value)
    .then((result) => {
      if (result === true){
        this.setState({username: value});
      }
      else
      {
        console.log('We had a problem: ', result);
      }
    })
  }

  getTestData = () => {
    readData('test')
    .then((data) => {
      this.setState({
        test: data,
      })
    })
  }

  render() {

    return(
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
          <View>
            <TextInput 
              value={this.state.username}
              onChangeText={this.setUserName}
            />
            <Text>Hello {this.state.username}.</Text>
          </View>
          <Text>Open up App.js to start working on your app!</Text>
          <SourceSelector sources={this.state.sources}>
            {this.state.sourceItems}
          </SourceSelector>
          <Headline {...this.state.articles[0]} />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }



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
