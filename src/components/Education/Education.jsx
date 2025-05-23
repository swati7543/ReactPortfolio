// src/components/Timeline.js
import React, { useEffect } from 'react';
import { FaBirthdayCake, FaHamburger, FaDumbbell } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { education, SkillsInfo } from '../../constant';


const Education = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);
    return (
        <div className="flex flex-col items-center  p-10 md:pt-20 text-white">
            <div data-aos="fade-down" className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Education</h2>
                <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 "></div>
                <p className="text-gray-400 mt-4 text-lg font-semibold mb-10">
                    My education has been a journey of learning and development. Here are the details of my academic background
                </p>
            </div>
            <div className="relative w-full flex flex-wrap gap-1  items-center justify-center">
                <div className="border-l-2 border-gray-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

                {education.map((education, index) => {
                    const isLeft = index % 2 === 0;
                    const alignment = isLeft ? 'items-end' : 'items-start';
                    const contentAlignment = isLeft ? 'text-right' : 'text-left';
                    const translateX = isLeft ? 'md:-translate-x-40' : 'md:translate-x-40';

                    return (
                        <div data-aos="fade-up" key={index}
                            className={`flex flex-wrap gap-1 justify-center items-start w-[60rem] ${alignment} ${translateX}`}>

                            <div
                                key={education.id}
                                className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 sm:w-[48%] rounded-2xl border border-white/20 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-105 duration-300"
                            >
                                <div className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                                    <h4 className="text-white">{education.degree}</h4>
                                    <h3 className="text-lg text-gray-300">{education.school}</h3>
                                    <span className="block text-sm text-purple-400">{education.date}</span>
                                </div>

                                {education.grade && (
                                    <h3 className="text-base text-gray-300 mb-2">Grade: {education.grade}</h3>
                                )}

                                <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">
                                    {education.desc}
                                </p>
                            </div>
                        </div>


                    );
                })}
            </div>
        </div>
    );
};

export default Education;
