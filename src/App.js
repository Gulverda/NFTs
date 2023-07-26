import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content';
import Slider1 from './components/Slider';
import Slider2 from './components/Slider1';
// import SecondSlider from './components/Secondslider';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <div className='center'>
          <Navbar />
          <Content />
          <Slider1 /> 
          <Slider2 />
          <Footer />
        </div>
    </div>
  );
}

export default App;
