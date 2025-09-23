import React, { useState } from "react"

const Nav = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);

    const hamburgerMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <nav className="bg-white p-5 shadow-md fixed w-full top-0 left-0 z-50">
            <div className="flex items-center justify-between ">
                <div className="text-blue-600 text-2xl font-bold">MySite</div>

                <div className="md:hidden">
                    <button id="menu-hamburger" className="text-gray-400 hover:text-blue-400 " onClick={hamburgerMenu}>
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                            >
                                {isMenuOpen ? (
                                    <path d="M6 6l12 12M6 18L18 6" />
                                    ) : (                             
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                        </svg>
                    </button>
                </div>

                <ul className="hidden md:flex space-x-12">
                    <li><a href="#" className="text-black hover:text-blue-400">Home</a></li>
                    <li><a href="#" className="text-black hover:text-blue-400">About</a></li>
                    <li><a href="#" className="text-black hover:text-blue-400">Services</a></li>
                    <li><a href="#" className="text-black hover:text-blue-400">Contact</a></li>
                </ul>
            </div>
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96" : "max-h-0"
            }`}
            >
                <ul className="flex flex-col pt-2">
                    <li className="py-3">
                    <a href="#" className="text-black">Home</a>
                    </li>
                    <li className="py-3">
                    <a href="#" className="text-black">About</a>
                    </li>
                    <li className="py-3">
                    <a href="#" className="text-black">Services</a>
                    </li>
                    <li className="py-3">
                    <a href="#" className="text-black">Contact</a>
                    </li>
                </ul>
            </div>

                
        </nav>
    )
}

export default Nav