import React from "react";
import { Link } from "react-router-dom";
const ContactUs = () =>{
    return (
        <>
         {/* <!-- Contact Slider Area Start --> */}
        <div className="breadcrumb-area">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 text-center">
                    <h2 className="breadcrumb-title">Contact Us</h2>
                    {/* <!-- breadcrumb-list start --> */}
                    <ul className="breadcrumb-list">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">Contact Us</li>
                    </ul>
                    {/* <!-- breadcrumb-list end --> */}
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact Area Start --> */}
    <div className="contact-area pt-100px pb-100px">
        <div className="container">
            <div className="contact-wrapper">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="contact-info">
                            <div className="single-contact">
                                <div className="icon-box">
                                    <img src="assets/images/icons/4.png" alt=""/>
                                </div>
                                <div className="info-box">
                                    <h5 className="title" >Phone:</h5>
                                    <p><a href="tel:0123456789">012 345 67 89</a></p>
                                </div>
                            </div>
                            <div className="single-contact">
                                <div className="icon-box">
                                    <img src="assets/images/icons/5.png" alt=""/>
                                </div>
                                <div className="info-box">
                                    <h5 className="title" >Email:</h5>
                                    <p><a href="mailto:demo@example.com">demo@example.com</a></p>
                                </div>
                            </div>
                            <div className="single-contact">
                                <div className="icon-box">
                                    <img src="assets/images/icons/6.png" alt="" />
                                </div>
                                <div className="info-box">
                                    <h5 className="title" >Address:</h5>
                                    <p>Your address goes here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contact-form">
                            <div className="contact-title mb-30">
                                <h2 className="title" data-aos="fade-up" data-aos-delay="200">Leave a Message</h2>
                                <p>There are many variations of passages of Lorem Ipsum available but the
                                    suffered alteration in some form.</p>
                            </div>
                            <form className="contact-form-style" id="contact-form" action="assets/php/mail.php" method="post">
                                <div className="row">
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                        <input name="name" placeholder="Name*" type="text" />
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                        <input name="email" placeholder="Email*" type="email" />
                                    </div>
                                    <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
                                        <textarea name="message" placeholder="Your Message*"></textarea>
                                        <button className="btn btn-primary mt-4" data-aos="fade-up" data-aos-delay="200" type="submit">Post Comment <i className="fa fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </form>
                            <p className="form-messege"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact Area End --> */}

        </>
    ); 
    
}
export default ContactUs;