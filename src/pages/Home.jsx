import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Features from '../components/Features'
import Footer from '../components/Footer'
import CTA from '../components/CTA'
import Crads from '../components/Crads'
import Excellence from '../components/Excellence'
import Lastest from '../components/Lastest'

function Home() {
  return (
    <div>
      <Hero/>
      <Excellence/>
      <Features/>
      <Services/>
      <Crads/>
      <Lastest/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default Home
