import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { Controller, useForm, Control, FieldErrors } from 'react-hook-form';

type Props<T> = {
  title: keyof T;
  label: string;
  placeHolder: string;
  control: Control<T>;
  errors: FieldErrors<T>;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'number-pad';
};

const InputForm = ({
  title,
  label,
  placeHolder,
  control,
  errors,
  keyboardType = 'default',
}: Props) => {
  // console.log('title in input form', title);
  // console.log('label in input form', label);
  // console.log('placeHolder in input form', placeHolder);

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
            <TextInput
              placeholder={placeHolder}
              value={value}
              onChangeText={onChange}
              placeholderTextColor="#999"
              autoCorrect={false}
              autoCapitalize="words"
              spellCheck={false}
              keyboardType={keyboardType}
              style={{
                borderWidth: 1,
                borderColor: errors[title] ? 'red' : '#FFDE59',
                padding: 15,
                marginBottom: 5,
                borderRadius: 10,
                fontSize: 18,
                fontFamily: 'PoppinsRegular',
                backgroundColor: 'white',
              }}
            />
            {errors[title] && <Text style={{ color: 'red' }}>{errors[title].message}</Text>}
          </>
        )}
      />
    </View>
  );
};

export default InputForm;
