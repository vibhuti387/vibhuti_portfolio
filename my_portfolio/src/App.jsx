import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Education from "./component/Education";
import Certificates from "./component/Certificate";
import Contact from "./component/Contact";
import CertificatesPage from "./Pages/CertificatesPage";
import ProjectsPage from "./Pages/ProjectsPage";
import "./App.css";

function PortfolioHome() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/certificates" element={<CertificatesPage />} />
    </Routes>
  );
}

export default App;
