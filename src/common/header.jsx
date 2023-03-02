import React from "react";

const Header = () => {
  return (
    <div className="Header">
     <header>
        <div className="navbar" id="navbar">
            <div className="logo"><a href="index.html" className="logo" id="logo">
                </a></div>
            <div className="btn_box" id="btn_box">
                <button className="menu" id="menu">Menu</button>
            </div>
        </div>
        <div className="full_screen_bar">
            <div className="inside_bar">
                <div className="left-bar" id="left-bar">
                    <div className="logo3">
                        <a href="index.html" className="logo1" id="logo1">
                        </a>
                    </div>
                    <div className=" btn_box1 close_hide" id="btn_box1">
                        <button className="close " id="close1">Close</button>
                    </div>
                    <div className="details_inside">
                        <div className="detailBox">
                            <ul>
                                <h3>Company</h3>
                                <li> <a href="about.html">About Us</a></li>
                                <li> <a href="blogPage.html">Blogs</a></li>
                                <li><a href="privacy.html">Privacy Policy</a></li>
                                <li><a href="ContactUs.html">Contact Us</a></li>
                                <li><a href="career.html">Career</a></li>
                            </ul>
                        </div>
                        <div className="detailBox">

                            <div className="detail_left">
                                <h3>Service</h3>
                                <ul>
                                    <li><a href="services/creation.html">Creation</a></li>
                                    <li><a href="services/development.html">Development</a></li>
                                    <li><a href="services/marketing.html">Marketing</a></li>
                                    <li><a href="services/management.html">Management</a></li>
                                    <li><a href="services/optimisation.html">Optimization</a></li>
                                </ul>
                            </div>
                            <div className="detail_right">
                                <h3>Work</h3>
                                <ul>
                                    <li><a href="work/celereate.html"> Celereate</a></li>
                                    <li><a href="work/mehandihub.html">Mehandi Hub</a> </li>
                                    <li><a href="work/easycamscan.html">Easy CamScan</a></li>
                                    <li><a href="work/riyo.html">RIYO</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu_hide_box">
                            <div className="detailBox_left">
                                <ul>
                                    <li><a href="https://www.facebook.com/people/Webreate/100087651750669/"
                                            className='bx bxl-facebook icons'></a></li>
                                    <li><a href="https://www.instagram.com/webreate_/"
                                            className='bx bxl-instagram icons'></a></li>
                                    <li><a href="https://www.linkedin.com/company/81666049/admin/"
                                            className='bx bxl-linkedin-square icons'></a></li>
                                    <li><a href="https://twitter.com/home" className='bx bxl-twitter icons'></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-bar" id="right-bar">
                    <div className=" btn_box1" id="btn_box1">
                        <button className="close" id="close">Close</button>
                    </div>
                    <div className="detailBox_left">
                        <ul>
                            <li><a href="https://www.facebook.com/people/Webreate/100087651750669/">Facebook</a></li>
                            <li><a href="https://www.instagram.com/webreate_/">Instagram</a></li>
                            <li><a href="https://www.linkedin.com/company/81666049/admin/">LinkedIn</a></li>
                            <li><a href="https://twitter.com/home">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </div>
  );
};

export default Header;
