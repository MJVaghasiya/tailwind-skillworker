import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { TfiMobile } from "react-icons/tfi";
import { FaPersonChalkboard } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { GoChecklist } from "react-icons/go";

const Services = () => {
    return (
        <div>
            <section id='Services'>
                <div className='services'>
                    <div className='container'>
                        <div className='row align-items-center justify-content-center'>
                            <div className='col-lg-6 services-card '>
                                {/* FIRST CARD */}
                                <div class="card  glass-morphism" >
                                    <div className='bg-colored-round' style={{ background: "linear-gradient(to right, #1FACEA , #0B81F7)" }}>
                                        <RiCustomerService2Fill className='card-icon' />
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-title text-dark" style={{ color: "#108BF4" }}>24/7</h6>
                                        <hr className='mb-2 mt-2' style={{ background: "linear-gradient(to right, white,rgb(15, 136, 245))", height: "2px", opacity: "1", borderTop: "0" }} />
                                        <p class="card-text text-dark" style={{ color: "#108BF4" }}>We are available 24/7 for any kind of support.</p>
                                    </div>
                                </div>
                                {/* SECOND CARD */}
                                <div class="card  glass-morphism" >
                                    <div className='bg-colored-round' style={{ background: "linear-gradient(to top, #7574E5 , #9B68E6)" }}>
                                        <IoLocationOutline className='card-icon' />
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-title text-dark" style={{ color: "#8B6DE6" }}>Location</h6>
                                        <hr className='mb-2 mt-2' style={{ background: "linear-gradient(to right,white,rgb(145, 107, 229))", height: "2px", border: "1,5px solid", opacity: "1", borderTop: "0" }} />
                                        <p class="card-text text-dark" style={{ color: "rgb(58 0 235)" }}>We are covering across the UK.</p>
                                    </div>
                                </div>
                                {/* THIRD CARD */}
                                <div class="card  glass-morphism" >
                                    <div className='bg-colored-round' style={{ background: "linear-gradient(to bottom, #43AF74 ,#36D97C)" }}>
                                        <TfiMobile className='card-icon' />
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-title text-dark" style={{ color: "#41B776" }}>Mobile App</h6>
                                        <hr className='mb-2 mt-2' style={{ background: "linear-gradient(to right,white,rgb(54, 214, 123))", height: "2px", opacity: "1", borderTop: "0" }} />
                                        <p class="card-text text-dark" style={{ color: "rgb(0 157 71)" }}>Our mobile App is making life easy of workers.</p>
                                    </div>
                                </div>
                                {/* FOURTH CARD */}
                                <div class="card glass-morphism" >
                                    <div className='bg-colored-round' style={{ background: "linear-gradient(to top, #2980b9b8,#2980b9)" }}>
                                        <FaPersonChalkboard class="card-icon" />
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-title text-dark" style={{ color: "#2980b9" }}>Training</h6>
                                        <hr className='mb-2 mt-2' style={{ background: "linear-gradient(to right,white,#2980b9)", height: "2px", opacity: "1", borderTop: "0" }} />
                                        <p class="card-text text-dark" style={{ color: "#2980b9" }}>We are providing all types of training face to face and online.</p>
                                    </div>
                                </div>
                                {/* FIFTH CARD */}
                                <div class="card glass-morphism" >
                                    <div className='bg-colored-round' style={{ background: "linear-gradient(to right top,#8e44ad,#a081ad)" }}>
                                        <GiTakeMyMoney className='card-icon' style={{ height: "25px" }} />
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-title text-dark" style={{ color: "#8e44ad" }}>Pay rates</h6>
                                        <hr className='mb-2 mt-2' style={{ background: "linear-gradient(to right,white,#8e44ad)", height: "2px", opacity: "1", borderTop: "0" }} />
                                        <p class="card-text text-dark" style={{ color: "#8e44ad" }}>We are providing great pay rate for all the rolls.</p>
                                    </div>
                                </div>
                                {/* SIXTH CARD */}
                                <div class="card glass-morphism" >
                                    <div className='bg-colored-round' style={{ background: "linear-gradient(to right,#007991b8,#007991)" }}>
                                        <GoChecklist className='card-icon' />
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-title text-dark" style={{ color: "#007991" }}>DBS</h6>
                                        <hr className='mb-2 mt-2' style={{ background: "linear-gradient(to right,white,#007991)", height: "2px", opacity: "1", borderTop: "0" }} />
                                        <p class="card-text text-dark" style={{ color: "#007991" }}>We help you to apply for DBS and write to work checks.</p>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-6'>
                                <div className='glass-morphism service-intro'>
                                    <h6 style={{ fontSize: "1rem", fontWeight: "700", letterSpacing: "px" }}>SKILL WORKERS SERVICES</h6>
                                    <h2>
                                        <span style={{ color: "#04adef", fontWeight: "600", textShadow: "2px 2px 3px midnightblue" }}>We Promise,</span>
                                        We Will Protect You from in and Out</h2>
                                    <p>In 5 year experience, Our best workers of all services are the ones you can see on the right side of the website.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
