import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Projects from './component/Projects';
import Education from './component/Education';
import Certificates from './component/Certificate';
import './App.css'
import Contact from './component/Contact';


function App() {
  
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Certificates/>
      <Contact/>

      {/* <Navbar/>
       <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificate" element={<Certificates />} />
      </Routes> */}
      
    </>
  ) 
}

export default App
