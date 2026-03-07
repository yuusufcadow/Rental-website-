import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Features from '../components/Features'
import Company from '../components/Company'
import Choose from '../components/Choose'

function Home() {
  return (
    <div>
      <Hero/>
      <Services/>
      <Features/>
      <Company/>
      <Choose/>
    </div>
  )
}

export default Home
