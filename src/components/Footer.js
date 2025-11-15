import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import img1 from '../assets/icons8-facebook-48.png'
import img2 from '../assets/icons8-twitterx-48.png'
import img3 from '../assets/icons8-telegram-48.png'
import img4 from '../assets/icons8-linked-in-48.png'
import img5 from '../assets/icons8-whatsapp-48.png'
import img6 from '../assets/Icon PNG.png'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <MDBFooter className='text-center text-lg-start text-muted'>


        <section className='pt-1'>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="4" lg="4" xl="3" className='mx-auto footer-first-col border-bottom'>
                <h6 className='text-uppercase fw-bold mb-4 font-quiksand d-flex align-items-center'>
                  <img src={img6} className='footer-logo' />
                  Skill Worker
                </h6>
                <p className='company-slogan'>EVERY JOB MATTERS.</p>
                <h6>Follow us</h6>
                <div className=' footer-icon '>
                  <img src={img1} />
                  <img src={img2} />
                  <img src={img3} />
                  <img src={img4} />
                  <img src={img5} />
                </div>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 border-bottom'>
                <h6 className='text-uppercase fw-bold mb-4 font-quiksand '>Menu</h6>
                <p>
                  <a href='/' className='text-reset'>
                    Home
                  </a>
                </p>
                <p>
                  <Link to='/AboutUS' className='text-reset'>
                    Abouts US
                  </Link>
                </p>
                <p>
                  <Link to='/OurServices' className='text-reset'>
                    Services
                  </Link>
                </p>
                <p>
                  <Link to='/ContactUs' className='text-reset'>
                    Contact US
                  </Link>
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 border-bottom'>
                <h6 className='text-uppercase fw-bold mb-4 font-quiksand '>Services</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Health Care Assistance
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Support Worker
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Social Care & Housing
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Nursing
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="4" xl="4" className='mx-auto mb-4 '>
                <h6 className='text-uppercase fw-bold mb-4 font-quiksand '>Newsletters</h6>
                <p>
                  Subscribe to get update and information.
                  Don't worry, we won't send spam!
                </p>
                <div className='email d-flex'>
                  <input type='email' className='w-100 bg-transparent ' placeholder='Enter your email'></input>
                  <button className='btn btn-outline-success subscribe-btn' type="submit" value="submit">Subscribe</button>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>


      </MDBFooter>
    </div>
  );
}

export default Footer