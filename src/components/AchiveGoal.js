import React from 'react'
import img1 from '../assets/Capture-removebg-preview.png'
import { IoMdCheckmark } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";


const AchiveGoal = () => {
    return (
        <div>
        <div className='achieve-goal'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-5 col-md-6 text-start achivegoal'>
                        <h6>We're always with you</h6>
                        <h1 className='mb-4'>Together, We Can Do Great Things</h1>

                        <p className='mb-5'>JOIN US   <FaArrowRight className='ms-3 me-3' />  WORK WITH US    <FaArrowRight className='ms-3 me-3' />  ACHIEVE TARGET   </p>
                        <ul className='ps-0'>
                            <li className='d-flex align-items-center'><IoMdCheckmark className='checkmark' />Flexibility</li>
                            <li className='d-flex align-items-center'><IoMdCheckmark className='checkmark' />24/7 Support</li>
                            <li className='d-flex align-items-center'><IoMdCheckmark className='checkmark' />Find what you want</li>
                        </ul>
                    </div>
                    <div className='col-lg-7 col-md-6'>
                        <img src={img1} className='achieve-goal-img w-75' />
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AchiveGoal
