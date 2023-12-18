import React from 'react';
import { CodeBlock } from 'react-code-blocks';

const MySkills = () => {
    return (
        <div className="skill-section py-12">
            <div className="container">
                <div className="section-title mb-6">
                    <h2 className="font-bold font-poppins text-2xl text-[#586c7a]">{"// My Skills"}</h2>
                </div>
                <div className="flex flex-wrap flex-row">
                    <div className="skill-card bg-softy p-7 w-1/3 shadow-softy">
                        <pre>
                            <code>
                                <span className="code_selector">What I Do{"{"}</span><br/>
                                <span className="code_property">React</span><br/>
                                <span className="code_property">WordPress</span><br/>
                                <span className="code_property">Woocommerce</span><br/>
                                <span className="code_property">MySQL</span><br/>
                                <span className="code_property">HTML</span><br/>
                                <span className="code_property">CSS3</span><br/>
                                <span className="code_property">jQuery</span><br/>
                                <span className="code_property">Rest API</span><br/>
                                <span className="code_property">WebFlow</span><br/>
                                <span className="code_braces">{"}"}</span>
                            </code>
                        </pre>
                    </div>

                    <div className="skill-card bg-softy p-7 w-1/3 shadow-softy">
                        <pre>
                            <code>
                                <span className="code_selector">Programming{"{"}</span><br/>
                                <span className="code_property">PHP</span><br/>
                                <span className="code_property">Javascript</span><br/>
                                <span className="code_property">Python {"(Basic)"}</span><br/>
                                <span className="code_braces">{"}"}</span>
                            </code>

                            <code>
                                <span className="code_selector">Version Control{"{"}</span><br/>
                                <span className="code_property">Git</span><br/>
                                <span className="code_property">SVN</span><br/>
                                <span className="code_braces">{"}"}</span>
                            </code>
                        </pre>
                    </div>

                    <div className="skill-card bg-softy p-7 w-1/3 shadow-softy">
                        <pre>
                            <code>
                                <span className="code_selector">Tools I use{"{"}</span><br/>
                                <span className="code_property">VS Code</span><br/>
                                <span className="code_property">PostMan</span><br/>
                                <span className="code_property">Jira</span><br/>
                                <span className="code_property">Trello</span><br/>
                                <span className="code_property">Photoshop</span><br/>
                                <span className="code_braces">{"}"}</span>
                            </code>
                        </pre>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MySkills;