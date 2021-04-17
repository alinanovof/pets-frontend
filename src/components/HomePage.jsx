import React, { Component } from "react";
import SignUpModal from "./Modals/SignUpModal";
import LoginModal from "./Modals/LoginModal";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      message: "Loading...",
    };
  }

  componentDidMount() {
    fetch("http://localhost:5050/")
      .then(res => res.text())
      .then(res => this.setState({ message: res }));
  }

  openRegModal = () => this.setState({ isOpenReg: true });
  closeRegModal = () => this.setState({ isOpenReg: false });
  openLoginModal = () => this.setState({ isOpenLogin: true });
  closeLoginModal = () => this.setState({ isOpenLogin: false });

  render() {
    return (
      <div className="page-wrapper text-center">
        <div className="d-flex p-2 bd-highlight justify-content-center home-upper-flex">
          <div className="p-2 bd-highlight">
            <img
              className="dog-pic-home"
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              alt="a dog"
            ></img>
          </div>
          {!this.state.loggedIn && (
            <div className="m-3 p-5 bd-highlight align-self-center flex-grow-2 hello-block">
              <h1>{this.state.message}</h1>
              <div>
                First time here? <br />
                <button
                  type="button"
                  className="btn btn-primary signup-btn btn-sm mb-3"
                  onClick={this.openRegModal}
                >
                  Sign Up
                </button>
              </div>
              <div>
                Already registered? <br />
                <button
                  type="button"
                  className="btn btn-primary login-btn btn-sm"
                  onClick={this.openLoginModal}
                >
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="container about-container d-flex p-3">
          <div className=" p-2 bd-highlight">
            <h2>Who are we?</h2>
            <br />
            We are pet shelter My Best Friend. All in our name: our main target
            is to help pets and people find their best friends. Since the
            foundation, we helped more then 300 cats and dogs to find their
            loving home.
            <br />
            You can adopt or foster a pet on our website.
            <br />
            <button className="btn btn-primary mt-2">Search Pets</button>
          </div>
        </div>
        <SignUpModal
          isOpen={this.state.isOpenReg}
          hideModal={this.closeRegModal}
        />
        <LoginModal
          isOpen={this.state.isOpenLogin}
          hideModal={this.closeLoginModal}
        />
      </div>
    );
  }
}

export default HomePage;
