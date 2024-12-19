import React from 'react'
import { IoMdSearch } from "react-icons/io";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div>
            <h2>Technovus.</h2>
        </div>

        <div>
            <div className='search-container'>
                <input type="search" placeholder='Search products' />
                <IoMdSearch />
            </div>
        </div>

        <div>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Products</a>
            <a href="">Contacts</a>
        </div>

        <div>
            <button>Register</button>
            <button>Login</button>
        </div>
    </nav>
  )
}

export default Navbar
