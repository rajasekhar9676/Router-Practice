import React from 'react'
import logo from '../images/logo.jpg'
import { Outlet,Link } from 'react-router-dom'
import './Nav.css'
const Nav = () => {
  return (
    <div className='main-container'>
     
        <nav>
            <ul className='nav-container'>
                <img src={logo} height="50" width="50" alt="attica"></img>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/services">Services</Link></li>
                <li> <Link to="/branches" >Branches</Link></li>
                <li> <Link to="/contact">Contact</Link></li>
                <li> <Link to="/about">About</Link></li>
                
            </ul>
        </nav>
        <h1 className='heading'>India's No 1 Gold buying Company</h1>
    <Outlet/>
        </div>
  )
}

export default Nav 