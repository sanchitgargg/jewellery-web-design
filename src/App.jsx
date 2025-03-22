import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Collection from './Components/Collection/Collection'
import Bestseller from './Components/Bestseller/Bestseller'
import Rate from './Components/Rate/Rate'
import Products from './Components/Products/Products'
import Us from './Components/Us/Us'
import Companyinfo from './Components/Companyinfo/Companyinfo'
import Testimonials from './Components/Testimonials/Testimonials'
import Followus from './Components/Followus/Followus'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Collection/>
      <Bestseller/>
      <Rate/>
      {/* <Products/> */}
      <Us/>
      <Companyinfo/>
      <Testimonials/>
      <Followus/>
      <Footer/>
    </div>
  )
}

export default App