import React from "react";
import { useFormikContext } from "formik";

import { MyPicker } from "..";
import { MyErrorMessage } from ".";

function MyFormPicker({ items, name, numberOfColumns, PickerItemComponent, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <MyPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <MyErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default MyFormPicker;
