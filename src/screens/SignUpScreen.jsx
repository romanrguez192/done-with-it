import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";

import { ActivityIndicator } from "../components";
import { ErrorMessages, Form, FormField, SubmitButton } from "../components/forms";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../hooks/useAuth";
import useApi from "../hooks/useApi";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function SignUpScreen() {
  const signupApi = useApi(usersApi.signup);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (user) => {
    const response = await signupApi.request(user);

    if (!response.ok) {
      if (response.data) {
        setError(response.data.error);
      } else {
        setError("An unexpected error occurred.");
        console.log(response);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(user.email, user.password);
    auth.logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={signupApi.loading || loginApi.loading} />
      <ScrollView style={styles.container}>
        <Form
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormField autoCorrect={false} icon="account" name="name" placeholder="Name" />
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
          <SubmitButton>Sign Up</SubmitButton>
        </Form>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default SignUpScreen;
