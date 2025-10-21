import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useFormStore } from '@/store/store';
import { formatDate } from '@/util/dateFormat';

const DatePick = forwardRef(({ setValue, fieldName }, ref) => {
  useImperativeHandle(ref, () => {
    return {
      showDatePicker,
    };
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const { setFormData } = useFormStore();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setFormData('dateOfBirth', date);
    hideDatePicker();
    setValue(fieldName, date, { shouldValidate: true });
  };

  return (
    <View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        modalStyleIOS={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        pickerContainerStyleIOS={{
          backgroundColor: 'white',
          borderRadius: 20,
          width: 500, // make it wider
        }}
        pickerStyleIOS={{
          width: '100%',
          paddingHorizontal: 85,
        }}
        confirmTextIOS="OK"
        cancelTextIOS="Cancel"
        buttonTextColorIOS="#007AFF"
        customCancelButtonIOS={() => <TouchableOpacity></TouchableOpacity>}
      />
    </View>
  );
});

export default DatePick;
