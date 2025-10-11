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

// type Props = {
//   title: string;
//   label: string;
//   placeHolder: string;
//   data: OptionType[];
// };

const DropDownForm = ({ title, label, placeHolder, data, control, errors }: Props) => {
  console.log('title in input form', title);
  console.log('label in input form', label);
  console.log('placeHolder in input form', placeHolder);

  // const page1Schema = formSchema.pick({
  //   fullName: true,
  //   gender: true,
  //   dateOfBirth: true,
  //   pronouns: true,
  // });

  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<z.infer<typeof page1Schema>>({
  //   resolver: zodResolver(page1Schema),
  // });

  return (
    <View style={{ marginBottom: 24, width: '48.5%' }}>
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
                console.log('Selected Item', item);
                onChange(item.value);
              }}
              iconStyle={styles.iconStyle}
            />
            {console.log('Value', value)}

            {errors[title] && <Text style={{ color: 'red' }}>{errors[title].message}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default DropDownForm;

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
