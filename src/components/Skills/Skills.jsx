// src/components/Skills/Skills.jsx
import React, { useEffect, useState } from "react";
import { SkillsInfo } from "../../constant";

// import Tilt from "react-parallax-tilt";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiMui } from "react-icons/si";


const technicalSkills = [
  { name: 'HTML', percent: 90, icon: FaHtml5 },
  { name: 'CSS', percent: 60, icon: FaCss3Alt },
  { name: 'JavaScript', percent: 75, icon: FaJs },
  { name: 'React', percent: 75, icon: FaReact },
  { name: 'Tailwind CSS', percent: 65, icon: SiTailwindcss },
  { name: 'MUI', percent: 70, icon: SiMui },
  { name: 'Bootstrap', percent: 60, icon: FaBootstrap },
];

const professionalSkills = [
  { name: 'Creativity', percent: 80 },
  { name: 'Communication', percent: 65 },
  { name: 'Problem Solving', percent: 75 },
  { name: 'Teamwork', percent: 85 },
]


const Skills = ({ percent = 90, title = "Creativity" }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);



  const [offset, setOffset] = useState(0)

  const radius = 40
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const progressOffset = ((100 - percent) / 100) * circumference
    setOffset(progressOffset)
  }, [percent, circumference])
  return (
    <>
      <section
        id="skills"
        className="py-24 pb-2 px-[8vw] w-full font-sans bg-[#050716aa] "
      >
        {/* Section Title */}
        <div data-aos="fade-down" className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">SKILLS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A collection of my technical skills and expertise honed through various projects and experiences
          </p>
        </div>
        <div data-aos="fade-up">
          <p className="text-gray-200 mt-4  font-medium">
            I specialize in crafting responsive and interactive user interfaces using modern web technologies. My toolkit includes HTML, CSS, JavaScript, and React, with a strong eye for design, accessibility, and performance. I'm passionate about building seamless digital experiences that not only work—but wow. As I continue to grow, I’m diving deeper into advanced animations, state management, and UI/UX best practices to become a well-rounded Software engineer.
          </p>
        </div>
        {/* Skill Categories */}
        <div className="flex w-full px-2 flex-wrap  lg:flex-row  gap-6 justify-center py-10">
          {SkillsInfo.map((category, index) => {
            const animationType = index % 2 === 0 ? 'fade-down' : 'fade-up';

            return (

              <div
                key={category.title}
                data-aos={animationType}
                className="w-64 md:w-96 h-auto flex items-start  p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,206,0.25)] hover:scale-105 hover:shadow-[0_0_25px_rgba(130,69,206,0.35)]   mb-10  transition-transform duration-500"
              >
                <div className="flex-1 w-96 ">
                  < h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center" >
                    {category.title}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-center space-x-2 border-2 border-gray-700 rounded-3xl py-2 px-3 text-center"
                      >
                        <span className="text-xs sm:text-sm text-gray-300">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div >


            )
          }
          )}
        </div >

      </section >
      <section
        id="skills"
        className="py-2 pb-2 px-[8vw]  font-sans bg-[#050716aa] "
      >
        <div className="  text-white px-6 py-10 flex flex-col  lg:flex-row gap-10 justify-center items-start">

          {/* Technical Skills */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl font-semibold mb-6 border-b-2 inline-block border-cyan-400">Technical Skills</h2>
            {technicalSkills.map((skill, i) => (
              <div key={i} className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="flex items-center gap-2">
                    <span><skill.icon className="text-2xl text-cyan-400" /></span> {skill.name}
                  </span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div
                    data-aos="slide-right"
                    data-aos-anchor-placement="top-bottom"
                    className="h-full bg-cyan-400 rounded-full transition-all duration-[1200ms]"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>

              </div>
            ))}
          </div>

          {/* Professional Skills */}
          <div className="flex-1 w-full">
            <h2 className="text-2xl font-semibold mb-6 border-b-2 inline-block border-cyan-400">Professional Skills</h2>
            <div className="grid grid-cols-2 gap-6">
              {professionalSkills.map((skill, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="relative w-24 h-24">
                    {/* Outer border background circle (gray track) */}
                    <div className="absolute inset-0 rounded-full border-10 border-gray-800"></div>

                    {/* Colored border fill using conic-gradient */}
                    <div
                      data-aos="slide-top"
                      data-aos-anchor-placement="top-bottom"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `conic-gradient(#06b6d4 ${skill.percent * 3.6}deg, transparent 0deg)`,
                        WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 8px))',
                        mask: 'radial-gradient(farthest-side, transparent calc(100% - 8px), black calc(100% - 8px))',
                      }}
                    ></div>

                    {/* Center Text */}
                    <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                      {skill.percent}%
                    </div>
                  </div>

                  <p className="text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

    </>
  )
}

export default Skills;



