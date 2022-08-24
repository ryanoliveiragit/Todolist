import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  display: flex;
  background-color: #242430;
  box-shadow: 0 0 10px 3px #05050599;
  > svg {
    position: fixed;
    color: white;
    width: 20px;
    height: 20px;
    margin-top: 25px;
    margin-left: 32px;
    cursor: pointer;
  }
`;