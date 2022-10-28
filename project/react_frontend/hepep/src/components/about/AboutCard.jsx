import React from 'react'
import './about.css'
import Title from '../common/Title';
import IMGB8 from '../../../src/assets/b6.jpg';
import {FiBookOpen} from 'react-icons/fi';
import {GrCertificate} from 'react-icons/gr';
import {IoIosPeople} from 'react-icons/io';
// import aboutData from '../../data/about';



const AboutCard = () => {

    const aboutData = [
        {
            icon : <FiBookOpen />,
            title:'Online Courses',
            description : 'Far far away, behind the words mountains, far from the country Ghana and USA, there live the blind text'
        },
        {
            icon : <GrCertificate />,
            title : 'Earn a Certificate',
            description : 'Far far away, behind the words mountains, far from the country Ghana and USA, there live the blind text'
        },
        {
            icon : <IoIosPeople />,
            title : 'Learn With Expecrt',
            description : 'Far far away, behind the words mountains, far from the country Ghana and USA, there live the blind text'
        },
    ]



  return (
    <>
        <div className="main-container">
            <div className="FlexSB aboutCard">
                <div className="left row">
                    <img src={IMGB8} alt="" />
                </div>
                <div className="right row">
                    <Title subtitle='LEARN ANYTHING' title='Benefit about online learning expertise' />
                    <div className="aboutItems">
                        {
                            aboutData.map((data, index) => {
                                return(
                                    <div className="items" key={index}>
                                    <div className="item">
                                        <div className="pic">{data.icon}</div>
                                        <div className="course-type">
                                        <div className="title"><h3>{data.title}</h3></div>
                                        <div className="description">{data.description}</div>
                                        </div>
                                    </div>
                                </div>
                                )
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