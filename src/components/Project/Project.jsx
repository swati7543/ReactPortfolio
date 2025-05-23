import React, { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import AOS from 'aos';
import 'aos/dist/aos.css';
import spotifyImg from '../../assets/spotify-img.png';
import myntraImg from '../../assets/myntra-img.png';
import weather from '../../assets/weather-img.png';

const Project = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);
    return (
        <div id='Projects' className='p-10 md:pt-20 text-white'>
            <div data-aos="fade-down" className="text-center mb-8">

                <div data-aos="fade-down" className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 ">Projects  </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-2"></div>
                </div>
                <p className="text-gray-400 mt-4 text-lg font-semibold">
                    A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
                </p>
            </div>
            {/* <h1 data-aos="fade-down"  className='text-2xl md:text-4xl text-white font-bold'>Projects </h1> */}
            <div data-aos="fade-up" className='py-12 justify-center flex flex-wrap gap-8'>
                <ProjectCard imgsrc={myntraImg} title="Myntra Clone" sourselink={"https://github.com/swati7543/myntra"} main="this is a bloggin website created in react js and used some component library" />
                <ProjectCard imgsrc={spotifyImg} title="spotify-app" href={"https://spotify-app-omega-jade.vercel.app"} sourselink={"https://github.com/swati7543/spotify-app"} main="this is a bloggin website created in react js and used some component library" />
                <ProjectCard imgsrc={weather} title="weather search app" sourselink={"https://github.com/swati7543/weather"} main="this is a bloggin website created in react js and used some component library" />
            </div>
        </div>
    )
}

export default Project