import React from 'react'
import Footer from './Footer'
import Header from './Header'
import HeroSection from './HeroSection'

const Homepage: React.FC = () => {
  return (
    <div className='scroll-smooth'>
      <Header />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default Homepage