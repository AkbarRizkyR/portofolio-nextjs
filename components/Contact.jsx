import Image from 'next/image';
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'
// import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
// import Link from 'Next/Link'


function Contact() {
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
    const inputData = [
        { label: "Nama", type: "text" },
        { label: "Nomer Telepon", type: "text" },
        { label: "Email", type: "email" },
        { label: "Subject", type: "text" },
    ];

    return (
        <div className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#6561e5]'>
                    Contact
                </p>
                <h2 className='py-4'>
                    Get In Touch
                </h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src="" alt="" />
                            <div>
                                <h2 className='py-2 text-3xl font-medium'>
                                    Akbar Rizky Rabbani
                                </h2>
                                <p className='text-xl font-medium'>
                                    Front-End Developer
                                </p>
                                <p className='py-4 text-lg font-medium text-center'>
                                    I am available for full-time position, if you want you can contact me
                                </p>
                            </div>
                            <div>
                                <p className='Uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-10'>
                                    {
                                        socials.map((social, index) =>
                                            <a key={index} href={social.link} target="_blank" rel="noreferrer noopener" className='grid items-center justify-center rounded-full shadow-2xl bg-white p-3 transition-all duration-500 hover:scale-105 ease-in'>
                                                {social.icon}
                                            </a>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* right */}
                    <div className='col-span-3 w-full h-auto shadow-2xl rounded-xl lg:4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    {inputData.map((input, index) => (
                                        <div key={index} className="flex flex-col">
                                            <label className="uppercase text-sm py-2">{input.label}</label>
                                            <input
                                                type={input.type}
                                                className="border-2 rounded-lg p-3 flex border-gray-300 focus:border-blue-500"
                                            />
                                        </div>
                                    ))}
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2"> Message</label>
                                        <textarea
                                            className="border-2 rounded-lg p-3 flex border-gray-300 focus:border-blue-500"
                                            rows="10"
                                        />
                                    </div>
                                </div>
                                <button className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg mt-4">Kirim Pesan</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact