import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content';
import Slider1 from './components/Slider';
// import SecondSlider from './components/Secondslider';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <div className='center'>
          <Navbar />
          <Content />
          {/* <div className='circle-and-title'>
            <div className='purple-circle'></div>
            <h1 className='first-slider-title'>Live Auctions</h1>
          </div> */}
          <Slider1 /> 
          <Footer />
        </div>
    </div>
  );
}

export default App;
