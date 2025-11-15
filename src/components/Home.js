import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Footer from './Footer'
import AchiveGoal from './AchiveGoal'
import FitIn from './FitIn'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <AchiveGoal />
      <FitIn />
      <Footer />
    </div>
  )
}

export default Home
