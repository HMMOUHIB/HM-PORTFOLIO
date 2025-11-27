import React from 'react';
import './Navbar.css'

export const Navbar = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    console.log('Navigating to:', targetId);

    if (targetId === 'Intro2') {
      // For Intro2, scroll to the very top of the page
      console.log('Scrolling to top for Intro2');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // For other sections, scroll to exact position to cover fixed elements
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const elementPosition = targetElement.offsetTop;
        console.log(`Scrolling to ${targetId} at exact position:`, elementPosition);

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      } else {
        console.log(`Element with id ${targetId} not found`);
      }
    }
  };

  return (
    <div>
      <div className="navv" >
        <nav style={{border: '2px solid violet' , gap : 70}}>
          <a
            href="#Intro2"
            onClick={(e) => handleSmoothScroll(e, 'Intro2')}
          >
            Intro
          </a>
          <a
            href="#Info"
            onClick={(e) => handleSmoothScroll(e, 'Info')}
          >
            Info
          </a>
          <a
            href="#Work"
            onClick={(e) => handleSmoothScroll(e, 'Work')}
          >
            Work
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  )
}
export default Navbar;
