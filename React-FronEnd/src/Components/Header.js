import React, { Component } from 'react';
import './Header.css'

import { Link } from "react-router-dom";
import nodejslogo from './Images/nodejslogo.png'
class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <a href="#default" className="logo">
                        <img src={nodejslogo} alt="customer" />
                    </a>
                    <div className="header-right">
                        <Link to="/home">Home | </Link>
                        <Link to="/addCustomer">Add customer | </Link>
                        <Link to="/ViewAllCustomers">View All | </Link>
                        <Link to="/findCustomer">Find customer | </Link>
                        <Link to="/deleteCustomer">Delete customer | </Link>
                        <Link to="/updateCustomer">Update customer</Link>
                    </div>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default Header;