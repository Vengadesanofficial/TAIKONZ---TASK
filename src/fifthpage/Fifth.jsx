import React from 'react'
import './Fifth.css'
import laptop from '../assets/laptop.png'

const Fifth = () => {
  return (
    <div id='start' className='fifth-main'>
    <div className='f-sub'>
        <div className='l-des'>
            <h1>Crypto Exchange Platform</h1>
            <p>A next-gen Blockchain and Crypto Exchange platform that offers<br/>
            trader with aan endless assets buy and selling feature with real<br/>
            money</p>
            <button>Start Trading</button>
        </div>
        <div className='l-image'>
                    <img src={laptop} alt="" />
        </div>

    </div>
    </div>
  )
}

export default Fifth;