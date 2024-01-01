import React from 'react';

const Hero = () => {
    return (
        <section className="hero-aria min-h-screen flex flex-col justify-center pt-14">
           <div className="container">
                <div className="hero-info md:w-2/3">
                    <h1 className="bg-softy text-lg font-bold inline-block text-secondary pr-5">Hello! I’m</h1>
                    <h2 className='font-bold font-dmsans text-5xl md:text-7xl text-primary mt-3'>Nazmun Sakib</h2>
                    <p className='md:text-lg mt-2 md:mt-4 font-poppins'>I m a software developer specializing in creating modern websites, applications, plugins, and everything in between.</p>
                    <a href="#" className="text-[15px] capitalize text-primary border-[1px] inline-block mt-5 rounded-sm px-7 py-2 hover:text-secondary transition-all duration-100">Get resume </a>
                </div>
           </div>
        </section>
    );
};

export default Hero;