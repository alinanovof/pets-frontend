import { Modal } from "react-bootstrap";
import { useFormik } from "formik";
import LoginForm from "./LoginForm"

 function LoginModal(props){
  
  return (
    <Modal
      key={Date.now()}
      show={props.isOpen}
      onHide={() => props.hideModal()}
    >
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm isOpen={props.isOpenLogin} hideModal={props.hideModal}/>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
