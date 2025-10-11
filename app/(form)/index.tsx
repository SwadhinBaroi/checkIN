import { Link } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/app/constants/colors';
import { FormData, formSchema } from '@/components/schema/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { Dropdown } from 'react-native-element-dropdown';
import DatePick from '@/components/datepicker';
import { useFormStore } from '@/store/store';
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
  preferredAreaData,
  pronounsData,
  raceData,
  showerData,
} from '@/util/dropdowndata';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const FirstForm = () => {
  const { formData, setFormData } = useFormStore();
  console.log('form data from store', formData);
  let birthDay = '';
  if (formData.dateOfBirth !== null) {
    birthDay = formatDate(formData.dateOfBirth);
  }
  console.log('formatted date', birthDay);

  const page1Schema = formSchema.pick({
    fullName: true,
    gender: true,
    dateOfBirth: true,
    pronouns: true,
    medicaId: true,
    idCard: true,
    insurance: true,
    race: true,
    preferedArea: true,
    employed: true,
    shower: true,
    hungry: true,
    homeless: true,
    emergencyContact: true,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof page1Schema>>({
    resolver: zodResolver(page1Schema),
    mode: 'onChange',
  });

  const DatePickRef = useRef(null);

  return (
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
              title={'fullName'}
              label={'FULL NAME'}
              placeHolder={'Enter your full name'}
              control={control}
              errors={errors}
            />

            <View style={{ marginBottom: 30, width: '48.5%' }}>
              <Text style={{ fontSize: 16, fontFamily: 'PoppinsSemi', marginBottom: 5 }}>
                DATE OF BIRTH *
              </Text>
              <Controller
                control={control}
                name="dateOfBirth"
                render={() => (
                  <>
                    <DatePick ref={DatePickRef} />
                    <TouchableOpacity
                      onPress={() => {
                        DatePickRef.current.showDatePicker();
                      }}>
                      <TextInput
                        placeholder="Select Date"
                        value={birthDay || ''}
                        editable={false} // prevent typing
                        pointerEvents="none"
                        placeholderTextColor="#999"
                        style={{
                          borderWidth: 1,
                          borderColor: errors.dateOfBirth ? 'red' : '#FFDE59',
                          padding: 15,
                          marginBottom: 5,
                          borderRadius: 10,
                          fontSize: 18,
                          fontFamily: 'PoppinsRegular',
                          backgroundColor: 'white',
                        }}
                      />
                    </TouchableOpacity>

                    {errors.dateOfBirth && (
                      <Text style={{ color: 'red' }}>{errors.dateOfBirth.message}</Text>
                    )}
                  </>
                )}
              />
            </View>
          </View>

          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
            <DropDownForm
              title={'gender'}
              label={'GENDER'}
              placeHolder={'Select your gernder'}
              data={gernderData}
              control={control}
              errors={errors}
            />
            <DropDownForm
              title={'pronouns'}
              label={'PRONOUNS'}
              placeHolder={'Select pronouns'}
              data={pronounsData}
              control={control}
              errors={errors}
            />
          </View>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
            <InputForm
              title={'medicaId'}
              label={'MEDICAID# *'}
              placeHolder={'Enter medicaid'}
              control={control}
              errors={errors}
            />
            <DropDownForm
              title={'idCard'}
              label={'ID CARD?'}
              placeHolder={'Select Option'}
              data={idCardData}
              control={control}
              errors={errors}
            />
          </View>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
            <DropDownForm
              title={'insurance'}
              label={'INSURANCE *'}
              placeHolder={'Select insurance'}
              data={insuranceData}
              control={control}
              errors={errors}
            />
            <DropDownForm
              title={'race'}
              label={'RACE *'}
              placeHolder={'Select Race Option'}
              data={raceData}
              control={control}
              errors={errors}
            />
          </View>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
            <DropDownForm
              title={'preferedArea'}
              label={'PREFERRED AREA TO SERVICED'}
              placeHolder={'Select preferred area'}
              data={preferredAreaData}
              control={control}
              errors={errors}
            />
            <DropDownForm
              title={'employed'}
              label={'EMPLOYED?'}
              placeHolder={'Select Option'}
              data={employedData}
              control={control}
              errors={errors}
            />
          </View>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
            <DropDownForm
              title={'shower'}
              label={'WOULD YOU LIKE TO SHOWER?'}
              placeHolder={'Select Option'}
              data={showerData}
              control={control}
              errors={errors}
            />
            <DropDownForm
              title={'humgry'}
              label={'Are you hungry?'}
              placeHolder={'Select Option'}
              data={hungryData}
              control={control}
              errors={errors}
            />
          </View>
          <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
            <DropDownForm
              title={'homeless'}
              label={'ARE YOU HOMELESS?'}
              placeHolder={'Select Housing Status'}
              data={homelessData}
              control={control}
              errors={errors}
            />
            <InputForm
              title={'emergencyContact'}
              label={'EMERGENCY CONTACT'}
              placeHolder={'Emergency Contact'}
              control={control}
              errors={errors}
            />
          </View>
        </View>
        <Link href={'/(form)/image_form'}>Go to Image</Link>
      </View>
    </ScrollView>
  );
};

export default FirstForm;

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
