import React from 'react';
import project1 from '../assets/images/projects-1.png';
import WordPress from '../assets/icons/wordpress.svg';
import git from '../assets/icons/square-git.svg';
import linkIcon from '../assets/icons/link.svg';

const Projects = () => {
    return (
        <section id="projects" className="featured-projects py-8 md:py-14">
            <div className="container">
                <div className="max-w-3xl m-auto">
                    <div className="section-title mb-6">
                        <h2 className="font-bold font-poppins text-2xl text-secondary">#Featured Projects</h2>
                    </div>
                    <div className="">
                        <div className="p-5 bg-softySolid shadow-softy2 rounded-sm duration-100 mb-9">
                            <div className="flex flex-row flex-wrap text-[15px]">
                                <div className="w-full md:w-1/2">
                                    <img src={project1} alt="" />
                                </div>
                                <div className="w-full md:w-1/2 md:pl-7 flex flex-col justify-between">
                                    <div>
                                        <ul className="flex flex-wrap flex-row justify-end text-[12px] gap-2 mt-5 md:mt-0">
                                            <li className="">
                                                <a href=""><img src={WordPress} width={16} height={16} alt="WordPress" /></a>
                                            </li>
                                            <li className="">
                                                <a href=""><img src={git} width={16} height={16} alt="Git" /></a>
                                            </li>
                                        </ul>
                                        <h3 className="text-lg font-medium">
                                            <a className="text-primary" href="">Web Application Developer</a>
                                        </h3>
                                        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iusto!</p>
                                        <a href="" className=" text-secondary flex gap-2 mt-4 capitalize">View Project <img src={linkIcon} className="" width={14} height={14} alt="Git" /></a>
                                    </div>
                                    <ul className="flex flex-wrap flex-row text-[12px] gap-2 mt-5">
                                        <li className="shadow-softy2 px-2 py-1">PHP</li>
                                        <li className="shadow-softy2 px-2 py-1">Javascript</li>
                                        <li className="shadow-softy2 px-2 py-1">React</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 bg-softySolid shadow-softy2 rounded-sm duration-100  mb-9">
                            <div className="flex flex-col-reverse md:flex-row text-[15px]">
                                <div className="w-full md:w-1/2 md:pr-7 flex flex-col justify-between">
                                    <div>
                                        <ul className="flex flex-wrap flex-row justify-end text-[12px] gap-2 mt-5 md:mt-0">
                                            <li className="">
                                                <a href=""><img src={WordPress} width={16} height={16} alt="WordPress" /></a>
                                            </li>
                                            <li className="">
                                                <a href=""><img src={git} width={16} height={16} alt="Git" /></a>
                                            </li>
                                        </ul>
                                        <h3 className="text-lg font-medium">
                                            <a className="text-primary" href="">Web Application Developer</a>
                                        </h3>
                                        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iusto!</p>
                                        <a href="" className="flex gap-2 text-secondary mt-4 capitalize">View Project <img src={linkIcon} className="" width={14} height={14} alt="Git" /></a>
                                    </div>
                                    <ul className="flex flex-wrap flex-row text-[12px] gap-2 mt-5">
                                        <li className="shadow-softy2 px-2 py-1">PHP</li>
                                        <li className="shadow-softy2 px-2 py-1">Javascript</li>
                                        <li className="shadow-softy2 px-2 py-1">React</li>
                                    </ul>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <img src={project1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="p-5 bg-softySolid shadow-softy2 rounded-sm duration-100 mb-9">
                            <div className="flex flex-row flex-wrap text-[15px]">
                                <div className="w-full md:w-1/2">
                                    <img src={project1} alt="" />
                                </div>
                                <div className="w-full md:w-1/2 md:pl-7 flex flex-col justify-between">
                                    <div>
                                        <ul className="flex flex-wrap flex-row justify-end text-[12px] gap-2 mt-5 md:mt-0">
                                            <li className="">
                                                <a href=""><img src={WordPress} width={16} height={16} alt="WordPress" /></a>
                                            </li>
                                            <li className="">
                                                <a href=""><img src={git} width={16} height={16} alt="Git" /></a>
                                            </li>
                                        </ul>
                                        <h3 className="text-lg font-medium">
                                            <a className="text-primary" href="">
                                                Web Application Developer 
                                            </a>
                                        </h3>
                                        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iusto!</p>
                                        <a href="" className="flex gap-2 text-secondary mt-4 capitalize">View Project <img src={linkIcon} className="" width={14} height={14} alt="Git" /></a>
                                    </div>
                                    <ul className="flex flex-wrap flex-row text-[12px] gap-2 mt-5">
                                        <li className="shadow-softy2 px-2 py-1">PHP</li>
                                        <li className="shadow-softy2 px-2 py-1">Javascript</li>
                                        <li className="shadow-softy2 px-2 py-1">React</li>
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