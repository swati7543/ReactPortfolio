import React, { useEffect } from 'react'
import AboutImg from '../../assets/aboutImg.png'
import { IoArrowForward } from "react-icons/io5";
import { motion } from 'framer-motion';

import AOS from 'aos';
import 'aos/dist/aos.css';
const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);
    const aboutinfo = [
        {
            heading: 'ReactJS Developer',
            desc: "As a budding ReactJS developer, I specialize in building interactive and component-based web applications. I have hands-on experience working with hooks, props, state management, and creating reusable components that bring websites to life. I'm always exploring best practices and optimizing code for performance. React’s flexibility excites me, and I love using it to transform ideas into fast, scalable, and engaging user interfaces."
        }
        ,
        {
            heading: 'Frontend Developer',
            desc: "I’m a passionate frontend developer focused on crafting responsive, accessible, and visually appealing web experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring designs to life while ensuring smooth functionality across all devices. I enjoy experimenting with layouts, animations, and performance improvements, and I’m constantly learning modern tools and frameworks to elevate the user experience."
        }
        ,
        {
            heading: 'UI/UX Developer',
            desc: "As a UI/UX enthusiast stepping into the world of development, I believe great design is not just about visuals—it’s about how it feels to the user. I focus on designing clean, intuitive interfaces and implementing them with precision. From wireframes to final builds, I aim to ensure every interaction is meaningful and every layout is user-friendly. I actively study user behavior, current design trends, and accessibility to keep improving and building impactful user experiences."
        }
        ,
    ]
    return (
        <div id='About' className='  mb-2 text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center  shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-7'>
            <div className='py-10 pb-24'>
                <div data-aos="fade-down" className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">About <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl font-bold mb-6'>Me</span> </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-2"></div>

                </div>
                {/* <h2 data-aos="fade-right" className='text-2xl md:text-4xl font-bold'>About</h2> */}
                <div className='md:flex flex-wrap flex-col md:flex-row items-center justify-content: center;'>
                    <div data-aos="zoom-in-up" className='md:w-1/2'>
                        <img className='md:h-120' src={AboutImg} alt="About Img" />
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center ">
                        <motion.div
                            className="w-full text-white text-xl leading-relaxed tracking-wide"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                        >

                            <p className="text-gray-300">
                                Hey there! I’m <span className="text-cyan-400 font-semibold">Swati</span>, a frontend developer with a passion for clean design and smooth interactions. I specialize in transforming ideas into responsive, intuitive, and visually stunning websites using HTML, CSS, JavaScript, and React.
                            </p>
                            <p className="text-gray-300 mt-4">
                                I thrive on creating seamless digital experiences that work beautifully on any device. From designing pixel-perfect UIs to implementing performant frontend code, I enjoy every step of the development journey.
                            </p>
                            <p className="text-gray-300 mt-4">
                                When I’m not coding, you’ll catch me exploring the latest UI/UX trends, crafting micro-interactions, or contributing to open-source. I'm always on the lookout for new challenges and learning opportunities.
                            </p>
                            <p className="text-cyan-300 mt-4 font-medium">
                                Let’s connect and build something exceptional together!
                            </p>
                        </motion.div>
                    </div>
                    <div className='py-20 flex items-center justify-center w-full'>
                        <ul className='gap-10  flex flex-wrap justify-center '>
                            {aboutinfo.map((ele, index) => {
                                const animationType = index % 2 === 0 ? 'fade-down' : 'fade-up';

                                return (
                                    <div
                                        key={index}
                                        data-aos={animationType}
                                        className="w-auto md:w-96 h-auto flex items-start  p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,206,0.25)] hover:scale-105 hover:shadow-[0_0_25px_rgba(130,69,206,0.35)] transition-all duration-500 mb-10"
                                    >
                                        <div className="min-w-[36px] min-h-[36px] mt-1 text-blue-500">
                                            <IoArrowForward size={28} />
                                        </div>
                                        <div className="flex-1">
                                            <h1 className="text-xl sm:text-2xl  mb-2  font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 ">{ele.heading}</h1>
                                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                                {ele.desc}
                                            </p>
                                        </div>
                                    </div>);
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About