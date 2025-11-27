import React from 'react';
import './Cadre.css';
import GradientText from './GradiantText';

export const Cadre = () => {
  return (
    <div>
         <div className="outer">
    <div className="dot" />
    <div className="cardnigga">
      <div className="ray" />
      <div className="text">
        
    <h1
            style={{
              color: 'white',
              fontFamily: 'Permanent Marker',
              fontSize: 20,
             width : '80%',
             marginLeft : '70px',
             textAlign : 'center'
            }}
          >
            <GradientText
              colors={['#ffffffff', '#fff5f5ff', '#ffffffff', '#ffffffff', '#fcfcfcff']}
              animationSpeed={3}
              showBorder={false}
              className="custom-class33"
            >
          Hi, I’m Mouhib <span style={{color : 'yellow'}} >👋</span>  — a creative Web Developer with 5+ years of experience building interactive, high-performing websites and apps using HTML, CSS, JavaScript, PHP, React, and Flutter.

I also enjoy editing videos and creating animations with Adobe Premiere Pro & After Effects <span style={{color : 'blue'}} >🎬</span>. My goal is to blend design and function to build digital experiences that inspire and engage.
            </GradientText>
          </h1>
        
      </div>
      <div></div>
      <div className="line topl" />
      <div className="line leftl" />
      <div className="line bottoml" />
      <div className="line rightl" />
    </div>
  </div>
    </div>
  )
}
export default Cadre ; 