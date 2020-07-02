import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            message: "",
            disabled: false,
            emailSent: null,
        }
    }

    render() {
        return (
            <div className='contact-page-wrapper'>
                <h1>get in touch!</h1>
            </div>
        )
    }
}

export default Contact; 