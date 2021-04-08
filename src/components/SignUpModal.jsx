import { Component } from "react";
import { Modal } from "react-bootstrap";

class SignUpModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  render() {
    return (
      <Modal
        // key={this.props.item.id}
        show={this.props.isOpen}
        onHide={() => this.props.hide()}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="signup-form ">
            <div className="profile-flex-child mb-3 ">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3 profile-flex-child">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
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
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                type="submit"
                className="btn btn-primary mx-auto"
                // onClick={() => { this.updateNote(); this.props.hide() }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SignUpModal;
