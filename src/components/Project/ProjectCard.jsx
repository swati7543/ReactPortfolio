import React from 'react'
import bannerImg from "../../assets/bannerImg.webp"

const ProjectCard = ({ title, main, href, sourselink, imgsrc,aos }) => {
    return (
        <div data-aos={aos} className="w-96 md:w-80 h-auto flex items-start  p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,206,0.25)] hover:scale-105 hover:shadow-[0_0_25px_rgba(130,69,206,0.35)]   mb-10  transition-transform duration-500"
        >

            <div className='flex-1 w-48 '>
                <img className='md:p-4' src={imgsrc}  alt="project img"
                    loading="lazy" />
                < h3 className='md:px-4 text-xl md:text-2xl font-bold leading-normal' >
                    {title}
                </h3 >
                <p className=' md:px-4 text-sm md:text-md leading-tight py-2'>
                    {main}
                </p>
                <div className='mt-0 pt-2 md:p-4 flex gap-2 md:gap-4'>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <button className="cursor-pointer
                 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
                 hover:opacity-85 durat0ion-300 hover:scale-105 font-semibold 
                rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500">
                            Demo
                        </button>
                    </a>
                    <a href={sourselink} target="_blank" rel="noopener noreferrer">
                        <button className='cursor-pointer
                 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500'>Source Code</button>
                    </a>
                </div>
            </div >
        </div>

    )
}

export default ProjectCard