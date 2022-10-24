import React from 'react'
import './about.css'
import Title from '../common/Title';
import IMGB8 from '../../../src/assets/b8.jpg';
import aboutData from '../../data/about';

const AboutCard = () => {
  return (
    <>
        <div className="main-container">
            <div className="aboutCard flexSB">
                <div className="left">
                    <img src={IMGB8} alt="" />
                </div>
                <div className="right">
                    <Title subtitle='LEARN ANYTHING' title='Benefit about online learning expertise' />
                    <div className="aboutItems">
                        {
                            aboutData.map((data, index) => {
                                <div className="items" key={index}>
                                    <div className="item">
                                        <div className="pic">{data.icon}</div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutCard