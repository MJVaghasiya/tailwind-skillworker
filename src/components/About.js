import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import img1 from '../assets/Happy-Clients.webp'
import img2 from '../assets/About1.webp'
import img3 from '../assets/About2.webp'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='about-us-Heading'>
                <h3>About Skill Worker</h3>
                <p><a href='/' className='text-light m-1'>Home </a>/<a href='/About' className='text-light m-1'>About</a></p>
            </div>
            <div className='container'>
                <div className='row align-items-center our-background'>
                    <div className='col-lg-6'>
                        <h1>Our Background</h1>
                        <p className='about-us-p'>
                            Welcome to SkillWorkers. We are a UK based company providing healthcare support,
                            support workers and related services. Our mission is to offer Best worke to our clients.
                            We started our journey with a commitment to our core values and customers.
                            Our team is dedicated to providing excellent quality services to our clients.
                            We believe in  EVERY JOB MATTERS.
                        </p>
                    </div>
                    <div className='col-lg-6'>
                        <img src={img1} className='w-100' />
                    </div>
                </div>

                <div className='row align-items-center mt-5'>
                    <div className='col-lg-6 back-img-col'>
                        <div className='about-back-img'>
                            <img src={img3} className='neu-morphism'/>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <h1>Hign Quality Home Care</h1>
                        <p className='about-us-p'>SkillWorkers is the most reliable and trustworthy Home Health Care Service in the UK,
                            providing excellent home care solutions to patients
                            who are dealing with injury or illness.
                            We are committed to meeting all of your health needs and go above and beyond to
                            ensure you get the best care available.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About
