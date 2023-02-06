import { TypeAnimation } from 'react-type-animation'
import { AiOutlineMail } from 'react-icons/ai'


import {
    FaGithub,
    FaLinkedinIn,
    FaYoutube,
    FaTwitter,
    FaInstagram,
    FaFacebook
} from 'react-icons/fa'



function Main() {

    const socials = [
        {
            icon: <FaLinkedinIn size={30} color='#0077B5' />,
            link: 'https://www.linkedin.com/in/akbar-rizky-rabbani-a66a20148/'
        },
        {
            icon: <FaGithub size={30} color='#181717' />,
            link: 'https://github.com/AkbarRizkyR'
        },
        {
            icon: <FaYoutube size={30} color='#FF0000' />,
            link: 'https://youtube.com/dislot'
        },
        {
            icon: <FaTwitter size={30} color='#1DA1F2' />,
            link: 'https://twitter.com/Akbarrizky0098'
        },
        {
            icon: <FaInstagram size={30} color='#833AB4' />,
            link: 'https://instagram.com/dislost0'
        },
        {
            icon: <FaFacebook size={30} color='#1877F2' />,
            link: 'https://facebook.com/Zameas0098'
        },
        {
            icon: <AiOutlineMail size={30} color='#0077B5' />,
            link: 'mailto:Arrizki0098@gmail.com'
        },
    ]

    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-1240px w-full h-full mx-auto p-2 flex justify-center items-center">
                <div className="text-black-50">
                    <p className="uppercase text-sm tracking-widest">
                        Hello, Welcome To My Portofolio
                    </p>
                    <h1 className="py-4 text-3xl font-bold text-[#5651e5]">
                        <TypeAnimation
                            sequence={["Namaku Akbar", 3000, "My name is Akbar"]}
                            wrapper="span"
                            cursor={true}
                            repeat={1}
                        />
                    </h1>
                    <h2 className="text-lg font-medium my-2">
                        Front-End Web Developer
                    </h2>
                    <p className="text-primary text-center my-4">
                        Hello, My name is Akbar, I am a Junior Front-End Web Developer.
                    </p>
                    <div className="flex items-center justify-between max-w-330px m-auto py-4">
                        {
                            socials.map((socials, index) =>
                                <a
                                    key={index}
                                    href={socials.link}
                                    className="relative rounded-full shadow-lg hover:shadow-2xl p-3 cursor-pointer transition-all duration-500 ease-in"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    {socials.icon}
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;