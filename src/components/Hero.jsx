import React from 'react';
import HeroBg from '../assets/images/hero-bg.avif';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="hero-aria min-h-screen flex flex-col justify-center pt-14 relative">
            <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
                <div className="w-[108rem] flex-none flex justify-end">
                    <img src={HeroBg} alt="Hero background" className="w-[90rem]" decoding="async" />
                </div>
            </div>
           <div className="container">
                <div className="hero-info md:w-2/3">
                    <h1 className="bg-softy text-lg font-bold inline-block text-secondary pr-5">Hello! I’m</h1>
                    <h2 className='font-bold font-dmsans text-5xl md:text-7xl text-primary mt-3'>Nazmun Sakib</h2>
                    <p className='md:text-lg mt-2 md:mt-4 font-poppins'>I m a software developer specializing in creating modern websites, applications, plugins, and everything in between.</p>
                    <Link to="contact-me" className="capitalize text-primary border-[1px] inline-block mt-5 rounded px-5 py-2 hover:text-secondary transition-all duration-100" spy={true} smooth={true} duration={1000} >Get in touch</Link>
                </div>
           </div>
        </section>
    );
};

export default Hero;