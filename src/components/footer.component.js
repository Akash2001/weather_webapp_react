import { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="inner col-lg-4 col-sm-6 col-xs-12 inner1">
                                <div className="col-lg-12 footer_quote">
                                    <p className="quote">Know weather of a place before travelling!</p>
                                </div>
                        </div>
                        <div className="inner col-lg-4 col-sm-6 col-xs-12 hide-sm">
                            <div className="address_div" id="address_">
                                <h4>Address:</h4>
                                <p className="address">Yashwant Nagar, Ambad road, Jalna.<br/>
                                    Gmail : akashngadhave@gmail.com</p>
                            </div>
                        </div>
                        <div className="inner col-lg-4 col-sm-12 col-xs-12 hide-sm">
                            <div className="links">
                                <ul type="none" className="lists">
                                    <li><a href="/">About Us<i className="fas fa-arrow-right"></i></a></li>
                                    <li><a href="contact.html">Contact Us<i className="fas fa-arrow-right"></i></a></li>
                                </ul><br/>
                                <p className="follow">
                                    Follow us !
                                </p>
                                <p className="social">
                                    <a href="/"><i className="fab fa-instagram"></i></a>
                                    <a href="/"><i className="fab fa-facebook-square"></i></a>
                                    <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="/"><i className="fas fa-envelope-square"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center copy">&copy;Made by Akash Gadhave.</p>
            </div>

        );
    }
}