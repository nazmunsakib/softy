import React from 'react';

const Hero = () => {
    return (
        <section className="hero-aria container min-h-[500px] flex flex-col justify-center">
            <div className="hero-info">
                <h1 className='font-bold font-dmsans text-7xl text-[#10172b]'><span className='underline'>Nazmun</span> Sakib</h1>
                <h2 className='font-bold font-dmsans text-6xl mt-2 text-[#333333]'>Make creative things for web!</h2>
                <p className='max-w-2xl text-lg mt-5 text-[#707376] font-poppins'>I'm a software developer based in Dhaka, Bangladesh specializing in building exceptional websites, applications, plugins, and everything in between.</p>
                <div className='hero-buttons'>
                    <a href="#" className=''>Get resume</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;