import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Controller, useForm, Control, FieldErrors } from 'react-hook-form';
import { formSchema } from './schema/formSchema';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dropdown } from 'react-native-element-dropdown';

export type OptionType = {
  label: string;
  value: string;
};

type Props<T> = {
  title: keyof T;
  label: string;
  placeHolder: string;
  data: OptionType[];
  control: Control<T>;
  errors: FieldErrors<T>;
};

const DropDownFormFull = ({ title, label, placeHolder, data, control, errors }: Props) => {
  return (
    <View style={{ marginBottom: 24, width: '100%' }}>
      <Text style={{ fontSize: 16, fontFamily: 'PoppinsSemi', marginBottom: 5 }}>{label}</Text>
      <Controller
        control={control}
        name={title}
        render={({ field: { onChange, value } }) => (
          <>
            <Dropdown
              style={{
                borderWidth: 1,
                borderColor: errors[title] ? 'red' : '#FFDE59',
                padding: 15,
                marginBottom: 5,
                borderRadius: 10,

                backgroundColor: 'white',
              }}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={data}
              labelField="label"
              valueField="value"
              placeholder={placeHolder}
              value={value}
              onChange={(item) => {
                onChange(item.value);
              }}
              iconStyle={styles.iconStyle}
            />

            {errors[title] && <Text style={{ color: 'red' }}>{errors[title].message}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default DropDownFormFull;

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
