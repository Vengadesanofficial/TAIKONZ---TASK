import './FirstPage.css'
import React from 'react'
import homepng from '../assets/home.png'

const FirstPage = () => {
  return (
    <div id='p2p' className='first-main'>
    <div className='firstsub-div'>
      <div><div className='first-introimg'>
              <div className='first-intro'>
            <h1>Begin Trading with your<br/>Favorite Coins</h1>
            <p>Welcome to Taikonz! A next-gen Blockchain and crpto<br/>
              Exchange platform that offers trader with an endless<br/>
              assets buy and selling featuree with real money
            </p>
            </div>
            <div className='firstimg'>
                  <img src={homepng} alt="" width={500} />
            </div>
      </div></div>
  
        <div className='first-btn'>
              <button>Get Started</button>
            </div>
  
           </div>
           
    
    </div>
  )
}

export default FirstPage;