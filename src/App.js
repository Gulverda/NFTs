import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content';
import Slider from './components/Slider';
// import SecondSlider from './components/Secondslider';

function App() {
  return (
    <div className="App">
        <div className='center'>
          <Navbar />
          <Content />
          <Slider /> 
        </div>
    </div>
  );
}

export default App;
