import React from 'react';
import myImage from'../assets/images/my-new.jpg';

const About = () => {
    return (
        <section id="about-me" className="about-me py-8 md:py-20">
            <div className="container">
                <div className="about-content flex flex-col-reverse md:flex-row">
                    <div className="about-image-area w-full md:w-1/3">
                        <img className="filter grayscale-70 shadow-softy2 hover:filter-none ease-out duration-700 rounded !z-0" src={myImage} width={400} height={500} alt="Nazmun Sakib" />
                    </div>
                    <div className="info-area w-full md:w-2/3 md:pl-16 mb-7">
                        <div className="section-title mb-6">
                            <h2 className="font-bold font-poppins text-2xl text-secondary">#About Me</h2>
                        </div>
                        <p className="font-poppins leading-8">Hello! My name is Sakib I'm a passionate Full Stack WordPress Developer. I develop web applications, WordPress themes and plugins. My core skill is based on custom WordPress Development and JavaScript, I love to do most of the things using WordPress and JavaScript. and I enjoy creating things that live on the internet. I am available for any kind of job opportunity that suits my interests!</p>
                        <a href="https://nazmunsakib.com/sakib-resume.pdf" className="bg-primary text-sm font-semibold px-5 py-2 mt-7 rounded hover:bg-softySolid shadow-softy2 inline-block text-softySolid uppercase" target="_blank" rel="noopener noreferrer">Get Resume</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;