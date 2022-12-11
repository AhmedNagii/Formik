import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextError from "./TextError";
import { Field, ErrorMessage } from "formik";

function DatePicker({ label, name, ...rest }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ field, form }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <ReactDatePicker
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default DatePicker;

// const { label, name, ...rest } = props;
// return (
//   <div className="form-control">
//     <label htmlFor={name}>{label}</label>
//     <Field name={name}>
//       {({ form, field }) => {
//         const { setFieldValue } = form;
//         const { value } = field;
//         return (
//           <DateView
//             id={name}
//             {...field}
//             {...rest}
//             selected={value}
//             onChange={(val) => setFieldValue(name, val)}
//           />
//         );
//       }}
//     </Field>
//     <ErrorMessage component={TextError} name={name} />
//   </div>
// );
