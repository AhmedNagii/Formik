import React from "react";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

function YoutubeForm() {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
    comments: "",
    address: "",
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email format").required("Required"),
    channel: yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="text" id="email" name="email" />
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>

        <div className="form-control">
          <label htmlFor="comments">comments</label>
          <Field as="textarea" type="text" id="comments" name="comments" />
          <ErrorMessage name="channel" />
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

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
