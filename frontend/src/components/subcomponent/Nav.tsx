import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './LoginButton';
const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white p-4">
            <div className=" w-80 h-80 diffBorder absolute bg-green-200 -top-40 rotate-45  -left-6"></div>
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <a href="#" className="text-green-700 font-bold text-lg">HorseCare Marketplace</a>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button onClick={toggleMobileMenu} className="text-green-800 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop menu */}
                <div className="hidden lg:flex items-center space-x-4">
                    <Link to="/" className="text-green-800">Home</Link>
                    <Link to="/search" className="text-green-800">Search</Link>

                    <Login />

                </div>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
                <div className="flex flex-col items-center space-y-4 mt-4">
                    <Link to="/" className="text-green-800">Home</Link>
                    <Link to="/search" className="text-green-800">Search</Link>
                    <Login />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

