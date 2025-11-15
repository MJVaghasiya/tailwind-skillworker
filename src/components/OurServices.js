import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import img1 from '../assets/our-services.jpeg'
import { PiFlowerFill } from "react-icons/pi";
import { PiStarFourFill } from "react-icons/pi";
import { SiBuymeacoffee } from "react-icons/si";
import { GiSupersonicArrow } from "react-icons/gi";
import { PiDiamondsFourFill } from "react-icons/pi";
import { BiSolidMapPin } from "react-icons/bi";

const OurServices = () => {
    return (
        <div>
            <Navbar />
            <div className='about-us-Heading mb-5'>
                <h3>Services of Skill Workers</h3>
                <p><a href='/' className='text-light m-1'>Home </a>/<a href='/About' className='text-light m-1'>Services</a></p>
            </div>
            <div className='container our-services mb-5 mt-5'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <h1>Our Services</h1>
                        <p>At SkillWorkers, we offer guaranteed excellence in healthcare support,
                            support workers and related services. We pride ourselves on being different from the competition
                            by providing unique and valuable aspects that differentiate us from others.</p>
                    </div>
                    <div className='col-lg-6'><img src={img1} className='w-100' /></div>
                </div>

            </div>
            <div className='container'>
                <div className="service-card">
                    {/* FIRST */}
                    <div className='card'>
                        <div className='icon-card text-center'><PiFlowerFill className='linear-gradient inset-neu-morphism' /></div>

                        <div className='text-card-card'>
                            <h4 className='fw-bold'>Only the Best</h4>
                            <p className='p-card'>We offer only the best healthcare, support workers and related services to our clients.
                                Our team is dedicated to providing excellent quality services that matter to our visitors, customers and clients.
                                We are proud to toot our own horn by providing important benefits and key advantages to those in need.
                            </p>
                        </div>
                    </div>
                    {/* <hr style={{ width: "40%", opacity: "1", margin: "auto", border: "1px solid #F0A41E" }} /> */}
                    {/* SECOND */}
                    <div className='card'>
                        <div className='text-card-card'>
                            <h4 className='fw-bold'>Outstanding Quality</h4>
                            <p className='p-card'>We believe in providing outstanding quality healthcare support,
                                support workers and related services that are fully insured to our clients.
                                Our mission is to ensure that our visitors, customers and clients receive the best care possible.
                            </p>
                        </div>
                        <div className='icon-card text-center'><PiStarFourFill className='linear-gradient inset-neu-morphism' /></div>
                    </div>
                    {/* <hr style={{ width: "40%", opacity: "1", margin: "auto", border: "1px solid #04ADEF" }} /> */}
                    {/* THIRD */}
                    <div className='card'>
                        <div className='icon-card text-center'><SiBuymeacoffee className='linear-gradient inset-neu-morphism' /></div>
                        <div className='text-card-card'>
                            <h4 className='fw-bold'>24/7 Care Services</h4>
                            <p className='p-card'>
                                With our 24/7 care services, you can rest assured that your health matters will be addressed promptly without sacrificing your daily routines. At SkillWorkers, we value your health and wellbeing,
                                and we provide personalized medical attention that will get you feeling better in no time.
                            </p>
                        </div>
                    </div>
                    {/* <hr style={{ width: "40%", opacity: "1", margin: "auto", border: "1px solid #D62C35" }} /> */}
                    {/* FOURTH */}
                    <div className='card'>
                        <div className='text-card-card'>
                            <h4 className='fw-bold'>Training</h4>
                            <p className='p-card'>
                                We offer various types of training, Both in-person and online, attaining,
                                Face-to-face sessions, personal and direct, Virtual classes too, for those who elect,
                                Our aim's to cater to all learning styles, Ensuring education that truly compiles.
                            </p>
                        </div>
                        <div className='icon-card text-center'><GiSupersonicArrow className='linear-gradient inset-neu-morphism' /></div>
                    </div>
                    {/* <hr style={{ width: "40%", opacity: "1", margin: "auto", border: "1px solid #F0A41E" }} /> */}
                    {/* FIFTH */}
                    <div className='card'>
                        <div className='icon-card text-center'><PiDiamondsFourFill className='linear-gradient inset-neu-morphism' /></div>

                        <div className='text-card-card'>
                            <h4 className='fw-bold'>Payment Methods</h4>
                            <p className='p-card'>
                                We accept a range of payment methods to make it as easy as possible for you to pay for our services.
                                These include credit and debit cards, PayPal, and bank transfers.
                                If you have any specific payment requirements, please let us know.
                            </p>
                        </div>
                    </div>
                    {/* <hr style={{ width: "40%", opacity: "1", margin: "auto", border: "1px solid #04ADEF" }} /> */}
                    {/* SIXTH */}
                    <div className='card'>
                        <div className='text-card-card'>
                            <h4 className='fw-bold'>Near by your Area</h4>
                            <p className='p-card'>We prioritize finding jobs close to your area. Your convenience is paramount to us. Our commitment is to ensure accessibility to the workplace. We aim to locate opportunities nearby for you.
                            </p>
                        </div>
                        <div className='icon-card text-center'><BiSolidMapPin className='linear-gradient inset-neu-morphism' /></div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default OurServices
