import React from 'react';
import Facebook from '../assets/icons/facebook-f.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import Instagram from '../assets/icons/instagram.svg';
import WhatsApp from '../assets/icons/whatsapp.svg';
import Twitter from '../assets/icons/x-twitter.svg';
import Github from '../assets/icons/github.svg';
import WordPress from '../assets/icons/wordpress.svg';
import Envelope from '../assets/icons/envelope.svg';

const Contact = () => {
    return (
        <section className="social-links pt-14 pb-28" id="contact-me">
            <div className="container">
                <div className="">
                    <div className="section-title mb-6">
                        <h2 className="font-bold font-poppins text-2xl text-secondary">#Say Hi...</h2>
                    </div>
                    <div className="flex flex-wrap flex-row text-lg font-medium">
                        <div className="w-1/3">
                            <ul>
                                <li className="mb-2">
                                    <a href="" className="flex flex-wrap flex-row gap-2">
                                        <img src={Linkedin} width={24} height={24} alt="Linkedin" />
                                        <span className="social-handel">@nazmunsakib</span>
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="" className="flex flex-wrap flex-row gap-2">
                                        <img src={Github} width={24} height={24} alt="Github" />
                                        <span className="social-handel">@nazmunsakib</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="flex flex-wrap flex-row gap-2">
                                        <img src={WordPress} width={24} height={24} alt="WordPress" />
                                        <span className="social-handel">@nazmunsakib</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/3">
                            <ul>
                                <li className="mb-2">
                                    <a href="" className="flex flex-wrap flex-row gap-2">
                                        <img src={Instagram} width={24} height={24} alt="Instagram" />
                                        <span className="social-handel">@webdev_sakib</span>
                                    </a>
                                </li>
                                <li  className="mb-2">
                                    <a href="" className="flex flex-wrap flex-row gap-2">
                                        <img src={Twitter} width={24} height={24} alt="Twitter" />
                                        <span className="social-handel ">@nazmunsakib81</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="flex flex-wrap flex-row gap-2">
                                        <img src={Facebook} width={16} height={16} alt="Facebook" />
                                        <span className="social-handel inline-block ml-3">@nazmunsakib.me</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/3">
                            <h3 className="text-2xl text-primary font-semibold mb-3">Start a project?</h3>
                            <ul>
                                <li className="flex flex-wrap flex-row gap-2">
                                    <img src={Envelope} width={24} height={24} alt="Envelope" />
                                    <a className="" target="_blank" rel="noreferrer"  href="mailto:nazmunsakib81@gmail.com">nazmunsakib81@gmail.com</a>
                                </li>
                                <li className="flex flex-wrap flex-row gap-2 mt-1">
                                    <img src={WhatsApp} width={24} height={24} alt="WhatsApp" />
                                    <a className="" target="_blank" rel="noreferrer" href="https://wa.me/+8801792637781">+880 1792637781</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;