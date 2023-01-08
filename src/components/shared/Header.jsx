import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
    return (
        <header>
            <nav className='navbar'>
                <div className='navbar__logo'>
                    <Link className='navbar__title' to='/'>e-commerce</Link>
                </div>
                <ul className='navbar__options'>
                    <li className='navbar__options-itm'><Link className='navbar__options-link' to='/login'>Login</Link></li>
                    <li className='navbar__options-itm'><Link className='navbar__options-link' to='/cart'>Cart</Link></li>
                    <li className='navbar__options-itm'><Link className='navbar__options-link' to='/purchases'>Purchases</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header