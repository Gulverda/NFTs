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
                <p className='copyright'>All rights reserved@2021</p>
              </div>
            </div>
          </div>
          <div className='right1'>
            <div className='footer2'>
            <p>About Us</p>
              <ul className='footer-1'>
                  <li>About NFTs</li>
                  <li>Live Auctions</li>
                  <li>NFT Blog</li>
                  <li>Activity</li>
              </ul>
            </div>
            <div className='footer2'>
            <p>Support</p>
              <ul className='footer-1'>
                  <li>Help & Support</li>
                  <li>Item Details</li>
                  <li>Author Profile</li>
                  <li>Collection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
