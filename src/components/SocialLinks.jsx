import React from 'react';

const SocialLinks = () => {
    return (
        <section className="social-links py-12">
            <div className="container">
                <div className="">
                    <div className="section-title mb-6">
                        <h2 className="font-bold font-poppins text-2xl text-secondary">#Say Hi...</h2>
                    </div>
                    <div className="flex flex-wrap flex-row p-5 bg-softySolid shadow-softy2 rounded-sm">
                        <div className="w-1/3">
                            <ul>
                                <li><a href="">@nazmunSakib</a></li>
                                <li><a href="">@nazmunSakib</a></li>
                                <li><a href="">@nazmunSakib</a></li>
                            </ul>
                        </div>
                        <div className="w-1/3">
                            <ul>
                                <li><a href="">@nazmunSakib</a></li>
                                <li><a href="">@nazmunSakib</a></li>
                                <li><a href="">@nazmunSakib</a></li>
                            </ul>
                        </div>
                        <div className="w-1/3">
                            <h3 className=" text-2xl text-primary">Start a project?</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialLinks;