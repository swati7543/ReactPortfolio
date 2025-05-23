import React from 'react'
import bannerImg from "../../assets/bannerImg.webp"

const ProjectCard = ({ title, main, href ,sourselink,imgsrc }) => {
    return (
        <div className='p-3 md:p-2 flex flex-col w-80   rounded-2xl  
        bg-gray-900 backdrop-blur-md  sm:px-10  sm:py-6   border border-white/20
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-105 duration-300
        '>
            <img className='p-4' src={imgsrc} alt="" />
            <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
                {title}
            </h3>
            <p className=' px-4 text-sm md:texxt-md leading-tight py-2'>
                {main}
            </p>
            <div className='mt-0 p-2 md:p-4 flex gap-2 md:gap-4'>
                <a href={href} target="_blank" rel="noopener noreferrer">
                    <button className="cursor-pointer
                 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
                 hover:opacity-85 durat0ion-300 hover:scale-105 font-semibold 
                rounded-3xl bg-[#8245ec]">
                        Demo
                    </button>
                </a>
                <a href={sourselink} target="_blank" rel="noopener noreferrer">
                <button className='cursor-pointer
                 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#8245ec]'>Source Code</button>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard