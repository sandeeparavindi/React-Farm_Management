import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTractor, FaTruck } from "react-icons/fa";

export const SidebarComponent = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="flex">
            <div
                className={`bg-blue-500 text-white min-h-screen transition-all duration-300 shadow-lg ${
                    isSidebarOpen ? "w-64" : "w-16"
                }`}
            >
                <div className="flex items-center justify-between p-4">
                    <span className={`font-semibold text-xl ${!isSidebarOpen && "hidden"}`}>
                        GREEN SHADOW
                    </span>
                    <button
                        onClick={toggleSidebar}
                        className="text-gray-200 hover:text-white focus:outline-none p-2 rounded hover:bg-blue-600"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isSidebarOpen
                                        ? "M6 18L18 6M6 6l12 12" // Close icon
                                        : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                                }
                            />
                        </svg>
                    </button>
                </div>
                <ul className="space-y-2 p-4">
                    {/* Home Link */}
                    <li>
                        <Link
                            to="/"
                            className="flex items-center space-x-3 hover:bg-blue-600 p-2 rounded"
                        >
                            <FaHome className="text-lg" size={24}/>
                            {isSidebarOpen && <span className="text-lg">Home</span>}
                        </Link>
                    </li>
                    {/* Fields Link */}
                    <li>
                        <Link
                            to="/fields"
                            className="flex items-center space-x-3 hover:bg-blue-600 p-2 rounded"
                        >
                            <FaTractor className="text-lg" size={24} />
                            {isSidebarOpen && <span className="text-lg">Field</span>}
                        </Link>
                    </li>
                    {/* Vehicles Link */}
                    <li>
                        <Link
                            to="/vehicles"
                            className="flex items-center space-x-3 hover:bg-blue-600 p-2 rounded"
                        >
                            <FaTruck className="text-lg" size={24} />
                            {isSidebarOpen && <span className="text-lg">Vehicle</span>}
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex-grow p-6"></div>
        </div>
    );
};
