import React from 'react'
import Cart from '../../components/cart'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const CartPages = () => {
  return (
    <div className='bg-green-300'>
      <Navbar />
      <Cart />
      <Footer />
    </div>
  )
}

export default CartPages