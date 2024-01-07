import React from 'react';
import project1 from '../assets/images/projects-1.png';
import WordPress from '../assets/icons/wordpress.svg';
import git from '../assets/icons/square-git.svg';
import linkIcon from '../assets/icons/link.svg';
import Docy from '../assets/images/docy-theme.avif';
import dpcdPlug from '../assets/images/dpcd.png';
import musicStudio from '../assets/images/music-studio.png';

const Projects = () => {
    const docyUrl = `https://wordpress-theme.spider-themes.net/docy/`;
    const docyEnvatoUrl = `https://themeforest.net/item/docy-documentation-and-forum-wordpress-theme/31370838#`;
    const dpcd = `https://wordpress.org/plugins/dynamic-product-categories-design/`;
    const smStudio = 'https://signalsmusicstudio.com/';
    return (
        <section id="projects" className="featured-projects pt-8 md:pt-20">
            <div className="container">
                <div className="max-w-3xl m-auto">
                    <div className="section-title mb-6">
                        <h2 className="font-bold font-poppins text-2xl text-secondary">#Featured Projects</h2>
                    </div>
                    <div className="">
                        <div className="p-5 bg-softySolid shadow-softy2 rounded-sm duration-100 mb-9">
                            <div className="flex flex-row flex-wrap text-[15px]">
                                <div className="w-full md:w-1/2">
                                    <a href={docyUrl} target="_blank" rel="noopener noreferrer">
                                        <img src={Docy} className="w-full opacity-80 hover:opacity-100 duration-500 rounded-sm" alt="Docy theme" />
                                    </a>
                                </div>
                                <div className="w-full md:w-1/2 md:pl-7 flex flex-col justify-between">
                                    <div>
                                        <ul className="flex flex-wrap flex-row justify-end text-[12px] gap-2 mt-5 md:mt-0">
                                            <li className="">
                                                <a href={docyEnvatoUrl} target="_blank" className=" text-[16px] text-secondary font-medium mb-2 inline-block" rel="noopener noreferrer">Envato</a>
                                            </li>
                                            {/* <li className="">
                                                <a href=""><img src={WordPress} className="opacity-50 hover:opacity-100 duration-200" width={16} height={16} alt="WordPress" /></a>
                                            </li>
                                            <li className="">
                                                <a href=""><img src={git} className="opacity-50 hover:opacity-100 duration-200" width={16} height={16} alt="Git" /></a>
                                            </li> */}
                                        </ul>
                                        <h3 className="text-lg leading-6 font-medium">
                                            <a className="text-primary hover:text-secondary duration-500" href={docyUrl} target="_blank" rel="noopener noreferrer">
                                                Docy - Documentation, Knowledge base & LMS WordPress Theme with Forum.
                                            </a>
                                        </h3>
                                        <p className="mt-5">Docy is the perfect WordPress theme for creating comprehensive documentation, knowledge base, and LMS websites.</p>
                                        <a href={docyUrl} className=" text-secondary flex gap-2 mt-4 capitalize" target="_blank" rel="noopener noreferrer">View Project <img src={linkIcon} className="opacity-50 hover:opacity-100 duration-200" width={14} height={14} alt="Git" /></a>
                                    </div>
                                    <ul className="flex flex-wrap flex-row text-[12px] gap-2 mt-5">
                                        <li className="shadow-softy2 px-2 py-1">PHP</li>
                                        <li className="shadow-softy2 px-2 py-1">jQuery</li>
                                        <li className="shadow-softy2 px-2 py-1">AJAX</li>
                                        <li className="shadow-softy2 px-2 py-1">LMS</li>
                                        <li className="shadow-softy2 px-2 py-1">Elementor</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 bg-softySolid shadow-softy2 rounded-sm duration-100  mb-9">
                            <div className="flex flex-col-reverse md:flex-row text-[15px]">
                                <div className="w-full md:w-1/2 md:pr-7 flex flex-col justify-between">
                                    <div>
                                        {/* <ul className="flex flex-wrap flex-row justify-end text-[12px] gap-2 mt-5 md:mt-0">
                                            <li className="">
                                                <a href={smStudio} target="_blank" rel="noopener noreferrer" ><img src={WordPress} className="opacity-50 hover:opacity-100 duration-200" width={16} height={16} alt="WordPress" /></a>
                                            </li>
                                            <li className="">
                                                <a href={smStudio} target="_blank" rel="noopener noreferrer"><img src={git} className="opacity-50 hover:opacity-100 duration-200" width={16} height={16} alt="Git" /></a>
                                            </li>
                                        </ul> */}
                                        <h3 className="text-lg leading-6 font-medium">
                                            <a className="text-primary hover:text-secondary duration-500" href={smStudio} target="_blank" rel="noopener noreferrer">
                                                Signals Music Studio
                                            </a>
                                        </h3>
                                        <p className="mt-5">Signals Music Studio is online guitar learning platform! Lessons and videos on music theory, scales, modes, chords, songwriting techniques, and song analysis with a focus on guitar.</p>
                                        <a href={smStudio} className="flex gap-2 text-secondary mt-4 capitalize" target="_blank" rel="noopener noreferrer">View Project <img src={linkIcon} className="opacity-50 hover:opacity-100 duration-200" width={14} height={14} alt="Git" /></a>
                                    </div>
                                    <ul className="flex flex-wrap flex-row text-[12px] gap-2 mt-5">
                                        <li className="shadow-softy2 px-2 py-1">PHP</li>
                                        <li className="shadow-softy2 px-2 py-1">Javascript</li>
                                        <li className="shadow-softy2 px-2 py-1">LearnDash</li>
                                        <li className="shadow-softy2 px-2 py-1">Rest API</li>
                                    </ul>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <a href={smStudio} target="_blank" rel="noopener noreferrer">
                                        <img src={musicStudio} className="w-full opacity-80 hover:opacity-100 duration-500 rounded-sm" alt="Docy theme" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 bg-softySolid shadow-softy2 rounded-sm duration-100 mb-9">
                            <div className="flex flex-row flex-wrap text-[15px]">
                                <div className="w-full md:w-1/2">
                                    <a href={dpcd} target="_blank" rel="noopener noreferrer">
                                        <img src={dpcdPlug} className="w-full opacity-80 hover:opacity-100 duration-500 rounded-sm" alt="Docy theme" />
                                    </a>
                                </div>
                                <div className="w-full md:w-1/2 md:pl-7 flex flex-col justify-between">
                                    <div>
                                        <ul className="flex flex-wrap flex-row justify-end text-[12px] gap-2 mt-5 md:mt-0">
                                            <li className="">
                                                <a href={dpcd} target="_blank" rel="noopener noreferrer"><img src={WordPress} className="opacity-50 hover:opacity-100 duration-200" width={16} height={16} alt="WordPress" /></a>
                                            </li>
                                            {/* <li className="">
                                                <a href={dpcd} target="_blank" rel="noopener noreferrer"><img src={git} className="opacity-50 hover:opacity-100 duration-200" width={16} height={16} alt="Git" /></a>
                                            </li> */}
                                        </ul>
                                        <h3 className="text-lg leading-6 font-medium">
                                            <a className="text-primary hover:text-secondary duration-500" href={dpcd}  target="_blank" rel="noopener noreferrer">
                                                Dynamic Product Categories Design
                                            </a>
                                        </h3>
                                        <p className="mt-5">Dynamic product categories design is a woocommerce plugin extension to design shop categories section in a nice slider and grid layout.</p>
                                        <a href={dpcd} className="flex gap-2 text-secondary mt-4 capitalize" target="_blank" rel="noopener noreferrer">View Project <img src={linkIcon} className="opacity-50 hover:opacity-100 duration-200" width={14} height={14} alt="Git" /></a>
                                    </div>
                                    <ul className="flex flex-wrap flex-row text-[12px] gap-2 mt-5">
                                        <li className="shadow-softy2 px-2 py-1">PHP</li>
                                        <li className="shadow-softy2 px-2 py-1">Javascript</li>
                                        <li className="shadow-softy2 px-2 py-1">jQuery</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;