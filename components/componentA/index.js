import { View, Text } from 'react-native'
import React from 'react'

const index = props => {
  return (
    <View style={{ backgroundColor: 'red', width: '100%' }}>
      <Text>{props.block.title}</Text>
    </View>
  )
}

export default index