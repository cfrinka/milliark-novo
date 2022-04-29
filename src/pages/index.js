import React, { useState } from 'react'
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Services from '../components/Services';
import CompanySection from '../CompanySection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }



  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <CompanySection />
      <Services />
      <Footer />
    </>
  )
}

export default Home
