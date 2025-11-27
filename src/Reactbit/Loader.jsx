import React from 'react';
import react from '../../src/Assets/reactjs.gif';
import './Loader.css';
export const Loader = () => {
  return (
    <div>
         <div className="loader" style={{position:'absolute' , right : 200 , width : 90 , height : 90
    }}>
    
    <div className="external-shadow" style={{width:100,height:100}}>
      <div className="central"  style={{width:100,height:100}}>
        <img src={react} alt="" style={{width:'270%',height:'150%'}} />
      </div>
    </div>
  </div>
    </div>
  )
}
