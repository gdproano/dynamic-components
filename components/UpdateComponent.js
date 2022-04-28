import React, { Component } from 'react';
import { Button, View } from 'react-native';


class UpdateComponent extends Component {
    render() {
        return (
          <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <Button
              title="Update"
              onPress={() => this.props.navigation.navigate('UpdateComponent')}
              color="#5219ac"
            />
          </View>
        );
    }  
}

export default UpdateComponent;