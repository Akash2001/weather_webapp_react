import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from "react";
import { Link } from 'react-router-dom';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

export default class Header extends Component {
    constructor(props){
        super(props);

        this.homeBackground = this.homeBackground.bind(this);
        this.contactUsBackground = this.contactUsBackground.bind(this);
        this.aboutBackground = this.aboutBackground.bind(this);

        this.state={
            home: 'active',
            contactUs: '',
            about:''
        };
        
    }
    homeBackground(){
        this.setState({
            home: 'active',
            contactUs: '',
            about:''
        });
    }
    contactUsBackground(){
        this.setState({
            home: '',
            contactUs: 'active',
            about:''
        });
    }
    aboutBackground(){
        this.setState({
            home: '',
            contactUs: '',
            about:'active'
        });
    }
    render() {
        return (
            <Navbar collapseOnSelect className="navbar" expand="lg">
                <Link to="/" className="navbar-brand" onClick={this.homeBackground} style={{backgroundColor: "darkblue",color: "white"}}>Weather App</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/" id={this.state.home} className="nav-link" onClick={this.homeBackground}>Home</Link>
                        <Link to='/contact-us' id={this.state.contactUs}  className="nav-link" onClick={this.contactUsBackground}>Contact us</Link>
                        <Link to="/about" id={this.state.about} className="nav-link" onClick={this.aboutBackground}>About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}