import { useFormik } from "formik";
import { login } from "../../api/auth";
import { useAuth } from '../../context/AuthContext'

function LoginForm(props) {
  const auth = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      props.hideModal();
      await submitLogin(values);
    },
  });

  const submitLogin = async (values) => {
  
      const email = values.email;
      const password = values.password;
    try {
      const { token } = await login(email, password);
      await auth.saveToken(token)
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
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
  );
}

export default LoginForm;
