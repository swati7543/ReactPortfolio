import { Route, Router, Routes } from 'react-router-dom';
import './App.css'
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Cursor from './components/Cursor';
import Snowfall from './components/Snowfall';
import Certification from './components/Certification/Certification';


function App() {
  return (
    <div className='bg-[#050414]  h-auto w-full overflow-hidden'>

      {/* <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%)]'></div> */}
      <div className='relative md:pt-5 pt-7'>
        <Cursor />
        <Snowfall />
        <Navbar />
        {/* <Home /> */}
        {/* <About />
        <Experience />
        <Project />
        <Education/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certification" element={<Certification />} /> 
        </Routes>

        <Footer />

      </div>

    </div>
  );
}

export default App;
