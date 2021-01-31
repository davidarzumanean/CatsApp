import React from "react";
import styled from "styled-components";

function ErrorMessage({ message = '' }) {
  const ErrorMessage = styled.div`
    padding-bottom: 10px;
    font-size: 12px;
    color: #f00;
  `

  return (
    <ErrorMessage>
      { message }
    </ErrorMessage>
  )
}

export default ErrorMessage;
