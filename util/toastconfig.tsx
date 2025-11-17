import { Text, View } from 'react-native';

export const toastConfig = {
  success: (props) => (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#4CAF50',
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        marginTop: 10,
      }}>
      <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>{props.text1}</Text>
      {props.text2 && (
        <Text style={{ color: 'white', fontSize: 14, marginTop: 4 }}>{props.text2}</Text>
      )}
    </View>
  ),
  error: (props) => (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#E53935',
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        marginTop: 10,
      }}>
      <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>{props.text1}</Text>
      {props.text2 && (
        <Text style={{ color: 'white', fontSize: 14, marginTop: 4 }}>{props.text2}</Text>
      )}
    </View>
  ),
};
