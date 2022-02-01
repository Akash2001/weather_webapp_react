import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

const Header = () => {
    const [active, setActive] = useState({home: 'active',contactUs: '',about:''});
        return (
            <Navbar collapseOnSelect className="navbar" expand="lg">
                <Link to="/" className="navbar-brand" onClick={() => {setActive({home: 'active',contactUs: '',about:''});}} style={{backgroundColor: "darkblue",color: "white"}}>Weather App</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" id={active.home} className="nav-link" onClick={() => {setActive({home: 'active',contactUs: '',about:''});}}>Home</Link>
                        <Link to='/contact-us' id={active.contactUs}  className="nav-link" onClick={() => {setActive({home: '',contactUs: 'active',about:''});}}>Contact us</Link>
                        <Link to="/about" id={active.about} className="nav-link" onClick={() => {setActive({home: '',contactUs: '',about:'active'});}}>About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
}

export default Header;