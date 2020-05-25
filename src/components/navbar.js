import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div class="navbar-wrapper">
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar; 