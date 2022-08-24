import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background-color: #CC6DB4;
  color: white;
  font-weight: 600;
  font-size: 16px;
  max-width: 350px;
  &.smallButton {
    background-color: transparent;
    margin-top: 75vh;
    margin-left: 50%;
    width: 50%;
    font-weight: 200;
    color: #CC6DB4;
    padding: 2px 10px;
  }
`;