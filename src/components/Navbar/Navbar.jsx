import React, { Component } from "react";
import MenuItems from "./Menuitems";
import './Navbar.css'
import './Button.css'
import Logo from './images/logo.png';

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <img src={Logo} alt="logo" />
                </h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fa fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => (
                        <li key={item.title}>
                            <button className={item.cName}>{item.title}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Navbar;

