
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Footer Logo */}
                <div>
                    <a href="/" className="text-2xl font-bold">
                        Car Sell
                    </a>
                </div>

                {/* Footer Links */}
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Cars
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-gray-300">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Social Media Icons */}
                <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-4 text-center">
                &copy; {new Date().getFullYear()} Car Sell. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;