import React from "react";
import styled, { css } from "styled-components";

function HamburgerBtn({ isActive = false, handleClick = () => {} }) {
  interface BurgerLine {
    readonly isActive: boolean;
  }
  const Hamburger = styled.button`
    position: relative;
    display: block;
    width: 30px;
    height: 22px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  `
  const Line = styled.div<BurgerLine>`
    display: block;
    background-color: #ffffff;
    position: absolute;
    width: 30px;
    height: 2px;
    transition: transform .15s ease 0s, opacity .15s ease 0s;
    &:nth-child(1) {
      top: 0;
      ${props => props.isActive && css`
        transform: translate3d(0,10px,0) rotate(45deg);
      `};
    }
    &:nth-child(2) {
      top: 10px;
      ${props => props.isActive && css`
        transform: translateX(-10px);
        opacity: 0;
      `};
    }
    &:nth-child(3) {
      top: 20px;
      ${props => props.isActive && css`
        transform: translate3d(0,-10px,0) rotate(135deg)
      `};
    }
  `

  return (
    <Hamburger type="button" onClick={handleClick}>
      {[1, 2, 3].map((i) => (
        <Line key={i} isActive={isActive} />
      ))}
    </Hamburger>
  )
}

export default HamburgerBtn;
