import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaView>
      <View>
        <Text>Welcome to React World</Text>
        <Link href="/login">Go to Login</Link>
        <Link href="/(form)">Go to Form</Link>
      </View>
    </SafeAreaView>
  );
}

// import React from "react";
// import { View, Text, TextInput, StyleSheet, Button } from "react-native";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// const schema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Invalid email"),
// });

// type FormData = z.infer<typeof schema>;

// export default function FormWithLabel() {
//   const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = (data: FormData) => console.log(data);

//   return (
//     <View style={styles.container}>

//       {/* Name Field */}
//       <Text style={styles.label}>Name</Text>
//       <Controller
//         control={control}
//         name="name"
//         render={({ field: { onChange, value } }) => (
//           <>
//             <TextInput
//               style={[styles.input, errors.name && styles.errorBorder]}
//               value={value}
//               onChangeText={onChange}
//               placeholder="Enter your name"
//             />
//             {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
//           </>
//         )}
//       />

//       {/* Email Field */}
//       <Text style={styles.label}>Email</Text>
//       <Controller
//         control={control}
//         name="email"
//         render={({ field: { onChange, value } }) => (
//           <>
//             <TextInput
//               style={[styles.input, errors.email && styles.errorBorder]}
//               value={value}
//               onChangeText={onChange}
//               placeholder="Enter your email"
//               keyboardType="email-address"
//             />
//             {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
//           </>
//         )}
//       />

//       <Button title="Submit" onPress={handleSubmit(onSubmit)} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, justifyContent: "center" },
//   label: { marginBottom: 4, fontWeight: "600", fontSize: 16 },
//   input: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 6,
//   },
//   errorBorder: { borderColor: "red" },
//   errorText: { color: "red", marginBottom: 8 },
// });
