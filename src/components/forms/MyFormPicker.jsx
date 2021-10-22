import React from "react";
import { useFormikContext } from "formik";

import MyPicker from "../MyPicker";
import MyErrorMessage from "./MyErrorMessage";

function MyFormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <MyPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <MyErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default MyFormPicker;
