import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import BestDeals from '../Components/BestDeals/BestDeals'
import ClassifiedProducts from '../Components/ClassifiedProducts/ClassifiedProducts'
import Subscribe from '../Components/Subscribe/Subscribe'
import Footer from '../Components/Footer/Footer'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <BestDeals />
      <ClassifiedProducts />
      <Subscribe />
      <Footer />
    </>
  )
}

export default HomePage