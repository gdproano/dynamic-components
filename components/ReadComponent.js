import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
const auth = require('../proto/user_pb');

class ReadComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      serializedData: '',
      decriptedData: '',
    };
  }

  componentDidMount() {
      const authObj = new auth.User();
      authObj.setEmail("usuariodeuna@gmail.com");
      authObj.setPassword("Password@1234");
      const serializedData = authObj.serializeBinary();
      this.setState({ serializedData }, () => {
        const decriptedData = auth.User.deserializeBinary(serializedData);
        this.setState({ decriptedData: decriptedData.toObject() });
        console.log('decripted data: ', decriptedData.toObject());
      });
  }

  render() {   
    return (
      <ScrollView style={styles.wrapper}>
        <Text>Serialized data</Text>
        <Text>{this.state.serializedData}</Text>
        <Text>Decripted data</Text>
        <Text>{this.state.decriptedData.email}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
   flex: 1,
   padding: 64
  },
  loader: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',    
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
})

export default ReadComponent;