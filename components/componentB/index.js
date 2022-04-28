import { View, Text } from 'react-native'
import React from 'react'

const index = props => {
  return (
    <View className='foo'>
      <Text>{props.block.headline}</Text>
    </View>
  )
}

export default index