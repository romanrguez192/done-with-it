import React from "react";
import { useFormikContext } from "formik";

import MyTextInput from "../MyTextInput";
import MyErrorMessage from "./MyErrorMessage";

function MyFormField({ name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <MyTextInput onBlur={() => setFieldTouched(name)} onChangeText={handleChange(name)} {...otherProps} />
      <MyErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default MyFormField;
