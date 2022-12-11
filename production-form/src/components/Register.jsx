import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function Register() {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telePhonemoc" },
  ];

  const initialValues = {
    email: "",
    password: "",
    confimPassword: "",
    telephone: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email"),
    password: Yup.string().required("Required"),
    confimPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required"),
    }),
  });

  const onSubmit = (values) => console.log("Form data", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />

            <FormikControl
              control="input"
              type="password"
              label="password"
              name="password"
            />
            <FormikControl
              control="input"
              type="password"
              label="Confirm password"
              name="confimPassword"
            />
            <FormikControl
              control="radio"
              label="Mode of contact"
              name="modeOfContact"
              options={options}
            />
            <FormikControl
              control="input"
              type="text"
              label="Phone number"
              name="phone"
            />
            <button type="submit" disabled={!formik.isValid}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default Register;
