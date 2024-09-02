import React from 'react'
import './Footer.css'
import logo from '../assets/tradelogo.png'

const Footer = () => {
  return (
    <div className='footer-main'>
        <div className='footer1'>
            <div className='f-logo'>
                <div className='foot-images'><img src={logo} alt="" /></div>
                <p>Taikonz</p>
            </div>
            <p>@ 2023 Taikonz All rights reserverd.</p>
        </div>

        <div className='footer2'>
                <h1>Pages</h1>
                <a href="">Privacy policy</a>
                <a href="">About Us</a>
                <a href="">Contact Us</a>

        </div>

          <div className='footer2'>
                <h1>Products</h1>
                <a href="#staking">Staking</a>
                <a href="#p2p">p2p</a>
                <a href="#launchpad">Launchpad</a>
                <a href="#trade">Trade</a>

        </div>
    </div>
  )
}

export default Footer;