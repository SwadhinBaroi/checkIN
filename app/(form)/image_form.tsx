import { View, Text, Button, TouchableOpacity, ScrollView, Dimensions, Alert } from 'react-native';
import React from 'react';
import ImageLogo from '@/assets/Vector.svg';
import Colors from '../constants/colors';
import * as ImagePicker from 'expo-image-picker';

const ImageForm = () => {
  const [cameraPermission, requestCameraPermission] = ImagePicker.useCameraPermissions();

  const clickImage = async () => {
    if (!cameraPermission?.granted) {
      const res = await requestCameraPermission();
      if (!res.granted) {
        Alert.alert('Permission Denied', 'Camera permission is required.');
        return;
      }
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
      cameraType: ImagePicker.CameraType.front,
    });

    console.log(result);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background_light }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View
          style={{
            width: '75%', // it is 65
            padding: 1,
            position: 'relative',
            borderRadius: 40,
            overflow: 'hidden',
            marginBottom: 200,
          }}>
          <View
            style={{
              position: 'absolute',
              height: 200,
              width: 200,
              top: 0,
              left: 0,
              backgroundColor: Colors.accent,
            }}
          />
          <View
            style={{
              position: 'absolute',
              height: 200,
              width: 200,
              top: 0,
              right: 0,
              backgroundColor: Colors.accent,
            }}
          />
          <View
            style={{
              position: 'absolute',
              height: 200,
              width: 200,
              bottom: 0,
              left: 0,
              backgroundColor: Colors.accent,
            }}
          />
          <View
            style={{
              position: 'absolute',
              height: 200,
              width: 200,
              bottom: 0,
              right: 0,
              backgroundColor: Colors.accent,
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              alignItems: 'center',
              paddingVertical: 150, //maybe 350 or 250
              position: 'relative',
              borderRadius: 40,
            }}>
            <View
              style={{
                alignItems: 'center',
                // transform: [{ translateY: 50 }],
              }}>
              <ImageLogo width={80} height={80} fill="#000" style={{ opacity: 0.5 }} />

              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: 120,
                  borderRadius: 10,
                  backgroundColor: '#000000',
                }}
                onPress={clickImage}>
                <Text
                  style={{
                    color: Colors.background_light,
                    fontFamily: 'PoppinsSemi',
                    fontSize: 18,
                    paddingVertical: 12,
                    paddingHorizontal: 15,
                  }}>
                  Click here to take photo
                </Text>
              </TouchableOpacity>
            </View>
            {/* <View
              style={{
                position: 'absolute',
                bottom: 40,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontFamily: 'PoppinsRegular',
                  color: '#656565',
                }}>
                Please take a photo of yourself.
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontFamily: 'PoppinsRegular',
                  color: '#656565',
                }}>
                This is a required part of your helth record at SCBHS
              </Text>
            </View> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ImageForm;
