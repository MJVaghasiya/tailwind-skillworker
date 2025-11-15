import React, { useState } from 'react';
import img1 from '../assets/Icon PNG.png';
import { IoCallSharp, IoMail } from "react-icons/io5";
import Navbar from './Navbar';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import Footer from './Footer';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_ce4ys97',
            'template_3ylrcpl',
            formData,
            'T_nEBjQvl28OUWv5U'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            toast.success('Message sent successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }, (err) => {
            console.log('FAILED...', err);
            toast.error('Failed to send message. Please try again.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        });

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            message: ''
        });
    };

    return (
        <div>
            <Navbar />
            <ToastContainer />
            <div className='contact-us-bg'>
                <div className='contact-us-Heading glass-morphism mb-5 text-center'>
                    <h3>Contact Skill Workers</h3>
                    <h5>Get In Touch</h5>
                </div>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-5'>
                            <img src={img1} className='contact-logo w-25 spin d-block m-auto' alt="Contact Logo" />
                            <div className='contact-no'>
                                <div className='contact text-center mt-4'>
                                    <div className='icon-heading d-flex justify-content-center'>
                                        <IoCallSharp />
                                        <h3>Contact Us</h3>
                                    </div>
                                    02039852252
                                </div>
                                <div className='contact text-center mt-4'>
                                    <div className='icon-heading d-flex justify-content-center'>
                                        <IoMail />
                                        <h3>Email</h3>
                                    </div>
                                    info@skillworkers.co.uk
                                </div>
                            </div>
                            <p className='text-start mt-4 contact-us-p'>If you need assistance earlier than scheduled, please leave your name and phone number so we can contact you and figure out how to meet your needs.</p>
                        </div>
                        <div className='col-lg-7'>
                            <form onSubmit={handleSubmit}>
                                <div className='contact-us-form'>
                                    <div className='side-input'>
                                        <input type='text' placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleChange} required />
                                        <input type='text' placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} required />
                                        <input type='email' placeholder='Email' name='email' value={formData.email} onChange={handleChange} required />
                                        <input type='tel' placeholder='Phone Number' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} required />
                                    </div>
                                    <textarea className='mb-3' placeholder='Write your Thoughts' name='message' value={formData.message} onChange={handleChange} required></textarea>
                                    <button className="btn btn-outline-success signup my-4 ms-auto" style={{ width:"37%", fontSize: "1.3rem" }} type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='social-contact m-auto my-5 py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-7'><h6 className='ms-3'>The best care for your loved ones</h6></div>
                        <div className='col-lg-5 icon-col'>
                            <div className='icon-bg'><FaFacebookF /></div>
                            <div className='icon-bg'><FaTwitter /></div>
                            <div className='icon-bg'><FaLinkedinIn /></div>
                            <div className='icon-bg'><FaWhatsapp /></div>
                            <div className='icon-bg'><FaTelegramPlane /></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
