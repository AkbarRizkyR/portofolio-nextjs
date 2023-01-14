import React from "react";
import { TypeAnimation } from "react-type-animation";

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
                </div>
            </div>
        </div>
    );
}

export default Main;
