import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Textarea({ label, name, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{name}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Textarea;
