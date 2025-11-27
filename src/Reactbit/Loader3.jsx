import React from 'react';
import './Loader3.css';
import flutter from '../../src/Assets/flutter.png';
export const Loader3 = () => {
  return (
    <div>
         <div className="loader3" style={{position:'absolute' , right : 200 , width : 90 , height : 90
    }}>
    
    <div className="external-shadow" style={{width:100,height:100}}>
      <div className="central"  style={{width:100,height:100}}>
      <img
  src={flutter}
  alt=""
  className="spin-image2"
  style={{ width: '80%', height: '80%' }}
/>

      </div>
    </div>
  </div>
    </div>
  )
}
export default Loader3;