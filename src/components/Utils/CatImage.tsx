import React from "react";
import styled from "styled-components";

function CatImage({ url = '' }) {
  const CatImage = styled.div` 
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    padding: 10px;
    img {
      max-width: 100%;
      width: 100%;
      border-radius: 10px;
    }
  `

  return (
    <CatImage>
      <img src={url} alt="cat" />
    </CatImage>
  )
}

export default CatImage;
