import React from 'react'
import AboutHEro from '../components/About/AboutHEro'
import Place from '../components/About/Place'
import Company from '../components/About/Company'
import AboutUs from '../components/About/AboutUs'
import Choose from '../components/Choose'
import Footer from '../components/Footer'
import VisionMission from '../components/About/VisionMission'
function About() {
  return (
    <div>
      <AboutHEro/>
      <VisionMission/>
         <Place/>
         <AboutUs/>
         <Company/>
     <Choose/>
     <Footer/>
    </div>
  )
}

export default About
