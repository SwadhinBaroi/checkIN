import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../constants/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const ThankYou = () => {
  const router = useRouter();

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
        <TouchableOpacity
          onPress={() => {
            router.replace('/(form)');
          }}
          style={{
            borderWidth: 1,
            borderColor: '#000',
            alignSelf: 'center',
            paddingHorizontal: 40,
            paddingVertical: 15,
            borderRadius: 6,
            backgroundColor: '#000000',
            marginTop: 50,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
          }}
          activeOpacity={0.8}>
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontFamily: 'PoppinsSemi',
              textAlign: 'center',
            }}>
            Go to Home
          </Text>
          <FontAwesome name="home" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ThankYou;
