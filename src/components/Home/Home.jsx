import React, { useEffect } from 'react'
import avtarImg from '../../assets/avtarImg1.png'
import TextChanger from '../TextChanger'
import AOS from 'aos';
import 'aos/dist/aos.css';
import homeimg from '../../assets/homeimgnew.webp'

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);
    return (
        <div className=" min-h-screen flex items-center justify-center bg-transparent ">

            <div className="relative  invert-0  mask-t-from-50% mask-b-from-50% h-64 w-full bg-cover bg-center  min-h-screen flex items-center justify-center"
            // style={{ backgroundImage: `url(${homeimg})` }}
            >
                <img
                    src={homeimg}
                    alt="hero"
                    // loading="lazy"
                    width={600}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                />

            </div>
            <div className=" absolute  text-white flex w-full md:w-1/2 justify-between items-center md:items-start gap-10">
                {/* Left: Text Section */}
                <div className="w-full md:w-full md:pt-10 text-center md:text-center">

                    <h1 className="text-3xl md:text-5xl font-bold leading-normal tracking-tight font-display: swap">
                        <TextChanger texts={["Hi, I'm Swati Kumari", "Software Developer", "Welcome!"]} speed={100} />
                    </h1>
                    <div data-aos="fade-up">
                        <p className="text-sm md:p-0 p-2 md:text-2xl tracking-tight mt-4 font-display: swap;">
                            "A Software developer passionate about building modern, responsive, and user-friendly websites using React, Tailwind CSS, and more."
                            {/* <TextChanger texts={["A front-end developer passionate about building modern, responsive, and user-friendly websites using React, Tailwind CSS, and more."]}  speed={80}/> */}

                        </p>
                        <a href="/resume.pdf" download>
                            <button className="mt-5 cursor-pointer text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-cyan-400 shadow-[2px_2px_8px_1px_cyan-400]">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>

              
            </div>
        </div>


    )
}

export default Home