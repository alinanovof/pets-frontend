import React, { Component } from 'react';
import SignUpModal from './SignUpModal'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() { 
        return ( 
            <div className="page-wrapper text-center">
                <h1>Hello, guest!</h1>
                <button type="button" className="btn btn-primary login-btn" onClick={this.openModal}>Sign Up</button>
                <SignUpModal isOpen={this.state.isOpen} hide={this.closeModal}/>
            </div>
         );
    }
}
 
export default HomePage;