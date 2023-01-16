import React from "react";
import { TypeAnimation } from "react-type-animation";
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn,FaYoutube,FaTwitter, FaInstagram, FaFacebook} from 'react-icons/fa'

function Main() {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        Hello, Welcome To My Portofolio
                    </p>
                    <h1 className="py-4 text-gray-700">
                        <TypeAnimation
                            sequence={["Namaku Akbar", 3000, "My name is Akbar"]}
                            wrapper="span"
                            cursor={true}
                            repeat={1}
                            className="text-[#5651e5]"
                        />
                    </h1>
                    <h1 className="py-2 text-gray-700">
                    <TypeAnimation
                        sequence={[
                        'Junior',
                        ]}
                        cursor={true}
                        repeat={1}
                    />
                        Front-End Web Developer
                    </h1>
                    <p className="py-4 text-gray-500 max-w-[70%] m-auto">
                        Halo, Nama ku akbar, aku adalah seorang Junior Front-End Web Developer.
                    </p>
                        <div className="flex items-center justify-between max-w-[330px] m-auto py-4 text-[#5651e5]">
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
    );
}

export default Main;
