import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex flex-wrap place-content-center gap-12 text-2xl pt-8 font-bold m-8'>
      <NavLink to="/" className={({isActive}) => `${isActive ? "text-orange-600" : "text-orange-800"} hover:text-3xl`}>Home</NavLink>
      <NavLink to="/pastes" className={({isActive}) => `${isActive ? "text-orange-600" : "text-orange-800"} hover:text-3xl`}>Pastes</NavLink>
    </div>
  )
}

export default Navbar
