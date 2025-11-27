import React from 'react';
import './Loader2.css';
export const Loader2 = () => {
  return (
    <div>
         <div className="loader" style={{position:'absolute' , right : 200 , width : 90 , height : 90
    }}>
    
    <div className="external-shadow" style={{width:100,height:100}}>
      <div className="central"  style={{width:100,height:100}}>
      <img
  src="https://img.icons8.com/?size=512&id=78295&format=png"
  alt=""
  className="spin-image2"
  style={{ width: '100%', height: '100%' }}
/>

      </div>
    </div>
  </div>
    </div>
  )
}
export default Loader2;