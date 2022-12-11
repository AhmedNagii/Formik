import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

function YoutubeForm() {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  //   const validate = (values) => {
  //     let errors = {};

  //     if (!values.name) {
  //       errors.name = "Required";
  //     }
  //     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //       errors.email = "Invalid email format";
  //     }
  //     if (!values.channel) {
  //       errors.channel = "Required";
  //     }

  //     return errors;
  //   };

  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email format").required("Required"),
    channel: yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  //   console.log("visted fildes", formik.touched);

  return (
    <div>
      <form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="error">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.errors.channel && formik.touched.channel && (
            <div className="error">{formik.errors.channel}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
