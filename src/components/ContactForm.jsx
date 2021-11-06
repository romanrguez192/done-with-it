import React from "react";
import { Alert } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

import { Form, FormField, SubmitButton } from "./forms";
import messagesApi from "../api/messages";

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message"),
});

function ContactForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller.");
    }

    resetForm();

    Notifications.scheduleNotificationAsync({
      content: {
        title: "Message sent",
        body: "Your message has been sent to the seller.",
      },
      trigger: null,
    });
  };

  return (
    <Form initialValues={{ message: "" }} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <FormField maxLength={255} multiline name="message" numberOfLines={3} placeholder="Message..." />
      <SubmitButton>Contact Seller</SubmitButton>
    </Form>
  );
}

export default ContactForm;
