import { useState } from "react";
import { Link } from "react-router-dom";
import {FaDesktop, FaHome, FaLeaf, FaTools, FaTractor, FaTruck, FaUsers} from "react-icons/fa";

export const SidebarComponent = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`min-h-screen transition-all duration-300 shadow-lg bg-gradient-to-b from-blue-600 to-black ${
                    isSidebarOpen ? "w-64" : "w-20"
                }`}
            >
                <div className="flex items-center justify-between p-4">
                    <span
                        className={`font-bold text-xl text-white ${
                            !isSidebarOpen && "hidden"
                        }`}
                    >
                        GREEN SHADOW
                    </span>
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none p-2 rounded hover:bg-blue-700"
                    >
                        <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={
                                    isSidebarOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu */}
                <ul className="space-y-2 p-4 mt-14">
                    {/* Home Link */}
                    <li>
                        <Link
                            to="/"
                            className="flex items-center space-x-3 p-2 rounded transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:shadow-lg border border-gray-400 hover:border-blue-300"
                        >
                            <FaHome className="text-lg text-white" size={24} />
                            {isSidebarOpen && <span className="text-lg text-white">Home</span>}
                        </Link>
                    </li>

                    {/* Fields Link */}
                    <li>
                        <Link
                            to="/fields"
                            className="flex items-center space-x-3 p-2 rounded transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:shadow-lg border border-gray-400 hover:border-blue-300"
                        >
                            <FaTractor className="text-lg text-white" size={24} />
                            {isSidebarOpen && <span className="text-lg text-white">Field</span>}
                        </Link>
                    </li>

                    {/* Crops Link */}
                    <li>
                        <Link
                            to="/crops"
                            className="flex items-center space-x-3 p-2 rounded transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:shadow-lg border border-gray-400 hover:border-blue-300"
                        >
                            <FaLeaf className="text-lg text-white" size={24} />
                            {isSidebarOpen && <span className="text-lg text-white">Crop</span>}
                        </Link>
                    </li>

                    {/* Vehicles Link */}
                    <li>
                        <Link
                            to="/vehicles"
                            className="flex items-center space-x-3 p-2 rounded transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:shadow-lg border border-gray-400 hover:border-blue-300"
                        >
                            <FaTruck className="text-lg text-white" size={24} />
                            {isSidebarOpen && <span className="text-lg text-white">Vehicle</span>}
                        </Link>
                    </li>

                    {/* Staffs Link */}
                    <li>
                        <Link
                            to="/staffs"
                            className="flex items-center space-x-3 p-2 rounded transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:shadow-lg border border-gray-400 hover:border-blue-300"
                        >
                            <FaUsers className="text-lg text-white" size={24} />
                            {isSidebarOpen && <span className="text-lg text-white">Staff</span>}
                        </Link>
                    </li>

                    {/* Monitoring Logs Link */}
                    <li>
                        <Link
                            to="/logs"
                            className="flex items-center space-x-3 p-2 rounded transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:shadow-lg border border-gray-400 hover:border-blue-300"
                        >
                            <FaDesktop className="text-lg text-white" size={24} />
                            {isSidebarOpen && <span className="text-lg text-white">Monitoring Log</span>}
                        </Link>
                    </li>

                    {/* Equipments Link */}
                    <li>
                        <Link
                            to="/equipments"
                            className="flex items-center space-x-3 p-2 rounded transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:shadow-lg border border-gray-400 hover:border-blue-300"
                        >
                            <FaTools className="text-lg text-white" size={24} />
                            {isSidebarOpen && <span className="text-lg text-white">Equipment</span>}
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-grow p-6"></div>
        </div>
    );
};
