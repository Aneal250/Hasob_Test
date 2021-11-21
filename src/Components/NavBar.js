import React from 'react'
import Logo from '../img/Logo.png'
import './NavBar.css'

function NavBar() {
    return (
        <nav className="nav-container">
            <div className="nav-row">
                <a href="http://"><img className="logo" src={Logo} alt="" /></a>
                <ul className="nav-menu">
                    <li className="nav-items"><a href="http://">School</a></li>
                    <li className="nav-items"><a href="http://">Program</a></li>
                    <li className="nav-items"><a href="http://">Staff</a></li>
                    <li className="nav-items"><a href="http://">Students</a></li>
                    <li className="nav-items"><a href="http://">Online Store</a></li>
                </ul>
            </div>
        </nav>

    )
}

export default NavBar
