import React from 'react'
import Hero from '../components/Hero'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Contacts from './Contacts'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contacts />
    </div>
  )
}

export default Home