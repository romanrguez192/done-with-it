import React from "react";
import { useFormikContext } from "formik";

import { MyButton } from "..";

function SubmitButton({ ...props }) {
  const { handleSubmit } = useFormikContext();

  return <MyButton {...props} onPress={handleSubmit} />;
}

export default SubmitButton;
