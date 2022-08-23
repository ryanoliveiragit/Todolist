import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: #1C1C2C;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 2rem;
  font-weight: 600;
  color: white;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: white;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Paragraph = styled.p `
    color:white;
`
export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
  }
`;