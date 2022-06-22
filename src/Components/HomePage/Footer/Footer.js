import './Footer.css'
import React from "react";

const Footer = () => {
    return (
        <div className="container-fluid bg-grey py-5 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="logo-part">
                                    <h2>QARDAN HASANA</h2>
                                    <p>Foundation to remove social economic inequality.</p>
                                    <p>Address: Natore, Rajsahi, Dhaka</p>
                                </div>
                            </div>
                            <div className="col-md-6 px-4">
                                <h6> About Company</h6>
                                <p>For More Details...</p>
                                <a href="#" className="btn-footer">

                                    More Info
                                </a>
                                <br />
                                <a href="#" className="btn-footer">

                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 px-4">
                                <h6> Quick Links</h6>
                                <div className="row ">
                                    <div className="col-md-6">
                                        <ul>
                                            <li>

                                                <a href="#"> Home</a>
                                            </li>
                                            <li>

                                                <a href="#"> About</a>
                                            </li>
                                            <li>

                                                <a href="#"> Service</a>
                                            </li>
                                            <li>

                                                <a href="#"> Donate</a>
                                            </li>
                                            <li>

                                                <a href="#"> Help</a>
                                            </li>
                                            <li>

                                                <a href="#"> Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 px-4">
                                        <ul>
                                            <li>

                                                <a href="#"> Projects</a>
                                            </li>
                                            <li>

                                                <a href="#"> Fax</a>
                                            </li>
                                            <li>

                                                <a href="#"> Terms</a>
                                            </li>
                                            <li>

                                                <a href="#"> Policy</a>
                                            </li>
                                            <li>

                                                <a href="#"> facebook</a>
                                            </li>
                                            <li>

                                                <a href="#"> youtube </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <h6> Newsletter</h6>
                                <div className="social">
                                </div>
                                <form className="form-footer my-3">
                                    <input
                                        type="text"
                                        placeholder="search here...."
                                        name="search"
                                    />
                                    <input type="button" value="Go" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;