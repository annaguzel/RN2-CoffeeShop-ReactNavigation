import React from "react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";

import { Text } from "native-base";
import styles from "./styles";

const Login = ({navigation}) => (
  <View style={styles.authContainer}>
    <Text style={styles.authTitle}>Login</Text>
    <TextInput
      style={styles.authTextInput}
      placeholder="Username"
      placeholderTextColor="#A6AEC1"
    />
    <TextInput
      style={styles.authTextInput}
      placeholder="Password"
      placeholderTextColor="#A6AEC1"
      secureTextEntry={true}
    />
    <TouchableOpacity style={styles.authButton}>
      <Text onPress={()=>navigation.navigate("CoffeeList")} style={styles.authButtonText}>Log in</Text>
    </TouchableOpacity>
    <Text onPress={()=>navigation.navigate("Signup")} style={styles.authOther}>Click here to register!</Text>
  </View>
);

export default Login;
