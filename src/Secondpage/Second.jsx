import React from 'react'
import './second.css'
import bitcoin from '../assets/bitcoin.png'
import whitecoin from '../assets/whitecoin.png'
import ubt from '../assets/ubt.png'
import bitcoin2 from '../assets/bitcoin2.png'

const Second = () => {
  return (
    <div id='trade' className='second-main'>
    <div className='second-sub'>
           <div className='bitcoins'>
                <div className='coin'>
                    <div className='sec-img'>
                        <img src={bitcoin} alt="" />
                    </div>
                        <h1>Bitcoin</h1>
                        <h4>BTC</h4>
                        <h1>32,25,770.7</h1>

                </div>

                   <div className='coin'>
                    <div className='sec-img'>
                        <img src={whitecoin} alt="" />
                    </div>
                        <h1>Whitecoin</h1>
                        <h4>WTC</h4>
                        <h1>32,25,770.7</h1>

                </div>

                   <div className='coin'>
                    <div className='sec-img'>
                        <img src={ubt} alt="" />
                    </div>
                        <h1>Unobtanium</h1>
                        <h4>UBT</h4>
                        <h1>32,25,770.7</h1>

                </div>

                   <div className='coin'>
                    <div className='sec-img'>
                        <img src={bitcoin} alt="" />
                    </div>
                        <h1>Bitcoin</h1>
                        <h4>BTC</h4>
                        <h1>32,25,770.7</h1>

                </div>
           </div>
<div className='why-taikonz'>
    <h1>Why Taikonz ?</h1>
    <br/>
    <p>We build crypto products that are simple,element and secure
       Whether you are an individual or an institution,we want to help you
       buy,sell and store your bitcoin and cryptocurrency
    </p>
</div>

<div className='dessign-box'>
   
        <div className='s-design'>
            <div className='s-circle'>
                <img src={bitcoin2} alt="" />
            </div>
            <h1>Super Quick Kyc</h1>
          <div className='s-des'>
              <p>Swift execution for seizing market<br/>
                oppertunitiesSwift execution for seizing market<br/>
                opportunities
            </p>
          </div>
        </div>

           <div className='s-design'>
            <div className='s-circle'>
                <img src={bitcoin2} alt="" />
            </div>
            <h1>Fast transaction</h1>
          <div className='s-des'>
              <p>Swift execution for seizing market<br/>
                oppertunitiesSwift execution for seizing market<br/>
                opportunities
            </p>
          </div>
        </div>

           <div className='s-design'>
            <div className='s-circle'>
                <img src={bitcoin2} alt="" />
            </div>
            <h1>Exceptional Security</h1>
          <div className='s-des'>
              <p>Swift execution for seizing market<br/>
                oppertunitiesSwift execution for seizing market<br/>
                opportunities
            </p>
          </div>
        </div>
         
         
</div>

    </div>
    </div>
  )
}

export default Second;