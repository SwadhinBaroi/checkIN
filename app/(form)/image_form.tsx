import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import ImageLogo from '@/assets/Vector.svg';
import Colors from '../constants/colors';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';
import { useLayoutStore, useFormStore, useLoginStore } from '@/store/store';
import * as ImageManipulator from 'expo-image-manipulator';
import { Toast } from 'toastify-react-native';

const ImageForm = () => {
  const [layout, setLayout] = useState({ width: 0, height: 0 });
  const [buttonLayout, setButtonLayout] = useState({ width: 0, height: 0 });
  const [image, setImage] = useState(null);
  const { colorState, setColorState } = useLayoutStore();
  const router = useRouter();
  const { submitFormData, setFormData } = useFormStore();
  const accessToken = useLoginStore.getState().accessToken;

  // const changeState = () => {
  //   setImage(true);
  // };

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

    if (result?.canceled || result.assets[0].type !== 'image') return;
    const originalUri = result.assets[0].uri;
    setImage(originalUri);
    console.log(originalUri);

    const resized = await ImageManipulator.manipulateAsync(
      originalUri,
      [{ resize: { width: 1080 } }], // max width 1080px, height auto
      { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
    );

    setFormData('image', {
      uri: resized.uri,
      type: 'image/jpeg',
      name: 'profile_image.jpg',
    });
  };

  const handleLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    console.log(width, height);
    setLayout({ width, height });
  };

  const handleLayoutButton = (event) => {
    const { width, height } = event.nativeEvent.layout;
    console.log(width, height);
    setButtonLayout({ width, height });
  };

  const submitForm = async () => {
    setColorState(colorState + 1);
    console.log('Access Token in Image Form:', accessToken);
    if (image === null) {
      Toast.error('You have click the image first');
      return;
    }
    await submitFormData(accessToken);
    setImage(null);
    router.push('/(form)/thankyou');
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background_light }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {image !== null ? (
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
            <Image
              source={{ uri: image }}
              style={{ height: layout.height, width: '100%', borderRadius: 40 }}
            />
          </View>
        ) : (
          <View
            onLayout={handleLayout}
            style={{
              width: '65%', // it is 65
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
                paddingVertical: 250, //maybe 350 or 250
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
              <View
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
              </View>
            </View>
          </View>
        )}
      </View>
      <View style={{ alignItems: 'center', bottom: 200 }}>
        <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity
            onPress={() => {
              setColorState(colorState - 1);
              router.back();
            }}
            style={{
              borderWidth: 1,
              borderColor: '#D1D5DB',
              alignSelf: 'center',
              height: buttonLayout.height,
              width: buttonLayout.width,
              borderRadius: 6,
              backgroundColor: '#D1D5DB',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',

              gap: 10,
            }}
            activeOpacity={0.8}>
            <FontAwesome5 name="arrow-left" size={20} color="black" />
            <Text
              style={{
                color: '#000000',
                fontSize: 22,
                fontFamily: 'PoppinsSemi',
                textAlign: 'center',
              }}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onLayout={handleLayoutButton}
            onPress={submitForm}
            style={{
              borderWidth: 1,
              borderColor: '#000',
              alignSelf: 'center',
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 6,
              backgroundColor: '#000000',

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
              Continue
            </Text>
            <FontAwesome5 name="arrow-right" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ImageForm;
