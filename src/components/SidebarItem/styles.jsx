import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: white;
  padding: 5% 2%;
  cursor: pointer;
  margin: 0 0px 20px;
  > svg {
    color: #CC6DB4;
    margin: 0 25px;
  }
  &:hover {
    background-color: #3d3d6145;
  }
`;