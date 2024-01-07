import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header className="site-header fixed py-3 z-50 top-0 w-full backdrop-blur duration-500 border-b border-[#2e355a]">
            <div className="container flex flex-wrap flex-row justify-around items-center">
                <div className="logo-area w-1/4">
                    <p className="font-bold uppercase"><span></span> <span className="">Sakib</span></p>
                </div>
                <div className="nav-area w-3/4 text-right">
                    <nav>
                        <ul className="main-menu flex flex-wrap justify-end gap-8 text-[13px] font-semibold text-white font-dmsans uppercase items-center">
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
                            <li><a href="https://nazmunsakib.com/sakib-resume.pdf" className="bg-primary px-5 py-2 rounded font-medium hover:bg-softySolid shadow-softy2 block" target="_blank" rel="noopener noreferrer">Resume</a></li> 
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;