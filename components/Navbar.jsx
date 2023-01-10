import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
function Navbar() {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src="/../public/assets/Logo.jpg" alt="/" width="100" height="25" />
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
                <div className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>
        <div className='fixed left-0 top-0 w-full h-screen bg-black/10'>
            <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'>
                <div>
                    <div className='flex w-full item-center justify-between'>
                        <Image src="/../public/assets/Logo.jpg" alt="/" width="87" height="35" />
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <div className='border-b border-gray-500'>
                        <p className='w-[85%] sm:w-[90%]'>Hello, My Name Is Akbar Rizky Rabbani</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar