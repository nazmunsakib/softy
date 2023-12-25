import React from 'react';

const Hero = () => {
    return (
        <section className="hero-aria container min-h-[500px] flex flex-col justify-center">
            <div className="hero-info">
                <h1 className="bg-softy text-lg font-bold inline-block text-secondary pr-5">Hello! I’m</h1>
                <h2 className='font-bold font-dmsans text-7xl text-primary mt-3'>Nazmun Sakib</h2>
                {/* <h3 className='font-bold font-dmsans text-5xl mt-1 text-secondary shadow-softy'>Build creative things for web!</h3> */}
                <p className='max-w-2xl text-lg mt-4 font-poppins'>I m a software developer based in Dhaka, Bangladesh specializing in building exceptional websites, applications, plugins, and everything in between.</p>
                <div className='hero-buttons mt-6'>
                    <a href="#" className="text-[15px] capitalize text-primary border-[1px] inline-block mt-5 rounded-sm px-7 py-2 hover:text-secondary transition-all duration-100">Get resume </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;