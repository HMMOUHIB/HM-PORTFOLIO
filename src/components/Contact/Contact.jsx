import React, { useRef } from "react";
import { gsap } from "gsap";

const HoverImage = () => {
  const textRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1, // text appears one after another
    });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, {
      opacity: 0,
      y: 20, // moves down when hiding
      duration: 0.5,
      stagger: 0.1,
    });
  };

  return (
    <section id="Contact">
         <div
      className="hover-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
      <img
        src="https://via.placeholder.com/300"
        alt="Hover example"
        style={{ display: "block" }}
      />
      <div
        ref={textRef}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "white",
          opacity: 0,
        }}
      >
        <h1>Title Here</h1>
        <p>Description appears on hover</p>
      </div>
    </div>
    </section>
   
  );
};

export default HoverImage;
