import React from 'react';

const Projects = () => {
    return (
        <section className="featured-projects py-12">
            <div className="container">
                <div className="max-w-3xl m-auto">
                    <div className="section-title mb-6">
                        <h2 className="font-bold font-poppins text-2xl text-secondary">#Featured Projects</h2>
                    </div>
                    <div className="">
                        <div className="p-5 bg-softySolid shadow-softy2 rounded-sm duration-100 mb-5">
                            <div className="flex flex-row flex-wrap text-[15px]">
                                <div className="w-1/2">
                                    <img src="" alt="" />
                                </div>
                                <div className="w-1/2">
                                    <h3 className="text-lg font-m text-primary">Web Application Developer</h3>
                                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iusto!</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5 bg-softySolid shadow-softy2 rounded-sm duration-100 mb-5">
                            <div className="flex flex-row flex-wrap text-[15px]">
                                <div className="w-1/2">
                                    <h3 className="text-lg font-m text-primary">Web Application Developer</h3>
                                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iusto!</p>
                                </div>
                                <div className="w-1/2">
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="p-5 bg-softySolid shadow-softy2 rounded-sm duration-100 mb-5">
                            <div className="flex flex-row flex-wrap text-[15px]">
                                <div className="w-1/2">
                                    <img src="" alt="" />
                                </div>
                                <div className="w-1/2">
                                    <h3 className="text-lg font-m text-primary">Web Application Developer</h3>
                                    <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iusto!</p>
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