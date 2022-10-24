import React from 'react'
import { useLocation } from 'react-router-dom'
import AboutCard from '../about/AboutCard'

const Back = ({title}) => {
    const location = useLocation()
  return (
    <>
        <div className="back">
            <h3>Home / {location.pathname.split('/')}</h3>
            <h1>{title}</h1>
        </div>
        <div className="margin">
          <AboutCard />
        </div>
    </>
  )
}

export default Back