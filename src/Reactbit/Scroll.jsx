import React from 'react'
import ScrollVelocity from './ScrollVelocity';

import './Scroll.css';
export const Scroll = () => {
  return (
    <div>
        <div  ></div>
<ScrollVelocity
  texts={['🧩 DEVELOPER 🧩' , '🎮 CREATIVE 🎮', '💎 INNOVATIVE 💎', '🤝 PASSIONATE 🤝' ]}
  velocity={100}
  className="custom-scroll-text"
/>
    </div>
  )
}
export default Scroll;