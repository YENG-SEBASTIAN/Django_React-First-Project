import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import './header.css'
import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'

export const Head = () => {

  const [click, setClick] = useState(false);
  const navbar = document.getElementById('navbar');
  const open = document.getElementsByClassName('open');
  const close = document.getElementsByClassName('close');

  function openMenu(){
    navbar.style.display = 'block';
  }
  function closeMenu(){
    navbar.style.display = 'none';
  }
  return (
    <>
        <Header />
        <div className="main-container">
          <nav>
            <ul id='navbar' className={click ? 'mobile-nav' : 'flexSB'} onClick={()=> setClick(false)}>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/courses'>Courses</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/team'>Team</Link></li>
              <li><Link to='/pricing'>Pricing</Link></li>
              <li><Link to='/journal'>Journal</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>

            <div className="start">
              <button id='btn'>GET CERTIFICATE</button>
            </div>
            <button className='toggle' onClick={()=> setClick(!click)}>
              {click ? <FaTimes onClick={closeMenu}/> : <FiMenu onClick={openMenu} />}
              </button>
          </nav>
        </div>
    </>
  )
}
