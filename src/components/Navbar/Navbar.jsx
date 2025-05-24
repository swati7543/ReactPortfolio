import { RiCloseLine, RiMenu2Line } from '@remixicon/react'
import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled[window.scrollY > 50]
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const handleMEnuItemClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  const menuItem = [
    { id: 'about', label: "About", path: "/about" },
    { id: 'skills', label: "Skills", path: "/skills" },
    // { id: 'experience', label: "Experience", path: "/experience" },
    { id: 'project', label: "Projects", path: "/project" },
    { id: 'education', label: "Education", path: "/education" },
    { id: 'certification', label: "Certification", path: "/certification" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);


  return (
    <nav className={`flex top-0 pb-2 w-full justify-center items-center  z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop:blur-md  shadow-md" : "bg-transparent"}`}>
      <div className='text-white  w-full flex  justify-between items-center'>
        <Link to={'/'}>
          <h3 className='cursor-pointer hover:text-cyan-400 font-bold'>Portfolio.</h3>
        </Link>

        <ul className="hidden md:flex flex-1 justify-center text-gray-300 space-x-12">
          {menuItem.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`cursor-pointer font-bold group ${activeSection === item.id ? "text-cyan-400" : "hover:text-cyan-400"}`}
              onClick={() => handleMEnuItemClick(item.id)}
            >
              <button data-aos="fade-up" className="cursor-pointer hover:scale-105 flex space-x-0">
                {item.label.split("").map((char, index) => (
                  <span
                    key={index}
                    className="transition-all duration-300 group-hover:-translate-y-1 group-hover:text-cyan-400"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </button>
            </Link>
          ))}
        </ul>


        <div className='hidden md:flex space-x-8 '>
          <a href="https://github.com/swati7543/" target='_blank' rel='' className='text-gray-300 hover:text-cyan-400 hover:scale-105'>
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/swati-kumari-59b380278/" target='_blank' rel='' className='text-gray-300 hover:text-cyan-400'>
            <FaLinkedin size={24} />
          </a>
        </div>

        <div>
          {isOpen ?
            (<RiCloseLine size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300' onClick={() => setIsOpen(false)} />)
            :
            (
              <RiMenu2Line size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300' onClick={() => setIsOpen(true)} />
            )
          }
        </div>
      </div>

      <div className='flex  justify-center items-center md:hidden'>
        {isOpen && (
          <div className='absolute top-16 left-4/8 w-1/2  bg-opacity-50 backdrop:filter backdrop-blur-lg z-50 rounded-lg shadow-lg'>
            <ul className='flex flex-col items-start px-5 py-2 space-y-4 text-gray-300'>
              {
                menuItem.map((item) => (
                  <Link key={item.id} to={item.path} className={`cursor-pointer hover:text-black ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                    <button onClick={() => handleMEnuItemClick(item.id)} className='cursor-pointer'>
                      {item.label}
                    </button>
                  </Link>
                ))
              }
            </ul>
            <div className='flex space-x-4 w-full justify-start px-5 py-4'>
              <a href="https://github.com/swati7543/" target='_blank' rel='' className='text-gray-300 hover:text-white'>
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/swati-kumari-59b380278/" target='_blank' rel='' className='text-gray-300 hover:text-white'>
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        )}

      </div>

    </nav>
  )
}

export default Navbar