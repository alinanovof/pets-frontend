const ProfilePage = () => {
  return (
    <div className="page-wrapper">
      <h2>Profile</h2>
      <form className="profile-form">
        
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="first-name" className="form-label">
            First Name
          </label>
          <input type="fname" className="form-control" id="first-name" />
        </div>
        <div className="mb-3">
          <label htmlFor="last-name" className="form-label">
            Last Name
          </label>
          <input type="lname" className="form-control" id="last-name" />
        </div>
        <div className="mb-3">
          <label htmlFor="tel" className="form-label">
            Phone Number
          </label>
          <input type="tel" className="form-control" id="tel" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
