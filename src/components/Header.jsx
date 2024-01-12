import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <header className="site-header fixed py-3 z-50 top-0 w-full backdrop-blur duration-500 border-b border-[#2e355a]">
            <div className="container flex flex-wrap flex-row justify-around items-center">
                <div className="logo-area w-1/4">
                    <a href="/" className=" text-primary text-2xl font-bold uppercas">SAKIB</a>
                </div>
                <div className="nav-area w-3/4 text-right" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100" data-aos-offset="0">
                    <nav>
                        <ul className="main-menu hidden md:flex md:flex-wrap md:justify-end md:gap-8 text-[13px] font-semibold text-white font-dmsans uppercase items-center">
                            <li>
                                <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</Link>
                            </li>
                            <li>
                                <Link to="about-me" spy={true} smooth={true} duration={500} >About Me</Link>
                            </li>
                            <li>
                                <Link to="my-skills" spy={true} smooth={true} duration={500} >Skills</Link>
                            </li>
                            <li>
                                <Link to="experience" spy={true} smooth={true} duration={500} >Experience</Link>
                            </li>
                            <li>
                                <Link to="projects" spy={true} smooth={true} duration={500} >Portfolios</Link>
                            </li>
                            <li>
                                <Link to="contact-me" spy={true} smooth={true} duration={500} >Contact</Link>
                            </li>
                            <li><a href="https://nazmunsakib.com/sakib-resume.pdf" className="bg-primary text-sm font-semibold px-5 py-2 rounded hover:bg-softySolid shadow-softy2 inline-block text-softySolid uppercase" target="_blank" rel="noopener noreferrer">Resume</a></li> 
                        </ul>
                        <a href="https://nazmunsakib.com/sakib-resume.pdf" className="bg-primary text-sm font-semibold px-5 py-2 rounded hover:bg-softySolid shadow-softy2 inline-block md:hidden text-softySolid uppercase" target="_blank" rel="noopener noreferrer">Resume</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;