import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <nav>
                    <ul>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li>TMC Corporations &copy;Copyright 2020</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Footer;