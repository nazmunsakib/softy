import React from 'react';

const Header = () => {
    return (
        <header className="site-header fixed py-3 z-50 top-0 w-full backdrop-blur duration-500 border-b border-[#2e355a]">
            <div className="container flex flex-wrap flex-row justify-around">
                <div className="logo-area w-1/4">
                    <p className="font-bold uppercase"><span></span> <span className="">Sakib</span></p>
                </div>
                <div className="nav-area w-3/4 text-right">
                    <ul className="main-menu flex flex-wrap justify-end">
                        <li className=''><a href="">Projects</a></li>
                        <li className=''><a href="">WhatsApp Now</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;