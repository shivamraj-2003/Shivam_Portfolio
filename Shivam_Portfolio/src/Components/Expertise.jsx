import React from 'react';
import b1 from "../images/banner_wallpaper.svg";

export default function Expertise() {
    return (
        <div name="skills" className="mt-2">
            <h1 className="mb-16 text-5xl font-bold underline text-center">My Skills</h1>

            <div
                style={ { backgroundImage: `url(${b1})`, backgroundSize: "cover" } }
                className="box-container flex flex-col md:flex-row items-center py-16"
            >
                {/* Text container */ }
                <div className="flex justify-center mb-10 md:mb-0 md:w-1/2">
                    <div className="w-5/6 text-center space-y-4">
                        <h1 className="text-4xl font-bold">I love these technologies</h1>
                        <p className="text-gray-700">
                            I am a front-end web developer. I can provide clean code and pixel perfect design. I also make a website more & more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their device.
                        </p>
                        <button className="text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg">
                            Hire Me
                        </button>
                    </div>
                </div>

                {/* Skills container */ }
                <div className="flex justify-center md:w-1/2">
                    <div className="flex flex-wrap justify-center space-x-3">
                        { skills.map((skill, index) => (
                            <p key={ index } className="bg-gray-300 px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                                { skill }
                            </p>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    );
}

const skills = [
    "C", "C++", "Data Structures & Algorithms", "HTML", "CSS", "Bulma CSS", "JavaScript", "React JS",
    "Tailwind CSS", "BootStrap", "Git & GitHub", "Application Page Interfaces(API)",
    , "Recoil", "Problem Solving", "Soft Skills", "State Management", "PostMan", "Axios", "Core Java", "My Sql",
    "English", "Basic Cloud computing",
];
