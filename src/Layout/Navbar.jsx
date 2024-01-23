import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to='/' className='navlink'>Home</Link>
            <Link to='/blogs' className='navlink'>Blogs</Link>
            <Link to='/contact' className='navlink'>Contact</Link>
        </nav>
    </div>
  )
}

export default Navbar