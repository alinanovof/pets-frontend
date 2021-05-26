import SignUpModal from "./Modals/SignUpModal";
import LoginModal from "./Modals/LoginModal";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { getUser } from "../api/api";

const HomePage = (props) => {
  const auth = useAuth();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isOpenReg, setIsOpenReg] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  useEffect(() => {
    if (!auth.token) {
      fetch("https://my-best-friend-alinanovof.herokuapp.com/")
        .then((res) => res.text())
        .then((res) => {
          setMessage(res);
          
        });
        setLoading(false)
    } else {
      getUser(auth.token).then((data) => {
        setMessage(`Hello, ${data.user.first_name}!`);
      });
      setLoading(false)
    }
  }, [auth.token]);
  const logOut = () => {
    auth.removeToken();
    setSuccessMsg(true);
  };
  const openRegModal = () => setIsOpenReg(true);
  const closeRegModal = () => setIsOpenReg(false);
  const openLoginModal = () => setIsOpenLogin(true);
  const closeLoginModal = () => setIsOpenLogin(false);

  return (
    <div className="page-wrapper text-center">
      <div className="d-flex bd-highlight justify-content-center home-upper-flex">
        <div className="bd-highlight">
          <img
            className="dog-pic-home"
            src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt="a dog"
          ></img>
        </div>
        {loading && (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
        {(!loading && !auth.token) && (
          <>
          <div className="m-3 p-5 bd-highlight align-self-center flex-grow-2 hello-block">
            <h1>
              Welcome, guest!              
            </h1>
            <div>
              First time here? <br />
              <button
                type="button"
                className="btn btn-primary signup-btn btn-sm mb-3"
                onClick={openRegModal}
              >
                Sign Up
              </button>
            </div>
            <div>
              Already registered? <br />
              <button
                type="button"
                className="btn btn-primary login-btn btn-sm"
                onClick={openLoginModal}
              >
                Login
              </button>
              {successMsg && (
              <div className="alert alert-success m-3" role="alert">
                Logged Out Successfully
              </div>
            )}
            </div>
          </div>
          </>
          
        )}
        {auth.token && (
          <div className="m-3 p-5 bd-highlight align-self-center hello-block">
            {loading && (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {!loading && (
              <>
              <h1>{message}</h1>
              <div>
                <button
                  type="button"
                  className="btn btn-primary signup-btn btn-sm mb-3"
                  onClick={logOut}
                >
                  Log Out
                </button>
              </div>
              </>
            )}
            
          </div>
        )}
      </div>
      <div className="container about-container d-flex p-2 mt-2">
        <div className=" p-1 bd-highlight">
          <h2>Who are we?</h2>
          <br />
          We are pet adoption center My Best Friend. All in our name: our main
          target is to help pets and people find their best friends. Since the
          foundation, we helped more then 300 cats and dogs to find their loving
          home.
          <br />
          You can adopt or foster a pet on our website.
          <br />
          <Link className="btn btn-primary mt-1" to="/search">
            Search Pets
          </Link>
        </div>
      </div>
      <SignUpModal isOpen={isOpenReg} hideModal={closeRegModal} />
      <LoginModal isOpen={isOpenLogin} hideModal={closeLoginModal} />
    </div>
  );
};

export default HomePage;
