import { Link } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from './constants/colors';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ width: '42%', gap: 20 }}>
        <Text style={{ fontFamily: 'PoppinsMedium', fontSize: 24, color: Colors.primary }}>
          This Page is only for testing purpose to check all the routes or pages. Final app will be
          autometic, will not containg this page.
        </Text>

        <TouchableOpacity style={{ backgroundColor: 'black', padding: 10, borderRadius: 10 }}>
          <Link href="/login">
            <Text
              style={{
                color: 'white',
                fontFamily: 'PoppinsMedium',
                fontSize: 20,
                textAlign: 'center',
              }}>
              Go to Login
            </Text>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: 'black', padding: 10, borderRadius: 10 }}>
          <Link href="/(form)/image_form">
            <Text
              style={{
                color: 'white',
                fontFamily: 'PoppinsMedium',
                fontSize: 20,
                textAlign: 'center',
              }}>
              Go to Form
            </Text>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: 'black', padding: 10, borderRadius: 10 }}>
          <Link href="/admin">
            <Text
              style={{
                color: 'white',
                fontFamily: 'PoppinsMedium',
                fontSize: 20,
                textAlign: 'center',
              }}>
              List for Admin
            </Text>
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: 'black', padding: 10, borderRadius: 10 }}>
          <Link href="/screen">
            <Text
              style={{
                color: 'white',
                fontFamily: 'PoppinsMedium',
                fontSize: 20,
                textAlign: 'center',
              }}>
              List for User 'It will be a large screen'
            </Text>
          </Link>
        </TouchableOpacity>

        {/* <Link href="/login">Go to Login</Link>
        <Link href="/(form)">Go to Form</Link>
        <Link href="/admin">List for Admin</Link>
        <Link href="/screen">List for User</Link> */}
      </View>
    </SafeAreaView>
  );
}
