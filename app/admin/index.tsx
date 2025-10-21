import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Logo from '@/assets/logo.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../constants/colors';
import Ionicons from '@expo/vector-icons/Ionicons';

const index = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.background_light, alignItems: 'center' }}>
      <View style={{ flex: 1, width: '90%', marginTop: 100 }}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Logo width={120} height={120} />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{ borderColor: Colors.accent, borderWidth: 1, borderRadius: 100 }}>
              <Image
                source={require('@/assets/person2.jpg')}
                style={{ height: 150, width: 150, overflow: 'hidden', borderRadius: 100 }}
              />
            </View>
            <Text
              style={{
                fontFamily: 'InterBold',
                fontSize: 48,
                marginTop: 25,
                marginBottom: 100,
              }}>
              Jhon Doe
            </Text>
            <View style={{ width: 180 }}>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  borderWidth: 1,
                  borderColor: '#000',
                  borderRadius: 6,
                  backgroundColor: '#000000',
                  marginTop: 10,
                  paddingVertical: 10,
                }}
                activeOpacity={0.8}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 22,
                    fontFamily: 'PoppinsSemi',
                    textAlign: 'center',
                  }}>
                  Next
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View
              style={{
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 20,
              }}>
              <Text style={{ fontFamily: 'PoppinsSemi', fontSize: 26 }}>Next</Text>
              <Ionicons name="return-down-back" size={28} color="black" />
            </View>

            <View
              style={{
                backgroundColor: Colors.primary,
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <View style={{ flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                  <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 100 }}>
                    <Image
                      source={require('@/assets/person2.jpg')}
                      style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 100 }}
                    />
                  </View>
                  <Text style={{ fontFamily: 'PoppinsMedium', color: 'white', fontSize: 24 }}>
                    Jhon Doe
                  </Text>
                </View>
                <Text style={{ fontFamily: 'InterRegular', color: 'white', fontSize: 26 }}>
                  1hr:10m
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#000000',
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <View style={{ flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                  <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 100 }}>
                    <Image
                      source={require('@/assets/person3.jpg')}
                      style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 100 }}
                    />
                  </View>
                  <Text style={{ fontFamily: 'PoppinsMedium', color: 'white', fontSize: 24 }}>
                    Sarah Ali
                  </Text>
                </View>
                <Text style={{ fontFamily: 'InterRegular', color: 'white', fontSize: 26 }}>
                  1hr:10m
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: Colors.primary,
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <View style={{ flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                  <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 100 }}>
                    <Image
                      source={require('@/assets/person2.jpg')}
                      style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 100 }}
                    />
                  </View>
                  <Text style={{ fontFamily: 'PoppinsMedium', color: 'white', fontSize: 24 }}>
                    Jhon Doe
                  </Text>
                </View>
                <Text style={{ fontFamily: 'InterRegular', color: 'white', fontSize: 26 }}>
                  1hr:10m
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#000000',
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <View style={{ flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                  <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 100 }}>
                    <Image
                      source={require('@/assets/person3.jpg')}
                      style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 100 }}
                    />
                  </View>
                  <Text style={{ fontFamily: 'PoppinsMedium', color: 'white', fontSize: 24 }}>
                    Sarah Ali
                  </Text>
                </View>
                <Text style={{ fontFamily: 'InterRegular', color: 'white', fontSize: 26 }}>
                  1hr:10m
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: Colors.primary,
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <View style={{ flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                  <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 100 }}>
                    <Image
                      source={require('@/assets/person2.jpg')}
                      style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 100 }}
                    />
                  </View>
                  <Text style={{ fontFamily: 'PoppinsMedium', color: 'white', fontSize: 24 }}>
                    Jhon Doe
                  </Text>
                </View>
                <Text style={{ fontFamily: 'InterRegular', color: 'white', fontSize: 26 }}>
                  1hr:10m
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#000000',
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <View style={{ flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                  <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 100 }}>
                    <Image
                      source={require('@/assets/person3.jpg')}
                      style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 100 }}
                    />
                  </View>
                  <Text style={{ fontFamily: 'PoppinsMedium', color: 'white', fontSize: 24 }}>
                    Sarah Ali
                  </Text>
                </View>
                <Text style={{ fontFamily: 'InterRegular', color: 'white', fontSize: 26 }}>
                  1hr:10m
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: Colors.primary,
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <View style={{ flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                  <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 100 }}>
                    <Image
                      source={require('@/assets/person2.jpg')}
                      style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 100 }}
                    />
                  </View>
                  <Text style={{ fontFamily: 'PoppinsMedium', color: 'white', fontSize: 24 }}>
                    Jhon Doe
                  </Text>
                </View>
                <Text style={{ fontFamily: 'InterRegular', color: 'white', fontSize: 26 }}>
                  1hr:10m
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#000000',
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <View style={{ flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                  <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 100 }}>
                    <Image
                      source={require('@/assets/person3.jpg')}
                      style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 100 }}
                    />
                  </View>
                  <Text style={{ fontFamily: 'PoppinsMedium', color: 'white', fontSize: 24 }}>
                    Sarah Ali
                  </Text>
                </View>
                <Text style={{ fontFamily: 'InterRegular', color: 'white', fontSize: 26 }}>
                  1hr:10m
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: Colors.primary,
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <View style={{ flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                  <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 100 }}>
                    <Image
                      source={require('@/assets/person2.jpg')}
                      style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 100 }}
                    />
                  </View>
                  <Text style={{ fontFamily: 'PoppinsMedium', color: 'white', fontSize: 24 }}>
                    Jhon Doe
                  </Text>
                </View>
                <Text style={{ fontFamily: 'InterRegular', color: 'white', fontSize: 26 }}>
                  1hr:10m
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#000000',
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <View style={{ flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                  <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 100 }}>
                    <Image
                      source={require('@/assets/person3.jpg')}
                      style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 100 }}
                    />
                  </View>
                  <Text style={{ fontFamily: 'PoppinsMedium', color: 'white', fontSize: 24 }}>
                    Sarah Ali
                  </Text>
                </View>
                <Text style={{ fontFamily: 'InterRegular', color: 'white', fontSize: 26 }}>
                  1hr:10m
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: Colors.primary,
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <View style={{ flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                  <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 100 }}>
                    <Image
                      source={require('@/assets/person2.jpg')}
                      style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 100 }}
                    />
                  </View>
                  <Text style={{ fontFamily: 'PoppinsMedium', color: 'white', fontSize: 24 }}>
                    Jhon Doe
                  </Text>
                </View>
                <Text style={{ fontFamily: 'InterRegular', color: 'white', fontSize: 26 }}>
                  1hr:10m
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#000000',
                paddingHorizontal: 20,
                paddingVertical: 15,
                borderRadius: 10,
                marginBottom: 10,
              }}>
              <View style={{ flexDirection: 'row', gap: 40, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                  <View style={{ borderColor: 'white', borderWidth: 1, borderRadius: 100 }}>
                    <Image
                      source={require('@/assets/person3.jpg')}
                      style={{ height: 50, width: 50, overflow: 'hidden', borderRadius: 100 }}
                    />
                  </View>
                  <Text style={{ fontFamily: 'PoppinsMedium', color: 'white', fontSize: 24 }}>
                    Sarah Ali
                  </Text>
                </View>
                <Text style={{ fontFamily: 'InterRegular', color: 'white', fontSize: 26 }}>
                  1hr:10m
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
