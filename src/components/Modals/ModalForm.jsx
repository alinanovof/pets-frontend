import { useFormik } from "formik";
import { useAuth } from "../../context/AuthContext";

const ModalForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fname: "",
      lname: "",
      tel: "",
    },
    onSubmit: values => {
      props.hideModal()
      console.log(JSON.stringify(values, null, 2));
    },
  });



  return (
    <form className="signup-form " onSubmit={formik.handleSubmit}>
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
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3 profile-flex-child">
        <label
          htmlFor="password"
          className="form-label"
          onChange={formik.handleChange}
          value={formik.values.password}
        >
          Password
        </label>
        <input type="password" className="form-control" id="password" />
      </div>
      <div className="mb-3 profile-flex-child">
        <label htmlFor="password" className="form-label">
          Repeat Password
        </label>
        <input type="password" className="form-control" id="confirm-password" onChange={formik.handleChange}/>
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
        <input type="last-name" className="form-control" id="lname" onChange={formik.handleChange}
          value={formik.values.lname}/>
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
