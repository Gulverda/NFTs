import React from "react";
import './Content.css';
// import Nft from './Navbar/images/importantnft.png';

const Content = () => {
  return (
    <div className="content-cont">
      <div className="container-1">
        <div className="left-right">
          <div className="text-1">
            <h2 className="important-text">
              Explore, Buy and<br></br>
              Sell the <a href="#!" >Best<br></br>NFTs!</a>
            </h2>
            <div className="btn-center">
              <div className="buttons">
                <button className="explore">Explore</button>
                <button className="create">Create</button>
              </div>
            </div>
            <div className="artworks-auctions-creators-center">
              <div className="artworks-auctions-creators">
                <div className="artworks">
                  <p>32k</p>
                  <label>Artworks</label>
                </div>
                <div className="artworks">
                  <p>20k</p>
                  <label>Auctions</label>
                </div>
                <div className="creators">
                  <p>12k</p>
                  <label>Creators</label>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="img-cont">
              <div className="img-cont-1">
                <div className="upper-side">
                  <div className="upper-side-text">
                    <div className="ust-left">
                      <p className="currentbid up">Current Bid</p>
                      <label className="price-eth down">0.99 ETH</label>
                    </div>
                    <div className="ust-right">
                      <p className="endsin up">Ends in</p>
                      <label className="time down">25 hrs</label>
                    </div>
                  </div>
                </div>
                <div className="img-right">
                </div>
                <div className="nft-img-text">
                  <div className="nit">
                    <p className="nit-p">Artist</p>
                    <label className="nit-pl">@wzard</label>
                  </div>
                  <button className="start-bid">Start Bid</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
