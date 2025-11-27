import React from 'react';
import './App.css'
import Intro2 from './components/Info/Intro2/Intro2.jsx';
import Info from './components/Info/Info.jsx';
import Scroll from './Reactbit/Scroll.jsx';
import Work from './components/Work/Work.jsx';




export const App = () => {
  return (
    <div className='cantainer'>
      <Intro2 />
      <Scroll />
      <Info />
      <Scroll />
      <Work />
     
    
    </div>
  )
}
export default App;