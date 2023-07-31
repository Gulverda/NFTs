import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import bigLogo from './Navbar/images/biglogo.png';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className='pattern'>
        <div className='onpattern'>
          <p className='pattern-title'>Ready for Next NFT Drop?</p>
          <form action='' className='input'>
            <input type='text' placeholder='info@gmail.com'></input>
            <button type='submit' value='submit'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='footer-div'>
        <div className='two-side'>
          <div className='left-side'>
            <div className='left'>
              <div className='footer-img'>
                <img src={bigLogo} className="logo" alt="Logo" />
              </div>
              <div className='p-socials'>
                <p className='footer-p'>
                  Nec, enim sed lacus, magna pharetra. <br></br> Phasellus tincidunt nulla pharetra <br></br> gravida est.
                </p>
                <div className='social-center'>
                  <div className='socials'>
                    <FontAwesomeIcon className='icons' icon={faYoutube} />
                    <FontAwesomeIcon className='icons' icon={faTwitter} />
                    <FontAwesomeIcon className='icons' icon={faFacebookF} />
                    <FontAwesomeIcon className='icons' icon={faGoogle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='right1'>
            <div className='footer2'>
              <p>About Us</p>
              <ul className='footer-1'>
                <li><a href="#about-nfts">About NFTs</a></li>
                <li><a href="#live-auctions">Live Auctions</a></li>
                <li><a href="#nft-blog">NFT Blog</a></li>
                <li><a href="#activity">Activity</a></li>
              </ul>
            </div>
            <div className='footer2'>
              <p>Support</p>
              <ul className='footer-1'>
                <li><a href="#help-support">Help & Support</a></li>
                <li><a href="#item-details">Item Details</a></li>
                <li><a href="#author-profile">Author Profile</a></li>
                <li><a href="#collection">Collection</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className='copyright'>The code is written by Luka Gulverdashvili @ 2023</p>
    </div>
  );
}

export default Footer;
