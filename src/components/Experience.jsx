import React from 'react';

const Experience = () => {
    return (
        <section className="work-history-section py-14">
            <div className="container">
                <div className="section-title mb-6">
                    <h2 className="font-bold font-poppins text-2xl text-secondary">#Where I’ve Worked</h2>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="px-4 bg-softy shadow-softy2 p-7 rounded-sm hover:!bg-softySolid duration-100">
                        <div className="flex flex-row flex-wrap text-[15px]">
                            <div className="w-1/3">
                                <header className="text-[13px] font-semibold">2022 — PRESENT</header>
                            </div>
                            <div className="w-2/3">
                                <h3 className="text-lg font-medium text-primary">Web Application Developer</h3>
                                <h4 className="font-medium text-secondary">@ Dynamic Web Lab</h4>
                                <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iusto!</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 bg-softy shadow-softy2 p-7 rounded-sm hover:!bg-softySolid duration-100">
                        <div className="flex flex-row flex-wrap text-[15px]">
                            <div className="w-1/3">
                                <header className="text-[13px] font-semibold">2021 — Jun, 2022</header>
                            </div>
                            <div className="w-2/3">
                                <h3 className="text-lg font-medium text-primary">Wordpress Developer</h3>
                                <h4 className="font-medium text-secondary">@ SpiderDevs</h4>
                                <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iusto!</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 bg-softy shadow-softy2 p-7 rounded-sm hover:!bg-softySolid duration-100">
                        <div className="flex flex-row flex-wrap text-[15px]">
                            <div className="w-1/3">
                                <header className="text-[13px] font-semibold">2020 — Jan, 2021</header>
                            </div>
                            <div className="w-2/3">
                                <h3 className="text-lg font-medium text-primary">Wordpress Developer</h3>
                                <h4 className="font-medium text-secondary">@ Serenity IT</h4>
                                <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iusto!</p>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 bg-softy shadow-softy2 p-7 rounded-sm hover:!bg-softySolid duration-100">
                        <div className="flex flex-row flex-wrap text-[15px]">
                            <div className="w-1/3">
                                <header className="text-[13px] font-semibold">2017 — 2019</header>
                            </div>
                            <div className="w-2/3">
                                <h3 className="text-lg font-medium text-primary">Web Developer</h3>
                                <h4 className="font-medium text-secondary">@ Fiverr || Upwork </h4>
                                <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iusto!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;