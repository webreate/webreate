import React from "react";
import 'boxicons';
import tick from "./images/tick.png"
import service from "./images/service.png"
import icon from "../../Home/components/icons/2x/social media managment@2x.png"
import logo1 from "./images/logo-1.png"
import logo2 from "./images/logo-2.png"
import logo3 from "./images/logo-3.png"
import logo4 from "./images/logo-4.png"



const Accordion = () => {
    return (
        <div className="accordion">

            {/* BOX 1 */}
            <div className="box a1 flexbox">
                <div className="acrro_img" id="image2">
                    <img src={logo1} alt="" />
                </div>
                <div className="opacity"></div>
                <div className="text_show">
                    <h1 className="head">Mehandi Hub</h1>
                    <div className="iconBox">
                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                </div>
                <div className="text flexbox">
                    <h1>Mehandi Hub</h1>
                    <p>
                        {/* <b>ABOUT THIS PROJECT:</b><br /> */}

                        Mehandihub an Mehandi art community initiated to showcase the talent and indulge with
                        the
                        artists and wanted a online presence and wanted to develop the best strategies for
                        Social media.
                    </p>
                    <h2>Service Offered</h2>
                    <div className="circle" data-aos="fade-up" data-aos-delay="400" data-aos-duration="900">
                        <div className="circles">
                            <div className="imgs">
                                <img src={service} alt="" />
                            </div>
                            <h4>Web Development</h4>
                        </div>
                        <div className="circles">
                            <div className="imgs">
                            <img src={service} alt="" />
                                {/* <img src="icons/2x/social media managment@2x.png" alt="" /> */}
                            </div>
                            <h4>Social Media <br /> Management</h4>
                        </div>
                        <div className="circles">
                            <div className="imgs">
                            <img src={service} alt="" />
                            </div>
                            <h4>Content Marketing</h4>
                        </div>
                    </div>
                    <div className="achievement">
                        <div className="inside_achieve">
                            <img src={tick} alt="" />
                            <p>Website traffic increased by 50% from social media.</p>
                        </div>
                        <div className="inside_achieve">
                        <img src={tick} alt="" />
                            <p>No User Bouncing observed till now.</p>
                        </div>
                        <div className="inside_achieve">
                        <img src={tick} alt="" />
                            <p>Best and optimised Social media presence</p>
                        </div>
                    </div>
                    <div className="btn1">
                        <a href="work/mehandihub.html">
                            <button>Read More</button>
                        </a>
                    </div>
                </div>

            </div>

            {/* <!-- BOX 2 --> */}
            <div className="box a2">
                <div className="acrro_img" id="image2">

                    <img src={logo2} alt="" />
                </div>
                <div className="opacity"></div>
                <div className="text_show">
                    <h1 className="head">RIYO</h1>
                    <div className="iconBox">
                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                </div>
                <div className="text">
                    <h1>RIYO</h1>
                    <p>
                        {/* <b>ABOUT THIS PROJECT:</b><br /> */}

                        RIYO INDIA is an Highway solution for the Indian Highway the project was a raw idea and all the
                        branding and development was done by Webreate.
                    </p>
                    <h2>Service Offered</h2>
                    <div className="circle" data-aos="fade-up" data-aos-delay="400" data-aos-duration="900">
                        <div className="circles">
                            <div className="imgs">
                            <img src={service} alt="" />
                            </div>
                            <h4>Web Development</h4>
                        </div>
                        <div className="circles">
                            <div className="imgs">
                            <img src={service} alt="" />
                            </div>
                            <h4>Social Media <br /> Management</h4>
                        </div>
                        <div className="circles">
                            <div className="imgs">
                            <img src={service} alt="" />
                            </div>
                            <h4>Social Media <br /> Marketing</h4>
                        </div>
                        <div className="circles">
                            <div className="imgs">
                            <img src={service} alt="" />
                            </div>
                            <h4>App Development</h4>
                        </div>
                    </div>
                    <div className="achievement">
                        <div className="inside_achieve">
                        <img src={tick} alt="" />
                            <p>Best assets for the app and web</p>
                        </div>
                        <div className="inside_achieve">
                        <img src={tick} alt="" />
                            <p>Optimised app development within 4 months </p>
                        </div>
                        <div className="inside_achieve">
                        <img src={tick} alt="" />
                            <p>Best brand presentations and pitch for the client.</p>
                        </div>
                    </div>
                    <div className="btn1">
                        <a href="work/riyo.html">
                            <button>Read More</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* <!-- BOX 3 --> */}
            <div className="box a3">
                <div className="acrro_img" id="image2">
                    <img src={logo3} alt="" />
                </div>
                <div className="opacity"></div>
                <div className="text_show">
                    <h1 className="head">Celereate</h1>
                    <div className="iconBox">
                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                </div>
                <div className="text">
                    <h1>Celereate</h1>
                    <p>
                        {/* <b>ABOUT THIS PROJECT:</b><br /> */}

                        Celereate is a high profile store in US and the client was more focused for the best website
                        design and a good marketing campaign for the sales.
                    </p>
                    <h2>Service Offered</h2>
                    <div className="circle" data-aos="fade-up" data-aos-delay="400" data-aos-duration="900">
                        <div className="circles">
                            <div className="imgs">
                            <img src={service} alt="" />
                            </div>
                            <h4>Web Development</h4>
                        </div>
                        <div className="circles">
                            <div className="imgs">
                            <img src={service} alt="" />
                            </div>
                            <h4>Social Media <br /> Management</h4>
                        </div>
                        <div className="circles">
                            <div className="imgs">
                            <img src={service} alt="" />
                            </div>
                            <h4>Social Media Marketing</h4>
                        </div>
                        <div className="circles">
                            <div className="imgs">
                            <img src={service} alt="" />
                            </div>
                            <h4>Content Marketing</h4>
                        </div>
                    </div>
                    <div className="achievement">
                        <div className="inside_achieve">
                        <img src={tick} alt="" />
                            <p>Sales increased by 20% from the second month.</p>
                        </div>
                        <div className="inside_achieve">
                        <img src={tick} alt="" />
                            <p>Store engagement time increased by 12%.</p>
                        </div>
                        <div className="inside_achieve">
                        <img src={tick} alt="" />
                            <p>Bouncing rate decreased by 40%.</p>
                        </div>
                    </div>
                    <div className="btn1">
                        <a href="work/celereate.html">
                            <button>Read More</button>
                        </a>
                    </div>
                </div>
            </div>

            {/* <!-- BOX 4 --> */}
            <div className="box a4">
                <div className="acrro_img" id="image2">
                    <img src={logo4} alt="" />
                </div>
                <div className="opacity"></div>
                <div className="text_show">
                    <h1 className="head">Easy Camscan</h1>
                    <div className="iconBox">
                        <i className='bx bx-right-arrow-alt'></i>
                    </div>
                </div>
                <div className="text">
                    <h1>Easy Camscan</h1>
                    <p>
                        {/* <b>ABOUT THIS PROJECT:</b><br /> */}

                        Easy CamScan is a pdf doc scanner designed by flyfott solutions, Client only wants to increase
                        the downloads and some best illustration for the brand awareness and app Installs campaigns.
                    </p>
                    <h2>Service Offered</h2>
                    <div className="circle">
                        {/* <div className="circles">
                            <div className="imgs">
                            <img src={service} alt="" />
                            </div>
                            <h4>Web Development</h4>
                        </div> */}
                        <div className="circles">
                            <div className="imgs">
                            <img src={service} alt="" />
                            </div>
                            <h4>Social Media <br /> Management</h4>
                        </div>
                        <div className="circles">
                            <div className="imgs">
                            <img src={service} alt="" />
                            </div>
                            <h4>Social Media Marketing</h4>
                        </div>
                        <div className="circles">
                            <div className="imgs">
                            <img src={service} alt="" />
                            </div>
                            <h4>Content Marketing</h4>
                        </div>
                    </div>
                    <div className="achievement">
                        <div className="inside_achieve">
                        <img src={tick} alt="" />
                            <p>CPI decreased by $1.2</p>
                        </div>
                        <div className="inside_achieve">
                        <img src={tick} alt="" />
                            <p>More than 10k downloads through Social media</p>
                        </div>
                        <div className="inside_achieve">
                        <img src={tick} alt="" />
                            <p>ROI on paid media increased from the Second month.</p>
                        </div>
                    </div>
                    <div className="btn1">
                        <a href="work/easycamscan.html">
                            <button>Read More</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
