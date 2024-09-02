import React from 'react'
import './Third.css'
import bitcoin from '../assets/bitcoin.png'
import arrow from '../assets/arrow.png'
import whitecoin from '../assets/whitecoin.png'
import ubt from '../assets/ubt.png'

const Third = () => {
  return (
    <div id='staking' className='third-main'>
        <div className='t-subdiv'>
               <div className='t-des'>
                    <h1>Available Currencies</h1>
                    <p>These are various crypto currencies available in
                        Taikonz and you<br/>my easily trade and invest in all of them
                    </p>
                    <button>Explore All</button>
               </div>

               <div className='t-list'>
                <div className='inner-list'>
                    <div className='list-content'><img src={bitcoin} alt="" /><p>Bitcoin</p><span>BTC</span></div>
                    <div className='list-content2'>
                       <img src={arrow} alt="" /><p>12<span>%</span></p>

                    </div>
                </div>

                   <div className='inner-list'>
                    <div className='list-content'><img src={whitecoin} alt="" /><p>Bitcoin</p><span>BTC</span></div>
                    <div className='list-content2'>
                       <img src={arrow} alt="" /><p>12<span>%</span></p>

                    </div>
                </div>

                   <div className='inner-list'>
                    <div className='list-content'><img src={bitcoin} alt="" /><p>Bitcoin</p><span>BTC</span></div>
                    <div className='list-content2'>
                       <img src={arrow} alt="" /><p>12<span>%</span></p>

                    </div>
                </div>

                   <div className='inner-list'>
                    <div className='list-content'><img src={ubt} alt="" /><p>Bitcoin</p><span>BTC</span></div>
                    <div className='list-content2'>
                       <img src={arrow} alt="" /><p>12<span>%</span></p>

                    </div>
                </div>
               </div>
        </div>
    </div>
  )
}

export default Third