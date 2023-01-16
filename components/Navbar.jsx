import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn,FaYoutube,FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa'

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src="/../public/assets/Logo.png" alt="/" width="70" height="25" />
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>home</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>about me</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>skill</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>project</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>contact me</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0  top-0 w-full h-screen bg-black/70' : '' }>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                            : 'fixed left-[-100%] p-10 ease-in duration-500' }>
                <div>
                    <div className='flex w-full item-center justify-between'>
                        <Image src="/../public/assets/Logo.jpg" alt="/" width="87" height="35" />
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 mb-12 cursor-pointer'>
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <div className='border-b border-gray-500'>
                        <p className='w-[85%] sm:w-[90%] py-4'>Hello, My Name Is Akbar Rizky Rabbani</p>
                    </div>
                </div>
                <div className='py-4 flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>About Me</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Skill</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Project</li>
                        </Link>
                        <Link href='/'>
                            <li className='py-4 text-sm'>Contact Me</li>
                        </Link>
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase trackinig-widest text-[#5651e5]'>My Sosial Media</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaInstagram />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaFacebook />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaTwitter />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <FaYoutube />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                <AiOutlineMail />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar