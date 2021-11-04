import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import { ErrorMessage, Form, FormField, SubmitButton } from "../components/forms";
import authApi from "../api/auth";
import useAuth from "../hooks/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const response = await authApi.login(email, password);

    if (!response.ok) {
      return setLoginFailed(true);
    }

    auth.logIn(response.data);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Form initialValues={{ email: "", password: "" }} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <ErrorMessage error="Invalid email or password." visible={loginFailed} />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton>Login</SubmitButton>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 25,
  },
});

export default LoginScreen;
