import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import TextError from "./TextError";

function YoutubeForm() {
  const initialValues = {
    name: "Khaled",
    email: "",
    channel: "",
    comments: "",
    address: "",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNumbers: ["", ""],
    phNumbers: [],
  };
  const savedValues = {
    name: "AHMED",
    email: "AHMED@gmail.com",
    channel: "my channel",
    comments: "nothing to add",
    address: "the moon",
    social: {
      facebook: "",
      twitter: "",
    },
    phoneNumbers: ["", ""],
    phNumbers: [],
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email format").required("Required"),
    channel: yup.string().required("Required"),
  });
  const [formValues, setFormValues] = useState(null);
  return (
    <Formik
      initialValues={initialValues || formValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      //next 2 attributes in case we need to make or "error object" created with on submit
      //   validateOnChange={false}
      //   validateOnBlur={false}
      //   validateOnMount={false}
    >
      {(formik) => {
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" />
            </div>

            <div className="form-control">
              <label htmlFor="email">E-mail</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" component={TextError} />
            </div>

            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field type="text" id="channel" name="channel" />
              <ErrorMessage name="channel">
                {(errorMsg) => <div className="error">{errorMsg}</div>}
              </ErrorMessage>
            </div>

            <div className="form-control">
              <label htmlFor="comments">comments</label>
              <Field as="textarea" type="text" id="comments" name="comments" />
              <ErrorMessage name="comments" />
            </div>

            <div className="form-control">
              <label htmlFor="address">Address</label>
              <Field name="address">
                {(props) => {
                  const { field, form, meta } = props;
                  return (
                    <div>
                      <input type="text" id="address" {...field} />
                      {meta.touched && meta.error && <div>{meta.error}</div>}
                    </div>
                  );
                }}
              </Field>
              <ErrorMessage name="address" />
            </div>

            <div className="form-control">
              <label htmlFor="facebook">Facebook profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>

            <div className="form-control">
              <label htmlFor="twitter">Twitter profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>

            <div className="form-control">
              <label htmlFor="primaryPh">Primary phone number</label>
              <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
            </div>

            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary phone number</label>
              <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
            </div>

            <div className="form-control phNumbers">
              <label>List of phone numbers</label>
              <FieldArray name="phNumbers">
                {(filedArrayProps) => {
                  const { push, remove, form } = filedArrayProps;
                  const { values } = form;
                  const { phNumbers } = values;
                  return (
                    <div className="flex">
                      {phNumbers.map((phNumber, index) => (
                        <div key={index}>
                          <Field
                            className="arrayfiled"
                            name={`phNumbers[${index}]`}
                          />
                          {index > 0 && (
                            <button type="button" onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                        </div>
                      ))}
                      <button type="button" onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  );
                }}
              </FieldArray>
            </div>

            {/* <button
              type='button'
              onClick={() => formik.validateField('comments')}
            >
              Validate comments
            </button>
            <button
              type='button'
              onClick={() => formik.setFieldTouched('comments')}
            >
              Visit comments
            </button>
            <button type='button' onClick={() => formik.validateForm()}>
              Validate all
            </button>
            <button
              type='button'
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true
                })
              }
            >
              Visit all
            </button> */}
            <button type="button" onClick={() => setFormValues(savedValues)}>
              Load saved date
            </button>
            <button
              type="submit"
              disabled={formik.isSubmitting || formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default YoutubeForm;
