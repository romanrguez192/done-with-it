import React from "react";
import { useFormikContext } from "formik";

import { MyTextInput, MyErrorMessage } from ".";

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
