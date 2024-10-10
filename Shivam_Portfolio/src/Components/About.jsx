import React, { useState } from 'react';
import p1 from '../images/p1.png';

export default function About() {
    const [data, setData] = useState({
        image: p1,
        title: "Frontend Developer & Backend Developer",
        desc1: `I am a front-end & Backend web developer. I can provide clean code and pixel
                                perfect design.I also make a website more & more interactive with webanimations.
                                I can provide clean code and pixel perfect design.I also make
                                the website more & more interactive with web animations.A responsive design
                                makes your website accessible to all users, regardless of their device `,
    });

    return (
        <>
            <div name="about" className='main-container bg-gray-100 py-10 px-4 md:px-0'>
                <h1 className='text-center pb-16 text-4xl underline font-bold'>About Me</h1>
                <div className='flex flex-col-reverse items-center md:flex-row'>
                    <div className='w-full md:w-1/2 flex justify-center'>
                        <img className='w-full md:w-fit rounded-full h-3/4 md:h-auto shadow-lg' src={ data.image } alt="Profile" />
                    </div>
                    <div className='w-full md:w-1/2 flex justify-center md:pl-8'>
                        <div className='space-y-6 w-full md:w-2/3'>
                            <h1 className='text-3xl font-semibold'>{ data.title }</h1>
                            <p>{ data.desc1 }</p>
                            <button className='bg-orange-500 hover:bg-green-500 px-3 py-2 text-2xl rounded-full shadow-lg'>Read More...</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
