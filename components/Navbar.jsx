import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const socials = [
        {
            icon: <FaLinkedinIn />,
            link: 'https://www.linkedin.com/in/akbar-rizky-rabbani-a66a20148/'
        },
        {
            icon: <FaGithub />,
            link: 'https://github.com/AkbarRizkyR'
        },
        {
            icon: <FaTwitter />,
            link: 'https://twitter.com/Akbarrizky0098'
        },
        {
            icon: <FaInstagram />,
            link: 'https://instagram.com/dislost0'
        },
        {
            icon: <AiOutlineMail />,
            link: 'mailto:Arrizki0098@gmail.com'
        },
    ]
    const [menuItems, setMenuItems] = useState([
        { name: 'Home', href: '/' },
        { name: 'About Me', href: '/about-me' },
        { name: 'Skills', href: '/skills' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact Me', href: '/contact-me' },
    ]);

    return (
        <header className="bg-white fixed w-full shadow-xl z-50">
            <div className="flex items-center justify-between max-w-7xl mx-auto p-4 md:p-8">
                <Link href="/">
                    <div>
                        <Image src="/assets/logo.png" alt="Logo" className="h-12 md:h-16" width="60" height="25" />
                    </div>
                </Link>
                <nav className={`${nav ? "block" : "hidden"} md:block md:flex md:items-center w-full md:w-auto transition-all duration-500 ease-out`}>
                    <ul className="md:flex items-center justify-between w-full text-center md:text-left">
                        {menuItems.map(item => (
                            <li className="md:ml-6" key={item.id}>
                                <Link href={item.href}>
                                    <div className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                        {item.name}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button
                    className="block md:hidden border border-gray-400 rounded p-3 mt-4"
                    onClick={handleNav}
                >
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Navbar