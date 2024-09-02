import './Fourth.css'
import React from 'react'
import num1 from '../assets/num1.png'

const Fourth = () => {
  return (
    <div id='launchpad' className='fourth-main'>
    <div className='f-subdiv'>
          <div className='f-des'>
            <h1>Investing in crypto will be <br/> easier then ever.</h1>
            <p>Taikonz makes it easier to invest and trade in cryptos
                currency than<br/>any other platform
            </p>
          </div>

          <div className='f-card'>
            <div className='f-card1'>
                        <div className='f-images'>
                            <img src={num1} alt="" />
                        </div>
                        <div className='img-content'>
                                <h1>Create account</h1>
                                <p>Taikonz has the potential to<br/>
                                execute millions of transaction<br/>
                                every second and the system</p>
                        </div>
                         </div>
                            <div className='f-card1'>
                        <div className='f-images'>
                            <img src={num1} alt="" />
                        </div>
                        <div className='img-content'>
                                <h1>Add Fund</h1>
                                <p>Taikonz has the potential to<br/>
                                execute millions of transaction<br/>
                                every second and the system</p>
                        </div>
                         </div>
                            <div className='f-card1'>
                        <div className='f-images'>
                            <img src={num1} alt="" />
                        </div>
                        <div className='img-content'>
                                <h1>Start Investing</h1>
                                <p>Taikonz has the potential to<br/>
                                execute millions of transaction<br/>
                                every second and the system</p>
                        </div>
                         </div>
          </div>
    </div>
    </div>
  )
}

export default Fourth