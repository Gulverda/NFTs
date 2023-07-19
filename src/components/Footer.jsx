import bigLogo from './Navbar/images/biglogo.png';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className='pattern'>
        <div className='onpattern'>
          <p className='pattern-title'>Ready for the Next NFT Drop?</p>
          <form action='' className='input'> 
            <input type='text' placeholder='info@gmail.com'></input>
            <button type='submit' value='submit'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className='footer-div'>
        <div className='two-side'>
          <div className='right-side'>
            <div className='right'>
              <img src={bigLogo} className="logo" alt="Logo"/>  
              <div className='p-socials'>
                <p className='footer-p'>
                  Nec, enim sed lacus, magna pharetra. <br></br> Phasellus tincidunt nulla pharetra <br></br> gravida est.
                </p>
                <div className='socials'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, 1)" }}>
                    {/* Add the path for the Google Plus icon here */}
                  </svg>
                </div>
              </div>
            </div>
            <div className='left'></div>
          </div>
          <div className='left-side'></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
