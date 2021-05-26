import { Formik, Field, Form } from "formik";
import { useAuth } from "../context/AuthContext";
import { getUser, updateUser } from "../api/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState();
  const [successMsg, setSuccessMsg] = useState(false);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();
  const { userId } = useParams();
  const [errorMsg, setErrorMsg] = useState("");
  useEffect(() => {
    getUser(auth.token).then((data) => {
      const newUser = data.user;
      setUser(newUser);
      setLoading(false);
    });
  }, [auth.token]);

  const submitProfile = async (values) => {
    const updProfile = {
      email: values.email,
      password: values.password,
      passwordConfirmation: values.passwordConfirmation,
      firstName: values.fname,
      lastName: values.lname,
      tel: values.tel,
      bio: values.bio,
    };
    try {
      setErrorMsg(false);
      await updateUser(updProfile, userId, auth.token);
      setSuccessMsg(true);
    } catch (err) {
      setSuccessMsg(false);
      setErrorMsg(err.response.data.errors[0].msg);
    }
  };

  if (!user) {
    return (
      <div class="d-flex justify-content-center mt-3">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <Formik
      initialValues={{
        email: user.email,
        password: user.password,
        passwordConfirmation: user.password,
        fname: user.first_name,
        lname: user.last_name,
        tel: user.tel,
        bio: user.bio,
      }}
      onSubmit={async (values) => {
        await submitProfile(values);
        setUser(user);
      }}
    >
      <div className="page-wrapper card-back">
        {loading && (
          <div class="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        <h2>Profile</h2>
        {errorMsg && (
          <div className="alert alert-danger p-2 m-1" role="alert">
            {errorMsg}
          </div>
        )}
        {successMsg && (
          <div className="alert alert-success p-2 m-1" role="alert">
            Profile Updated Successfully
          </div>
        )}
        <Form className="profile-form">
          <div className="row"></div>
          <div className="profile-flex-child mb-1 col">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <Field
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
            />
          </div>
          <div class="row">
            <div className="mb-2 profile-flex-child col">
              <label htmlFor="password" className="form-label">
                New Password
              </label>
              <Field
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
            </div>
            <div className="mb-3 profile-flex-child col">
              <label htmlFor="password" className="form-label">
                Repeat Password
              </label>
              <Field
                type="password"
                className="form-control"
                id="passwordConfirmation"
                name="passwordConfirmation"
              />
            </div>
          </div>
          <div class="row">
            <div className="mb-3 col">
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <Field
                type="first-name"
                className="form-control"
                id="fname"
                name="fname"
              />
            </div>
            <div className="mb-3 col">
              <label htmlFor="lname" className="form-label">
                Last Name
              </label>
              <Field
                type="last-name"
                className="form-control"
                id="lname"
                name="lname"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="tel" className="form-label">
              Phone Number
            </label>
            <Field type="tel" className="form-control" id="tel" name="tel" />
          </div>
          <label htmlFor="bio" className="form-label">
            Bio
          </label>
          <Field
            type="text"
            className="form-control"
            id="bio"
            as="textarea"
            placeholder="A few words about yourself..."
            name="bio"
          />
          <div class="d-grid gap-2">
            <button type="submit" className="btn mt-4 btn-primary">
              Submit
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default ProfilePage;
