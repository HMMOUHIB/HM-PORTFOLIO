import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button" data-text="Awesome">
        <span className="actual-text">&nbsp;Hover Me&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;Hover Me&nbsp;</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
    font-family: "Arial";
    text-transform: uppercase;
    letter-spacing: 3px;
    position: relative;
    display: inline-block;
  }

  .button {
    --border-right: 6px;
    --text-stroke-color: rgba(255, 255, 255, 0.8);
    --animation-color: #f00be8ff;
    --fs-size: 2em;
    font-size: var(--fs-size);
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
  }

  .actual-text,
  .hover-text {
    display: inline-block;
    white-space: nowrap;
  }

  .hover-text {
    position: absolute;
    left: 0;                    /* THIS LINE FIXES THE SHIFT */
    top: 0;
    color: var(--animation-color);
    width: 0%;
    height: 100%;
    overflow: hidden;
    border-right: var(--border-right) solid var(--animation-color);
    transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    -webkit-text-stroke: 1px var(--animation-color);
  }

  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }
`;

export default Button;