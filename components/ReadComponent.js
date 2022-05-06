import React, { Component } from 'react';
import axios from 'axios';
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
      const users = new auth.UsersList();
      users.setUsersList([authObj]);
      const serializedData = users.serializeBinary();
      // this.setState({ serializedData }, () => {
      //   const decriptedData = auth.UsersList.deserializeBinary(serializedData);
      //   this.setState({ decriptedData: decriptedData.toObject() });
      //   console.log('decripted data: ', decriptedData.toObject());
      // });

      axios.post('https://pay-protobuf-contact-poc-okp7tl3dtq-uk.a.run.app/course',serializedData, {
        headers: {
              'content-type': 'application/x-protobuf'
          },
        responseType: 'arraybuffer'
      })
      .then(function (response) {
        console.log(JSON.parse(new TextDecoder().decode(response.data)));
    })
      .catch(function (error) {
        console.log(error);
      });

    //   fetch('https://pay-protobuf-contact-poc-okp7tl3dtq-uk.a.run.app/courses/1', { headers: {
    //     'content-type': 'application/x-protobuf'
    //   },
    //   responseType: 'arraybuffers'
    //   meth
    // })
    // .then(function (response) {
    //   const coursesObj = auth.Course.deserializeBinary(response);
    //   console.log(coursesObj);
    // })
    // .catch(function (response) {
    //   console.log(response)
    // })
  }

  render() {   
    return (
      <ScrollView style={styles.wrapper}>
        <Text>Serialized data</Text>
        {/* <Text>{this.state.serializedData}</Text>
        <Text>Decripted data</Text>
        {this.state.decriptedData && this.state.decriptedData.map(user => <Text>{user.email}</Text>)} */}
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