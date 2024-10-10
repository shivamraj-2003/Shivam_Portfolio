import React, { useState } from 'react';
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header() {
    const [nav, setNav] = useState(false);
    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'skills' },
        { id: 4, link: 'experience' },
        { id: 5, link: 'achievements' },
        { id: 6, link: 'project' },
        { id: 7, link: 'contact' },
    ];

    const [actionButton, setActionButton] = useState({
        title: "Download Resume",
        link: "/Shivam_raj_Resume.pdf"
    });

    return (
        <div name="home" className='fixed top-0 space-x-3 h-20 w-full border flex items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 justify-between bg-gray-100'>
            <div>
                <h1 className='text-2xl font-bold'>Shivam Raj</h1>
            </div>
            {/* Desktop Navigation */ }
            <ul className='hidden md:flex'>
                { links.map(({ id, link }) => (
                    <li
                        key={ id }
                        className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                        <Link to={ link } smooth duration={ 500 }>{ link }</Link>
                    </li>
                )) }
            </ul>

            {/* Mobile Menu Toggle */ }
            <div onClick={ () => setNav(!nav) } className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                { nav ? <FaTimes size={ 30 } /> : <FaBars size={ 30 } /> }
            </div>

            {/* Mobile Menu */ }
            { nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    { links.map(({ id, link }) => (
                        <li
                            key={ id }
                            className='px-4 cursor-pointer capitalize py-2 text-4xl'>
                            <Link
                                onClick={ () => setNav(!nav) }
                                to={ link }
                                smooth
                                duration={ 500 }
                            >
                                { link }
                            </Link>
                        </li>
                    )) }
                    {/* Add Download Resume button inside mobile menu */ }
                    <li className='py-2 text-4xl'>
                        <a href={ actionButton.link }
                            className='px-6 py-3 shadow bg-orange-600 rounded-2xl hover:bg-green-500 transition duration-300 text-white text-lg'
                            download
                        >
                            { actionButton.title }
                        </a>
                    </li>
                </ul>
            ) }

            {/* Download Resume button for larger screens */ }
            <div className='hidden md:flex justify-around '>
                <a href={ actionButton.link }
                    className='px-4 text-center items-center sm:px-6 ml-4 sm:ml-6 hover:bg-green-500 transition duration-300 transform hover:scale-200 py-2 shadow text-sm bg-orange-600 rounded-2xl'
                    download
                >
                    { actionButton.title }
                </a>
            </div>
        </div>
    );
}
