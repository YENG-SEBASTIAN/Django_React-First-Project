import React from 'react'
import './hero.css'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Hero = () => {
  return (
    <>
    
    <div className="hero">
        <div className="main-container">
            <div className='row'>
                <p>it is all about hepeps here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit voluptatibus aliquid quod voluptates harum recusandae placeat aliquam in libero et? Dolor accusantium nulla inventore nobis quod commodi, dicta adipisci cumque? </p>
            </div>
            <div className="button">
                <button className='primary-btn'>
                    GET STARTED NOW <AiOutlineArrowRight />
                </button>
                <button className='primary-btn'>
                    VIEW COURSES <AiOutlineArrowRight />
                </button>
            </div>
        </div>
    </div>

    <div className="margin">
        
    </div>

    </>
  )
}

export default Hero