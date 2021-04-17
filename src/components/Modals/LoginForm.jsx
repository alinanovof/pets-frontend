import { useFormik } from "formik";

function LoginForm (props) {
    const formik = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        onSubmit: (values) => {
          props.hideModal();
          console.log(JSON.stringify(values, null, 2));
        },
      });
return(
    <form className="signup-form" onSubmit={formik.handleSubmit}>
          <div className="profile-flex-child mb-3 ">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className="mb-3 profile-flex-child">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-primary mx-auto">
              Login
            </button>
          </div>
        </form>
)
}

export default LoginForm;
