import React from 'react';
import { Text, View, Image } from 'react-native';

const Apple = () => {
  return (
    <View>
      <Text>Apple</Text>
          <Image
               source={require('../assets/apple.jpg')}   />
    </View>
  );
};

export default Apple;
