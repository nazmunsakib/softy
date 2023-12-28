import React from 'react';
import myImage from'../assets/images/my-new.jpg';

const About = () => {
    return (
        <section className="about-me py-14">
            <div className="container">
                <div className="about-content flex">
                    <div className="about-image-area w-1/3">
                        <img className="filter shadow-softy2 grayscale hover:filter-none ease-out duration-700 rounded !z-0" src={myImage} width={400} height={500} alt="Nazmun Sakib" />
                    </div>
                    <div className="info-area w-2/3 pl-16">
                        <div className="section-title mb-6">
                            <h2 className="font-bold font-poppins text-2xl text-secondary">#About Me</h2>
                        </div>
                        <p className="font-poppins">Hello! My name is Kamal and I enjoy creating things that live on the internet. My interest in web development started back in 2013 when I decided to try editing custom WordPress themes — turns out hacking together a custom reblog button taught me a lot about HTML, CSS & PHP ! Shortly I'm Studying at NU, I joined the developer team at ThemeBucket where I work on a very interesting project. Though my major is Bachelor of Social Science, I've chased my dream and passion about being a web developer. Here I am today! Here are a few technologies I’ve been working with recently:</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;