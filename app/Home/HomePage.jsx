import About from '@/components/About'
import HeroBanner from '@/components/HeroBanner'
import React from 'react'
import Rightside from '@/components/Rightside'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Work from '@/components/Work'


const HomePage = () => {
  return (
    <>
      <div className="noise"></div>
      <HeroBanner />
      <About />
      <Rightside />
      <Work />
      <Projects />
      <Contact />
    </>
  )
}

export default HomePage