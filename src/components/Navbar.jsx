import React from 'react'
import { SiTheweatherchannel } from "react-icons/si";
import { NavLink } from 'react-router-dom'; // fixed import

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-500 text-white p-4 shadow-md">
      <div className="flex items-center space-x-2">
        <SiTheweatherchannel className="text-2xl" />
        <span className="font-bold text-lg">WeatherApp</span>
      </div>
      <div className="flex space-x-6">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `hover:underline ${isActive ? 'font-semibold bg-blue-900 rounded px-2' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink 
          to="/cities" 
          className={({ isActive }) => 
            `hover:underline ${isActive ? 'font-semibold bg-blue-900 rounded px-2' : ''}`
          }
        >
          All Cities
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
