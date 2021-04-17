import { useFormik } from "formik";

const ProfilePage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fname: "",
      lname: "",
      tel: "",
      bio: ""
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="page-wrapper">
      <h2>Profile</h2>
      <form className="profile-form" onSubmit={formik.handleSubmit}>
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
        <label htmlFor="bio" className="form-label">
          Bio
        </label>
        <textarea
          type="text"
          className="form-control"
          id="bio"
          placeholder="A few words about yourself..."
          onChange={formik.handleChange}
          value={formik.values.bio}
        />
        <button type="submit" className="btn mt-4 btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
