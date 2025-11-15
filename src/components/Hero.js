import React, { useState, useEffect } from 'react';
import img1 from '../assets/hero-banner.webp'
import { LiaChevronCircleRightSolid } from "react-icons/lia";

const Hero = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };


  return (
    <div>
      <div className='container'>
        <div className='row hero-bg text-start align-items-center'>
          <div className='col-lg-6'>
            <h1>
              Empowering Lives Through Work
            </h1>
            <p className='pe-4' style={{ fontSize: "1.1rem" }}>The best recruitment agency in the UK </p>


            <div className='d-flex align-items-center'><a href='https://skillworkers.co.uk/candidate/'>
              <button > Get started now </button>
              <LiaChevronCircleRightSolid style={{ width: "15%", height: "25px", marginLeft:"6px" }} /></a>
            </div>
          </div>


          <div className='col-lg-6 text-end'>
            <img src={img1} className='w-50 spin ' />
          </div>


        </div>
      </div>
    </div>
  )
}

export default Hero
