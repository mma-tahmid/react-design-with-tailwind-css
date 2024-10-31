import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { HiBars3 } from "react-icons/hi2";


const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) // !false = true
    }

    // console.log("toogle")
    //console.log(isMenuOpen)

    return (

        <>


            <div className='bg-slate-500 '>

                <div className="flex justify-between items-center  p-3">

                    {/* Logo Name  */}
                    <div className='text-white text-2xl font-bold'>
                        <Link to='/'> E-Commerce App </Link>
                    </div>



                    {/* Menu item */}

                    <ul className='hidden md:flex space-x-4'>
                        <Link to='/'> <li className='text-white'>Home </li> </Link>
                        <Link to='/'> <li className='text-white'>About </li> </Link>
                        <Link to='/'> <li className='text-white'>Contact </li> </Link>
                        <Link to='/'> <li className='text-white'> Login </li> </Link>

                        <Link>
                            <img src="/assets/profile_image.jpeg" alt="profile_picture" className='h-7 w-7 rounded-full object-cover' />
                        </Link>
                    </ul>

                    {/* Hamburger Icons */}

                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white'>
                            <svg
                                fill='none'
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                viewBox='0 0 24 24'
                                className='w-6 h-6'
                            >

                                <path d="M4 6h16M4 12h16M4 18h16"> </path>
                            </svg>

                        </button>

                    </div>

                </div>

                {/* Mobile Menu */}
                {
                    isMenuOpen ?
                        (
                            <ul className='flex flex-col md:hidden'>
                                <Link className='py-2 px-3' to='/'> <li className='text-white'>Home </li> </Link>
                                <Link className='py-2 px-3' to='/'> <li className='text-white'>About </li> </Link>
                                <Link className='py-2 px-3' to='/'> <li className='text-white'>Contact </li> </Link>
                                <Link className='py-2 px-3' to='/'> <li className='text-white'> Login </li> </Link>

                                <Link className='py-2 px-3'>
                                    <img src="/assets/profile_image.jpeg" alt="profile_picture" className='h-7 w-7 rounded-full object-cover' />
                                </Link> 
                            </ul>
                        )

                        : null
                }

            </div>

        </>





    );
};

export default NavBar;

{/* <ul className='flex gap-4'>

<Link to="/"> Home </Link> */}