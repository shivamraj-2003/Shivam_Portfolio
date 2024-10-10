import React from 'react'
import './App.css'
import Header from './Components/Header'
import Banner from './Components/Banner';
import About from './Components/About';
import Expertise from './Components/Expertise'
import Footer from "./Components/Footer"
import Contact from './Components/Contact'
import ProjectSection from './Components/Projects'
import Experience from './Components/Experience';
import Archieve from './Components/Archieve';
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Expertise />
      <Archieve />
      <Experience />
      <ProjectSection />
      <Contact />
      <Footer />

    </div>
  )
}
export default App;