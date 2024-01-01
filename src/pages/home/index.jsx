import Chefs from '../../components/chefs'
import Date from '../../components/date'
import Food from '../../components/food'
import Footer from '../../components/footer'
import Hero from '../../components/hero-section'
import Navbar from '../../components/navbar'
import Newsletter from '../../components/newsletter'
import OurServices from '../../components/our-services'
import Quality from '../../components/quality'
import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-green-500'>
      <Navbar />
      <Hero />
      <Date />
      <Quality />
      <OurServices />
      <Food />
      <Chefs />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default HomePage
