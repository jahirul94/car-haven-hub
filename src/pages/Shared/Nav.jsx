import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navLink = <>
        <li><NavLink to="/" className="text-white hover:text-gray-300 text-lg" > Home </NavLink></li>
        <li><NavLink to="/" className="text-white hover:text-gray-300 text-lg" > Cars </NavLink></li>
        <li><NavLink to="/" className="text-white hover:text-gray-300 text-lg" > About</NavLink></li>
        <li><NavLink to="/" className="text-white hover:text-gray-300 text-lg" > Contact </NavLink></li>
    </>

    return (
        <nav className="bg-blue-500 p-4">
            <div className="mx-10 flex justify-between items-center">
                <NavLink to="/" className="text-white text-2xl font-bold flex">
                    <img src="https://i.ibb.co/sg1YCxw/384541029-167795106376657-8809060130039395008-n.png" className="w-20 h-12 me-2 rounded-md" alt="" />
                    Car Haven Hub
                </NavLink>

                {/* Nav Links */}
                <ul className="hidden font-[poppins] md:flex space-x-4">
                    {navLink}
                </ul>

                {/* toggle menu for mobile device */}
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/*menu for small device*/}
            {mobileMenuOpen && (
                <div className="md:hidden bg-blue-500 p-2 font-[poppins]">
                    <ul>
                        {navLink}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;