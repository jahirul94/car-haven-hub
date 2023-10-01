import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navLink = <>
        <li><NavLink to="/" className="text-white hover:text-gray-300" > Home </NavLink></li>
        <li><NavLink to="/" className="text-white hover:text-gray-300" > Cars </NavLink></li>
        <li><NavLink to="/" className="text-white hover:text-gray-300" > About</NavLink></li>
        <li><NavLink to="/" className="text-white hover:text-gray-300" > Contact </NavLink></li>
    </>

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <NavLink to="/" className="text-white text-2xl font-bold">
                    Car Sell
                </NavLink>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-4">
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
                <div className="md:hidden bg-blue-500 p-2">
                    <ul>
                        {navLink}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Nav;