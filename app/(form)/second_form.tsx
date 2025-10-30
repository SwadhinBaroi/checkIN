import { Link, useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/app/constants/colors';
import { FormData, formSchema } from '@/components/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { Dropdown } from 'react-native-element-dropdown';
import DatePick from '@/components/datepicker';
import { useFormStore, useLayoutStore } from '@/store/store';
import { formatDate } from '@/util/dateFormat';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import InputForm from '@/components/inputform';
import DropDownForm from '@/components/dropdownform';
import {
  employedData,
  gernderData,
  homelessData,
  hungryData,
  idCardData,
  insuranceData,
  serviceAreaData,
  pronounsData,
  raceData,
  showerData,
  stateNamesData,
} from '@/util/dropdowndata';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import DropDownFormFull from '@/components/dropdownformfull';

const SecondForm = () => {
  const router = useRouter();
  const { formData, setFormData } = useFormStore();
  const { colorState, setColorState } = useLayoutStore();
  // const [layout, setLayout] = useState({ width: 0, height: 0 });
  const [buttonLayout, setButtonLayout] = useState({ width: 0, height: 0 });

  const page2Schema = formSchema.pick({
    phone: true,
    ssn: true,
    lastKnownStreet: true,
    secondStreet: true,
    streetName: true,
    state: true,
    city: true,
    zipCode: true,
    serviceArea: true,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof page2Schema>>({
    resolver: zodResolver(page2Schema),
    mode: 'onChange',
  });

  const DatePickRef = useRef(null);

  const handleLayoutButton = (event) => {
    const { width, height } = event.nativeEvent.layout;
    console.log(width, height);
    setButtonLayout({ width, height });
  };
  const onSubmit = (data) => {
    console.log('page 2 data', data);
    setColorState(colorState + 1);
    setFormData(data);
    router.push('/(form)/image_form');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 20}>
      <ScrollView style={{ flex: 1, backgroundColor: Colors.background_light }}>
        <View style={{ backgroundColor: Colors.background_light, flex: 1, alignItems: 'center' }}>
          <View style={{ width: '62%', alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'InterBold',
                fontSize: 36,
                color: Colors.primary,
                marginVertical: 10,
              }}>
              Welcome! Please Check-in
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'PoppinsRegular',
                fontSize: 18,
                color: Colors.text,
              }}>
              Fill out the form below to get started. This information helps us provide you with the
              best possible service
            </Text>
          </View>

          <View style={{ width: '90%', marginTop: 50 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 50 }}>
              <MaterialIcons name="person" size={32} color="#FFDE59" />
              <Text style={{ fontFamily: 'PoppinsSemi', fontSize: 20 }}>Personal Information</Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
              <InputForm
                title={'phone'}
                label={'PHONE# *'}
                placeHolder={'(556)000-000'}
                keyboardType={'numeric'}
                control={control}
                errors={errors}
              />
              <InputForm
                title={'ssn'}
                label={'SSN *'}
                placeHolder={'000-00-0000'}
                keyboardType={'numeric'}
                control={control}
                errors={errors}
              />
            </View>

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
              <InputForm
                title={'lastKnownStreet'}
                label={'STREET NAME(LAST KNOWN ADDRESS) *'}
                placeHolder={'Last Known Address'}
                control={control}
                errors={errors}
              />
              <InputForm
                title={'secondStreet'}
                label={'SECOND STREET *'}
                placeHolder={'Second Street'}
                control={control}
                errors={errors}
              />
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
              <InputForm
                title={'streetName'}
                label={'STREET NAME *'}
                placeHolder={'Street Name'}
                control={control}
                errors={errors}
              />
              <DropDownForm
                title={'state'}
                label={'STATE *'}
                placeHolder={'Enter State'}
                data={stateNamesData}
                control={control}
                errors={errors}
              />
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
              <InputForm
                title={'city'}
                label={'CITY *'}
                placeHolder={'Enter City'}
                control={control}
                errors={errors}
              />
              <InputForm
                title={'zipCode'}
                label={'ZIP CODE *'}
                placeHolder={'Enter ZIP Code'}
                keyboardType={'number-pad'}
                control={control}
                errors={errors}
              />
            </View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
              <DropDownFormFull
                title={'serviceArea'}
                label={'PREFERRED SERVICE AREA *'}
                placeHolder={'Select Preferred Service Area'}
                data={serviceAreaData}
                control={control}
                errors={errors}
              />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
              {/* <TouchableOpacity
                onPress={() => {}}
                style={{
                  borderWidth: 1,
                  borderColor: '#D1D5DB',
                  alignSelf: 'center',
                  height: layout.height,
                  width: layout.width,
                  borderRadius: 6,
                  backgroundColor: '#D1D5DB',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                activeOpacity={0.8}>
                <Text
                  style={{
                    color: '#000000',
                    fontSize: 22,
                    fontFamily: 'PoppinsSemi',
                    textAlign: 'center',
                  }}>
                  Clear
                </Text>
              </TouchableOpacity> */}
              <TouchableOpacity
                onPress={() => {
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
                onPress={handleSubmit(onSubmit)}
                // onPress={() => {
                //   setColorState(colorState + 1);
                //   router.push('/(form)/image_form');
                // }}
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SecondForm;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: 'red',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 18,
    fontFamily: 'PoppinsRegular',
  },
  iconStyle: {
    width: 35,
    height: 26,
    tintColor: '#999',
  },
});
