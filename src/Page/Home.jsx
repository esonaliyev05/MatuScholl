import React, { useEffect } from 'react'
import Header from '../Components/Home_components/Header/Header'
import Main from '../Components/Home_components/Main/Main'

const Home = () => {
  useEffect(() => {
    window.scrollTo(50, 0);

    
  }, []);
  return (
    <div>
        <Header/>
        <Main/>
    </div>
  )
}

export default Home