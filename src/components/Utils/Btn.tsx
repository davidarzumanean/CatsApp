import React from "react";
import styled from "styled-components";

function Btn({ handleClick = () => {}, text = '' }) {
  const Button = styled.button`
    display: block;
    background-color: #393351;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    margin: 10px auto 0;
    outline: none;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    transition: opacity .3s ease 0s;
    &:hover {
      opacity: .8;
    }
  `

  return (
    <Button onClick={handleClick}>
      {text}
    </Button>
  )
}

export default Btn;
