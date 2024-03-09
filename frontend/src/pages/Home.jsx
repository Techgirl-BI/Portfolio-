import React from 'react'
import About from '../components/About'
// import Introduction from '../components/Introduction'
// import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Projects from './Projects'

const Home = () => {
  return (
    <div className='bg-amber-50'>
      <About/>
      {/* <Introduction/> */}
      <Projects/>
      <Contact/>
      </div>
  )
}

export default Home