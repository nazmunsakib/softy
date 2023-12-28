import React from 'react';
import project1 from '../assets/images/projects-1.png';

const Projects = () => {
    return (
        <section className="featured-projects py-14">
            <div className="container">
                <div className="max-w-3xl m-auto">
                    <div className="section-title mb-6">
                        <h2 className="font-bold font-poppins text-2xl text-secondary">#Featured Projects</h2>
                    </div>
                    <div className="">
                        <div className="p-5 bg-softySolid shadow-softy2 rounded-sm duration-100 mb-9">
                            <div className="flex flex-row flex-wrap text-[15px]">
                                <div className="w-1/2">
                                    <img src={project1} alt="" />
                                </div>
                                <div className="w-1/2 pl-7">
                                    <ul className="flex flex-wrap flex-row justify-end text-[12px] gap-2">
                                        <li className="">Git</li>
                                        <li className="">WP</li>
                                    </ul>
                                    <h3 className="text-lg font-m">
                                        <a className="text-primary" href="">Web Application Developer</a>
                                    </h3>
                                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iusto!</p>
                                    <a href="" className="">See Projects</a>
                                    <ul className="flex flex-wrap flex-row text-[12px] gap-2">
                                        <li className="shadow-softy2 px-2 py-1">PHP</li>
                                        <li className="shadow-softy2 px-2 py-1">Javascript</li>
                                        <li className="shadow-softy2 px-2 py-1">React</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 bg-softySolid shadow-softy2 rounded-sm duration-100  mb-9">
                            <div className="flex flex-row flex-wrap text-[15px]">
                                <div className="w-1/2 pr-7">
                                    <ul className="flex flex-wrap flex-row justify-end text-[12px] gap-2">
                                        <li className="">Git</li>
                                        <li className="">WP</li>
                                    </ul>
                                    <h3 className="text-lg font-m">
                                        <a className="text-primary" href="">Web Application Developer</a>
                                    </h3>
                                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iusto!</p>

                                    <a href="" className="">See Projects</a>
                                    <ul className="flex flex-wrap flex-row text-[12px] gap-2">
                                        <li className="shadow-softy2 px-2 py-1">PHP</li>
                                        <li className="shadow-softy2 px-2 py-1">Javascript</li>
                                        <li className="shadow-softy2 px-2 py-1">React</li>
                                    </ul>
                                </div>
                                <div className="w-1/2">
                                    <img src={project1} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="p-5 bg-softySolid shadow-softy2 rounded-sm duration-100 mb-9">
                            <div className="flex flex-row flex-wrap text-[15px]">
                                <div className="w-1/2">
                                    <img src={project1} alt="" />
                                </div>
                                <div className="w-1/2 pl-7">
                                    <ul className="flex flex-wrap flex-row justify-end text-[12px] gap-2">
                                        <li className="">Git</li>
                                        <li className="">WP</li>
                                    </ul>
                                    <h3 className="text-lg font-m">
                                        <a className="text-primary" href="">Web Application Developer</a>
                                    </h3>
                                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iusto!</p>
                                    <a href="" className="">See Projects</a>
                                    <ul className="flex flex-wrap flex-row text-[12px] gap-2">
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