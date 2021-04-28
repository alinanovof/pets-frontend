import { useFormik } from "formik";
import { useAuth } from "../../context/AuthContext";
import { signup } from "../../api/auth";
import * as Yup from "yup";
import { useState } from "react";

const ModalForm = (props) => {
  const [errorMsg, setErrorMsg] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fname: "",
      lname: "",
      tel: "",
    },
    onSubmit: async (values) => {
      await addUserOnSubmit(values);
    },
  });

  const addUserOnSubmit = async (values) => {
    const email = values.email;
    const password = values.password;
    const first_name = values.fname;
    const last_name = values.lname;
    const tel = values.tel;
    try {
      await signup(email, password, first_name, last_name, tel);
      props.hideModal();
    } catch (err) {
      setErrorMsg(err.name + ': ' + err.message);
    }
  };

  return (
    <form className="signup-form " onSubmit={formik.handleSubmit}>
      {errorMsg && (
        <div className="alert alert-danger" role="alert">
          {errorMsg}
        </div>
      )}
      <div className="profile-flex-child mb-3 ">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3 profile-flex-child">
        <label
          htmlFor="password"
          className="form-label"
          value={formik.values.password}
        >
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={formik.handleChange}
          required
        />
      </div>
      <div className="mb-3 profile-flex-child">
        <label htmlFor="password" className="form-label">
          Repeat Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirm-password"
          onChange={formik.handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fname" className="form-label">
          First Name
        </label>
        <input
          type="first-name"
          className="form-control"
          id="fname"
          onChange={formik.handleChange}
          value={formik.values.fname}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lname" className="form-label">
          Last Name
        </label>
        <input
          type="last-name"
          className="form-control"
          id="lname"
          onChange={formik.handleChange}
          value={formik.values.lname}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tel" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          className="form-control"
          id="tel"
          onChange={formik.handleChange}
          value={formik.values.tel}
        />
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button type="submit" className="btn btn-primary mx-auto">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default ModalForm;
