import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HomeMiddle.css'

function HomeMiddle() {
  return (
    <div className='home-middle-container'>
        <div className='components-container'>
            <div className='redbox'></div>
            <img src='/images/katsiaryna-endruszkiewicz-unsplash.jpg' alt='Home Image' />
            <div className='whitebox'>
                <h1>EMPOWERING BORDERLAND TALENT</h1>
                <p>At PROJECT ARENA, our mission is to spotlight and elevate the innovative talent
                of local fashion designers from El Paso, TX, and the borderland.
                </p>
            </div>
        </div>
    </div>
  )
}

export default HomeMiddle
