import React from 'react'
import AboutHeader from '../Components/About_components/header/AboutHeader'
import Katalog from '../Components/About_components/Katalog/Katalog'
import Main from '../Components/About_components/main/main'
import { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    window.scrollTo(50, 0);

    
  }, []);
  return (
    <>
      <AboutHeader/>
      <Katalog/>
      <Main/>
    </>
  )
}

export default About