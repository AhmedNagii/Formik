import React from "react";
import Input from "./Input";
import Select from "./Select";
import Textarea from "./Textarea";
import RadioButtons from "./RadioButton";
import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";

function FormikControl({ control, ...rest }) {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
