import { signup, login } from "../../api/auth";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useAuth } from '../../context/AuthContext'

const SignupSchema = Yup.object().shape({
  fname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided")
    .matches(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/, '6 chars minimum, 1 letter, 1 number'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  tel: Yup.number("Should be a number")
  .typeError("That doesn't look like a phone number")
  .integer("Should be a number")
  .min(8, "Must be more than 8 characters")
  .required("Phone number is required")
});

const ModalForm = (props) => {
  const auth = useAuth();
  const [errorMsg, setErrorMsg] = useState("");

  const addUserOnSubmit = async (values) => {
    const email = values.email;
    const password = values.password;
    const passwordConfirmation = values.passwordConfirmation;
    const first_name = values.fname;
    const last_name = values.lname;
    const tel = values.tel;
    try {
      await signup(email, password, passwordConfirmation, first_name, last_name, tel);
      const { token } = await login(email, password);
      await auth.saveToken(token)
      props.hideModal();
    } catch (err) {
      setErrorMsg(err.response.data.errors[0].msg);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        fname: "",
        lname: "",
        tel: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        await addUserOnSubmit(values);
      }}
    >
      
      {({ errors, touched, dirty, isValid }) => (
        <Form className="signup-form">
          {errorMsg && (
            <div className="alert alert-danger" role="alert">
              {errorMsg}
            </div>
          )}

          <div className="profile-flex-child mb-3 ">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <Field
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="emailHelp"
              validationSchema={SignupSchema}
              required
            />{" "}
            {errors.email && touched.email ? (
              <div className="pt-1 pb-1 mt-1 mb-1 alert alert-danger">
                {errors.email}
              </div>
            ) : null}
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3 profile-flex-child">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
            />
            {errors.password && touched.password ? (
              <div className="pt-1 pb-1 mt-2 mb-1 alert alert-danger">
                {errors.password}
              </div>
            ) : null}
          </div>
          <div className="mb-3 profile-flex-child">
            <label htmlFor="password" className="form-label">
              Repeat Password
            </label>
            <Field
              type="password"
              className="form-control"
              id="passwordConfirmation"
              name="passwordConfirmation"
            />
            {errors.passwordConfirmation && touched.passwordConfirmation ? (
              <div className="pt-1 pb-1 mt-1 mb-1 alert alert-danger">
                {errors.passwordConfirmation}
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <Field
              type="first-name"
              className="form-control"
              id="fname"
              name="fname"
            />{" "}
            {errors.fname && touched.fname ? (
              <div className="pt-1 pb-1 mt-1 mb-1 alert alert-danger">
                {errors.fname}
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <Field
              type="last-name"
              className="form-control"
              id="lname"
              name="lname"
            />{" "}
            {errors.lname && touched.lname ? (
              <div className="pt-1 pb-1 mt-1 mb-1 alert alert-danger">
                {errors.lname}
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="tel" className="form-label">
              Phone Number
            </label>
            <Field type="tel" className="form-control" id="tel" name="tel" />
          </div>
          {errors.tel && touched.tel ? (
              <div className="pt-1 pb-1 mt-1 mb-1 alert alert-danger">
                {errors.tel}
              </div>
            ) : null}
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary mx-auto" disabled={!(dirty && isValid)}>
              Sign Up
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ModalForm;
