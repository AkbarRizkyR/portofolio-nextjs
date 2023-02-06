import React from 'react'
import { FaReact, FaVuejs, FaHtml5, FaCss3, FaPhp, FaGithub } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'

function Skill() {
    const data = [
        {
            title: 'ReactJS',
            icon: <FaReact size={50} color='#61DBFB'/>
        },
        {
            title: 'VueJS',
            icon: <FaVuejs size={50} color='#41B883'/>
        },
        {
            title: 'HTML',
            icon: <FaHtml5 size={50} color='#E44D26' />
        },
        {
            title: 'CSS',
            icon: <FaCss3 size={50} color='#563D7C' />
        },
        {
            title: 'PHP',
            icon: <FaPhp size={50} color='#4F5D95' />
        },
        {
            title: 'Github',
            icon: <FaGithub size={50} color='#181717' />
        },
        {
            title: 'Tailwind',
            icon: <SiTailwindcss size={50} color='#2596be' />
        },
    ]

    return (
        <div className='w-full p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
                    Skills
                </p>
            <h2 className='py-4'> What I Can Do?</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {data.map((item, index) => (
                    <div key={index} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                {item.icon}
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Skill
