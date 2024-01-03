import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="work-history-section py-8 md:py-16">
            <div className="container">
                <div className="section-title mb-6">
                    <h2 className="font-bold font-poppins text-2xl text-secondary">#Where I’ve Worked</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="px-4 bg-softy shadow-softy2 p-7 rounded-sm hover:!bg-softySolid duration-100">
                        <div className="flex flex-row flex-wrap text-[15px]">
                            <div className="w-1/3">
                                <header className="text-[13px] font-semibold">2022 — PRESENT</header>
                            </div>
                            <div className="w-2/3">
                                <h3 className="text-lg font-medium text-primary">Web Application Developer</h3>
                                <h4 className="font-medium text-secondary">@ Dynamic Web Lab</h4>
                                <p className="mt-5">Here I work with products and client basis.  Main tech stack is WordPress. Involves design to theme development, plugin development, rewriting legacy plugins and themes, etc.</p>
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
                                <p className="mt-5">Here at SpiderDevs my responsibility is to architect and lead the development of ”Envato based” WordPress Themes and  improve the user experience.</p>
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
                                <p className="mt-5">This is a complete remote job, here at Serenity IT my responsibility is to custom website development based on clients requirements.</p>
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
                                <p className="mt-5">It was full time freelancing, here at Fiverr and Upwork my responsibility is to custom website development and WP customization based on clients requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;