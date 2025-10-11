import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { LoginData, loginSchema } from '@/components/schema/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Logo from '@/assets/logo.svg';
import { useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    console.log('Form Data: ', data);
    router.replace('/(form)');
  };

  const code = 'passcode';

  return (
    <View
      style={{
        flex: 1,
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
            <Text style={{ fontSize: 14, marginBottom: 5 }}>Enter Passcode</Text>
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
                    autoCorrect={false} // 🔹 disables autocorrect
                    autoCapitalize="none" // 🔹 disables automatic capitalization
                    spellCheck={false} // 🔹 disables spelling suggestions
                    style={{
                      borderWidth: 1,
                      borderColor: errors[code] ? 'red' : '#FFDE59',
                      padding: 15,
                      marginBottom: 5,
                      borderRadius: 6,
                      fontSize: 14,
                    }}
                  />
                  {errors[code] && <Text style={{ color: 'red' }}>{errors[code].message}</Text>}
                </>
              )}
            />
          </View>

          {/* Passwod Input */}
          <View style={{ marginBottom: 30 }}>
            <Text style={{ fontSize: 14, marginBottom: 5 }}>Enter Password</Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <>
                  <TextInput
                    placeholder="Enter Password"
                    value={value}
                    onChangeText={onChange}
                    placeholderTextColor="#999"
                    style={{
                      borderWidth: 1,
                      borderColor: errors.passcode ? 'red' : '#FFDE59',
                      padding: 15,
                      marginBottom: 5,
                      borderRadius: 6,
                      fontSize: 14,
                    }}
                  />
                  {errors.password && (
                    <Text style={{ color: 'red' }}>{errors.password.message}</Text>
                  )}
                </>
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
            }}
            activeOpacity={0.8}>
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                fontWeight: '600',
                textAlign: 'center',
              }}>
              Log in
            </Text>
          </TouchableOpacity>

          <Text style={{ textAlign: 'center', fontSize: 14, margin: 40, fontWeight: 300 }}>
            Super Admin access only or Agency Authroized use only
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
