
const Footer = () => {
    return (
        <footer className="bg-[#3B82F6] text-white py-8 font-[poppins]">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/3">
                    <img src="https://i.ibb.co/sg1YCxw/384541029-167795106376657-8809060130039395008-n.png" className="w-32 h-20 rounded-lg" alt="" />
                    <h2 className="text-2xl font-semibold">Car Haven Hub</h2>
                    <p className="mt-2">We provide quality cars for rent at affordable prices.</p>
                </div>
                <div className="w-full md:w-1/3 mt-6 md:mt-0">
                    <h2 className="text-2xl font-semibold">Contact Us</h2>
                    <address className="mt-2">
                        <p>Email: info@carrentalservices.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                        <p>Address: 1234 Elm Street, City, Country</p>
                    </address>
                </div>
                <div className="w-full md:w-1/3 mt-6 md:mt-0">
                    <h2 className="text-2xl font-semibold">Follow Us</h2>
                    <div className="mt-2">
                        <a href="#" className="mr-4 hover:text-gray-400">Facebook</a>
                        <a href="#" className="mr-4 hover:text-gray-400">Twitter</a>
                        <a href="#" className="hover:text-gray-400">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">
                <p>&copy; {new Date().getFullYear()} Car Rental Services. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;