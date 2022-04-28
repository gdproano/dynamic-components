import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View } from 'react-native';

class ReadComponent extends Component {
  constructor() {
    super();
    // this.docs = firebase.firestore().collection('promotions');
    this.state = {
      isLoading: true,
      promotions: []
    };
  }

  componentDidMount() {
    // this.unsubscribe = this.docs.onSnapshot(this.fetchCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  fetchCollection = (querySnapshot) => {
    const promotions = [];
    querySnapshot.forEach((res) => {
      const { 
          buttonLabel, 
          conditionMessage, 
          detailMessagerItems, 
          detailMessageTitle,
          headerImage,
          navigateTo,
          termsAndConditions, 
          title
         } = res.data();
      promotions.push({
        key: res.id,
        name,
        designation
      });
    });
    this.setState({
      students,
      isLoading: false
   });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="red"/>
        </View>
      )
    }    
    return (
      <ScrollView style={styles.wrapper}>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
   flex: 1,
   paddingBottom: 20
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