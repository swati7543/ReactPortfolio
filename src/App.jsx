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
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';
// import Certification from './components/Certification/Certification';

const Certification = lazy(() => import('./components/Certification/Certification')); // Lazy load your component


function App() {
  return (
    <div className='bg-[#050414]  h-auto w-full overflow-hidden'>
      <div className='relative md:pt-5 pt-7'>
        <Cursor />
        <Snowfall />
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            {/* <Route path="/experience" element={<Experience />} /> */}
            <Route path="/project" element={<Project />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certification" element={<Certification />} />
          </Routes>
        </Suspense>

        <Footer />

      </div>

    </div>
  );
}

export default App;
