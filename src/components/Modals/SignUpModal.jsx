import { Modal } from "react-bootstrap";
import ModalForm from "./ModalForm"

function SignUpModal(props) { 

  return (
    <Modal key={Date.now()} show={props.isOpen} onHide={() => props.hideModal()}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <ModalForm isOpen={props.isOpenReg} hideModal={props.hideModal}/>
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;
