import { Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@/assets/logo.svg';
import Colors from '@/app/constants/colors';

const FormLayout = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background_light }}>
      {/* Persistent design */}
      <View
        style={{
          paddingVertical: 25,
          paddingHorizontal: 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <Logo width={70} height={70} />
          <View>
            <Text style={{ color: Colors.primary, fontSize: 24, fontFamily: 'PoppinsBold' }}>
              CRC INTAKE
            </Text>
            <Text style={{ color: Colors.text, fontFamily: 'PoppinsRegular', fontSize: 14 }}>
              Visitor Management System
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View style={{ flexDirection: 'row', gap: 7, alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'PoppinsMedium',
                fontSize: 12,
                color: '#ffffff',
                borderColor: Colors.primary,
                borderWidth: 1,
                backgroundColor: Colors.primary,
                paddingVertical: 5,
                paddingHorizontal: 12,
                borderRadius: 20,
              }}>
              1
            </Text>
            <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 14, color: Colors.primary }}>
              Check-in
            </Text>
          </View>
          <View
            style={{
              height: 2,
              width: 20,
              backgroundColor: '#cccccc',
            }}></View>
          <View style={{ flexDirection: 'row', gap: 7, alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'PoppinsMedium',
                fontSize: 12,
                color: '#000000',
                borderColor: Colors.disable,
                borderWidth: 1,
                backgroundColor: Colors.disable,
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 20,
              }}>
              2
            </Text>
            <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 14, color: Colors.text }}>
              Photo
            </Text>
          </View>
          <View
            style={{
              height: 2,
              width: 20,
              backgroundColor: '#cccccc',
            }}></View>
          <View style={{ flexDirection: 'row', gap: 7, alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'PoppinsMedium',
                fontSize: 12,
                color: '#000000',
                borderColor: Colors.disable,
                borderWidth: 1,
                backgroundColor: Colors.disable,
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 20,
              }}>
              3
            </Text>
            <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 14, color: Colors.text }}>
              Confirm
            </Text>
          </View>
        </View>
      </View>

      {/* All pages route*/}
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="second_form" />
      </Stack>
    </SafeAreaView>
  );
};

export default FormLayout;
