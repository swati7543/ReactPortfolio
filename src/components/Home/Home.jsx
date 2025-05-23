import React, { useEffect } from 'react'
import avtarImg from '../../assets/avtarImg1.png'
import TextChanger from '../TextChanger'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);
    return (
        <div className=" min-h-screen flex items-center justify-center bg-transparent ">

            <div className="relative  invert-0  mask-t-from-50% mask-b-from-50% bg-[url('https://images.unsplash.com/photo-1701760211427-e7a9068028b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-64 w-full bg-cover bg-center  min-h-screen flex items-center justify-center">

            </div>
            <div className=" absolute  text-white flex  md:w-1/2 justify-between items-center md:items-start gap-10">
                {/* Left: Text Section */}
                <div className="w-full md:w-full md:pt-10 text-center md:text-center">

                    <h1 className="text-3xl md:text-6xl font-bold leading-normal tracking-tight">
                        <TextChanger texts={["Hi, I'm Swati", "Frontend Developer", "Welcome!"]} speed={100} />
                    </h1>
                    <div data-aos="fade-up">
                        <p className="text-sm md:text-2xl tracking-tight mt-4">
                            "A front-end developer passionate about building modern, responsive, and user-friendly websites using React, Tailwind CSS, and more."
                            {/* <TextChanger texts={["A front-end developer passionate about building modern, responsive, and user-friendly websites using React, Tailwind CSS, and more."]}  speed={80}/> */}

                        </p>
                        <a href="/resume.pdf" download>
                            <button className="mt-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-cyan-400 shadow-[2px_2px_8px_1px_cyan-400]">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>

                {/* Right: Image Section */}
                {/* <div data-aos="zoom-in" className="w-full md:w-1/2 flex justify-center">
                    <img src={avtarImg} alt="Avatar" className="max-w-xs md:max-w-md w-full h-auto" />
                </div> */}
            </div>
        </div>


    )
}

export default Home