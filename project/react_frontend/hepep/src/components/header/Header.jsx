import React from 'react'
import './header.css'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'

const Header = () => {
  return (
      
    <section className="head">
      <div className="main-container FlexSB">

      <div className="logo">
        <h1>HE<span className='danger'>PEPS</span> </h1>
        <span>ONLINE EDUCATION & LEARNING</span>
      </div>

      <div className="social">
        <BsFacebook className='icons'/>
        <AiFillInstagram className='icons'/>
        <BsTwitter className='icons'/>
        <BsYoutube className='icons' />
      </div>


      </div>
    </section>


  )
}

export default Header