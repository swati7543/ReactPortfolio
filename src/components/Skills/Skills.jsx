// src/components/Skills/Skills.jsx
import React, { useEffect, useState } from "react";
import { SkillsInfo } from "../../constant";

// import Tilt from "react-parallax-tilt";
import AOS from 'aos';
import 'aos/dist/aos.css';


const technicalSkills = [
  { name: 'HTML', percent: 90, icon: '🌐' },
  { name: 'CSS', percent: 60, icon: '🎨' },
  { name: 'Javascript', percent: 75, icon: '📜' },
  { name: 'React', percent: 75, icon: '⚛️' },
  { name: 'Tailwind css', percent: 65, icon: '⚛️' },
  { name: 'MUI', percent: 70, icon: '⚛️' },
  { name: 'Bootstrap', percent: 60, icon: '⚛️' },
]

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
        className="py-24 pb-24 px-[12vw] w-full font-sans bg-[#050716aa] "
      >
        {/* Section Title */}
        <div data-aos="fade-down" className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A collection of my technical skills and expertise honed through various projects and experiences
          </p>
        </div>
        <div className="text-white">
          <p>
            I specialize in crafting responsive and interactive user interfaces using modern web technologies. My toolkit includes HTML, CSS, JavaScript, and React, with a strong eye for design, accessibility, and performance. I'm passionate about building seamless digital experiences that not only work—but wow. As I continue to grow, I’m diving deeper into advanced animations, state management, and UI/UX best practices to become a well-rounded frontend engineer.
          </p>
        </div>
        {/* Skill Categories */}
        <div data-aos="fade-up" className="flex space-x-10 gap-1 lg:gap-5 py-10 justify-between ">
          {SkillsInfo.map((category) => (
            <div
              key={category.title}
              className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white/20
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]  hover:scale-105 duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                  >
                    {/* <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  /> */}
                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              {/* Skill Items - 3 per row on larger screens
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt> */}
            </div>
          ))}
        </div>
      </section>
      <section
        id="skills"
        className="py-24 pb-24 px-[7vw]  font-sans bg-[#050716aa] "
      >
        <div className="  text-white px-6 py-10 flex  md:flex-row gap-10 justify-center items-start">

          {/* Technical Skills */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6 border-b-2 inline-block border-cyan-400">Technical Skills</h2>
            {technicalSkills.map((skill, i) => (
              <div key={i} className="mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="flex items-center gap-2">
                    <span>{skill.icon}</span> {skill.name}
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
          <div className="flex-1">
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



