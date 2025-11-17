import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { LoginData, loginSchema } from '@/components/schema/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Logo from '@/assets/logo.svg';
import { useRouter } from 'expo-router';
import { useLoginStore } from '@/store/store';
import Feather from '@expo/vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { submitLogin } = useLoginStore();
  const { height, width } = useWindowDimensions();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    console.log('Login Data:', data);

    if (!data.passcode || !data.password) return;

    const response = await submitLogin(data);

    if (!response.success) {
      return;
    }

    const role = response.data.role;
    console.log('I needed this role:', role);

    if (role === 'doctor') {
      router.push('/admin');
    } else if (role === 'form') {
      router.push('/(form)');
    } else {
      router.push('/screen');
    }
  };

  const handlePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const code = 'passcode';

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, width: '100%' }}
      contentContainerStyle={{
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: height,
        width: '100%',
      }}>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F8F9FA',
        }}>
        <View
          style={{
            width: '72%',
            borderColor: '#FFDE59',
            borderWidth: 1,
            backgroundColor: 'white',
            borderRadius: 20,
          }}>
          <View style={{ alignItems: 'center', margin: 30 }}>
            <Logo width={100} height={100} />
          </View>
          <View style={{ width: '72%', alignSelf: 'center' }}>
            {/* Passcode Input */}
            <View style={{ marginBottom: 30 }}>
              <Text style={{ fontSize: 18, fontFamily: 'PoppinsRegular', marginBottom: 8 }}>
                Enter Passcode
              </Text>
              <Controller
                control={control}
                name={code}
                render={({ field: { onChange, value } }) => (
                  <>
                    <TextInput
                      placeholder="Enter Passcode"
                      value={value}
                      onChangeText={onChange}
                      placeholderTextColor="#999"
                      autoCorrect={false}
                      autoCapitalize="none"
                      spellCheck={false}
                      style={{
                        borderWidth: 1,
                        borderColor: errors[code] ? 'red' : '#FFDE59',
                        padding: 15,
                        marginBottom: 5,
                        borderRadius: 10,
                        fontSize: 18,
                        fontFamily: 'PoppinsRegular',
                        backgroundColor: 'white',
                      }}
                    />
                    {errors[code] && <Text style={{ color: 'red' }}>{errors[code].message}</Text>}
                  </>
                )}
              />
            </View>

            {/* Passwod Input */}
            <View style={{ marginBottom: 30 }}>
              <Text style={{ fontSize: 18, fontFamily: 'PoppinsRegular', marginBottom: 8 }}>
                Enter Password
              </Text>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <View>
                    <TextInput
                      placeholder="Enter Password"
                      value={value}
                      onChangeText={onChange}
                      placeholderTextColor="#999"
                      autoCorrect={false}
                      autoCapitalize="none"
                      spellCheck={false}
                      secureTextEntry={!showPassword}
                      style={{
                        borderWidth: 1,
                        borderColor: errors.passcode ? 'red' : '#FFDE59',
                        padding: 15,
                        marginBottom: 5,
                        borderRadius: 10,
                        fontSize: 18,
                        fontFamily: 'PoppinsRegular',
                        backgroundColor: 'white',
                      }}
                    />
                    <TouchableOpacity
                      onPress={handlePassword}
                      style={{
                        position: 'absolute',
                        right: 25,
                        top: '50%',
                        transform: [{ translateY: -13.5 }],
                      }}>
                      {showPassword ? (
                        <Feather name="eye" size={27} color="#999" />
                      ) : (
                        <Feather name="eye-off" size={27} color="#999" />
                      )}
                    </TouchableOpacity>

                    {errors.password && (
                      <Text style={{ color: 'red' }}>{errors.password.message}</Text>
                    )}
                  </View>
                )}
              />
            </View>

            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={{
                borderWidth: 1,
                borderColor: '#000',
                alignSelf: 'center',
                paddingHorizontal: 60,
                paddingVertical: 10,
                borderRadius: 6,
                backgroundColor: '#000000',
                marginTop: 10,
              }}
              activeOpacity={0.8}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 22,
                  fontFamily: 'PoppinsSemi',
                  textAlign: 'center',
                }}>
                Log in
              </Text>
            </TouchableOpacity>

            <Text style={{ textAlign: 'center', fontSize: 16, margin: 40, fontWeight: 300 }}>
              Super Admin access only or Agency Authroized use only
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
