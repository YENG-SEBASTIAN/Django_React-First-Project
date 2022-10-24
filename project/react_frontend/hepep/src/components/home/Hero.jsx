import React from 'react'
import './hero.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import Title from '../common/Title';


const Hero = () => {
  return (
    <>
    
    <div className="hero">
        <div className="main-container">
            <Title subtitle="Welcome to hepeps acadamia" title="the best online learning platform" />
            <div className='row'>
                <p>It is all about hepeps here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit voluptatibus aliquid quod voluptates harum recusandae placeat aliquam in libero et? Dolor accusantium nulla inventore nobis quod commodi, dicta adipisci cumque? </p>
            </div>
            <div className="button">
                <button>
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