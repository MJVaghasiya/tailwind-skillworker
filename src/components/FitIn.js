import React from 'react'
import img1 from '../assets/Care-at-home.webp'
import img2 from '../assets/personal-support-worker.webp'
import img3 from '../assets/hospital-service.webp'
import img4 from '../assets/nurse1.webp'
import img5 from '../assets/domestic-worker.webp'
import img6 from '../assets/chef.webp'
import img7 from '../assets/clining.webp'
import img8 from '../assets/delievery-driver.webp'
import img9 from '../assets/Shop-service.webp'

const Extra = () => {
  return (
    <div>
      <div className='fit-in'>
      <div className='container'>
        <h1 className='text-center'>Where do you fit in</h1>
        <hr className='about-us-hr m-auto mb-4 mt-2' />
        <p className='mb-5'>Delivering quality skilled worker and innovative skills  is achieved through diverse people working in diverse roles, which means there’s a good chance we’ll have an opportunity to suit you.</p>
      </div>
      <div className=' container card-content'>
        <div className='neu-morphism ' >
          <img src={img1} style={{ width: "100%" }} />
          <div className='card-name  fs-5'>
            <h6 className='mb-0'>
              Health Care assistance
            </h6>
          </div>
        </div>

        {/* SECOND CARD */}
        <div className='neu-morphism' >
          <img src={img2} style={{ width: "100%" }} />
          <div className='card-name  fs-5'>
            <h6 className='mb-0'>
              Support Worker
            </h6>
          </div>
        </div>
        {/* THIRD CARD */}
        <div className='neu-morphism' >
          <img src={img3} style={{ width: "100%" }} />
          <div className='card-name  fs-5'>
            <h6 className='mb-0'>
              Hospital service
            </h6>
          </div>
        </div>
        {/* FOURTH CARD */}
        <div className='neu-morphism'>
          <img src={img4} style={{ width: "100%" }} />
          <div className='card-name  fs-5'>
            <h6 className='mb-0'>
              Nurse
            </h6>
          </div>
        </div>
        {/* FIFTH CARD */}
        <div className='neu-morphism' >
          <img src={img5} style={{ width: "100%" }} />
          <div className='card-name  fs-5'>
            <h6 className='mb-0'>
              Domestic worker
            </h6>
          </div>
        </div>
        {/* SIXTH CARD */}
        <div className='neu-morphism' >
          <img src={img6} style={{ width: "100%" }} />
          <div className='card-name  fs-5'>
            <h6 className='mb-0'>
              Chef
            </h6>
          </div>
        </div>
        {/* SEVENTH CARD */}
        <div className='neu-morphism' >
          <img src={img7} style={{ width: "100%" }} />
          <div className='card-name  fs-5'>
            <h6 className='mb-0'>
              Clining Service
            </h6>
          </div>
        </div>
        {/* EIGTH CARD */}
        <div className='neu-morphism' >
          <img src={img8} style={{ width: "100%" }} />
          <div className='card-name  fs-5'>
            <h6 className='mb-0'>
              Delivery Driver
            </h6>
          </div>
        </div>
        {/* NINTH CARD */}
        <div className='neu-morphism' >
          <img src={img9} style={{ width: "100%" }} />
          <div className='card-name  fs-5'>
            <h6 className='mb-0'>
              Shop Keeper
            </h6>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Extra
