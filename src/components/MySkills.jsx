import React from 'react';

const MySkills = () => {
    return (
        <section className="skill-section py-12">
            <div className="container">
                <div className="section-title mb-6">
                    <h2 className="font-bold font-poppins text-2xl text-secondary">#My Skills</h2>
                </div>
                <div className="flex flex-wrap flex-row -mx-4">
                    <div className="w-1/3 px-4">
                        <div className="skill-card bg-softy p-7 shadow-softy2 rounded-sm">
                            <pre>
                                <code>
                                    <span className="code-group text-[#ec91ff]">What I Do</span>
                                    <span className="">{"{"}</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">React</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">WordPress</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">Woocommerce</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">MySQL</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">HTML</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">CSS3</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">jQuery</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">Rest API</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">WebFlow</span><br/>
                                    <span className="">{"}"}</span>
                                    <span className="code-typed-cursor">|</span>
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="w-1/3 px-4">
                        <div className="skill-card bg-softy p-7 shadow-softy2 rounded-sm">
                            <pre>
                                <code>
                                    <span className="code-group text-[#ec91ff]">Programming</span>
                                    <span className="">{"{"}</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">PHP</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">Javascript</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">Python {"(Basic)"}</span><br/>
                                    <span className="">{"}"}</span>
                                </code>
                            </pre>
                            <pre>
                                <code>
                                    <span className="code-group text-[#ec91ff]">Version Control</span>
                                    <span className="">{"{"}</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">Git</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">SVN</span><br/>
                                    <span className="">{"}"}</span>
                                    <span className="code-typed-cursor">|</span>
                                </code>
                            </pre>
                        </div>
                    </div>

                    <div className="w-1/3 px-4">
                        <div className="skill-card bg-softy p-7 shadow-softy2 rounded-sm">
                            <pre>
                                <code>
                                    <span className="code-group text-[#ec91ff]">Tools I use</span>
                                    <span className="">{"{"}</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">VS Code</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">PostMan</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">Jira</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">Trello</span><br/>
                                    <span className="text-[15px] text-secondary pl-8">Photoshop</span><br/>
                                    <span className="">{"}"}</span>
                                    <span className="code-typed-cursor">|</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MySkills;