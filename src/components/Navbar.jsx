import React from 'react'
import { SiTheweatherchannel } from "react-icons/si";
import { NavLink } from 'react-router';
const Navbar = () => {
  return (
    <div className='bg-green-700'>
        <SiTheweatherchannel className='inline text-lg mb-1 ml-2' />
        <div className='inline'>
            <NavLink
                to='/'
            >
                Home 
            </NavLink>
            <NavLink>
                All Cities
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar