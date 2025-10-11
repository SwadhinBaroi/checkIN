// import React, { useRef, useState } from 'react';
// import { Button, Text, View } from 'react-native';
// import { DatePicker } from '@s77rt/react-native-date-picker';
// import type { DatePickerHandle } from '@s77rt/react-native-date-picker';

// const SecondForm = () => {
//   const datePicker = useRef<DatePickerHandle>(null);
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);

//   return (
//     <>
//       <Text>Selected date: {selectedDate?.toLocaleDateString()}</Text>
//       <View>
//         <Button title="Select date 📅" onPress={() => datePicker.current?.showPicker()} />
//         <DatePicker ref={datePicker} type="date" value={selectedDate} onChange={setSelectedDate} />
//       </View>
//     </>
//   );
// };

// export default SecondForm;

import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Example = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
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
};

export default Example;

// import { DatePicker } from '@s77rt/react-native-date-picker';
// import type { DatePickerHandle } from '@s77rt/react-native-date-picker';

// function Example() {
//   const datePicker = useRef<DatePickerHandle>(null);
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);

//   return (
//     <>
//       <Text>Selected date: {selectedDate?.toLocaleDateString()}</Text>
//       <View>
//         <Button title="Select date 📅" onPress={() => datePicker.current?.showPicker()} />
//         <DatePicker ref={datePicker} type="date" value={selectedDate} onChange={setSelectedDate} />
//       </View>
//     </>
//   );
// }

// export default Example;
