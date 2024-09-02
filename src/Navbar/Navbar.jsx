import React from 'react';
import './navbar.css';
import logo from '../assets/tradelogo.png';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='nav-main'>
      <div className='nav-title'>
        <div className='img'>
          <img src={logo} alt="" />
        </div>
        <div className='logo-title'>
          <a href="#p2p">TAIKONZ</a>
        </div>
      </div>
      <div className='nav-buttons'>
        <Link to="firstpage" smooth={true} duration={700}>P2P</Link>
        <Link to="secondpage" smooth={true} duration={700}>TRADE</Link>
        <Link to="thirdpage" smooth={true} duration={700}>STAKING</Link>
        <Link to="fourthpage" smooth={true} duration={700}>LAUNCHPAD</Link>
        <Link to="fifthpage" smooth={true} duration={700}>Start Test</Link>
        <div className='nav-btns'>
          <button onClick={() => navigate('/login')}>LOGIN</button>
          <button onClick={()=>navigate('/register')}>REGISTER</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;