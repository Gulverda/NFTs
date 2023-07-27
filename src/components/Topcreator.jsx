import './Topcreator.css'

function Creators() {
    const aboutCreators = [
      {
        id: 1,
        src: require("./Navbar/images/ai4.png"),
        title: "Wzard Dee",
        price: "4.89 ETH",
      },
      {
        id: 2,
        src: require("./Navbar/images/ai5.png"),
        title: "Wzard Dee",
        price: "4.89 ETH",
      },
      {
        id: 3,
        src: require("./Navbar/images/ai6.png"),
        title: "Wzard Dee",
        price: "4.89 ETH",
      },
      {
        id: 4,
        src: require("./Navbar/images/ai7.png"),
        title: "Wzard Dee",
        price: "4.89 ETH",
      },
    ];    
  
    return (
      <div className="creators">
        <div className="creators-cont">
          <div className="creators-cards">
            {aboutCreators.map((creator) => (
              <div className="creator">
                <div className="creator-img-text">
                    <div className="creator-img-text-left">
                        <div className="creator-img">
                            <img src={creator.src} className="crea-ai" alt="" />
                        </div>
                        <div className="creator-left-side-text" key={creator.id}>
                            <p className="left-text-title">{creator.title}</p>
                            <p className="left-text-price">{creator.price}</p>
                        </div>
                    </div>
                    <div className="items">
                        <p className="quantity">33</p>
                        <label className="item">Item</label>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Creators;
  