import React, { useEffect } from 'react'
import Header from '../Components/Greetings_components/Header/Header'
import Main from '../Components/Greetings_components/Main/Main'

const Greetings = () => {
  useEffect(() => {
    window.scrollTo(50, 0);

    
  }, []);
  return (
    <>
      <Header/>
      <Main/>
      
    </>
  )
}

export default Greetings