import { Stack } from 'expo-router';
import { isLoaded, useFonts } from 'expo-font';
import { useEffect } from 'react';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { View } from 'react-native';
import { useGlobalStore } from '@/store/globalStore';
import AppLoader from '@/components/apploader';
import ToastManager from 'toastify-react-native';
import { toastConfig } from '@/util/toastconfig';

export default function RootLayout() {
  const isGlobalLoading = useGlobalStore((state) => state.isGlobalLoading);

  const [fontsLoaded] = useFonts({
    InterRegular: require('@/assets/fonts/Inter_24pt-Regular.ttf'),
    InterBold: require('@/assets/fonts/Inter_24pt-Bold.ttf'),
    PoppinsRegular: require('@/assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('@/assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemi: require('@/assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('@/assets/fonts/Poppins-Bold.ttf'),
    PoppinsLight: require('@/assets/fonts/Poppins-Light.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      console.log('Fonts loaded');
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false, gestureEnabled: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(form)" />
      </Stack>
      {isGlobalLoading && <AppLoader />}
      <ToastManager config={{ toastConfig }} />
    </View>
  );
}
