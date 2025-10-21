import { View, Text } from 'react-native';
import React from 'react';
import Colors from '../constants/colors';

const ThankYou = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.background_light }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontFamily: 'InterBold',
            fontSize: 64,
            color: Colors.primary,
            marginBottom: 10,
          }}>
          Thank You!
        </Text>
        <View style={{ gap: 5 }}>
          <Text
            style={{
              fontFamily: 'PoppinsLight',
              fontSize: 24,
              color: '#000000',
              textAlign: 'center',
            }}>
            Your check-in has been confirmed.
          </Text>
          <Text
            style={{
              fontFamily: 'PoppinsLight',
              fontSize: 24,
              color: '#000000',
              textAlign: 'center',
            }}>
            Please take a seat in the observation room on the left.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ThankYou;
