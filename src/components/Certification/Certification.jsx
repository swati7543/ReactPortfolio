import React from 'react'
import Skills from '../Skills/Skills';
import html from "../../assets/html-certification.png"
import css from "../../assets/css-certification.png"
import javascript from "../../assets/javascript-certification.png"
import typescript from "../../assets/typescript-certification.png"
import react from "../../assets/react-certification.png"
const Certification = () => {
    const aboutinfo = [
        {
            img: typescript,
            heading: 'TypeScript',
            date: "May 2025",
            Skill: 'TypeScript',
            Platform: 'Simplilearn',
            desc: "🎉 Excited to share that I have successfully completed the HTML certification from Simplilearn SkillUp! 💻✨",
            link: 'https://simpli.app.link/9Y2wuiDjBTb '

        },
        {
            img: react,
            heading: 'React',
            date: "May 2025",
            Skill: 'React',
            Platform: 'Scaler',
            desc: "🎉 Excited to share that I have successfully completed the React JS Course from Scaler Topics! ⚛️💻",
            link: 'https://moonshot.scaler.com/s/li/bPVedZC-9O',


        },
        {
            img: javascript,
            heading: 'JavaScript',
            date: "April 2025",
            Skill: 'JavaScript',
            Platform: 'Simplilearn',
            desc: "🎉 Excited to share that I have successfully completed the HTML certification from Simplilearn SkillUp! 💻✨",
            link: 'https://simpli.app.link/7HVHPxUVfTb'
        },

        {
            img: css,
            heading: 'CSS',
            date: "Oct 2024",
            Skill: 'CSS',
            Platform: 'Simplilearn',
            desc: "🎉 Excited to share that I have successfully completed the HTML certification from Simplilearn SkillUp! 💻✨",
            link: 'https://simpli.app.link/t5lh2YiVfTb'
        },
        {
            img: html,
            heading: 'HTML',
            date: "Nov 2023",
            Skill: 'HTML',
            Platform: 'Simplilearn',
            desc: "🎉 Excited to share that I have successfully completed the HTML certification from Simplilearn SkillUp! 💻✨",
            link: 'https://simpli.app.link/6t4C5gAUfTb',

        },


    ]
    return (
        <>
            <section
                id="certification"
                className="py-24 pb-2 px-[8vw] w-full font-sans bg-[#050716aa] "
            >
                <div data-aos="fade-down" className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 ">Certification  </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-2"></div>
                    <p className='text-gray-400 mt-4 text-lg font-semibold'>My certifications reflect my commitment to continuous learning and skill development. Here's a glimpse of the courses and achievements I've completed across various platforms.</p>
                </div>
                <div className='py-10 px-1 flex  w-full'>
                    <ul className='gap-10  flex flex-wrap justify-center '>
                        {aboutinfo.map((ele, index) => {
                            const animationType = index % 2 === 0 ? 'fade-right' : 'fade-left';
                            return (
                                <div
                                    key={index}
                                    data-aos={animationType}
                                    className="w-64 md:w-96 h-auto flex items-start  p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,206,0.25)] hover:scale-105 hover:shadow-[0_0_25px_rgba(130,69,206,0.35)]   mb-10  transition-transform duration-500
                                    "
                                >
                                    <div className="flex-1  ">
                                        {ele.img && (
                                            <img
                                                src={ele.img}
                                                alt={`${ele.heading} certificate`}
                                                loading="lazy"
                                                className="w-full rounded-xl mb-4 object-cover"
                                            />
                                        )}
                                        <h3 className="text-2xl font-semibold text-white mb-2">{ele.heading}</h3>

                                        <p className="text-gray-300 text-sm mb-4">{ele.desc}</p>

                                        <div className="flex flex-col text-sm text-gray-400">
                                            <span><span className="font-medium text-white">Skill:</span> {ele.Skill}</span>
                                            <span><span className="font-medium text-white">Platform:</span> {ele.Platform}</span>
                                            <span><span className="font-medium text-white">Date:</span> {ele.date}</span>
                                        </div>
                                        <div>

                                            {ele.link && (
                                                <a
                                                    href={ele.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-transform text-sm"
                                                >
                                                    View Certificate
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>);
                        })}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Certification