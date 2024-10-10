import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import p2 from '../images/p2.png';
import b1 from "../images/banner_wallpaper.svg";

export default function Banner() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Frontend Developer", "Backend Developer"], // Strings to display
            // Speed settings, try different values until you get good results
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div
            style={ { backgroundImage: `url(${b1})`, backgroundSize: "cover" } }
            className='w-full main-container flex flex-col md:flex-row items-center py-10 md:py-20 px-4'
        >
            <div className='text-white w-full md:w-2/3 flex justify-center md:justify-start'>
                <div className='w-full md:w-2/3 md:ml-10'>
                    <h3 className='text-3xl font-semibold'>Hi, I am</h3>
                    <h1 className='mt-3 text-5xl font-bold'>Shivam raj</h1>
                    <h2 className='mt-3 text-3xl font-semibold'>
                        And I am{ ' ' }
                        <span className='text-red-400 font-bold underline' ref={ el }></span>
                    </h2>
                    <p className='mt-3'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ipsum ut <br />
                        earum nesciunt quis autem officia blanditiis quam repellat dolorum! Consectetur
                        ducimus adipisci aspernatur nam obcaecati, repellendus nobis expedita commodi.
                    </p>
                    <div className='icons-container flex mt-5 space-x-5'>
                        <a
                            className='mt-2 hover:bg-orange-500 w-14 h-14 rounded-full flex justify-center bg-gray-700 items-center'
                            href="https://discord.com/channels/@mev"
                        >
                            <i className="fa-brands text-4xl fa-discord"></i>
                        </a>
                        <a
                            className='mt-2 hover:bg-orange-500 w-14 h-14 rounded-full flex justify-center bg-gray-700 items-center'
                            href="https://twitter.com/ShivamRaj_2003"
                        >
                            <i className="fa-brands text-4xl fa-square-x-twitter"></i>
                        </a>
                        <a
                            className='mt-2 hover:bg-orange-500 w-14 h-14 rounded-full flex justify-center bg-gray-700 items-center'
                            href="https://github.com/shivamraj-2003"
                        >
                            <i className="fa-brands text-4xl fa-github"></i>
                        </a>
                        <a
                            className='mt-2 hover:bg-orange-500 w-14 h-14 rounded-full flex justify-center bg-gray-700 items-center'
                            href="https://www.linkedin.com/in/shivam-raj-b8a680230/"
                        >
                            <i className="fa-brands text-4xl fa-linkedin"></i>
                        </a>
                    </div>
                    <br />
                    <a className='px-3 py-2 bg-orange-500 hover:bg-green-500 rounded-full shadow-lg mt-5 inline-block' href='/contact'>
                        Contact Me
                    </a>
                </div>
            </div>
            <div className='flex justify-center md:justify-end w-full md:w-1/3 mt-10 md:mt-0'>
                <img className='rounded-full w-auto md:w-fit h-3/4 md:h-auto shadow-lg' src={ p2 } alt="Profile" />
            </div>
        </div>
    );
}
