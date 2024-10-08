import React from 'react'
import Analytics from '../../components/homePage/Analytics'
import Hero from '../../components/homePage/Hero' 
import Card from '../../components/homePage/Card'
import Newsletter  from '../../components/homePage/Newsletter'


const Home = () => {
  return (
    <div>
      <Hero />
      <Analytics />
      <Newsletter />
      <Card />
    </div>
  )
}

export default Home
