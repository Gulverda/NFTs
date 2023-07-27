import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content';
import Slider1 from './components/Slider';
import Slider2 from './components/Slider1';
import Slider3 from './components/Slider2';
import Creators from './components/Topcreator';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <div className='center'>
          <Navbar />
          <Content />
          <Slider1 /> 
          <Slider2 />
          <Slider3 />
          <Creators />
          <Footer />
        </div>
    </div>
  );
}

export default App;
